// ============================================================
//  DAY 3 — PART 4: call(), apply(), bind()
//  Explicit `this` binding — total control over context!
// ============================================================
// Run this file: node 04_call_apply_bind.js
// ============================================================


// ────────────────────────────────────────────────────────────
//  WHY DO WE NEED call, apply, bind?
// ────────────────────────────────────────────────────────────
//
//  Problem: Sometimes `this` gets lost or points to wrong object
//  Solution: Manually set what `this` should be!
//
//  call()  → Invoke function immediately, pass args ONE BY ONE
//  apply() → Invoke function immediately, pass args as ARRAY
//  bind()  → Returns a NEW function with `this` permanently set
//
//  Memory trick: 
//    call  = "C" = Comma separated args
//    apply = "A" = Array of args
//    bind  = "B" = Bound (returns new function, doesn't call)
//
// ────────────────────────────────────────────────────────────


console.log("═══════════════════════════════════════════");
console.log("  CONCEPT 1: call() — Invoke with explicit this");
console.log("═══════════════════════════════════════════\n");

// Syntax: func.call(thisArg, arg1, arg2, ...)

function introduce(greeting, punctuation) {
    console.log(`  ${greeting}, I'm ${this.name}, age ${this.age}${punctuation}`);
}

const saroj = { name: "Saroj", age: 22 };
const rahul = { name: "Rahul", age: 25 };

// Using call() to set `this`
introduce.call(saroj, "Hello", "!");    // Hello, I'm Saroj, age 22!
introduce.call(rahul, "Hey", ".");      // Hey, I'm Rahul, age 25.

// Without call — `this` would be global/undefined
// introduce("Hi", "!");  // ❌ this.name = undefined


// ─── Real-world use: Borrowing methods ───
console.log("\n  Method Borrowing:");

const calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return this;
    },
    getValue() {
        return this.value;
    }
};

const myObj = { value: 100 };

// Borrow calculator's getValue for myObj
const result = calculator.getValue.call(myObj);
console.log("  Borrowed getValue:", result);  // 100


console.log("\n═══════════════════════════════════════════");
console.log("  CONCEPT 2: apply() — Same as call, but ARRAY args");
console.log("═══════════════════════════════════════════\n");

// Syntax: func.apply(thisArg, [arg1, arg2, ...])

introduce.apply(saroj, ["Namaste", "! 🙏"]);  // Namaste, I'm Saroj, age 22! 🙏
introduce.apply(rahul, ["Howdy", "~"]);         // Howdy, I'm Rahul, age 25~

// ─── Real-world use: Math.max with array ───
console.log("\n  Math.max with apply:");
const numbers = [5, 2, 8, 1, 9, 3];

// Math.max doesn't accept arrays, but apply spreads them!
const max = Math.max.apply(null, numbers);
console.log("  Max:", max);  // 9

// Modern alternative: spread operator
const max2 = Math.max(...numbers);
console.log("  Max (spread):", max2);  // 9

// ─── call vs apply comparison ───
console.log("\n  call vs apply:");

function sum(a, b, c) {
    console.log(`  this.base + ${a} + ${b} + ${c} =`, this.base + a + b + c);
}

const context = { base: 100 };

sum.call(context, 1, 2, 3);     // 106 — args as comma-separated
sum.apply(context, [1, 2, 3]);  // 106 — args as array


console.log("\n═══════════════════════════════════════════");
console.log("  CONCEPT 3: bind() — Returns NEW function");
console.log("═══════════════════════════════════════════\n");

// Syntax: const newFunc = func.bind(thisArg, arg1, arg2, ...)
// KEY: bind does NOT call the function! It returns a new one.

const sarojIntroduce = introduce.bind(saroj);
const rahulIntroduce = introduce.bind(rahul);

sarojIntroduce("Hi", "!");  // Hi, I'm Saroj, age 22!
rahulIntroduce("Hi", "!");  // Hi, I'm Rahul, age 25!

// ─── Partial application with bind ───
console.log("\n  Partial Application:");

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);   // Pre-fill first arg as 2
const triple = multiply.bind(null, 3);   // Pre-fill first arg as 3

console.log("  double(5):", double(5));   // 10
console.log("  triple(5):", triple(5));   // 15
console.log("  double(10):", double(10)); // 20

// ─── Fixing lost `this` with bind ───
console.log("\n  Fixing lost this:");

const player = {
    name: "Virat",
    score: 100,
    getScore() {
        return `${this.name}: ${this.score}`;
    }
};

// ❌ Lost this
const extracted = player.getScore;
// console.log(extracted());  // "undefined: undefined"

// ✅ Fixed with bind
const fixed = player.getScore.bind(player);
console.log("  fixed():", fixed());  // "Virat: 100"

// ─── bind with event handlers (conceptual) ───
console.log("\n  Bind with callbacks:");

class Button {
    constructor(label) {
        this.label = label;
    }
    
    handleClick() {
        console.log(`  Button "${this.label}" was clicked!`);
    }
}

const btn = new Button("Submit");

// Simulating event handler
// ❌ Without bind: `this` would be the event target, not the Button
// element.addEventListener('click', btn.handleClick);  // BROKEN

// ✅ With bind:
const boundHandler = btn.handleClick.bind(btn);
boundHandler();  // Button "Submit" was clicked!

// ✅ Alternative: Arrow function in class
class ModernButton {
    constructor(label) {
        this.label = label;
    }
    
    // Arrow function auto-binds `this` to the instance
    handleClick = () => {
        console.log(`  ModernButton "${this.label}" clicked!`);
    }
}

const modernBtn = new ModernButton("Save");
const modernHandler = modernBtn.handleClick;  // No bind needed!
modernHandler();  // ModernButton "Save" clicked!


// ════════════════════════════════════════════════════════════
//  ⚡ KEY DIFFERENCES AT A GLANCE
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  ⚡ COMPARISON TABLE");
console.log("═══════════════════════════════════════════");

console.log(`
┌──────────┬──────────────┬──────────────┬──────────────────┐
│ Feature  │    call()    │   apply()    │     bind()       │
├──────────┼──────────────┼──────────────┼──────────────────┤
│ Executes │ Immediately  │ Immediately  │ Returns new func │
│ Args     │ Comma-sep.   │ Array        │ Comma-sep.       │
│ Returns  │ Func result  │ Func result  │ New function     │
│ Use case │ One-time     │ Array args   │ Save for later   │
│          │ invocation   │ invocation   │ (callbacks/bind) │
└──────────┴──────────────┴──────────────┴──────────────────┘
`);


// ════════════════════════════════════════════════════════════
//  🏗️ BUILD: Implement Your Own bind()
//  This is a VERY common interview question!
// ════════════════════════════════════════════════════════════

console.log("═══════════════════════════════════════════");
console.log("  🏗️ IMPLEMENT YOUR OWN bind()");
console.log("═══════════════════════════════════════════\n");

// ─── Version 1: Basic myBind ───
Function.prototype.myBind = function(context, ...boundArgs) {
    // `this` here refers to the function that myBind is called on
    const originalFunc = this;
    
    // Return a new function
    return function(...callArgs) {
        // Combine pre-bound args with new args
        return originalFunc.apply(context, [...boundArgs, ...callArgs]);
    };
};

// Test it!
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const greetSaroj = greet.myBind(saroj, "Hello");
console.log("  myBind test 1:", greetSaroj("!"));     // "Hello, Saroj!"
console.log("  myBind test 2:", greetSaroj("?"));     // "Hello, Saroj?"

const greetRahul = greet.myBind(rahul);
console.log("  myBind test 3:", greetRahul("Hey", ".")); // "Hey, Rahul."


// ─── Version 2: Advanced myBind (handles `new`) ───
Function.prototype.myBindAdvanced = function(context, ...boundArgs) {
    const originalFunc = this;
    
    const boundFunc = function(...callArgs) {
        // If called with `new`, `this` should be the new instance
        // not the bound context
        const isNew = this instanceof boundFunc;
        const thisArg = isNew ? this : context;
        
        return originalFunc.apply(thisArg, [...boundArgs, ...callArgs]);
    };
    
    // Maintain prototype chain for `new` to work
    if (originalFunc.prototype) {
        boundFunc.prototype = Object.create(originalFunc.prototype);
    }
    
    return boundFunc;
};

console.log("\n  Advanced myBind (handles new):");

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

const BoundAnimal = Animal.myBindAdvanced(null, "Dog");
const doggy = new BoundAnimal("Woof");
console.log("  new BoundAnimal:", doggy.name, doggy.sound);  // Dog Woof


// ════════════════════════════════════════════════════════════
//  🏗️ BUILD: Implement Your Own call() and apply()
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  🏗️ IMPLEMENT YOUR OWN call() and apply()");
console.log("═══════════════════════════════════════════\n");

// ─── myCall ───
Function.prototype.myCall = function(context, ...args) {
    // Handle null/undefined context
    context = context || globalThis;
    
    // Create a unique property to avoid overwriting existing ones
    const uniqueKey = Symbol('myCall');
    
    // Attach the function as a method of context
    context[uniqueKey] = this;
    
    // Call it as a method (so `this` = context)
    const result = context[uniqueKey](...args);
    
    // Clean up
    delete context[uniqueKey];
    
    return result;
};

// ─── myApply ───
Function.prototype.myApply = function(context, args = []) {
    context = context || globalThis;
    const uniqueKey = Symbol('myApply');
    context[uniqueKey] = this;
    const result = context[uniqueKey](...args);
    delete context[uniqueKey];
    return result;
};

// Test myCall
console.log("  myCall test:", greet.myCall(saroj, "Yo", "!"));    // "Yo, Saroj!"
console.log("  myApply test:", greet.myApply(rahul, ["Sup", "."])); // "Sup, Rahul."


// ════════════════════════════════════════════════════════════
//  🧠 PRACTICE EXERCISES
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  🧠 PRACTICE EXERCISES");
console.log("═══════════════════════════════════════════\n");


// ─── Exercise 1: Predict the output ───
console.log("--- Exercise 1 ---");
const obj1 = {
    name: "Object1",
    getName() {
        return this.name;
    }
};
const obj2 = { name: "Object2" };

console.log("  call:", obj1.getName.call(obj2));  // Predict: ???
// ANSWER: "Object2" — call sets `this` to obj2


// ─── Exercise 2: Predict the output ───
console.log("\n--- Exercise 2 ---");
function showArgs() {
    console.log("  this:", this.label);
    console.log("  args:", Array.from(arguments));
}
showArgs.call({ label: "A" }, 1, 2, 3);
showArgs.apply({ label: "B" }, [4, 5, 6]);
// ANSWER: "A" + [1,2,3], then "B" + [4,5,6]


// ─── Exercise 3: Partial application ───
console.log("\n--- Exercise 3 ---");
function add(a, b, c) {
    return a + b + c;
}
const add5 = add.bind(null, 5);
const add5and10 = add.bind(null, 5, 10);

console.log("  add5(10, 20):", add5(10, 20));        // Predict: ???
console.log("  add5and10(20):", add5and10(20));       // Predict: ???
// ANSWER: 35, 35


// ─── Exercise 4: bind chain ───
console.log("\n--- Exercise 4 ---");
function showThis() {
    return this.x;
}
const bound1 = showThis.bind({ x: 1 });
const bound2 = bound1.bind({ x: 2 });  // Can we re-bind?

console.log("  bound1():", bound1());  // Predict: ???
console.log("  bound2():", bound2());  // Predict: ???
// ANSWER: 1, 1 — bind can only bind ONCE! Re-binding is ignored.
// This is a classic interview gotcha!


// ─── Exercise 5: Method borrowing ───
console.log("\n--- Exercise 5 ---");
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

// Array-like objects don't have array methods
// But we can BORROW them!
const asArray = Array.prototype.slice.call(arrayLike);
console.log("  Borrowed slice:", asArray);  // ["a", "b", "c"]

// Modern alternatives:
console.log("  Array.from:", Array.from(arrayLike));   // ["a", "b", "c"]
console.log("  Spread:", [...Array.from(arrayLike)]);   // ["a", "b", "c"]


// ─── Exercise 6: Real-world — Logging utility ───
console.log("\n--- Exercise 6: Logging Utility ---");

function log(level, message) {
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    console.log(`  [${timestamp}] [${level}] [${this.module}] ${message}`);
}

const authLogger = log.bind({ module: "AUTH" });
const dbLogger = log.bind({ module: "DATABASE" });

authLogger("INFO", "User logged in");
dbLogger("ERROR", "Connection timeout");
authLogger("WARN", "Invalid token attempt");


// ════════════════════════════════════════════════════════════
//  📝 INTERVIEW CHEAT SHEET
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  📝 call/apply/bind CHEAT SHEET");
console.log("═══════════════════════════════════════════");

console.log(`
✅ QUICK ANSWERS:

Q: "Difference between call and apply?"
A: "Both invoke a function with a specified 'this'. 
    call() takes arguments comma-separated.
    apply() takes arguments as an array.
    Remember: Apply = Array."

Q: "What does bind do?"
A: "bind() returns a NEW function with 'this' permanently 
    bound to the specified object. Unlike call/apply, it 
    does NOT invoke the function immediately."

Q: "Can you re-bind a bound function?"
A: "No. Once bound, the this value cannot be overridden 
    by a subsequent bind, call, or apply."

Q: "Implement your own bind"
A: "Use apply inside a returned function:
    Function.prototype.myBind = function(ctx, ...args) {
      const fn = this;
      return function(...newArgs) {
        return fn.apply(ctx, [...args, ...newArgs]);
      };
    };"

Q: "When would you use call/apply/bind?"
A: "- call/apply: Method borrowing, invoking with different context
    - bind: Event handlers, callbacks, partial application
    - Modern alternative: Arrow functions for auto-binding"
`);
