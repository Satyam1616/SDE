// ============================================================
//  DAY 3 — PART 1: var vs let vs const
//  Topics: Scope, Hoisting, Temporal Dead Zone (TDZ)
// ============================================================
// Run this file: node 01_var_let_const.js
// TIP: Before running, PREDICT the output of each exercise!
// ============================================================


// ────────────────────────────────────────────────────────────
//  CONCEPT 1: SCOPE — Where can a variable be accessed?
// ────────────────────────────────────────────────────────────

// var  → FUNCTION scoped (visible throughout the entire function)
// let  → BLOCK scoped (visible only inside { })
// const → BLOCK scoped (visible only inside { }, cannot be reassigned)

console.log("═══════════════════════════════════════════");
console.log("  CONCEPT 1: SCOPE DIFFERENCES");
console.log("═══════════════════════════════════════════\n");

// --- Example: var is function-scoped ---
function varScope() {
    if (true) {
        var x = 10;  // var "leaks" out of the if-block
    }
    console.log("var x outside if-block:", x);  // ✅ Works! x is 10
}
varScope();

// --- Example: let is block-scoped ---
function letScope() {
    if (true) {
        let y = 20;  // let stays inside the if-block
    }
    // console.log("let y outside if-block:", y); 
    // ❌ Uncommenting above throws: ReferenceError: y is not defined
    console.log("let y outside if-block: ReferenceError! (y not accessible)");
}
letScope();

// --- Example: const is block-scoped + immutable binding ---
function constScope() {
    const z = 30;
    // z = 40;  // ❌ TypeError: Assignment to constant variable
    
    // BUT: const objects/arrays CAN be mutated!
    const arr = [1, 2, 3];
    arr.push(4);           // ✅ This works! We're not reassigning arr
    console.log("const arr after push:", arr);  // [1, 2, 3, 4]
    
    const obj = { name: "Saroj" };
    obj.age = 22;          // ✅ This works! We're adding a property, not reassigning obj
    console.log("const obj after adding property:", obj);  // { name: "Saroj", age: 22 }
}
constScope();


// ────────────────────────────────────────────────────────────
//  CONCEPT 2: HOISTING — Variables "move" to the top
// ────────────────────────────────────────────────────────────

// var → Hoisted AND initialized with `undefined`
// let → Hoisted but NOT initialized (Temporal Dead Zone)
// const → Hoisted but NOT initialized (Temporal Dead Zone)

console.log("\n═══════════════════════════════════════════");
console.log("  CONCEPT 2: HOISTING");
console.log("═══════════════════════════════════════════\n");

// --- var hoisting ---
console.log("a before declaration:", a);  // undefined (hoisted, initialized to undefined)
var a = 5;
console.log("a after declaration:", a);   // 5

// --- What JavaScript ACTUALLY does with var ---
// It transforms the above code into:
//   var a;              ← declaration hoisted to top
//   console.log(a);     ← undefined at this point
//   a = 5;              ← assignment stays in place

// --- let hoisting (TDZ) ---
// console.log("b before declaration:", b);  // ❌ ReferenceError!
// let b = 10;
console.log("let b before declaration: ReferenceError! (TDZ)");

// --- Function hoisting ---
greet();  // ✅ Works! Function declarations are fully hoisted
function greet() {
    console.log("Function declarations are hoisted completely!");
}

// --- Function expression hoisting ---
// sayHi();  // ❌ TypeError: sayHi is not a function (var sayHi is undefined)
// var sayHi = function() { console.log("Hi!"); };
console.log("Function expressions with var: TypeError (hoisted as undefined)");


// ────────────────────────────────────────────────────────────
//  CONCEPT 3: TEMPORAL DEAD ZONE (TDZ)
// ────────────────────────────────────────────────────────────

console.log("\n═══════════════════════════════════════════");
console.log("  CONCEPT 3: TEMPORAL DEAD ZONE");
console.log("═══════════════════════════════════════════\n");

// The TDZ is the period between entering a scope and the 
// variable's declaration being processed.

// Visual representation:
// {
//     // ─── TDZ for `myLet` starts here ───
//     // Any access to myLet here → ReferenceError
//     console.log(myLet);  // ❌ ReferenceError
//     // ─── TDZ for `myLet` ends here ───
//     let myLet = 42;      // ✅ Now accessible
//     console.log(myLet);  // ✅ 42
// }

console.log("TDZ = time between entering scope and declaration being reached");
console.log("Accessing let/const in TDZ → ReferenceError\n");


// ════════════════════════════════════════════════════════════
//  🧠 PREDICTION EXERCISES — Predict BEFORE running!
// ════════════════════════════════════════════════════════════

console.log("═══════════════════════════════════════════");
console.log("  🧠 PREDICTION EXERCISES");
console.log("═══════════════════════════════════════════\n");


// ─── Exercise 1: Basic var hoisting ───
console.log("--- Exercise 1 ---");
var ex1 = 1;
function exercise1() {
    console.log("ex1 inside function:", ex1);  // Predict: ???
    var ex1 = 2;
    console.log("ex1 after reassign:", ex1);   // Predict: ???
}
exercise1();
// ANSWER: undefined, then 2
// WHY: The local `var ex1` is hoisted inside the function, 
// shadowing the outer ex1. It's initialized to undefined.


// ─── Exercise 2: let in a for loop ───
console.log("\n--- Exercise 2 ---");
for (var i = 0; i < 3; i++) {
    // var i is function/global scoped
}
console.log("var i after loop:", i);  // Predict: ???

// for (let j = 0; j < 3; j++) {}
// console.log("let j after loop:", j);  // Predict: ???
console.log("let j after loop: ReferenceError! (block scoped)");
// ANSWER: var i = 3, let j = ReferenceError


// ─── Exercise 3: var in setTimeout (CLASSIC interview Q!) ───
console.log("\n--- Exercise 3 ---");
console.log("var in setTimeout (outputs after all sync code):");
for (var k = 0; k < 3; k++) {
    setTimeout(function() {
        console.log("  var k:", k);  // Predict: ???
    }, 100);
}
// ANSWER: 3, 3, 3 — because var k is shared, and by the time 
// setTimeout runs, the loop is done and k = 3


// ─── Exercise 4: let in setTimeout (CLASSIC interview Q!) ───
console.log("\n--- Exercise 4 ---");
console.log("let in setTimeout (outputs after all sync code):");
for (let m = 0; m < 3; m++) {
    setTimeout(function() {
        console.log("  let m:", m);  // Predict: ???
    }, 200);
}
// ANSWER: 0, 1, 2 — because let creates a NEW binding for 
// each iteration of the loop


// ─── Exercise 5: const reassignment ───
console.log("\n--- Exercise 5 ---");
const obj5 = { count: 0 };
obj5.count = 5;
console.log("obj5.count after mutation:", obj5.count);  // Predict: ???
// obj5 = { count: 10 };  // What would this do? Predict: ???
console.log("obj5 = newObj: TypeError! (can't reassign const)");
// ANSWER: 5, then TypeError
// WHY: const prevents reassignment of the BINDING, not mutation of the VALUE


// ─── Exercise 6: Multiple var declarations ───
console.log("\n--- Exercise 6 ---");
var ex6 = "first";
var ex6 = "second";  // No error with var!
console.log("var redeclared:", ex6);  // Predict: ???
// let ex6b = "first";
// let ex6b = "second";  // SyntaxError: already declared
console.log("let redeclared: SyntaxError!");
// ANSWER: "second" for var, SyntaxError for let


// ─── Exercise 7: Hoisting with function expressions ───
console.log("\n--- Exercise 7 ---");
// console.log(typeof funcDecl);    // Predict: ???
// console.log(typeof funcExpr);    // Predict: ???
// function funcDecl() {}
// var funcExpr = function() {};
console.log("typeof funcDecl (before):", typeof function(){});  // "function"
console.log("typeof funcExpr (before): undefined (var hoisted as undefined)");
// ANSWER: "function", "undefined"


// ─── Exercise 8: Block scoping with let ───
console.log("\n--- Exercise 8 ---");
let ex8 = "outer";
{
    let ex8 = "inner";  // This is a DIFFERENT variable
    console.log("inside block:", ex8);  // Predict: ???
}
console.log("outside block:", ex8);  // Predict: ???
// ANSWER: "inner", "outer" — block creates a new scope for let


// ─── Exercise 9: var has NO block scope ───
console.log("\n--- Exercise 9 ---");
var ex9 = "outer";
{
    var ex9 = "inner";  // This OVERWRITES the outer var!
    console.log("inside block:", ex9);  // Predict: ???
}
console.log("outside block:", ex9);  // Predict: ???
// ANSWER: "inner", "inner" — var ignores block scope


// ─── Exercise 10: TDZ with typeof ───
console.log("\n--- Exercise 10 ---");
console.log("typeof undeclaredVar:", typeof undeclaredVar);  // Predict: ???
// console.log("typeof letInTDZ:", typeof letInTDZ);  // Predict: ???
// let letInTDZ = "hello";
console.log("typeof undeclaredVar: 'undefined' (typeof is safe for undeclared)");
console.log("typeof letInTDZ: ReferenceError! (TDZ even affects typeof)");
// ANSWER: "undefined" (typeof is safe), ReferenceError (TDZ)


// ════════════════════════════════════════════════════════════
//  📝 SUMMARY TABLE
// ════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════");
console.log("  📝 SUMMARY TABLE");
console.log("═══════════════════════════════════════════\n");

console.log(`
┌──────────────┬──────────┬──────────┬──────────┐
│   Feature    │   var    │   let    │  const   │
├──────────────┼──────────┼──────────┼──────────┤
│ Scope        │ Function │ Block    │ Block    │
│ Hoisting     │ Yes      │ Yes(TDZ) │ Yes(TDZ) │
│ Init value   │ undefined│ None     │ None     │
│ Redeclare    │ ✅ Yes   │ ❌ No    │ ❌ No    │
│ Reassign     │ ✅ Yes   │ ✅ Yes   │ ❌ No    │
│ Mutate value │ ✅ Yes   │ ✅ Yes   │ ✅ Yes   │
└──────────────┴──────────┴──────────┴──────────┘

INTERVIEW TIP: 
- Always use 'const' by default
- Use 'let' when you need to reassign
- Never use 'var' in modern code (but KNOW how it works!)
`);
