# 🔄 The Event Loop — How JavaScript Actually Works

> **Time: 1 hour** | The most impressive concept to explain in an interview

---

## Why Does This Matter?

JavaScript is **single-threaded** — it can only do ONE thing at a time. Yet it handles timers, HTTP requests, user clicks, and animations all at once. How? **The Event Loop.**

Understanding the event loop separates a junior developer from someone who *truly* understands JavaScript.

---

## The Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     JAVASCRIPT ENGINE                        │
│                                                              │
│  ┌───────────────────┐     ┌──────────────────────────────┐ │
│  │    CALL STACK      │     │         HEAP                 │ │
│  │                    │     │   (Object storage)           │ │
│  │  ┌──────────────┐ │     │                              │ │
│  │  │  function C() │ │     │   { name: "Saroj" }         │ │
│  │  ├──────────────┤ │     │   [1, 2, 3]                  │ │
│  │  │  function B() │ │     │   function() {...}           │ │
│  │  ├──────────────┤ │     │                              │ │
│  │  │  function A() │ │     │                              │ │
│  │  ├──────────────┤ │     │                              │ │
│  │  │   main()      │ │     │                              │ │
│  │  └──────────────┘ │     └──────────────────────────────┘ │
│  └───────────────────┘                                       │
└──────────────────────────────────┬──────────────────────────┘
                                   │
                          ┌────────┴────────┐
                          │   EVENT LOOP     │
                          │  (the traffic    │
                          │   controller)    │
                          └───┬─────────┬───┘
                              │         │
              ┌───────────────┘         └───────────────┐
              ▼                                         ▼
┌──────────────────────────┐           ┌──────────────────────────┐
│   MICROTASK QUEUE         │           │   MACROTASK QUEUE         │
│   (Higher Priority)       │           │   (Lower Priority)        │
│                           │           │                           │
│   • Promise.then/catch    │           │   • setTimeout            │
│   • queueMicrotask()      │           │   • setInterval           │
│   • MutationObserver      │           │   • I/O operations        │
│   • process.nextTick()    │           │   • UI rendering          │
│     (Node.js)             │           │   • requestAnimationFrame │
└──────────────────────────┘           └──────────────────────────┘

                    WEB APIs (handled by browser/Node.js, NOT by JS engine)
┌──────────────────────────────────────────────────────────────────────┐
│  setTimeout()  │  fetch()  │  DOM Events  │  FileSystem  │  etc.    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## The Event Loop Algorithm

The event loop follows this exact sequence **forever**:

```
1. Execute all SYNCHRONOUS code on the call stack
   ↓
2. Call stack empty?
   ├── NO  → keep executing
   └── YES → go to step 3
   ↓
3. Process ALL microtasks (drain the microtask queue)
   ├── Promise callbacks (.then, .catch, .finally)
   ├── queueMicrotask() callbacks
   └── If new microtasks were added during this step,
       process those too (until queue is empty)
   ↓
4. Process ONE macrotask (first in the queue)
   ├── setTimeout/setInterval callbacks
   ├── I/O callbacks
   └── etc.
   ↓
5. Go back to step 3 (check microtasks again!)
   ↓
   (Repeat forever)
```

### The Golden Rule

> **Microtasks ALWAYS run before the next macrotask.** After EVERY macrotask, ALL pending microtasks are drained.

---

## Step-by-Step Walkthrough

### Example: The Classic Interview Question

```js
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

**Let's trace through:**

| Step | Action | Call Stack | Microtask Q | Macrotask Q | Output |
|------|--------|-----------|-------------|-------------|--------|
| 1 | `console.log("1")` | `log("1")` | — | — | **1** |
| 2 | `setTimeout(cb, 0)` | `setTimeout` | — | `cb("2")` | 1 |
| 3 | `Promise.then(cb)` | `Promise` | `cb("3")` | `cb("2")` | 1 |
| 4 | `console.log("4")` | `log("4")` | `cb("3")` | `cb("2")` | 1, **4** |
| 5 | Stack empty → drain microtasks | `cb("3")` | — | `cb("2")` | 1, 4, **3** |
| 6 | Microtasks done → next macrotask | `cb("2")` | — | — | 1, 4, 3, **2** |

**Output: `1, 4, 3, 2`**

---

## Key Concept: setTimeout(fn, 0) is NOT instant

`setTimeout(fn, 0)` does NOT run immediately. It means:
- "Put this callback in the macrotask queue as soon as possible"
- But it still has to wait for:
  1. All synchronous code to finish
  2. All microtasks to be processed

```js
console.log("A");
setTimeout(() => console.log("B"), 0);     // macrotask
Promise.resolve().then(() => console.log("C")); // microtask
console.log("D");

// Output: A, D, C, B
// C (microtask) always before B (macrotask)
```

---

## 🧠 5 Output Prediction Exercises

### Exercise 1: Basic Event Loop

```js
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
    .then(() => console.log("promise 1"))
    .then(() => console.log("promise 2"));

console.log("end");
```

<details>
<summary>Click for Answer</summary>

```
start
end
promise 1
promise 2
timeout
```

1. Sync: "start", "end"
2. Microtasks: "promise 1", then "promise 2" (chained)
3. Macrotask: "timeout"

</details>

---

### Exercise 2: Nested Promises and Timeouts

```js
setTimeout(() => console.log("A"), 0);

Promise.resolve()
    .then(() => {
        console.log("B");
        setTimeout(() => console.log("C"), 0);
    })
    .then(() => console.log("D"));

Promise.resolve().then(() => console.log("E"));

console.log("F");
```

<details>
<summary>Click for Answer</summary>

```
F
B
E
D
A
C
```

1. Sync: **F**
2. Microtasks (in order of creation):
   - First promise chain: **B** → schedules setTimeout("C")
   - Second promise: **E**
   - First chain's `.then()`: **D**
3. Macrotasks (in order):
   - Original setTimeout: **A**
   - Newly scheduled setTimeout: **C**

</details>

---

### Exercise 3: async/await + Event Loop

```js
async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");
```

<details>
<summary>Click for Answer</summary>

```
C
A
D
B
```

1. **C** — sync
2. foo() starts: **A** — sync (before await)
3. `await` pauses foo, schedules continuation as microtask
4. **D** — sync (main continues)
5. Stack empty → microtasks: **B** — foo resumes

Remember: everything before the first `await` is synchronous!

</details>

---

### Exercise 4: The Ultimate Combo

```js
console.log("1");

setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => console.log("3"));
}, 0);

Promise.resolve().then(() => {
    console.log("4");
    setTimeout(() => console.log("5"), 0);
});

setTimeout(() => console.log("6"), 0);

Promise.resolve().then(() => console.log("7"));

console.log("8");
```

<details>
<summary>Click for Answer</summary>

```
1
8
4
7
2
3
6
5
```

**Phase 1 — Sync:** 1, 8

**Phase 2 — Microtasks:** 4 (schedules timeout "5"), 7

**Phase 3 — Macrotask 1:** 2 (schedules promise "3")
→ Check microtasks: 3

**Phase 4 — Macrotask 2:** 6

**Phase 5 — Macrotask 3:** 5

Key insight: After EACH macrotask, all microtasks are drained!

</details>

---

### Exercise 5: process.nextTick vs Promise (Node.js)

```js
setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));

process.nextTick(() => console.log("C"));

console.log("D");
```

<details>
<summary>Click for Answer</summary>

```
D
C
B
A
```

In Node.js, the priority order is:
1. Sync code → **D**
2. `process.nextTick` (highest microtask priority) → **C**
3. Promise microtask → **B**
4. setTimeout macrotask → **A**

`process.nextTick` > Promise > setTimeout

</details>

---

## Visual Summary: Priority Hierarchy

```
HIGHEST PRIORITY
     │
     │   1. Synchronous Code (Call Stack)
     │      ↓ (when stack is empty)
     │   2. process.nextTick()     ← Node.js only
     │      ↓
     │   3. Microtasks (Promises, queueMicrotask)
     │      ↓ (ALL microtasks drained)
     │   4. Macrotasks (setTimeout, setInterval, I/O)
     │      ↓ (ONE macrotask, then back to microtasks)
     │   5. Check phase (setImmediate)  ← Node.js only
     │
LOWEST PRIORITY
```

---

## 📝 Interview Answer

> **Q: "Explain the JavaScript Event Loop."**
>
> "JavaScript is single-threaded, so it uses an event loop to handle asynchronous operations. The engine has a call stack for synchronous code. When async operations like `setTimeout` or `fetch` are encountered, they're offloaded to Web APIs. When complete, their callbacks enter task queues. There are two types of queues: the **microtask queue** (for Promises, `queueMicrotask`) and the **macrotask queue** (for `setTimeout`, I/O). The event loop continuously checks: once the call stack is empty, it drains ALL microtasks first, then picks ONE macrotask, executes it, checks microtasks again, and repeats. This is why Promise callbacks always run before `setTimeout(fn, 0)` callbacks."

---

## 🎯 Draw This Diagram From Memory

As your Day 4 review exercise, draw this on paper without looking:

1. The Call Stack
2. Web APIs box  
3. Microtask Queue (what goes here?)
4. Macrotask Queue (what goes here?)
5. The Event Loop arrow (connecting them)
6. The processing order (1 → 2 → 3 → 4 → back to 2)

If you can draw and explain this from memory, you'll **impress any interviewer**. 🔥
