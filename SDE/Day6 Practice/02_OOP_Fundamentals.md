# 🏛️ OOP Fundamentals — The 4 Pillars

> **Time: 1 hour** | The foundation of every SDE interview

---

## Why OOP Matters in Interviews

OOP questions appear in **every SDE interview**, either as:
- Direct theory questions ("Explain the 4 pillars")
- Code design questions ("Design a parking lot system")
- Evaluating how you structure your project code

You already covered OOP basics in C++ (Day 1). Today, we **solidify the 4 pillars** with real-world examples, comparison between C++ and JS, and interview-ready explanations.

---

## Pillar 1: Encapsulation

> **Bundling data + methods that operate on it, and hiding internal details.**

### Real-World Analogy
Your TV remote: You press buttons (public interface), but you don't see the circuits inside (private implementation).

### C++ Example

```cpp
class BankAccount {
private:
    double balance;  // Hidden! Can't access directly

public:
    BankAccount(double initial) : balance(initial) {}

    // Controlled access through methods
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;  // Insufficient funds
    }

    double getBalance() const {
        return balance;
    }
};

// Usage:
BankAccount acc(1000);
acc.deposit(500);
acc.withdraw(200);
// acc.balance = -999;  ❌ Can't do this! (private)
cout << acc.getBalance();  // ✅ 1300
```

### JavaScript Example

```js
class BankAccount {
    #balance;  // Private field (ES2022)

    constructor(initial) {
        this.#balance = initial;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return true;
        }
        return false;
    }

    get balance() {
        return this.#balance;
    }
}

const acc = new BankAccount(1000);
acc.deposit(500);
// acc.#balance = -999;  ❌ SyntaxError! (private)
console.log(acc.balance);  // ✅ 1500 (through getter)
```

### Why Encapsulation Matters
- **Data integrity**: Can't set balance to negative directly
- **Flexibility**: Can change internal implementation without breaking external code
- **Security**: Sensitive data is protected

---

## Pillar 2: Abstraction

> **Hiding complexity and showing only what's necessary.**

### Real-World Analogy
A car: You know the steering wheel, pedals, and gear shift (abstract interface). You don't need to understand the combustion engine (implementation).

### Difference from Encapsulation

| Encapsulation | Abstraction |
|--------------|-------------|
| **Hides DATA** | **Hides COMPLEXITY** |
| Uses access modifiers (private/public) | Uses abstract classes/interfaces |
| "You can't see my balance variable" | "You don't need to know how payment processes" |

### C++ Example — Abstract Class

```cpp
// Abstract class — cannot be instantiated directly
class PaymentProcessor {
public:
    // Pure virtual function = must be implemented by subclass
    virtual bool processPayment(double amount) = 0;
    virtual string getProvider() = 0;

    // Concrete method — shared by all subclasses
    void printReceipt(double amount) {
        cout << "Paid $" << amount << " via " << getProvider() << endl;
    }

    virtual ~PaymentProcessor() {}
};

class StripePayment : public PaymentProcessor {
public:
    bool processPayment(double amount) override {
        // Complex Stripe API logic hidden here
        cout << "Processing via Stripe API..." << endl;
        return true;
    }

    string getProvider() override {
        return "Stripe";
    }
};

class PayPalPayment : public PaymentProcessor {
public:
    bool processPayment(double amount) override {
        // Complex PayPal API logic hidden here
        cout << "Processing via PayPal API..." << endl;
        return true;
    }

    string getProvider() override {
        return "PayPal";
    }
};

// Usage — abstraction! We don't care HOW payment processes
void checkout(PaymentProcessor* processor, double amount) {
    if (processor->processPayment(amount)) {
        processor->printReceipt(amount);
    }
}
```

### JavaScript Example

```js
// JS doesn't have abstract classes natively, but we can simulate
class PaymentProcessor {
    processPayment(amount) {
        throw new Error("Must implement processPayment()");
    }

    getProvider() {
        throw new Error("Must implement getProvider()");
    }

    printReceipt(amount) {
        console.log(`Paid $${amount} via ${this.getProvider()}`);
    }
}

class StripePayment extends PaymentProcessor {
    processPayment(amount) {
        console.log("Processing via Stripe API...");
        return true;
    }

    getProvider() {
        return "Stripe";
    }
}

// Usage — same abstraction
function checkout(processor, amount) {
    if (processor.processPayment(amount)) {
        processor.printReceipt(amount);
    }
}

checkout(new StripePayment(), 99.99);
// "Processing via Stripe API..."
// "Paid $99.99 via Stripe"
```

---

## Pillar 3: Inheritance

> **A class can inherit properties and methods from a parent class.**

### Real-World Analogy
Children inherit traits from parents. A "SportsCar" inherits all features of a "Car" and adds its own.

### C++ Example

```cpp
class Vehicle {
protected:
    string brand;
    int speed;

public:
    Vehicle(string b, int s) : brand(b), speed(s) {}

    void drive() {
        cout << brand << " driving at " << speed << " km/h" << endl;
    }

    virtual void describe() {
        cout << "I am a vehicle: " << brand << endl;
    }

    virtual ~Vehicle() {}
};

class Car : public Vehicle {
    int doors;

public:
    Car(string b, int s, int d) : Vehicle(b, s), doors(d) {}

    void describe() override {
        cout << "I am a car: " << brand << " with " << doors << " doors" << endl;
    }
};

class ElectricCar : public Car {
    int batteryKWh;

public:
    ElectricCar(string b, int s, int d, int bat)
        : Car(b, s, d), batteryKWh(bat) {}

    void describe() override {
        cout << "I am an EV: " << brand << " with " << batteryKWh << " kWh battery" << endl;
    }

    void charge() {
        cout << "Charging " << batteryKWh << " kWh battery..." << endl;
    }
};
```

### Types of Inheritance

```
Single:       Vehicle → Car
Multilevel:   Vehicle → Car → ElectricCar
Hierarchical: Vehicle → Car
              Vehicle → Truck
              Vehicle → Motorcycle
Multiple:     (C++ only) class FlyingCar : public Car, public Airplane
```

### ⚠️ The Diamond Problem (C++ Multiple Inheritance)

```
        Vehicle
       /       \
     Car      Airplane
       \       /
      FlyingCar     ← Which Vehicle constructor is called??
```

**Solution in C++:** Virtual inheritance
```cpp
class Car : virtual public Vehicle { ... };
class Airplane : virtual public Vehicle { ... };
class FlyingCar : public Car, public Airplane { ... };  // Only one Vehicle!
```

**In JavaScript:** No multiple inheritance. Use mixins or composition instead.

### JavaScript Example

```js
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        console.log(`${this.brand} driving at ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, doors) {
        super(brand, speed);  // Call parent constructor
        this.doors = doors;
    }

    describe() {
        console.log(`${this.brand} car with ${this.doors} doors`);
    }
}

class ElectricCar extends Car {
    constructor(brand, speed, doors, battery) {
        super(brand, speed, doors);
        this.battery = battery;
    }

    charge() {
        console.log(`Charging ${this.battery} kWh...`);
    }
}

const tesla = new ElectricCar("Tesla", 200, 4, 100);
tesla.drive();     // "Tesla driving at 200 km/h" (inherited from Vehicle)
tesla.describe();  // "Tesla car with 4 doors" (inherited from Car)
tesla.charge();    // "Charging 100 kWh..." (own method)
```

---

## Pillar 4: Polymorphism

> **Same method name, different behavior based on the object.**

### Real-World Analogy
The word "open" means different things: open a door, open a file, open a business. Same action name, different implementation.

### Two Types

| Type | Mechanism | When Decided |
|------|-----------|-------------|
| **Compile-time** (Static) | Method/operator overloading | At compile time |
| **Runtime** (Dynamic) | Method overriding + virtual functions | At runtime |

### Compile-time Polymorphism (C++ Only — Overloading)

```cpp
class Calculator {
public:
    // Same function name, different parameters
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
};

Calculator calc;
calc.add(1, 2);         // Calls int version → 3
calc.add(1.5, 2.5);     // Calls double version → 4.0
calc.add(1, 2, 3);      // Calls 3-param version → 6
```

> **Note:** JavaScript does NOT have method overloading. You'd use default params or rest params.

### Runtime Polymorphism (Both C++ and JS — Overriding)

```cpp
class Shape {
public:
    virtual double area() = 0;  // Pure virtual
    virtual void describe() {
        cout << "I am a shape with area " << area() << endl;
    }
    virtual ~Shape() {}
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override { return 3.14159 * radius * radius; }
};

class Rectangle : public Shape {
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() override { return width * height; }
};

// POLYMORPHISM IN ACTION
void printArea(Shape* shape) {
    shape->describe();  // Calls the correct version based on actual object type!
}

// Same function call, different behavior
printArea(new Circle(5));       // "I am a shape with area 78.5398"
printArea(new Rectangle(4, 6)); // "I am a shape with area 24"
```

### JavaScript Example

```js
class Shape {
    area() {
        throw new Error("Must implement area()");
    }

    describe() {
        console.log(`I am a shape with area ${this.area()}`);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Polymorphism — same function call, different behavior
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => shape.describe());
// "I am a shape with area 78.539..."
// "I am a shape with area 24"
```

---

## 📊 The 4 Pillars — Quick Reference

| Pillar | One-Line Definition | Key Mechanism |
|--------|-------------------|---------------|
| **Encapsulation** | Bundle data + methods, hide internals | Access modifiers (private/public) |
| **Abstraction** | Hide complexity, show only what's needed | Abstract classes, interfaces |
| **Inheritance** | Child class gets parent's features | `extends` / `:` |
| **Polymorphism** | Same interface, different implementations | Overloading (static) + Overriding (dynamic) |

---

## 🧠 Interview Exercises

### Exercise 1: Explain with real-world examples
For each pillar, give:
1. A real-world analogy (non-coding)
2. A coding scenario where it's useful

### Exercise 2: Spot the pillar
```js
class Logger {
    #logs = [];              // Which pillar? → Encapsulation
    log(msg) { ... }
}

class FileLogger extends Logger {  // Which pillar? → Inheritance
    log(msg) { ... }               // Which pillar? → Polymorphism (override)
}
```

### Exercise 3: The classic interview question
> "What are the 4 pillars of OOP? Explain each with an example."

Practice answering this OUT LOUD in under 2 minutes.

---

## 📝 Interview Answer

> **Q: "What are the 4 pillars of OOP?"**
>
> "The 4 pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism.
> **Encapsulation** bundles data and methods together while hiding internal state — like a BankAccount class that only exposes deposit/withdraw methods.
> **Abstraction** hides complex implementation behind a simple interface — like a PaymentProcessor where the caller doesn't need to know if it's Stripe or PayPal.
> **Inheritance** lets a child class reuse and extend parent class features — like ElectricCar extending Car.
> **Polymorphism** allows the same method to behave differently based on the object — like calling area() on a Circle vs Rectangle and getting different results through method overriding."
