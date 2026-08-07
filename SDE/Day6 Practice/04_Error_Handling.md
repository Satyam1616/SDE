# 🛡️ JavaScript Error Handling — The Complete Guide

> **Time: 1 hour** | Handle errors like a professional developer

---

## Why Error Handling Matters

Every production application encounters errors. The difference between a junior and senior developer is **how they handle them**:

- Junior: `catch(e) { console.log(e) }` 😬
- Senior: Structured error handling with custom errors, appropriate responses, and graceful degradation ✅

---

## 1. try/catch/finally — The Basics

```js
try {
    // Code that might throw an error
    const data = JSON.parse("invalid json");
} catch (error) {
    // Handle the error
    console.error("Parse failed:", error.message);
} finally {
    // ALWAYS runs — whether error occurred or not
    console.log("Cleanup done");
}
```

### Key Rules

| Rule | Detail |
|------|--------|
| `catch` receives the error object | Has `.message`, `.name`, `.stack` |
| `finally` always runs | Even if `catch` has a `return` statement |
| `try` without `catch` | Must have `finally` (but usually pair with `catch`) |

### The Error Object

```js
try {
    null.property;
} catch (error) {
    console.log(error.name);     // "TypeError"
    console.log(error.message);  // "Cannot read properties of null"
    console.log(error.stack);    // Full stack trace (for debugging)
}
```

---

## 2. Error Types in JavaScript

| Error Type | When it Occurs | Example |
|-----------|---------------|---------|
| `Error` | Generic error | `throw new Error("oops")` |
| `TypeError` | Wrong type operation | `null.property`, `undefined()` |
| `ReferenceError` | Undefined variable | `console.log(x)` where x not declared |
| `SyntaxError` | Invalid syntax | `JSON.parse("{invalid}")` |
| `RangeError` | Value out of range | `new Array(-1)` |
| `URIError` | Bad URI encoding | `decodeURI("%")` |

```js
// You can check error type
try {
    someUndeclaredFunction();
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Variable or function not defined!");
    } else if (error instanceof TypeError) {
        console.log("Type mismatch!");
    } else {
        console.log("Unknown error:", error.message);
    }
}
```

---

## 3. Throwing Custom Errors

### Basic throw

```js
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (e) {
    console.log(e.message);  // "Cannot divide by zero"
}
```

### Custom Error Classes ✅ (Professional Pattern)

```js
// Base custom error
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = this.constructor.name;  // Auto-set name
        this.statusCode = statusCode;
        this.isOperational = true;  // Expected error vs programming bug
    }
}

// Specific error types
class ValidationError extends AppError {
    constructor(message) {
        super(message, 400);  // 400 Bad Request
        this.field = null;
    }

    static forField(field, message) {
        const error = new ValidationError(message);
        error.field = field;
        return error;
    }
}

class NotFoundError extends AppError {
    constructor(resource) {
        super(`${resource} not found`, 404);
    }
}

class AuthenticationError extends AppError {
    constructor() {
        super("Invalid credentials", 401);
    }
}

class AuthorizationError extends AppError {
    constructor() {
        super("You do not have permission", 403);
    }
}
```

### Using Custom Errors

```js
function getUser(id) {
    const user = database.find(id);
    if (!user) {
        throw new NotFoundError("User");  // Clear, specific error
    }
    return user;
}

function createUser(data) {
    if (!data.email) {
        throw ValidationError.forField("email", "Email is required");
    }
    if (!data.email.includes("@")) {
        throw ValidationError.forField("email", "Invalid email format");
    }
    // ... create user
}

// Handling different errors differently
try {
    const user = getUser(999);
} catch (error) {
    if (error instanceof NotFoundError) {
        console.log("Show 404 page");
    } else if (error instanceof ValidationError) {
        console.log(`Fix field: ${error.field} — ${error.message}`);
    } else {
        console.log("Something unexpected went wrong");
    }
}
```

---

## 4. Error Handling with Promises

### .catch() Method

```js
fetch("https://api.example.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Users:", data);
    })
    .catch(error => {
        // Catches ANY error in the chain above
        console.error("Failed to fetch users:", error.message);
    })
    .finally(() => {
        // Always runs
        console.log("Request completed");
    });
```

### ⚠️ Common Mistake: Forgetting .catch()

```js
// ❌ BAD — unhandled promise rejection
fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data));
// If this fails, you get an "Unhandled Promise Rejection" warning!

// ✅ GOOD — always handle errors
fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Failed:", err.message));
```

### .catch() Placement Matters!

```js
// Catch in the middle — execution continues after catch
Promise.resolve()
    .then(() => { throw new Error("Step 1 failed"); })
    .catch(err => {
        console.log("Caught:", err.message);
        return "recovered";  // Return value goes to next .then()
    })
    .then(value => {
        console.log("Continued with:", value);  // "Continued with: recovered"
    });

// Catch at the end — catches everything
Promise.resolve()
    .then(() => { throw new Error("Step 1 failed"); })
    .then(() => console.log("Step 2"))  // SKIPPED
    .then(() => console.log("Step 3"))  // SKIPPED
    .catch(err => console.log("Caught at end:", err.message));
// Output: "Caught at end: Step 1 failed"
```

---

## 5. Error Handling with async/await

### Basic Pattern

```js
async function fetchUser(id) {
    try {
        const response = await fetch(`/api/users/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error.message);
        throw error;  // Re-throw so the caller knows it failed
    }
}
```

### Multiple await with Error Handling

```js
async function processOrder(orderId) {
    try {
        const order = await getOrder(orderId);
        const payment = await processPayment(order);
        const confirmation = await sendConfirmation(order, payment);
        return confirmation;
    } catch (error) {
        if (error instanceof NotFoundError) {
            console.log("Order doesn't exist");
        } else if (error instanceof PaymentError) {
            console.log("Payment failed — refunding...");
            await refund(orderId);
        } else {
            console.log("Unexpected error:", error);
        }
        throw error;  // Let the caller handle it too
    } finally {
        await logAction("ORDER_PROCESSED", orderId);
    }
}
```

### Handling Errors in Promise.all

```js
// If ANY promise rejects, Promise.all rejects immediately
async function fetchAllData() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch("/api/users").then(r => r.json()),
            fetch("/api/posts").then(r => r.json()),
            fetch("/api/comments").then(r => r.json()),
        ]);
        return { users, posts, comments };
    } catch (error) {
        console.error("One of the requests failed:", error);
    }
}

// If you want ALL results regardless of errors:
async function fetchAllDataSafe() {
    const results = await Promise.allSettled([
        fetch("/api/users").then(r => r.json()),
        fetch("/api/posts").then(r => r.json()),
        fetch("/api/comments").then(r => r.json()),
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Request ${index} succeeded:`, result.value);
        } else {
            console.log(`Request ${index} failed:`, result.reason);
        }
    });
}
```

---

## 6. Global Error Handlers

### Browser

```js
// Catch unhandled errors
window.addEventListener("error", (event) => {
    console.error("Unhandled error:", event.message);
    // Send to error tracking service (Sentry, etc.)
});

// Catch unhandled promise rejections
window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
    event.preventDefault();  // Prevent default browser behavior
});
```

### Node.js

```js
// Catch unhandled exceptions
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    // Log error, then exit (don't try to continue!)
    process.exit(1);
});

// Catch unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection:", reason);
    // In Node.js 15+, this causes the process to exit by default
});
```

---

## 7. Error Handling Patterns Summary

### Pattern 1: Guard Clauses (Validate Early)

```js
function processUser(user) {
    // Guard clauses — fail fast!
    if (!user) throw new ValidationError("User is required");
    if (!user.email) throw new ValidationError("Email is required");
    if (!user.age || user.age < 0) throw new ValidationError("Invalid age");

    // Main logic — only reached if all validations pass
    return saveUser(user);
}
```

### Pattern 2: Wrapper Function (DRY Error Handling)

```js
// Instead of try/catch in every async route handler...
function asyncHandler(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

// Usage in Express
app.get("/users/:id", asyncHandler(async (req, res) => {
    const user = await getUser(req.params.id);
    res.json(user);
    // No try/catch needed! Errors auto-forwarded to error middleware
}));
```

### Pattern 3: Result Object (No Exceptions)

```js
// Instead of throwing, return a result object
function parseConfig(path) {
    try {
        const content = fs.readFileSync(path, "utf-8");
        const config = JSON.parse(content);
        return { success: true, data: config, error: null };
    } catch (error) {
        return { success: false, data: null, error: error.message };
    }
}

const result = parseConfig("config.json");
if (result.success) {
    console.log("Config loaded:", result.data);
} else {
    console.log("Config error:", result.error);
}
```

---

## 📊 Quick Reference

| Scenario | Pattern |
|----------|---------|
| Sync code errors | `try/catch/finally` |
| Promise errors | `.catch()` at end of chain |
| async/await errors | `try/catch` inside async function |
| Multiple promises | `Promise.allSettled()` for all results |
| Express routes | `asyncHandler` wrapper |
| Expected errors | Custom error classes |
| Unexpected errors | Global handlers (`process.on`, `window.addEventListener`) |

---

## 🧠 Interview Exercises

### Exercise 1: What's the output?

```js
async function test() {
    try {
        await Promise.reject("Error!");
        console.log("A");
    } catch (e) {
        console.log("B");
    } finally {
        console.log("C");
    }
    console.log("D");
}
test();
```

<details>
<summary>Click for Answer</summary>

Output: `B, C, D`

- `await Promise.reject("Error!")` throws → jumps to `catch`
- `catch` prints "B"
- `finally` always runs → prints "C"
- Execution continues after try/catch → prints "D"
- "A" is never reached

</details>

### Exercise 2: Will this catch the error?

```js
try {
    setTimeout(() => {
        throw new Error("Delayed error");
    }, 1000);
} catch (e) {
    console.log("Caught:", e.message);
}
```

<details>
<summary>Click for Answer</summary>

**NO!** The `try/catch` won't catch it.

`setTimeout` callback runs in a different execution context (macrotask). By the time it throws, the `try/catch` has already completed. This would be an **uncaught exception**.

**Fix:** Put `try/catch` inside the callback, or use a Promise wrapper.

</details>

---

## 📝 Interview Answer

> **Q: "How do you handle errors in JavaScript?"**
>
> "I use a layered approach. For synchronous code, try/catch/finally. For promises, .catch() at the end of chains. For async/await, try/catch inside async functions. I create custom error classes extending Error — like ValidationError, NotFoundError — so I can handle different errors differently. In Express, I use an asyncHandler wrapper to avoid repetitive try/catch blocks, and a centralized error-handling middleware. I also set up global handlers for uncaught exceptions and unhandled rejections as a safety net."
