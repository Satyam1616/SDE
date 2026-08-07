# ⚙️ SOLID Principles — Part 1: SRP + OCP

> **Time: 1 hour** | The design principles that separate juniors from seniors

---

## What is SOLID?

SOLID is a set of **5 design principles** for writing clean, maintainable, scalable code. Every SDE interviewer expects you to know these.

| Letter | Principle | One-Liner |
|--------|-----------|-----------|
| **S** | Single Responsibility | One class = one reason to change |
| **O** | Open/Closed | Open for extension, closed for modification |
| **L** | Liskov Substitution | Subtypes must be substitutable for their base type |
| **I** | Interface Segregation | No client should depend on methods it doesn't use |
| **D** | Dependency Inversion | Depend on abstractions, not concrete implementations |

**Today:** We cover **S** and **O** deeply. Tomorrow (Day 7): L, I, and D.

---

## S — Single Responsibility Principle (SRP)

> **A class should have only ONE reason to change.**

### ❌ Violating SRP

```js
// This class does TOO MUCH
class UserService {
    createUser(name, email) {
        // 1. Validate input
        if (!name || !email) throw new Error("Invalid input");
        if (!email.includes("@")) throw new Error("Invalid email");

        // 2. Save to database
        const user = { id: Date.now(), name, email };
        database.save("users", user);

        // 3. Send welcome email
        const subject = "Welcome!";
        const body = `Hi ${name}, welcome to our app!`;
        emailService.send(email, subject, body);

        // 4. Log the action
        console.log(`[${new Date()}] User created: ${email}`);
        fs.appendFileSync("logs.txt", `User created: ${email}\n`);

        return user;
    }
}
```

**Problems:**
- If email template changes → modify UserService
- If validation rules change → modify UserService
- If logging format changes → modify UserService
- **4 different reasons to change = 4 different responsibilities!**

---

### ✅ Following SRP

```js
// Each class has ONE job

class UserValidator {
    validate(name, email) {
        if (!name || !email) throw new Error("Invalid input");
        if (!email.includes("@")) throw new Error("Invalid email");
    }
}

class UserRepository {
    save(user) {
        database.save("users", user);
    }

    findById(id) {
        return database.findById("users", id);
    }
}

class WelcomeEmailSender {
    send(user) {
        const subject = "Welcome!";
        const body = `Hi ${user.name}, welcome to our app!`;
        emailService.send(user.email, subject, body);
    }
}

class Logger {
    log(action, details) {
        const entry = `[${new Date()}] ${action}: ${details}`;
        console.log(entry);
        fs.appendFileSync("logs.txt", entry + "\n");
    }
}

// Coordinator — orchestrates the other classes
class UserService {
    constructor() {
        this.validator = new UserValidator();
        this.repository = new UserRepository();
        this.emailSender = new WelcomeEmailSender();
        this.logger = new Logger();
    }

    createUser(name, email) {
        this.validator.validate(name, email);

        const user = { id: Date.now(), name, email };
        this.repository.save(user);

        this.emailSender.send(user);
        this.logger.log("USER_CREATED", email);

        return user;
    }
}
```

### Benefits of SRP
- **Easy to test**: Test validation separately from email sending
- **Easy to change**: New email template? Only touch `WelcomeEmailSender`
- **Easy to reuse**: Use `Logger` in any other service
- **Easy to understand**: Each class does one thing

### How to Check: Ask "What does this class do?"
- If you use the word **"and"**, it's probably violating SRP
- ❌ "This class validates input **and** saves to DB **and** sends emails"
- ✅ "This class validates user input" (just one thing!)

---

## O — Open/Closed Principle (OCP)

> **Software entities should be open for EXTENSION but closed for MODIFICATION.**

Translation: You should be able to **add new behavior** without **changing existing code**.

### ❌ Violating OCP

```js
class DiscountCalculator {
    calculate(order) {
        // Every time we add a new discount type, we modify this function!
        if (order.type === "regular") {
            return order.total * 0.05;  // 5% discount
        } else if (order.type === "premium") {
            return order.total * 0.15;  // 15% discount
        } else if (order.type === "vip") {
            return order.total * 0.25;  // 25% discount
        }
        // Need a new "student" discount? Must MODIFY this code!
        // ❌ Adding new student discount means touching existing code
        return 0;
    }
}
```

**Problem:** Adding a new discount type requires **modifying** `DiscountCalculator`. This risks breaking existing discount logic.

---

### ✅ Following OCP — Strategy Pattern

```js
// Step 1: Define a common interface (strategy)
class DiscountStrategy {
    calculate(total) {
        throw new Error("Must implement calculate()");
    }
}

// Step 2: Implement concrete strategies
class RegularDiscount extends DiscountStrategy {
    calculate(total) {
        return total * 0.05;
    }
}

class PremiumDiscount extends DiscountStrategy {
    calculate(total) {
        return total * 0.15;
    }
}

class VIPDiscount extends DiscountStrategy {
    calculate(total) {
        return total * 0.25;
    }
}

// Step 3: Calculator uses the strategy (doesn't need to know details)
class DiscountCalculator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    calculate(order) {
        return this.strategy.calculate(order.total);
    }
}

// Usage
const calc = new DiscountCalculator(new PremiumDiscount());
console.log(calc.calculate({ total: 1000 }));  // 150

// Adding new discount? Just create a new class!
// NO existing code modified! ✅
class StudentDiscount extends DiscountStrategy {
    calculate(total) {
        return total * 0.20;  // 20% student discount
    }
}

const studentCalc = new DiscountCalculator(new StudentDiscount());
console.log(studentCalc.calculate({ total: 1000 }));  // 200
```

### C++ Example

```cpp
// Abstract strategy
class DiscountStrategy {
public:
    virtual double calculate(double total) = 0;
    virtual ~DiscountStrategy() {}
};

class RegularDiscount : public DiscountStrategy {
public:
    double calculate(double total) override {
        return total * 0.05;
    }
};

class PremiumDiscount : public DiscountStrategy {
public:
    double calculate(double total) override {
        return total * 0.15;
    }
};

// Calculator is CLOSED for modification, OPEN for extension
class DiscountCalculator {
    DiscountStrategy* strategy;
public:
    DiscountCalculator(DiscountStrategy* s) : strategy(s) {}

    double calculate(double total) {
        return strategy->calculate(total);
    }
};

// Add new discount without touching any existing code!
class StudentDiscount : public DiscountStrategy {
public:
    double calculate(double total) override {
        return total * 0.20;
    }
};
```

### Another OCP Example: Notification System

```js
// ❌ BAD — violates OCP
class NotificationService {
    send(type, message) {
        if (type === "email") {
            // send email...
        } else if (type === "sms") {
            // send sms...
        } else if (type === "push") {
            // send push notification...
        }
        // New channel? Must modify this!
    }
}

// ✅ GOOD — follows OCP
class Notifier {
    send(message) {
        throw new Error("Must implement send()");
    }
}

class EmailNotifier extends Notifier {
    send(message) {
        console.log(`📧 Email: ${message}`);
    }
}

class SMSNotifier extends Notifier {
    send(message) {
        console.log(`📱 SMS: ${message}`);
    }
}

class PushNotifier extends Notifier {
    send(message) {
        console.log(`🔔 Push: ${message}`);
    }
}

// New channel? Just add a new class!
class SlackNotifier extends Notifier {
    send(message) {
        console.log(`💬 Slack: ${message}`);
    }
}

// Usage — works with ANY notifier
function notifyUser(notifier, message) {
    notifier.send(message);
}

notifyUser(new EmailNotifier(), "Hello!");  // 📧 Email: Hello!
notifyUser(new SlackNotifier(), "Hello!");  // 💬 Slack: Hello!
```

---

## 📊 SRP vs OCP — Quick Comparison

| Principle | Problem It Solves | Key Question |
|-----------|------------------|-------------|
| **SRP** | Classes doing too many things | "Does this class have more than one reason to change?" |
| **OCP** | Having to modify existing code for new features | "Can I add new behavior without changing existing code?" |

---

## 🧠 Interview Exercises

### Exercise 1: Identify Violations

```js
class OrderProcessor {
    processOrder(order) {
        // Validate order
        if (!order.items.length) throw new Error("Empty order");

        // Calculate total
        let total = order.items.reduce((sum, item) => sum + item.price, 0);

        // Apply discount
        if (order.coupon === "SAVE10") total *= 0.9;

        // Charge payment
        stripe.charge(order.userId, total);

        // Send confirmation email
        sendEmail(order.email, "Order Confirmed", `Total: $${total}`);

        // Update inventory
        order.items.forEach(item => inventory.decrease(item.id, 1));
    }
}
```

**Question:** Which SOLID principle does this violate? How would you fix it?

<details>
<summary>Click for Answer</summary>

**Violates SRP** — This class has 5 responsibilities:
1. Validation
2. Price calculation
3. Payment processing
4. Email notification
5. Inventory management

**Fix:** Extract each into its own class:
- `OrderValidator`
- `PriceCalculator`
- `PaymentService`
- `OrderNotifier`
- `InventoryService`
- `OrderProcessor` (coordinator)

</details>

### Exercise 2: Fix This OCP Violation

```js
class ShippingCalculator {
    calculate(weight, method) {
        if (method === "standard") return weight * 5;
        if (method === "express") return weight * 10;
        if (method === "overnight") return weight * 20;
    }
}
```

**Question:** How would you refactor this to follow OCP?

<details>
<summary>Click for Answer</summary>

```js
class ShippingStrategy {
    calculate(weight) { throw new Error("Implement me"); }
}

class StandardShipping extends ShippingStrategy {
    calculate(weight) { return weight * 5; }
}

class ExpressShipping extends ShippingStrategy {
    calculate(weight) { return weight * 10; }
}

class OvernightShipping extends ShippingStrategy {
    calculate(weight) { return weight * 20; }
}

// Adding new method? Just add a new class!
class DroneShipping extends ShippingStrategy {
    calculate(weight) { return weight * 15; }
}
```

</details>

---

## 📝 Interview Answers

> **Q: "Explain Single Responsibility Principle."**
>
> "SRP says a class should have only one reason to change — meaning it should do one thing well. For example, a UserService shouldn't validate input, save to the database, AND send emails. Each should be a separate class. This makes code easier to test, maintain, and reuse."

> **Q: "Explain Open/Closed Principle."**
>
> "OCP says code should be open for extension but closed for modification. Instead of adding if-else branches for new features, you use abstraction — like the Strategy pattern. For example, a DiscountCalculator accepts a DiscountStrategy object, so adding a new discount type just means creating a new class without touching existing code."

---

> 📅 **Day 7 Preview:** We'll cover the remaining 3 SOLID principles — **Liskov Substitution**, **Interface Segregation**, and **Dependency Inversion**.
