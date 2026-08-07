// ============================================================
//  DAY 3 — PART 5: FINAL PRACTICE CHALLENGES
//  Output Prediction + Closure Exercises + Interview Qs
// ============================================================
// Run this file: node 05_practice_challenges.js
//
// ⚡ INSTRUCTIONS:
//  1. Read each challenge CAREFULLY
//  2. PREDICT the output BEFORE running
//  3. Write your prediction in the "YOUR PREDICTION:" line
//  4. Run the file and compare
//  5. If you got it wrong — UNDERSTAND WHY (read the explanation)
//
// ============================================================


console.log("╔═══════════════════════════════════════════════════╗");
console.log("║     DAY 3 — FINAL PRACTICE CHALLENGES            ║");
console.log("║     5 Output Predictions + 3 Closure Exercises    ║");
console.log("╚═══════════════════════════════════════════════════╝\n");


// ════════════════════════════════════════════════════════════
//  SECTION 1: OUTPUT PREDICTION QUESTIONS (5 Questions)
// ════════════════════════════════════════════════════════════

console.log("═══════════════════════════════════════════");
console.log("  SECTION 1: OUTPUT PREDICTION");
console.log("═══════════════════════════════════════════\n");


// ──────────────────────────────────────────────────────────
//  QUESTION 1: Scope + Hoisting + Closure Combo
// ──────────────────────────────────────────────────────────
console.log("━━━ Question 1 ━━━");

var x = 10;

function foo() {
    console.log("  A:", x);   // YOUR PREDICTION: ???
    var x = 20;
    console.log("  B:", x);   // YOUR PREDICTION: ???
    
    function bar() {
        console.log("  C:", x);  // YOUR PREDICTION: ???
        var x = 30;
        console.log("  D:", x);  // YOUR PREDICTION: ???
    }
    bar();
    console.log("  E:", x);  // YOUR PREDICTION: ???
}
foo();
console.log("  F:", x);      // YOUR PREDICTION: ???

// ┌─────────────────────────────────────────────────────┐
// │ ANSWER: A: undefined, B: 20, C: undefined,         │
// │         D: 30, E: 20, F: 10                        │
// │                                                     │
// │ WHY:                                                │
// │ A: local var x is hoisted → undefined               │
// │ B: local var x assigned → 20                        │
// │ C: bar's local var x hoisted → undefined            │
// │ D: bar's local var x assigned → 30                  │
// │ E: foo's var x unchanged → 20                       │
// │ F: global x unchanged → 10                          │
// └─────────────────────────────────────────────────────┘


// ──────────────────────────────────────────────────────────
//  QUESTION 2: `this` + Arrow Function + Closure
// ──────────────────────────────────────────────────────────
console.log("\n━━━ Question 2 ━━━");

const obj = {
    name: "Alpha",
    
    method1: function() {
        console.log("  G:", this.name);   // YOUR PREDICTION: ???
        
        const inner = function() {
            console.log("  H:", this?.name);  // YOUR PREDICTION: ???
        };
        inner();
        
        const arrowInner = () => {
            console.log("  I:", this.name);  // YOUR PREDICTION: ???
        };
        arrowInner();
    },
    
    method2: () => {
        console.log("  J:", this?.name);  // YOUR PREDICTION: ???
    }
};

obj.method1();
obj.method2();

// ┌─────────────────────────────────────────────────────┐
// │ ANSWER: G: "Alpha", H: undefined, I: "Alpha",     │
// │         J: undefined                                │
// │                                                     │
// │ WHY:                                                │
// │ G: method1 called on obj → this = obj               │
// │ H: inner is regular function, not a method call     │
// │    → this = global (name is undefined)              │
// │ I: arrow inherits this from method1 → this = obj    │
// │ J: method2 is arrow, inherits from MODULE scope     │
// │    → this = module.exports = {} → no name           │
// └─────────────────────────────────────────────────────┘


// ──────────────────────────────────────────────────────────
//  QUESTION 3: Closure + setTimeout + let vs var
// ──────────────────────────────────────────────────────────
console.log("\n━━━ Question 3 (async — check output at bottom!) ━━━");

function q3() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log("  K (let):", i), 500);
    }
    
    for (var j = 0; j < 3; j++) {
        setTimeout(() => console.log("  L (var):", j), 600);
    }
    
    // Fix the var version using closure
    for (var k = 0; k < 3; k++) {
        ((captured) => {
            setTimeout(() => console.log("  M (fixed):", captured), 700);
        })(k);
    }
}
q3();

// ┌─────────────────────────────────────────────────────┐
// │ ANSWER:                                             │
// │ K: 0, 1, 2 (let creates new binding per iteration)  │
// │ L: 3, 3, 3 (var shared, loop done before timeout)   │
// │ M: 0, 1, 2 (IIFE captures value at each iteration)  │
// └─────────────────────────────────────────────────────┘


// ──────────────────────────────────────────────────────────
//  QUESTION 4: call/apply/bind
// ──────────────────────────────────────────────────────────
console.log("\n━━━ Question 4 ━━━");

const person = {
    name: "Saroj",
    greet(greeting, end) {
        return `${greeting} ${this.name}${end}`;
    }
};

const other = { name: "Priya" };

console.log("  N:", person.greet("Hi", "!"));                     // YOUR PREDICTION: ???
console.log("  O:", person.greet.call(other, "Hello", "."));      // YOUR PREDICTION: ???
console.log("  P:", person.greet.apply(other, ["Hey", "?"]));     // YOUR PREDICTION: ???

const boundGreet = person.greet.bind(other, "Namaste");
console.log("  Q:", boundGreet("!"));                              // YOUR PREDICTION: ???
console.log("  R:", boundGreet.call(person, "~"));                 // YOUR PREDICTION: ???

// ┌─────────────────────────────────────────────────────┐
// │ ANSWER: N: "Hi Saroj!", O: "Hello Priya.",         │
// │         P: "Hey Priya?", Q: "Namaste Priya!",     │
// │         R: "Namaste Priya~"                         │
// │                                                     │
// │ WHY:                                                │
// │ N: this = person (normal method call)               │
// │ O: this = other (call overrides)                    │
// │ P: this = other (apply overrides)                   │
// │ Q: this permanently bound to other + "Namaste" pre- │
// │    filled, "!" is the second arg                    │
// │ R: bind CANNOT be overridden by call! Still Priya!  │
// │    "~" replaces the end parameter                   │
// └─────────────────────────────────────────────────────┘


// ──────────────────────────────────────────────────────────
//  QUESTION 5: The Ultimate Combo
// ──────────────────────────────────────────────────────────
console.log("\n━━━ Question 5 ━━━");

function createModule(name) {
    let instanceCount = 0;
    
    return {
        name: name,
        
        create() {
            instanceCount++;
            const id = instanceCount;
            
            return {
                getId: () => `${name}-${id}`,
                getTotal: () => instanceCount
            };
        },
        
        getCount() {
            return instanceCount;
        }
    };
}

const mod = createModule("Widget");
const w1 = mod.create();
const w2 = mod.create();
const w3 = mod.create();

console.log("  S:", w1.getId());      // YOUR PREDICTION: ???
console.log("  T:", w2.getId());      // YOUR PREDICTION: ???
console.log("  U:", w1.getTotal());   // YOUR PREDICTION: ???
console.log("  V:", w3.getTotal());   // YOUR PREDICTION: ???
console.log("  W:", mod.getCount());  // YOUR PREDICTION: ???

// ┌─────────────────────────────────────────────────────┐
// │ ANSWER: S: "Widget-1", T: "Widget-2",             │
// │         U: 3, V: 3, W: 3                           │
// │                                                     │
// │ WHY:                                                │
// │ S: w1 was created when instanceCount was 1          │
// │    id is captured as 1 (closure over local id)      │
// │ T: w2 was created when instanceCount was 2          │
// │ U: getTotal references instanceCount (shared!)      │
// │    By now, instanceCount = 3                        │
// │ V: Same — instanceCount is 3 for all                │
// │ W: getCount also references same instanceCount = 3  │
// │                                                     │
// │ KEY INSIGHT: `id` is captured per-call (local var)  │
// │ but `instanceCount` is SHARED (closure reference)   │
// └─────────────────────────────────────────────────────┘


// ════════════════════════════════════════════════════════════
//  SECTION 2: CLOSURE CODING EXERCISES (3 Exercises)
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  SECTION 2: CLOSURE CODING EXERCISES");
console.log("═══════════════════════════════════════════\n");


// ──────────────────────────────────────────────────────────
//  EXERCISE 1: Build a Rate Limiter
//  A function that only allows execution N times per period
// ──────────────────────────────────────────────────────────
console.log("━━━ Exercise 1: Rate Limiter ━━━\n");

// YOUR TASK: Understand how this uses closures
function createRateLimiter(maxCalls, periodMs) {
    let callCount = 0;          // Enclosed: tracks calls in current period
    let periodStart = Date.now(); // Enclosed: when current period started
    
    return function(action) {
        const now = Date.now();
        
        // Reset counter if period has elapsed
        if (now - periodStart >= periodMs) {
            callCount = 0;
            periodStart = now;
        }
        
        if (callCount < maxCalls) {
            callCount++;
            console.log(`  ✅ Call ${callCount}/${maxCalls}: ${action}`);
            return true;
        } else {
            console.log(`  ❌ Rate limited! Max ${maxCalls} calls per ${periodMs}ms`);
            return false;
        }
    };
}

const limiter = createRateLimiter(3, 1000);  // 3 calls per second
limiter("API call 1");  // ✅
limiter("API call 2");  // ✅
limiter("API call 3");  // ✅
limiter("API call 4");  // ❌ Rate limited!
limiter("API call 5");  // ❌ Rate limited!

// CLOSURE ANALYSIS:
// - callCount is private, can't be tampered with from outside
// - periodStart is private, tracks timing internally
// - Each limiter instance has its own independent state


// ──────────────────────────────────────────────────────────
//  EXERCISE 2: Build a Debounce Function
//  Delays execution until user STOPS calling for N ms
//  (Used in search bars, resize handlers, etc.)
// ──────────────────────────────────────────────────────────
console.log("\n━━━ Exercise 2: Debounce ━━━\n");

function debounce(fn, delay) {
    let timeoutId = null;  // Enclosed: stores the timer reference
    
    return function(...args) {
        // Clear any existing timer
        if (timeoutId) {
            clearTimeout(timeoutId);
            console.log("  ⏳ Reset timer (user still typing...)");
        }
        
        // Set a new timer
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
            timeoutId = null;
        }, delay);
    };
}

// Simulate a search input
const search = debounce(function(query) {
    console.log(`  🔍 Searching for: "${query}"`);
}, 800);

console.log("  Simulating rapid typing:");
search("h");          // Reset
search("he");         // Reset
search("hel");        // Reset
search("hell");       // Reset
search("hello");      // This one will actually execute after 800ms!

// CLOSURE ANALYSIS:
// - timeoutId is enclosed, persists between calls
// - Each call clears previous timer and sets new one
// - Only the LAST call in a burst actually executes


// ──────────────────────────────────────────────────────────
//  EXERCISE 3: Build a Throttle Function
//  Ensures function runs AT MOST once every N ms
//  (Used in scroll handlers, game loops, etc.)
// ──────────────────────────────────────────────────────────
console.log("\n━━━ Exercise 3: Throttle ━━━\n");

function throttle(fn, limit) {
    let lastCallTime = 0;       // Enclosed: timestamp of last execution
    let lastResult = undefined;  // Enclosed: cached result
    
    return function(...args) {
        const now = Date.now();
        
        if (now - lastCallTime >= limit) {
            lastCallTime = now;
            lastResult = fn.apply(this, args);
            console.log(`  ✅ Executed (${limit}ms since last call)`);
        } else {
            const waitTime = limit - (now - lastCallTime);
            console.log(`  ⏳ Throttled (wait ${waitTime}ms)`);
        }
        
        return lastResult;
    };
}

const handleScroll = throttle(function(position) {
    console.log(`  📜 Scroll position: ${position}px`);
}, 200);

// Simulate rapid scroll events
console.log("  Simulating rapid scroll events:");
handleScroll(100);   // ✅ Executes
handleScroll(200);   // ⏳ Throttled
handleScroll(300);   // ⏳ Throttled (within 200ms)

// After 200ms, next call would work
// CLOSURE ANALYSIS:
// - lastCallTime persists between calls, tracks timing
// - lastResult caches the last successful return value
// - Each throttle instance is independent


// ════════════════════════════════════════════════════════════
//  SECTION 3: INTERVIEW RAPID FIRE — Answer These!
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  SECTION 3: INTERVIEW RAPID FIRE");
console.log("  Practice answering these OUT LOUD!");
console.log("═══════════════════════════════════════════");

console.log(`
╔══════════════════════════════════════════════════════════╗
║  Answer each question OUT LOUD before reading the       ║
║  answer. This builds interview communication skills!    ║
╚══════════════════════════════════════════════════════════╝

Q1: What is the difference between var, let, and const?
────────────────────────────────────────────────────────
✅ "var is function-scoped and hoisted with undefined.
    let and const are block-scoped and have a Temporal 
    Dead Zone. const cannot be reassigned but objects 
    and arrays declared with const can be mutated."

Q2: What is a closure? Give an example.
────────────────────────────────────────────────────────
✅ "A closure is when a function remembers and accesses 
    variables from its outer scope even after the outer 
    function has finished executing. For example, a counter
    function that returns increment/decrement methods — 
    those methods close over the count variable."

Q3: Explain the 'this' keyword in JavaScript.
────────────────────────────────────────────────────────
✅ "The value of 'this' depends on HOW the function is 
    called, not where it's defined. In a method call, 
    this is the calling object. In a regular function, 
    this is global or undefined in strict mode. Arrow 
    functions inherit this from their enclosing scope.
    With call/apply/bind, you can explicitly set this."

Q4: What is the event loop?
────────────────────────────────────────────────────────
✅ "JavaScript is single-threaded. The event loop is the 
    mechanism that handles async operations. Synchronous 
    code runs on the call stack. Async callbacks go to 
    the task queue. The event loop checks: if the call 
    stack is empty, it takes the first task from the 
    queue and pushes it onto the stack. Microtasks like 
    Promises have priority over macrotasks like setTimeout."

Q5: Explain call, apply, and bind.
────────────────────────────────────────────────────────
✅ "All three set the 'this' value explicitly.
    call() invokes immediately with comma-separated args.
    apply() invokes immediately with an array of args.
    bind() returns a new function with this permanently 
    bound — it doesn't invoke immediately. Bind is 
    commonly used for event handlers and callbacks."

Q6: Why does var in a for loop with setTimeout print 
    the same value?
────────────────────────────────────────────────────────
✅ "Because var is function-scoped — there's only ONE 
    variable shared across all iterations. By the time 
    setTimeout callbacks run, the loop has completed and
    the variable holds the final value. Using let fixes 
    this because let creates a new binding per iteration.
    Alternatively, an IIFE can capture each value."

Q7: What is the Temporal Dead Zone (TDZ)?
────────────────────────────────────────────────────────
✅ "The TDZ is the period between entering a scope and 
    the point where a let or const variable is declared.
    Accessing the variable during TDZ throws a 
    ReferenceError. This prevents using variables before 
    they're initialized, unlike var which returns 
    undefined."

Q8: How would you implement debounce?
────────────────────────────────────────────────────────
✅ "Use a closure that stores a timer ID. Each call 
    clears the previous timer and sets a new one. The 
    function only executes when the user stops calling 
    for the specified delay period. This is useful for 
    search inputs and resize handlers."
`);


// ════════════════════════════════════════════════════════════
//  🏆 DAY 3 SCORECARD
// ════════════════════════════════════════════════════════════

console.log("═══════════════════════════════════════════");
console.log("  🏆 DAY 3 COMPLETION SCORECARD");
console.log("═══════════════════════════════════════════");

console.log(`
Check off what you've completed:

[ ] File 01: var vs let vs const
    [ ] Read all concepts (scope, hoisting, TDZ)
    [ ] Predicted ALL 10 exercises before running
    [ ] Got 8+/10 predictions correct

[ ] File 02: Closures
    [ ] Can explain what a closure is in one sentence
    [ ] Built a counter with closures
    [ ] Understand var vs let in loops
    [ ] Understand memoization pattern
    [ ] Built once() function

[ ] File 03: this keyword
    [ ] Know all 4 rules (global, method, arrow, new)
    [ ] Predicted ALL 10 exercises before running
    [ ] Got 7+/10 predictions correct
    [ ] Understand method extraction gotcha

[ ] File 04: call, apply, bind
    [ ] Know the differences (comma/array/returns new)
    [ ] Implemented your own bind
    [ ] Implemented your own call and apply
    [ ] Understand partial application

[ ] File 05: Practice Challenges (this file!)
    [ ] Got 4+/5 output predictions correct
    [ ] Understand debounce implementation
    [ ] Understand throttle implementation
    [ ] Can answer all 8 interview questions out loud

SCORING:
  0-40% correct predictions → Re-study the concepts
  40-70% → Good start, review mistakes
  70-90% → Solid understanding!
  90%+   → You're interview-ready on these topics! 🎉

NEXT: Day 4 — JavaScript Advanced + DSA Warm-up
  → Prototypes, Promises, async/await, Event Loop
  → First DSA array problems!
`);
