# 📋 Day 4 — Review & Checklist

> **Time: 30 min** | Consolidate everything from today

---

## 🗂️ Today's Study Plan

| Time | Topic | File | Status |
|------|-------|------|--------|
| 1h | Prototypes & Prototype Chain | `01_Prototypes.md` | ☐ |
| 1h | Promises (States, Chaining, Static Methods) | `02_Promises.md` | ☐ |
| 1h | async/await (Sequential vs Parallel) | `03_Async_Await.md` | ☐ |
| 1h | Event Loop (Microtasks vs Macrotasks) | `04_Event_Loop.md` | ☐ |
| 1h | DSA: 3 Array Problems | `05_DSA_Arrays.md` | ☐ |
| 30m | Review (this file!) | `06_Day4_Review.md` | ☐ |

---

## 🎯 End-of-Day Self-Test

Answer these OUT LOUD without looking at notes. If you can't, re-read that section.

### Prototypes

- [ ] What is the prototype chain? Draw it for `const arr = [1,2,3]`
- [ ] What is the difference between `__proto__` and `.prototype`?
- [ ] Are ES6 classes different from constructor functions? (No — syntactic sugar!)
- [ ] What does `Object.create(null)` give you?

### Promises

- [ ] What are the 3 states of a Promise?
- [ ] What happens if `.then()` returns a value? (Wraps in Promise)
- [ ] What happens if `.then()` throws? (Jumps to nearest `.catch()`)
- [ ] Difference between `Promise.all` vs `Promise.allSettled` vs `Promise.race` vs `Promise.any`?

### async/await

- [ ] What does `async` do to a function? (Makes it return a Promise)
- [ ] What does `await` do? (Pauses until Promise settles)
- [ ] When should you use sequential `await` vs `Promise.all`?
- [ ] Why doesn't `forEach` work with `await`? What's the fix?

### Event Loop

- [ ] Draw the event loop architecture from memory (call stack, queues, Web APIs)
- [ ] What runs first: `Promise.then()` or `setTimeout(fn, 0)`? (Promise — microtask!)
- [ ] Solve this: What's the output?
  ```js
  console.log("A");
  setTimeout(() => console.log("B"), 0);
  Promise.resolve().then(() => console.log("C"));
  console.log("D");
  ```
  Answer: `A, D, C, B`

### DSA

- [ ] Solve Contains Duplicate without looking (Hash Set → O(n))
- [ ] Solve Buy/Sell Stock without looking (Track min → O(n))
- [ ] Explain Kadane's Algorithm in one sentence:
  > "At each element, decide: extend the current subarray or start a new one"

---

## 📝 Quick Reference Cards

### Prototypes
```
instance.__proto__ === Constructor.prototype
Constructor.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

class = syntactic sugar over constructor functions
```

### Promises
```
.then(value)  → on resolve
.catch(error) → on reject
.finally()    → always runs

Promise.all       → all must succeed, fail-fast
Promise.allSettled → all results, never rejects
Promise.race      → first to settle (resolve OR reject)
Promise.any       → first to resolve (ignores rejects)
```

### async/await
```
async function → always returns Promise
await          → pauses until Promise resolves
try/catch      → handles rejected Promises

Sequential: const a = await f1(); const b = await f2();
Parallel:   const [a,b] = await Promise.all([f1(), f2()]);
```

### Event Loop Priority
```
1. Synchronous code (call stack)
2. process.nextTick() (Node.js only)
3. Microtasks (Promise.then, queueMicrotask)
4. Macrotasks (setTimeout, setInterval, I/O)
```

### DSA Patterns Learned Today
```
Hash Set/Map    → O(1) lookup, duplicates → Contains Duplicate
Track Min/Max   → running state while scanning → Buy/Sell Stock
Kadane's Algo   → extend or restart subarray → Maximum Subarray
```

---

## 🔮 Day 5 Preview: Arrays Deep + JS Practical

| Time | Topic | Details |
|------|-------|---------|
| 1.5h | DSA: Arrays | Product of Array Except Self, Move Zeroes, Sort Colors, Merge Intervals |
| 1h | Kadane's + Prefix Sum | Deep dive into these patterns |
| 1h | JS: Debounce & Throttle | Implement both from scratch |
| 1h | JS: ES6+ Features | Destructuring, spread/rest, optional chaining, Map/Set |
| 30m | DSA Review | Re-solve Two Sum and Maximum Subarray without looking |
| 30m | Mistake Notebook | Log problems where you got stuck |

---

> **Day 4 complete? Great!** You now understand JavaScript's async model deeply — Prototypes, Promises, async/await, and the Event Loop. Combined with closures and `this` from Day 3, you're building a **seriously strong JS foundation.** 💪
