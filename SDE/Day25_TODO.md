# Day 25 — TODO Checklist 🎯 PRODESK BATTLE PLAN
### BUILD & CODE Day — Express, React Components, JS Implementations, DP Basics

> ⚠️ **CONTEXT:** Prodesk SDE/Full Stack drive is on September 8th. 5 rounds total.
> Their coding rounds are **manual-review** based — a recruiter checks your code on YOUR machine.
> They ask you to **build React components** (Accordion, Forms) and **implement JS fundamentals** (closures, sorting).
> Clean, readable code > clever one-liners.

---

## 🔧 Block 1: Express.js Crash Course (1.5h)

> 💡 **Why this matters:** The SDE role explicitly requires Node.js + Express. You covered Node.js basics on Day 22 but Express wasn't done. This fills that critical gap.

### Learn Express Fundamentals (30 min)
- [ ] Express setup — `npm init -y`, `npm install express`
- [ ] Basic server — `const app = express(); app.listen(3000)`
- [ ] Middleware concept — `app.use()`, `next()`, order matters
- [ ] Route parameters — `req.params` (e.g., `/users/:id`)
- [ ] Query strings — `req.query` (e.g., `?page=1&limit=20`)
- [ ] Request body — `req.body` (with `express.json()` middleware)
- [ ] Response methods — `res.json()`, `res.status()`, `res.send()`
- [ ] Error-handling middleware — `(err, req, res, next)` signature

### Build: Mini TODO API (45 min)
- [ ] Create a new folder `prodesk-express-practice`
- [ ] Initialize project with `npm init -y && npm install express`
- [ ] Implement in-memory array for storage (no database needed)
- [ ] `GET /api/todos` → return all todos
- [ ] `POST /api/todos` → create a todo `{ id, title, completed: false }`
- [ ] `PUT /api/todos/:id` → update a todo by id
- [ ] `DELETE /api/todos/:id` → delete a todo by id
- [ ] Add `express.json()` middleware for parsing body
- [ ] Add basic error handling middleware
- [ ] Test all routes with Thunder Client or curl

### Express Quick Reference (memorize these patterns)
```javascript
// Basic Express Server (MEMORIZE THIS)
const express = require('express');
const app = express();
app.use(express.json()); // parse JSON body

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  Object.assign(item, req.body);
  res.json(item);
});

app.delete('/api/items/:id', (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Error handling middleware (MUST have 4 params)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 🔧 Block 2: React Component Speed Drills (1.5h)

> 💡 **Why this matters:** Prodesk's Machine Test (60 min) asks you to BUILD components like Accordions and Forms. Practice building these FAST.

### Build: Accordion Component (20 min — TIMED!)
- [ ] Set a 20-minute timer NOW
- [ ] Create array of `{ title, content }` objects (at least 3 items)
- [ ] Render list of sections with clickable titles
- [ ] Click title → toggle that section's content visibility
- [ ] Only ONE section open at a time (clicking new closes old)
- [ ] Add basic CSS for visual appeal (border, padding, cursor: pointer)
- [ ] Test: clicking works, only one opens at a time

```jsx
// Accordion Starter Pattern (try from memory first!)
const [activeIndex, setActiveIndex] = useState(null);

const toggle = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

// Map over items, conditionally render content
```

### Build: Contact Form with Validation (20 min — TIMED!)
- [ ] Set a 20-minute timer NOW
- [ ] Create form with: Name, Email, Phone, Message fields
- [ ] Use `useState` for form data AND error messages
- [ ] Validate on submit:
  - [ ] All fields required (show "Field is required")
  - [ ] Email must contain `@` and `.` (show "Invalid email")
  - [ ] Phone must be 10 digits (show "Invalid phone number")
- [ ] Show error messages below each invalid field (red text)
- [ ] On valid submit → `alert('Form submitted!')` or console.log
- [ ] Clear form after successful submission

```jsx
// Form Validation Pattern (try from memory first!)
const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
  if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone';
  if (!formData.message) newErrors.message = 'Message is required';
  return newErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validate();
  if (Object.keys(newErrors).length === 0) { /* success */ }
  else setErrors(newErrors);
};
```

### Build: Todo App with Filter (20 min — TIMED!)
- [ ] Set a 20-minute timer NOW
- [ ] Input field + Add button → adds todo to list
- [ ] Each todo has: text, completed status, delete button
- [ ] Click todo text → toggle completed (strikethrough style)
- [ ] Filter buttons: All / Active / Completed
- [ ] Counter: "X items left" (count of active todos)

### Build: Closure-based Counter (10 min — TIMED!)
- [ ] Set a 10-minute timer NOW
- [ ] Create a React component with Increment / Decrement / Reset buttons
- [ ] Display current count
- [ ] Internally use a closure to manage state (demonstrate closure understanding)

---

## 🔧 Block 3: JavaScript Implementation Practice (1.5h)

> 💡 **Why this matters:** Prodesk Round 1 asks you to implement sorting algorithms and JS concepts. They manually check your logic.

### Sorting Algorithms (30 min)
- [ ] **Implement Selection Sort** from scratch — no looking up!
  - Find min in unsorted portion, swap with first unsorted element
  - Test with: `[64, 25, 12, 22, 11]` → `[11, 12, 22, 25, 64]`
- [ ] **Implement Bubble Sort** from scratch — no looking up!
  - Compare adjacent, swap if wrong order, repeat
  - Test with: `[5, 1, 4, 2, 8]` → `[1, 2, 4, 5, 8]`

```javascript
// Selection Sort (TRY FROM MEMORY FIRST!)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// Bubble Sort (TRY FROM MEMORY FIRST!)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

### Closures & Functional JS (30 min)
- [ ] **Implement a closure counter** — `createCounter()` returns `{ increment, decrement, getValue }`
- [ ] **Implement debounce(fn, delay)** — delays execution, resets timer on repeated calls
- [ ] **Implement throttle(fn, delay)** — executes at most once per delay period
- [ ] **Implement curry(fn)** — converts `f(a, b, c)` to `f(a)(b)(c)`

```javascript
// Debounce (TRY FROM MEMORY!)
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttle (TRY FROM MEMORY!)
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Curry
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
```

### Polyfills (30 min)
- [ ] **Implement Array.prototype.myMap**
- [ ] **Implement Array.prototype.myFilter**
- [ ] **Implement Array.prototype.myReduce**
- [ ] **Implement Promise.myAll**

```javascript
// myMap (TRY FROM MEMORY!)
Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

// myFilter
Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

// myReduce
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0];
  let start = initialValue !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

// Promise.myAll
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val;
        count++;
        if (count === promises.length) resolve(results);
      }).catch(reject);
    });
  });
};
```

---

## 🔧 Block 4: DP Quick Crash (1h)

> 💡 **Why this matters:** DP might come up in the additional technical rounds. Learn just the framework + 3 problems.

### Learn the DP Framework (15 min)
- [ ] Understand: DP = recursion that remembers past answers
- [ ] Memorize the 4 steps:
  1. Define **STATE** → `dp[i]` = answer for first i elements
  2. Write **RECURRENCE** → `dp[i] = f(dp[i-1], ...)`
  3. Identify **BASE CASE** → `dp[0] = ?`
  4. Determine **ORDER** → fill left to right (bottom-up)
- [ ] Know when to use DP: "count ways", "min/max cost", "is it possible?"

### Solve 3 Classic DP Problems (45 min)
- [ ] **Climbing Stairs (LC #70)** — 15 min max
  - `dp[i] = dp[i-1] + dp[i-2]` (Fibonacci!)
  - Base: `dp[0] = 1, dp[1] = 1`
- [ ] **House Robber (LC #198)** — 15 min max
  - `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`
  - Base: `dp[0] = nums[0], dp[1] = max(nums[0], nums[1])`
- [ ] **Coin Change (LC #322)** — 15 min max
  - `dp[i] = min(dp[i-coin] + 1)` for each coin
  - Base: `dp[0] = 0`, fill with Infinity initially

---

## 🔧 Block 5: Database & REST API Awareness (30 min)

> 💡 **Why this matters:** The SDE JD mentions PostgreSQL and MongoDB. You need conceptual awareness.

### SQL Basics (15 min)
- [ ] Know CRUD statements: SELECT, INSERT, UPDATE, DELETE
- [ ] Know JOINs concept: INNER JOIN (matching rows), LEFT JOIN (all left + matching right)
- [ ] Know GROUP BY + aggregate functions (COUNT, SUM, AVG)
- [ ] Know: SQL = structured, schema-enforced, relational (PostgreSQL, MySQL)

### MongoDB Basics (10 min)
- [ ] Know: MongoDB = document-based, flexible schema, JSON-like documents
- [ ] Know CRUD: `find()`, `insertOne()`, `updateOne()`, `deleteOne()`
- [ ] Know when SQL vs NoSQL: SQL for structured/relational data, NoSQL for flexible/nested data

### REST API Design (5 min)
- [ ] HTTP Methods: GET (read), POST (create), PUT (update), DELETE (delete)
- [ ] Status Codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error
- [ ] URL Pattern: `/api/v1/resource/:id`

---

## 📈 Day 25 Scorecard

- [ ] Express server built and working with CRUD routes ✅
- [ ] Accordion component built in under 20 min ✅
- [ ] Contact Form with validation built in under 20 min ✅
- [ ] Todo App built in under 20 min ✅
- [ ] Selection Sort + Bubble Sort implemented from memory ✅
- [ ] Debounce + Throttle + Curry implemented from memory ✅
- [ ] All 4 polyfills (map, filter, reduce, Promise.all) done ✅
- [ ] 3 DP problems solved (Climbing Stairs, House Robber, Coin Change) ✅
- [ ] SQL + MongoDB basics understood ✅

---

> 🕐 **Total time today: ~6h**
>
> ⚡ **Priority if short on time:** React Components (Block 2) → JS Implementations (Block 3) → Express (Block 1) → DP (Block 4) → DB Awareness (Block 5)
>
> 🎯 **Remember:** Prodesk does MANUAL code review. Write clean code with good variable names and comments!
