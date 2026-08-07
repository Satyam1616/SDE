# 🤝 Promises — Mastering Async JavaScript

> **Time: 1 hour** | The foundation of modern async code

---

## What is a Promise?

A Promise is an object that represents the **eventual completion (or failure)** of an asynchronous operation. Think of it as an **IOU** — "I promise to give you a result later."

### The 3 States

```
┌──────────┐         ┌──────────────┐
│ PENDING  │────────→│  FULFILLED   │  (.then() runs)
│ (waiting)│         │  (resolved)  │
└──────────┘         └──────────────┘
      │
      │              ┌──────────────┐
      └─────────────→│  REJECTED    │  (.catch() runs)
                     │  (failed)    │
                     └──────────────┘

⚠️ Once settled (fulfilled/rejected), a promise CANNOT change state.
```

---

## 1. Creating a Promise

```js
const myPromise = new Promise((resolve, reject) => {
    // Async work here...
    const success = true;
    
    if (success) {
        resolve("Data loaded!");    // → FULFILLED
    } else {
        reject("Something broke!"); // → REJECTED
    }
});
```

### Real-World Example: Simulating API Call

```js
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, name: "Saroj", role: "SDE" });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}
```

---

## 2. Consuming Promises: `.then()`, `.catch()`, `.finally()`

```js
fetchUser(1)
    .then(user => {
        console.log("Got user:", user);  
        // { id: 1, name: "Saroj", role: "SDE" }
    })
    .catch(error => {
        console.log("Error:", error.message);
    })
    .finally(() => {
        console.log("Done! (runs regardless of success/failure)");
    });
```

### Key Rules

| Method | When it runs | Receives |
|--------|-------------|----------|
| `.then(fn)` | On **resolve** | The resolved value |
| `.catch(fn)` | On **reject** or any thrown error | The error |
| `.finally(fn)` | **Always** (after then/catch) | Nothing |

---

## 3. Promise Chaining

`.then()` **returns a new Promise**, so you can chain them:

```js
fetchUser(1)
    .then(user => {
        console.log("Step 1:", user.name);
        return user.name.toUpperCase();        // Returns a value → wraps in Promise
    })
    .then(upperName => {
        console.log("Step 2:", upperName);      // "SAROJ"
        return { formatted: upperName };
    })
    .then(obj => {
        console.log("Step 3:", obj.formatted);  // "SAROJ"
    })
    .catch(err => {
        // Catches ANY error from ANY step above
        console.log("Error in chain:", err.message);
    });
```

### The Chain Rule

```
.then() returns a value     → next .then() receives that value
.then() returns a Promise   → next .then() waits for it to resolve
.then() throws an error     → jumps to nearest .catch()
```

### Real-World Chain: API → Process → Save

```js
function fetchData(url)    { return new Promise(r => setTimeout(() => r({ data: [1,2,3] }), 500)); }
function processData(data) { return new Promise(r => setTimeout(() => r(data.map(x => x * 2)), 300)); }
function saveData(data)    { return new Promise(r => setTimeout(() => r("Saved!"), 200)); }

fetchData("/api")
    .then(response => processData(response.data))
    .then(processed => saveData(processed))
    .then(result => console.log(result))  // "Saved!"
    .catch(err => console.error("Pipeline failed:", err));
```

---

## 4. Error Handling Patterns

### Pattern 1: Single catch at the end (recommended)

```js
doStep1()
    .then(doStep2)
    .then(doStep3)
    .catch(handleAnyError);  // Catches errors from ALL steps
```

### Pattern 2: Individual catches (for recovery)

```js
doStep1()
    .catch(err => {
        console.log("Step 1 failed, using default");
        return defaultValue;  // Recovery! Chain continues
    })
    .then(doStep2)
    .then(doStep3);
```

### Pattern 3: Re-throwing errors

```js
fetchUser(1)
    .then(user => {
        if (!user.active) {
            throw new Error("User is inactive");  // Jumps to catch
        }
        return user;
    })
    .catch(err => {
        console.log("Handled:", err.message);
        throw err;  // Re-throw → next catch handles it
    });
```

---

## 5. Promise Static Methods (⚡ Interview Favorites!)

### `Promise.all()` — Wait for ALL (fail-fast)

```js
const p1 = fetchUser(1);       // 1 second
const p2 = fetchUser(2);       // 1 second  
const p3 = fetchUser(3);       // 1 second

// All run in PARALLEL, resolves when ALL complete
Promise.all([p1, p2, p3])
    .then(([user1, user2, user3]) => {
        console.log("All users loaded!");  // ~1 second total (not 3!)
    })
    .catch(err => {
        // If ANY one fails, the entire Promise.all rejects
        console.log("One failed:", err.message);
    });
```

> **Use when:** You need ALL results and if one fails, everything fails.

### `Promise.allSettled()` — Wait for ALL (no fail-fast)

```js
Promise.allSettled([
    fetchUser(1),         // resolves
    fetchUser(-1),        // rejects
    fetchUser(3)          // resolves
]).then(results => {
    // ALWAYS resolves! Never rejects.
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log("✅", result.value);
        } else {
            console.log("❌", result.reason.message);
        }
    });
});
```

> **Use when:** You want results from all promises, even if some fail.

### `Promise.race()` — First to settle wins

```js
const fast = new Promise(r => setTimeout(() => r("Fast!"), 100));
const slow = new Promise(r => setTimeout(() => r("Slow!"), 2000));

Promise.race([fast, slow])
    .then(winner => console.log(winner));  // "Fast!" (after 100ms)
```

> **Use when:** Timeout patterns, fastest server response.

### `Promise.any()` — First to RESOLVE wins

```js
const fail = new Promise((_, rej) => setTimeout(() => rej("Fail"), 50));
const slow = new Promise(res => setTimeout(() => res("Slow!"), 2000));
const fast = new Promise(res => setTimeout(() => res("Fast!"), 100));

Promise.any([fail, fast, slow])
    .then(winner => console.log(winner));  // "Fast!" (ignores rejection)
```

> **Use when:** You want the first SUCCESS, ignoring failures.

### Comparison Table

| Method | Resolves when | Rejects when | Returns |
|--------|--------------|-------------|---------|
| `Promise.all` | ALL resolve | ANY rejects | Array of values |
| `Promise.allSettled` | ALL settle | Never rejects | Array of `{status, value/reason}` |
| `Promise.race` | First settles | First settles (if reject) | Single value |
| `Promise.any` | First resolves | ALL reject | Single value |

---

## 🧠 Prediction Exercises

### Exercise 1: Promise Chain

```js
Promise.resolve(1)
    .then(x => x + 1)
    .then(x => { throw new Error("oops") })
    .then(x => x + 1)
    .catch(err => 10)
    .then(x => x + 1)
    .then(x => console.log(x));

// What prints? ???
```

<details>
<summary>Click for Answer</summary>

**11**

- `.then(1+1)` → 2
- `.then(throw)` → jumps to catch (skips next .then)
- `.catch(10)` → returns 10 (recovery!)
- `.then(10+1)` → 11
- `.then(console.log)` → prints **11**

</details>

### Exercise 2: Promise.all vs race

```js
const a = new Promise(r => setTimeout(() => r("A"), 300));
const b = new Promise(r => setTimeout(() => r("B"), 100));
const c = new Promise(r => setTimeout(() => r("C"), 200));

Promise.all([a, b, c]).then(console.log);   // ???
Promise.race([a, b, c]).then(console.log);  // ???
```

<details>
<summary>Click for Answer</summary>

- `Promise.all` → **["A", "B", "C"]** (order matches input, not completion)
- `Promise.race` → **"B"** (fastest to settle)

</details>

### Exercise 3: Error propagation

```js
Promise.resolve("start")
    .then(val => {
        console.log(val);        // ???
        return val + "-step1";
    })
    .then(val => {
        throw new Error("boom");
        return val + "-step2";   // Does this run?
    })
    .then(val => {
        console.log(val);        // Does this run?
    })
    .catch(err => {
        console.log(err.message); // ???
        return "recovered";
    })
    .then(val => {
        console.log(val);        // ???
    });
```

<details>
<summary>Click for Answer</summary>

```
"start"
"boom"
"recovered"
```

- Step 1: logs "start", returns "start-step1"
- Step 2: throws error → skips to catch (return never runs)
- Step 3: skipped (error in chain)
- Catch: logs "boom", returns "recovered" (chain recovers!)
- Final then: logs "recovered"

</details>

---

## 📝 Interview Answer

> **Q: "What is a Promise? Explain its states."**
>
> "A Promise represents the eventual result of an asynchronous operation. It has three states: **pending** (initial), **fulfilled** (resolved with a value), and **rejected** (failed with a reason). Once settled, it cannot change state. We consume promises with `.then()` for success, `.catch()` for errors, and `.finally()` for cleanup. Promises can be chained because `.then()` returns a new promise. For concurrent operations, we use `Promise.all()` when all must succeed, `Promise.allSettled()` when we want all results regardless, `Promise.race()` for the fastest, and `Promise.any()` for the first success."
