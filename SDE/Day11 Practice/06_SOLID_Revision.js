// ============================================================
//   SOLID Principles — Quick Revision (All 5)
//   Day 11 Spaced Recall
//   Run: node 06_SOLID_Revision.js
// ============================================================


// ════════════════════════════════════════════
//  S — Single Responsibility Principle
// ════════════════════════════════════════════
//  One class = one reason to change
//  If you say "this class does X AND Y" → it's violating SRP

// BAD: UserService does validation + saving + emailing + logging
// GOOD: Separate class for each → UserValidator, UserRepository,
//        WelcomeEmailSender, Logger, UserService (coordinator)

// You wrote this on Day 6. You know this one. Moving on.


// ════════════════════════════════════════════
//  O — Open/Closed Principle
// ════════════════════════════════════════════
//  Open for extension, closed for modification
//  Add new behavior by creating new classes, not editing old if-else

// BAD: if (type === "regular") ... else if (type === "premium") ...
// GOOD: Strategy pattern — each discount is its own class

// You wrote this on Day 6 too. Moving on to the new ones.


// ════════════════════════════════════════════
//  L — Liskov Substitution Principle (LSP)
// ════════════════════════════════════════════
//  If class B extends class A, you should be able to use B
//  anywhere you use A without things breaking.
//
//  Simple test: Can I replace the parent with the child
//  and everything still works? If not → LSP violated.


// ❌ VIOLATING LSP — the classic Rectangle/Square problem

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(w) { this.width = w; }
    setHeight(h) { this.height = h; }

    area() { return this.width * this.height; }
}

class Square extends Rectangle {
    // A square forces width === height
    // So we override both setters
    setWidth(w) {
        this.width = w;
        this.height = w;  // forced!
    }
    setHeight(h) {
        this.width = h;   // forced!
        this.height = h;
    }
}

// This function expects a Rectangle
function printArea(rect) {
    rect.setWidth(5);
    rect.setHeight(10);
    // We expect area = 5 * 10 = 50
    console.log("Expected 50, got:", rect.area());
}

printArea(new Rectangle(0, 0));  // Expected 50, got: 50 ✅
printArea(new Square(0, 0));     // Expected 50, got: 100 ❌ BROKEN!
// Square changed width when we set height. LSP violated.

console.log("---");


// ✅ FOLLOWING LSP — use separate classes, don't force inheritance

class Shape {
    area() {
        throw new Error("Implement me");
    }
}

class RectangleGood extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() { return this.width * this.height; }
}

class SquareGood extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() { return this.side * this.side; }
}

// Now both work independently. No weird overrides.
// You can use either wherever Shape is expected.
function printShapeArea(shape) {
    console.log("Area:", shape.area());
}

printShapeArea(new RectangleGood(5, 10));  // Area: 50
printShapeArea(new SquareGood(7));          // Area: 49

// KEY INSIGHT: If your child class needs to override parent behavior
// in a way that changes the expected output, don't use inheritance.
// The "is-a" relationship must hold for ALL behaviors, not just some.

console.log("\n");


// ════════════════════════════════════════════
//  I — Interface Segregation Principle (ISP)
// ════════════════════════════════════════════
//  No class should be forced to implement methods it doesn't use.
//  Split big interfaces into smaller, focused ones.
//
//  JS doesn't have interfaces, but the idea still applies.
//  If you have a base class with 10 methods and a child only
//  needs 3, that base class is too fat.


// ❌ VIOLATING ISP — fat interface forces everyone to implement everything

class Animal {
    walk() { throw new Error("Implement me"); }
    swim() { throw new Error("Implement me"); }
    fly()  { throw new Error("Implement me"); }
}

class Dog extends Animal {
    walk() { console.log("Dog walks"); }
    swim() { console.log("Dog swims"); }
    fly()  {
        // Dogs can't fly! But we're FORCED to implement this.
        throw new Error("Dogs can't fly!");
    }
}

class Fish extends Animal {
    walk() {
        // Fish can't walk! Forced to implement anyway.
        throw new Error("Fish can't walk!");
    }
    swim() { console.log("Fish swims"); }
    fly()  {
        throw new Error("Fish can't fly!");
    }
}

// Dog and Fish are forced to handle methods they don't need. Bad design.


// ✅ FOLLOWING ISP — small, focused interfaces (mixins in JS)

const Walkable = {
    walk() { console.log(`${this.name} walks`); }
};

const Swimmable = {
    swim() { console.log(`${this.name} swims`); }
};

const Flyable = {
    fly() { console.log(`${this.name} flies`); }
};

// Dog: can walk and swim. NOT fly.
class DogGood {
    constructor(name) { this.name = name; }
}
Object.assign(DogGood.prototype, Walkable, Swimmable);

// Eagle: can walk and fly. NOT swim.
class Eagle {
    constructor(name) { this.name = name; }
}
Object.assign(Eagle.prototype, Walkable, Flyable);

// Duck: can do everything
class Duck {
    constructor(name) { this.name = name; }
}
Object.assign(Duck.prototype, Walkable, Swimmable, Flyable);

const dog = new DogGood("Buddy");
dog.walk();  // Buddy walks
dog.swim();  // Buddy swims
// dog.fly() → doesn't exist, which is correct!

const eagle = new Eagle("Shadow");
eagle.walk();  // Shadow walks
eagle.fly();   // Shadow flies

const duck = new Duck("Donald");
duck.walk();  // Donald walks
duck.swim();  // Donald swims
duck.fly();   // Donald flies

// Each class only has the methods it actually needs.
// No useless throw new Error("can't do this").

console.log("\n");


// ════════════════════════════════════════════
//  D — Dependency Inversion Principle (DIP)
// ════════════════════════════════════════════
//  High-level modules should NOT depend on low-level modules.
//  Both should depend on ABSTRACTIONS.
//
//  In simple terms: don't hardcode dependencies inside your class.
//  Pass them in from outside (dependency injection).


// ❌ VIOLATING DIP — OrderService is tightly coupled to Stripe

class StripePayment {
    charge(amount) {
        console.log(`Stripe charged $${amount}`);
    }
}

class OrderServiceBad {
    constructor() {
        // Hardcoded! If we switch to Razorpay, we have to
        // change OrderService itself. That's the problem.
        this.payment = new StripePayment();
    }

    placeOrder(amount) {
        this.payment.charge(amount);
        console.log("Order placed!");
    }
}

const badOrder = new OrderServiceBad();
badOrder.placeOrder(500);  // Always uses Stripe. Can't change.

console.log("---");


// ✅ FOLLOWING DIP — inject the dependency from outside

// Any payment processor must have a charge() method
class PaymentProcessor {
    charge(amount) {
        throw new Error("Implement me");
    }
}

class StripeProcessor extends PaymentProcessor {
    charge(amount) {
        console.log(`Stripe charged $${amount}`);
    }
}

class RazorpayProcessor extends PaymentProcessor {
    charge(amount) {
        console.log(`Razorpay charged ₹${amount}`);
    }
}

class PayPalProcessor extends PaymentProcessor {
    charge(amount) {
        console.log(`PayPal charged $${amount}`);
    }
}

// OrderService doesn't care WHICH payment processor.
// It just knows it has one that can charge().
class OrderServiceGood {
    constructor(paymentProcessor) {
        // Injected from outside! Not hardcoded.
        this.payment = paymentProcessor;
    }

    placeOrder(amount) {
        this.payment.charge(amount);
        console.log("Order placed!");
    }
}

// Now we can swap payment processors without touching OrderService
const stripeOrder = new OrderServiceGood(new StripeProcessor());
stripeOrder.placeOrder(500);    // Stripe charged $500

const razorpayOrder = new OrderServiceGood(new RazorpayProcessor());
razorpayOrder.placeOrder(500);  // Razorpay charged ₹500

const paypalOrder = new OrderServiceGood(new PayPalProcessor());
paypalOrder.placeOrder(500);    // PayPal charged $500

// KEY INSIGHT: The "inversion" is that OrderService no longer
// controls which payment processor to use. The CALLER decides.
// This makes testing easy too — just inject a mock processor.


console.log("\n");
console.log("════════════════════════════════════════════");
console.log("  SOLID CHEAT SHEET");
console.log("════════════════════════════════════════════");
console.log("  S → One class, one job");
console.log("  O → New feature = new class, not new if-else");
console.log("  L → Child can replace parent without breaking");
console.log("  I → Don't force classes to implement unused methods");
console.log("  D → Inject dependencies, don't hardcode them");
console.log("════════════════════════════════════════════");
