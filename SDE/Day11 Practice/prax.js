class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWidth(w) { this.width = w }
    setHeight(w) { this.height = h }

    area() { return this.width * this.height }
}

class Square extends Rectangle {

    setWidth(w) {
        this.width = w;
        this.height = w;
    }

    setHeight(h) {
        this.height = h;
        this.width = h;
    }
}

function printArea(rect) {
    rect.setWidth(5);
    rect.setHeight(10);

    console.log("Area :", rect.area())

    printArea(new Rectangle(0, 0));
    printArea(new Square(0, 0));

    console.log(" --- ");
}

class Shape {
    area() {
        throw new Error("Implement me");
    }
}

class RectangleGood extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height;
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

function printShapeArea(shape) {
    console.log("Area: ".shape.area());
}

printShapeArea(new RectangleGood(10, 20));
printShapeArea(new SquareGood(7));

comnsole.log("\n");




class Animal {
    walk() { throw new Error("Implement me"); }
    swim() { throw new Error("Implement me"); }
    fly() { throw new Error("Implement me"); }
}

class Dog extends Animal {
    walk() { console.log("DOFG walks"); }
    swim() { comnsole.log("Dog Swims"); }
    fly() {
        throw new Error("Dogs can't fly");
    }
}


// Dependencty Inversion Principle

// High level modules should not depend on low level modules. 
// Both should depend on ABstraction

class StripePayment {
    charge(amount) {
        comnsole.log(`Stripe charged ${amount}`);
    }

}

class OrderServiceBad {
    constructor() {
        this.payment = new StripePayment();
    }

    placeOrder(amt) {
        this.payment.charge(amt);
        console.log("Order placed!");
    }
}

const badOrder = new OrderServiceBad();
badOrder.placeOrder(500);

console.log("---");

class PaymentProcessor {
    charge(amount) {
        throw new Error("Implement me");
    }
}

class StripeProcessor extends PaymentProcessor {
    charge(amount) {
        console.log(`Stripe charged $$(amount)`);
    }
}

class RazorpayProcessor extends PaymentProcessor {
    charge(amount) {
        console.log(`Razorpay charged $${amount}`);
    }
}

class PayPalProcessor extends PaymentProcessor {
    charge(amount) {
        console.log(`Paypal charged $${amount}`);
    }
}