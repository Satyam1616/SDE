// ============================================================
//  DAY 3 — PART 3: THE `this` KEYWORD
//  The most confusing JS concept — but not anymore!
// ============================================================
// Run this file: node 03_this_keyword.js
// ============================================================


// ────────────────────────────────────────────────────────────
//  THE GOLDEN RULES OF `this`
// ────────────────────────────────────────────────────────────
//
//  Rule 1: GLOBAL context    → `this` = global object (window/global)
//  Rule 2: OBJECT method     → `this` = the object that called the method
//  Rule 3: ARROW function    → `this` = inherited from surrounding scope
//  Rule 4: CONSTRUCTOR (new) → `this` = the newly created object
//  Rule 5: call/apply/bind   → `this` = whatever you explicitly set
//  Rule 6: EVENT handler     → `this` = the element that received the event
//
//  Precedence: new > call/apply/bind > object method > global
//
// ────────────────────────────────────────────────────────────


console.log("═══════════════════════════════════════════");
console.log("  RULE 1: GLOBAL CONTEXT");
console.log("═══════════════════════════════════════════\n");

// In Node.js, `this` in global scope = module.exports (empty object {})
// In browser, `this` in global scope = window object
console.log("Global this:", this);  // {} in Node.js

function showThis() {
    // In non-strict mode, `this` = global object
    // In strict mode, `this` = undefined
    console.log("Function this:", typeof this);
}
showThis();


console.log("\n═══════════════════════════════════════════");
console.log("  RULE 2: OBJECT METHOD — `this` = caller object");
console.log("═══════════════════════════════════════════\n");

const user = {
    name: "Saroj",
    age: 22,
    greet() {
        console.log(`  Hello, I'm ${this.name}, age ${this.age}`);
        // `this` = user object (because user.greet() was called)
    },
    address: {
        city: "Delhi",
        getCity() {
            console.log(`  City: ${this.city}`);
            // `this` = address object (not user!)
            // Because address.getCity() — the immediate caller is address
        }
    }
};

user.greet();           // "Hello, I'm Saroj, age 22"
user.address.getCity(); // "City: Delhi"

// ⚠️ GOTCHA: Method extraction loses `this`!
console.log("\n  ⚠️ Method extraction gotcha:");
const extractedGreet = user.greet;
// extractedGreet();  // "Hello, I'm undefined, age undefined"
// WHY: When you extract the method, `this` is no longer bound to user
console.log("  extractedGreet() → this.name = undefined (lost binding!)");


console.log("\n═══════════════════════════════════════════");
console.log("  RULE 3: ARROW FUNCTIONS — `this` = outer scope");
console.log("═══════════════════════════════════════════\n");

// Arrow functions DO NOT have their own `this`.
// They inherit `this` from the enclosing lexical scope.

const team = {
    name: "Alpha",
    members: ["Saroj", "Rahul", "Priya"],
    
    // ❌ Regular function inside method
    showMembersRegular() {
        console.log("  Regular function:");
        this.members.forEach(function(member) {
            // `this` here is NOT team! It's global/undefined
            // console.log(`  ${member} in ${this.name}`);  // BROKEN
            console.log(`    ${member} in ${typeof this}`);
        });
    },
    
    // ✅ Arrow function inside method
    showMembersArrow() {
        console.log("  Arrow function:");
        this.members.forEach((member) => {
            // Arrow function inherits `this` from showMembersArrow
            // which is the team object ✅
            console.log(`    ${member} in team ${this.name}`);
        });
    }
};

team.showMembersRegular();
team.showMembersArrow();

// ⚠️ GOTCHA: Arrow function as object method
console.log("\n  ⚠️ Arrow function as method:");
const brokenObj = {
    name: "BrokenObj",
    getName: () => {
        // Arrow function here inherits `this` from GLOBAL scope!
        // NOT from brokenObj
        return this.name;  // undefined in Node.js
    }
};
console.log("  brokenObj.getName():", brokenObj.getName());  // undefined
console.log("  ↳ Arrow functions should NOT be used as object methods!\n");


console.log("═══════════════════════════════════════════");
console.log("  RULE 4: CONSTRUCTOR (new) — `this` = new object");
console.log("═══════════════════════════════════════════\n");

function Person(name, age) {
    // When called with `new`:
    // 1. A new empty object is created: {}
    // 2. `this` is set to that new object
    // 3. Properties are added to `this`
    // 4. `this` is returned automatically
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`  I'm ${this.name}, ${this.age} years old`);
    };
}

const person1 = new Person("Saroj", 22);
person1.introduce();  // "I'm Saroj, 22 years old"

// With ES6 class (same mechanism)
class Animal {
    constructor(type) {
        this.type = type;
    }
    speak() {
        console.log(`  The ${this.type} makes a sound`);
    }
}

const dog = new Animal("Dog");
dog.speak();  // "The Dog makes a sound"


// ════════════════════════════════════════════════════════════
//  🧠 PREDICTION EXERCISES — 10 Exercises!
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  🧠 PREDICTION EXERCISES");
console.log("═══════════════════════════════════════════\n");


// ─── Exercise 1: What is `this`? ───
console.log("--- Exercise 1 ---");
const car = {
    brand: "Toyota",
    getBrand() {
        return this.brand;
    }
};
console.log("  car.getBrand():", car.getBrand());  // Predict: ???
// ANSWER: "Toyota" — this = car (object method rule)


// ─── Exercise 2: Method extraction ───
console.log("\n--- Exercise 2 ---");
const car2 = {
    brand: "Honda",
    getBrand() {
        return this.brand;
    }
};
const getBrand = car2.getBrand;
console.log("  extracted getBrand():", getBrand());  // Predict: ???
// ANSWER: undefined — `this` lost when extracted from object


// ─── Exercise 3: Nested objects ───
console.log("\n--- Exercise 3 ---");
const company = {
    name: "TechCorp",
    department: {
        name: "Engineering",
        getName() {
            return this.name;
        }
    }
};
console.log("  company.department.getName():", company.department.getName());  // Predict: ???
// ANSWER: "Engineering" — `this` = department (immediate caller)


// ─── Exercise 4: Arrow vs Regular in object ───
console.log("\n--- Exercise 4 ---");
const obj4 = {
    value: 42,
    regular() {
        return this.value;
    },
    arrow: () => {
        return typeof this;  // What scope does arrow inherit from?
    }
};
console.log("  regular():", obj4.regular());  // Predict: ???
console.log("  arrow():", obj4.arrow());      // Predict: ???
// ANSWER: 42, "object" (in Node.js module scope this = {})
// WHY: Arrow inherits from module scope, not from obj4


// ─── Exercise 5: Callback losing `this` ───
console.log("\n--- Exercise 5 ---");
const timer = {
    seconds: 0,
    start() {
        // Using regular function as callback
        const intervalId = setInterval(function() {
            this.seconds++;  // What is `this` here?
            if (this.seconds >= 3) clearInterval(intervalId);
        }, 10);
    },
    startFixed() {
        // Fix 1: Arrow function
        const intervalId = setInterval(() => {
            this.seconds++;  // `this` = timer ✅
            if (this.seconds >= 3) clearInterval(intervalId);
        }, 10);
    }
};
console.log("  Regular callback: `this` = global (not timer!)");
console.log("  Arrow callback: `this` = timer ✅");
// In the regular version, `this.seconds` would be NaN


// ─── Exercise 6: `this` in class methods ───
console.log("\n--- Exercise 6 ---");
class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
        return this.count;
    }
}
const c = new Counter();
console.log("  c.increment():", c.increment());  // Predict: ???
console.log("  c.increment():", c.increment());  // Predict: ???
// ANSWER: 1, 2


// ─── Exercise 7: Extracted class method ───
console.log("\n--- Exercise 7 ---");
const c2 = new Counter();
const inc = c2.increment;
// inc();  // What happens? Predict: ???
console.log("  extracted inc(): TypeError! Cannot read property 'count' of undefined");
// ANSWER: TypeError (in strict mode, which classes use by default)
// Fix: const inc = c2.increment.bind(c2);


// ─── Exercise 8: `this` inside forEach ───
console.log("\n--- Exercise 8 ---");
const processor = {
    prefix: ">>",
    items: ["a", "b", "c"],
    process() {
        const results = [];
        this.items.forEach(function(item) {
            // What is `this` here?
            results.push(this?.prefix + item);
        });
        return results;
    },
    processFixed() {
        const results = [];
        this.items.forEach((item) => {
            results.push(this.prefix + item);
        });
        return results;
    }
};
console.log("  Regular forEach:", processor.process());       // Predict: ???
console.log("  Arrow forEach:", processor.processFixed());    // Predict: ???
// ANSWER: ["undefineda", "undefinedb", "undefinedc"], [">>a", ">>b", ">>c"]


// ─── Exercise 9: Chaining with `this` ───
console.log("\n--- Exercise 9 ---");
const builder = {
    result: "",
    add(str) {
        this.result += str;
        return this;  // Return this for chaining!
    },
    build() {
        return this.result;
    }
};
const output = builder.add("Hello").add(" ").add("World").build();
console.log("  Chained result:", output);  // Predict: ???
// ANSWER: "Hello World"


// ─── Exercise 10: Arrow function in constructor ───
console.log("\n--- Exercise 10 ---");
function Widget(name) {
    this.name = name;
    
    // Regular method
    this.showRegular = function() {
        return this.name;
    };
    
    // Arrow method (captures `this` from constructor)
    this.showArrow = () => {
        return this.name;
    };
}

const w = new Widget("Button");
console.log("  regular:", w.showRegular());  // Predict: ???
console.log("  arrow:", w.showArrow());      // Predict: ???

// What about extracted?
const regFn = w.showRegular;
const arrFn = w.showArrow;
// console.log("  extracted regular:", regFn());    // Predict: ???
console.log("  extracted arrow:", arrFn());         // Predict: ???
console.log("  extracted regular: undefined (lost this)");
// ANSWER: "Button", "Button", "Button", undefined
// Arrow function KEEPS its `this` even when extracted!
// Because it was bound during construction (lexical this)


// ════════════════════════════════════════════════════════════
//  📝 INTERVIEW CHEAT SHEET
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  📝 `this` KEYWORD CHEAT SHEET");
console.log("═══════════════════════════════════════════");

console.log(`
┌─────────────────────┬────────────────────────────────┐
│ Context             │ this =                         │
├─────────────────────┼────────────────────────────────┤
│ Global              │ window (browser) / {} (Node)   │
│ Function (non-str.) │ global object                  │
│ Function (strict)   │ undefined                      │
│ Object method       │ The calling object             │
│ Arrow function      │ Inherited from outer scope     │
│ new Constructor()   │ The newly created object       │
│ call/apply/bind     │ Explicitly set value           │
│ Event handler       │ The DOM element                │
│ Class method        │ The instance (strict mode)     │
└─────────────────────┴────────────────────────────────┘

TOP INTERVIEW QUESTIONS:
1. "What is 'this' in JavaScript?"
2. "Explain the difference between arrow and regular functions"
3. "What happens when you extract a method from an object?"
4. "How do you fix 'this' in callbacks?"

TOP GOTCHAS:
❌ Arrow functions as object methods (no own this)
❌ Extracting methods loses this binding
❌ Regular callbacks in methods (this becomes global)
✅ Use arrow functions for callbacks INSIDE methods
✅ Use .bind() for extracted methods
✅ Use arrow functions in constructors for auto-binding
`);
