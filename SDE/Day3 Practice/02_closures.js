// ============================================================
//  DAY 3 — PART 2: CLOSURES
//  The most important JS concept for interviews!
// ============================================================
// Run this file: node 02_closures.js
// ============================================================


// ────────────────────────────────────────────────────────────
//  WHAT IS A CLOSURE?
// ────────────────────────────────────────────────────────────
//
//  A closure is a function that REMEMBERS the variables from
//  its outer scope, even after the outer function has finished
//  executing.
//
//  Simple definition for interviews:
//  "A closure is a function bundled together with its lexical 
//   environment (the variables it had access to when created)."
//
// ────────────────────────────────────────────────────────────

console.log("═══════════════════════════════════════════");
console.log("  CONCEPT: CLOSURES");
console.log("═══════════════════════════════════════════\n");


// ─── Example 1: Basic Closure ───
console.log("--- Example 1: Basic Closure ---");

function outer() {
    let count = 0;  // This variable is "enclosed" 
    
    function inner() {
        count++;
        console.log("  count:", count);
    }
    
    return inner;  // Return the inner function
}

const increment = outer();  // outer() runs and returns inner
increment();  // 1 — inner REMEMBERS count!
increment();  // 2 — count persists between calls!
increment();  // 3 — because of closure!

// KEY INSIGHT: Even though outer() has finished executing,
// the inner function still has access to `count`.
// This is a CLOSURE.


// ─── Example 2: Closure Creates Private Variables ───
console.log("\n--- Example 2: Private Variables (Data Hiding) ---");

function createBankAccount(initialBalance) {
    let balance = initialBalance;  // Private! Not accessible from outside
    
    return {
        deposit(amount) {
            balance += amount;
            console.log(`  Deposited ₹${amount}. Balance: ₹${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log(`  Insufficient funds! Balance: ₹${balance}`);
                return;
            }
            balance -= amount;
            console.log(`  Withdrew ₹${amount}. Balance: ₹${balance}`);
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);
account.deposit(500);      // Deposited ₹500. Balance: ₹1500
account.withdraw(200);     // Withdrew ₹200. Balance: ₹1300
// console.log(account.balance);  // ❌ undefined — it's private!
console.log("  Direct access to balance:", account.balance);  // undefined
console.log("  Via getBalance():", account.getBalance());       // 1300


// ─── Example 3: Closure in Loops (CLASSIC INTERVIEW!) ───
console.log("\n--- Example 3: Closure in Loops ---");

// ❌ BROKEN: Using var
console.log("With var (broken):");
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log("  var i:", i);  // All print 4!
    }, 100);
}

// ✅ FIX 1: Using let (creates new binding per iteration)
console.log("With let (fixed) — will print after timeout:");
for (let j = 1; j <= 3; j++) {
    setTimeout(function() {
        console.log("  let j:", j);  // 1, 2, 3
    }, 200);
}

// ✅ FIX 2: Using IIFE (Immediately Invoked Function Expression)
console.log("With IIFE (fixed) — will print after timeout:");
for (var k = 1; k <= 3; k++) {
    (function(captured) {
        setTimeout(function() {
            console.log("  IIFE k:", captured);  // 1, 2, 3
        }, 300);
    })(k);  // k is captured by value at each iteration
}


// ─── Example 4: Function Factory (Closure Pattern) ───
console.log("\n--- Example 4: Function Factory ---");

function multiplier(factor) {
    return function(number) {
        return number * factor;  // factor is enclosed
    };
}

const double = multiplier(2);
const triple = multiplier(3);
const tenTimes = multiplier(10);

console.log("  double(5):", double(5));      // 10
console.log("  triple(5):", triple(5));      // 15
console.log("  tenTimes(5):", tenTimes(5));  // 50

// Each function remembers its own `factor` value!


// ════════════════════════════════════════════════════════════
//  🏗️ BUILD: Counter with Closures
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  🏗️ BUILD: Counter with Closures");
console.log("═══════════════════════════════════════════\n");

function createCounter(startValue = 0, step = 1) {
    let current = startValue;
    
    return {
        increment() {
            current += step;
            return current;
        },
        decrement() {
            current -= step;
            return current;
        },
        reset() {
            current = startValue;
            return current;
        },
        getValue() {
            return current;
        }
    };
}

const counter = createCounter(0, 1);
console.log("  increment:", counter.increment());  // 1
console.log("  increment:", counter.increment());  // 2
console.log("  increment:", counter.increment());  // 3
console.log("  decrement:", counter.decrement());  // 2
console.log("  getValue:", counter.getValue());    // 2
console.log("  reset:", counter.reset());          // 0

const counter5 = createCounter(100, 5);
console.log("\n  counter5 increment:", counter5.increment());  // 105
console.log("  counter5 increment:", counter5.increment());  // 110
console.log("  counter5 decrement:", counter5.decrement());  // 105


// ════════════════════════════════════════════════════════════
//  🧠 CLOSURE EXERCISES — Try to solve before reading answers!
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  🧠 CLOSURE EXERCISES");
console.log("═══════════════════════════════════════════\n");


// ─── Exercise 1: Predict the output ───
console.log("--- Exercise 1 ---");
function ex1() {
    let a = 10;
    
    function inner() {
        console.log("  a:", a);  // Predict: ???
    }
    
    a = 20;      // Modify a BEFORE calling inner
    inner();     // What does this print?
}
ex1();
// ANSWER: 20
// WHY: Closures capture the VARIABLE REFERENCE, not the VALUE.
// When inner() runs, `a` has already been changed to 20.


// ─── Exercise 2: Predict the output ───
console.log("\n--- Exercise 2 ---");
function ex2() {
    const funcs = [];
    
    for (var i = 0; i < 3; i++) {
        funcs.push(function() {
            return i;
        });
    }
    
    console.log("  funcs[0]():", funcs[0]());  // Predict: ???
    console.log("  funcs[1]():", funcs[1]());  // Predict: ???
    console.log("  funcs[2]():", funcs[2]());  // Predict: ???
}
ex2();
// ANSWER: 3, 3, 3
// WHY: var i is shared — all functions reference the same i, which is 3


// ─── Exercise 3: Fix Exercise 2 using closures ───
console.log("\n--- Exercise 3 (Fixed with IIFE) ---");
function ex3() {
    const funcs = [];
    
    for (var i = 0; i < 3; i++) {
        funcs.push((function(captured) {
            return function() {
                return captured;
            };
        })(i));
    }
    
    console.log("  funcs[0]():", funcs[0]());  // 0
    console.log("  funcs[1]():", funcs[1]());  // 1
    console.log("  funcs[2]():", funcs[2]());  // 2
}
ex3();


// ─── Exercise 4: Closure with setTimeout ───
console.log("\n--- Exercise 4: Print 1,2,3,4,5 with 1-second delays ---");
// Using closure + IIFE
for (var n = 1; n <= 5; n++) {
    (function(num) {
        setTimeout(function() {
            console.log("  delayed:", num);
        }, num * 400);  // Using 400ms for faster demo
    })(n);
}


// ─── Exercise 5: Memoization with Closures ───
console.log("\n--- Exercise 5: Memoization ---");

function memoize(fn) {
    const cache = {};  // Enclosed! Private cache
    
    return function(n) {
        if (cache[n] !== undefined) {
            console.log(`  (cached) fib(${n}) =`, cache[n]);
            return cache[n];
        }
        const result = fn(n);
        cache[n] = result;
        console.log(`  (computed) fib(${n}) =`, result);
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoFib = memoize(fibonacci);
memoFib(10);  // computed
memoFib(10);  // cached!
memoFib(20);  // computed
memoFib(20);  // cached!


// ─── Exercise 6: Build a once() function ───
console.log("\n--- Exercise 6: once() function ---");

function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        } else {
            console.log("  (already called, returning cached result)");
        }
        return result;
    };
}

const initializeOnce = once(function(name) {
    console.log(`  Initializing ${name}...`);
    return `${name} initialized!`;
});

console.log("  1st call:", initializeOnce("App"));   // Runs function
console.log("  2nd call:", initializeOnce("App"));   // Returns cached
console.log("  3rd call:", initializeOnce("App"));   // Returns cached


// ════════════════════════════════════════════════════════════
//  📝 INTERVIEW CHEAT SHEET
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  📝 CLOSURE INTERVIEW CHEAT SHEET");
console.log("═══════════════════════════════════════════");

console.log(`
✅ DEFINITION:
"A closure is a function that has access to its outer scope's 
 variables even after the outer function has returned."

✅ USE CASES:
1. Data privacy / encapsulation (private variables)
2. Function factories (multiplier, adder)
3. Memoization / caching
4. Module pattern
5. Currying
6. Event handlers & callbacks

✅ KEY POINTS:
- Closures capture REFERENCES, not VALUES
- Each closure gets its own copy with 'let' in loops
- var in loops → shared variable (classic bug)
- Closures enable the Module Pattern in JS

✅ COMMON INTERVIEW QUESTIONS:
- "What is a closure?"
- "var vs let in a for loop with setTimeout"
- "Build a counter using closures"
- "Implement once(), memoize(), debounce()"
`);
