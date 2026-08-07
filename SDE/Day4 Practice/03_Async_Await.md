# ⚡ async/await — Promises Made Beautiful

> **Time: 1 hour** | Write async code that LOOKS synchronous

---

## What is async/await?

`async/await` is **syntactic sugar** over Promises. It makes asynchronous code look and behave like synchronous code — easier to read, easier to debug.

```js
// ❌ Promise chain (harder to read)
fetchUser(1)
    .then(user => fetchOrders(user.id))
    .then(orders => filterRecent(orders))
    .then(recent => console.log(recent))
    .catch(err => console.error(err));

// ✅ async/await (reads like normal code)
async function showRecentOrders() {
    try {
        const user = await fetchUser(1);
        const orders = await fetchOrders(user.id);
        const recent = filterRecent(orders);
        console.log(recent);
    } catch (err) {
        console.error(err);
    }
}
```

---

## 1. The `async` Keyword

Adding `async` before a function does **two things**:
1. Makes the function **always return a Promise**
2. Allows you to use `await` inside it

```js
async function greet() {
    return "Hello!";
}

// Equivalent to:
function greet() {
    return Promise.resolve("Hello!");
}

// Both work the same:
greet().then(msg => console.log(msg));  // "Hello!"
```

### async with different function types

```js
// Regular function
async function foo() { return 1; }

// Arrow function
const bar = async () => { return 2; };

// Method
const obj = {
    async getData() { return 3; }
};

// Class method
class API {
    async fetch() { return 4; }
}
```

---

## 2. The `await` Keyword

`await` **pauses** the async function until the Promise settles:

```js
async function demo() {
    console.log("Before");
    
    const result = await somePromise();  // PAUSES here
    // Code below runs ONLY after promise resolves
    
    console.log("After:", result);
}
```

### What `await` actually does

```
1. Encounters `await promise`
2. PAUSES this function (yields control back to event loop)
3. Other code can run while waiting
4. When promise resolves → resumes function with the value
5. If promise rejects → throws the error (caught by try/catch)
```

> ⚠️ **`await` can ONLY be used inside an `async` function** (or at the top level of a module).

---

## 3. Error Handling with try/catch

```js
// Pattern 1: try/catch (most common)
async function getUser() {
    try {
        const response = await fetch("/api/user");
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error.message);
        return null;  // Graceful fallback
    } finally {
        console.log("Fetch attempt complete");  // Always runs
    }
}
```

```js
// Pattern 2: .catch() on the await (inline)
async function getUser() {
    const user = await fetchUser(1).catch(err => null);
    // user is null if it failed, otherwise the data
    if (!user) {
        console.log("Using default user");
    }
}
```

```js
// Pattern 3: Wrapper function (clean for multiple awaits)
async function safeAsync(promise) {
    try {
        const data = await promise;
        return [data, null];
    } catch (error) {
        return [null, error];
    }
}

// Usage:
async function main() {
    const [user, err1] = await safeAsync(fetchUser(1));
    if (err1) return console.log("User fetch failed");
    
    const [orders, err2] = await safeAsync(fetchOrders(user.id));
    if (err2) return console.log("Orders fetch failed");
    
    console.log("Orders:", orders);
}
```

---

## 4. Sequential vs Parallel Execution ⚡

This is a **critical interview topic** and a common performance mistake.

### ❌ Sequential (SLOW) — One after another

```js
async function sequential() {
    const user = await fetchUser(1);       // waits 1s
    const posts = await fetchPosts(1);     // waits 1s AFTER user is done
    const comments = await fetchComments(1); // waits 1s AFTER posts is done
    // Total: ~3 seconds ❌
}
```

Each `await` blocks the next one. If the calls are **independent**, this wastes time!

### ✅ Parallel (FAST) — All at once

```js
async function parallel() {
    // Start ALL promises simultaneously
    const userPromise = fetchUser(1);
    const postsPromise = fetchPosts(1);
    const commentsPromise = fetchComments(1);
    
    // Wait for all to complete
    const [user, posts, comments] = await Promise.all([
        userPromise, postsPromise, commentsPromise
    ]);
    // Total: ~1 second ✅ (all run at the same time)
}
```

### When to use which?

| Scenario | Use | Why |
|----------|-----|-----|
| Step B needs result of Step A | **Sequential** | Dependency exists |
| A, B, C are independent | **Parallel** (`Promise.all`) | No dependency, faster |
| Some can fail, need all results | **Parallel** (`Promise.allSettled`) | Fault tolerant |

### Mixed: Some sequential, some parallel

```js
async function mixed() {
    // Step 1: Must get user first (dependency)
    const user = await fetchUser(1);
    
    // Step 2: Posts and comments can run in parallel (both need user.id)
    const [posts, comments] = await Promise.all([
        fetchPosts(user.id),
        fetchComments(user.id)
    ]);
    
    return { user, posts, comments };
}
```

---

## 5. Common Patterns & Pitfalls

### ❌ Pitfall: `await` inside forEach (doesn't work!)

```js
// ❌ BROKEN: forEach doesn't wait for async callbacks
const ids = [1, 2, 3];

ids.forEach(async (id) => {
    const user = await fetchUser(id);
    console.log(user);  // Order is unpredictable!
});
console.log("Done");  // Runs BEFORE any user is logged!
```

### ✅ Fix: Use `for...of` for sequential

```js
for (const id of ids) {
    const user = await fetchUser(id);
    console.log(user);  // Guaranteed order: 1, 2, 3
}
console.log("Done");  // Runs AFTER all users
```

### ✅ Fix: Use `Promise.all` + `map` for parallel

```js
const users = await Promise.all(
    ids.map(id => fetchUser(id))
);
console.log(users);  // All users at once
```

### Pattern: Retry with async/await

```js
async function fetchWithRetry(url, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            return await response.json();  // Success → return
        } catch (err) {
            console.log(`Attempt ${attempt} failed: ${err.message}`);
            if (attempt === maxRetries) throw err;  // Last attempt → give up
            await new Promise(r => setTimeout(r, 1000 * attempt));  // Wait before retry
        }
    }
}
```

### Pattern: Timeout with Promise.race

```js
async function fetchWithTimeout(url, timeoutMs = 5000) {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Request timed out")), timeoutMs)
    );
    
    return Promise.race([fetchPromise, timeoutPromise]);
}
```

---

## 6. async/await vs Promises — When to Use Which?

| Scenario | Recommended | Why |
|----------|------------|-----|
| Simple chain (1-2 steps) | `.then()` chain | Less boilerplate |
| Complex logic with branching | `async/await` | Easier to read |
| Error handling needed | `async/await` + try/catch | Cleaner than nested .catch |
| Parallel operations | `Promise.all` (inside async) | Best of both worlds |
| Top-level script | `await` (ES modules) or `.then()` | Depends on environment |

---

## 🧠 Prediction Exercises

### Exercise 1: Execution Order

```js
async function foo() {
    console.log("A");
    const result = await Promise.resolve("B");
    console.log(result);
    console.log("C");
}

console.log("D");
foo();
console.log("E");

// Output order? ???
```

<details>
<summary>Click for Answer</summary>

```
D
A
E
B
C
```

- `D` — synchronous, runs first
- `A` — foo starts synchronously until first await
- `E` — foo is paused at await, synchronous code continues
- `B` — await resolves, foo resumes
- `C` — continues in foo

Key: **Everything before the first `await` runs synchronously!**

</details>

### Exercise 2: Sequential vs Parallel

```js
function delay(ms, val) {
    return new Promise(r => setTimeout(() => r(val), ms));
}

async function sequential() {
    const a = await delay(1000, "A");
    const b = await delay(1000, "B");
    return a + b;
}

async function parallel() {
    const [a, b] = await Promise.all([
        delay(1000, "A"),
        delay(1000, "B")
    ]);
    return a + b;
}

// How long does each take? ???
```

<details>
<summary>Click for Answer</summary>

- `sequential()` → **~2 seconds** (waits 1s, then waits another 1s)
- `parallel()` → **~1 second** (both start at same time)
- Both return **"AB"**

</details>

### Exercise 3: Error handling

```js
async function risky() {
    try {
        const a = await Promise.resolve(1);
        const b = await Promise.reject("Error!");
        const c = await Promise.resolve(3);
        console.log(a, b, c);
    } catch (err) {
        console.log("Caught:", err);
    }
    console.log("After try/catch");
}

risky();
// What prints? ???
```

<details>
<summary>Click for Answer</summary>

```
Caught: Error!
After try/catch
```

- `a` resolves to 1 ✅
- `b` rejects → caught by catch (skips `c` and the console.log inside try)
- Catch logs "Caught: Error!"
- Code after try/catch still runs → "After try/catch"

</details>

---

## 📝 Interview Answer

> **Q: "Explain async/await. How is it different from Promises?"**
>
> "async/await is syntactic sugar over Promises — it makes asynchronous code look synchronous. An `async` function always returns a Promise. `await` pauses the function until the promise settles. The key advantage is readability and simpler error handling with try/catch instead of `.catch()` chains. However, a common pitfall is accidentally making independent operations sequential — you should use `Promise.all()` for parallel execution when operations don't depend on each other."
