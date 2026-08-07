# SDE-1 Preparation Roadmap — Part 2: Technical Roadmaps

---

## 6. Core CS Roadmap

### 6.1 OOP — Week 5-6 | **HIGH PRIORITY**

**Interview depth: Must explain with real-world examples and code.**

#### Concepts (in order)

| Concept | What to Know | Depth |
|---------|-------------|-------|
| **Classes & Objects** | Blueprint vs instance, constructors, destructors | Can code in C++ and JS |
| **Encapsulation** | Data hiding, getters/setters, access modifiers | Why it matters in real codebases |
| **Abstraction** | Abstract classes, interfaces, hiding complexity | Can give real-world examples |
| **Inheritance** | Single, multilevel, hierarchical, diamond problem | Code + explain trade-offs |
| **Polymorphism** | Compile-time (overloading), runtime (overriding), virtual functions | Code both types |
| **Composition vs Inheritance** | "Has-a" vs "Is-a", why composition is preferred | Design discussion |

#### SOLID Principles

| Principle | Meaning | Interview Depth |
|-----------|---------|----------------|
| **S** — Single Responsibility | One class = one reason to change | Give code example |
| **O** — Open/Closed | Open for extension, closed for modification | Explain with strategy pattern |
| **L** — Liskov Substitution | Subtypes must be substitutable | Classic Rectangle/Square example |
| **I** — Interface Segregation | No client should depend on unused methods | Give API design example |
| **D** — Dependency Inversion | Depend on abstractions, not concretions | Show with DI in Node.js |

#### Top 20 OOP Interview Questions

1. What are the 4 pillars of OOP?
2. Difference between abstraction and encapsulation?
3. What is polymorphism? Types?
4. What is the diamond problem?
5. Difference between overloading and overriding?
6. What are virtual functions?
7. What is an abstract class vs interface?
8. Explain composition vs inheritance.
9. What are access modifiers?
10. Explain SOLID principles with examples.
11. What is constructor overloading?
12. What is a copy constructor?
13. Shallow copy vs deep copy?
14. What is a destructor? When is it called?
15. What is method resolution order?
16. Static vs dynamic binding?
17. What is a friend function (C++)?
18. What are design patterns? Name 3.
19. Singleton pattern — implement it.
20. Observer pattern — when would you use it?

---

### 6.2 DBMS — Week 7-8 | **HIGH PRIORITY**

**Interview depth: Write complex queries, explain normalization, discuss indexing trade-offs.**

#### SQL Mastery Track

**Level 1 — Basics (Revise quickly):**
- CREATE, INSERT, UPDATE, DELETE
- SELECT with WHERE, ORDER BY, LIMIT
- Primary keys, Foreign keys, Constraints (NOT NULL, UNIQUE, CHECK, DEFAULT)

**Level 2 — Intermediate (Must master):**
- JOINs: INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF
- GROUP BY + HAVING + aggregate functions (COUNT, SUM, AVG, MIN, MAX)
- Subqueries: correlated vs non-correlated
- UNION, INTERSECT, EXCEPT
- CASE statements
- String functions, Date functions

**Level 3 — Advanced (Know well):**
- Window functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG
- Common Table Expressions (CTEs)
- Views
- Stored procedures basics
- Query optimization: EXPLAIN plan reading

#### DBMS Theory

| Topic | Interview Depth |
|-------|----------------|
| **Normalization** | 1NF → 2NF → 3NF → BCNF with examples. Why denormalize? |
| **Indexing** | B-tree vs hash, clustered vs non-clustered, when to/not to index |
| **Transactions** | BEGIN, COMMIT, ROLLBACK. Concurrent transaction problems. |
| **ACID** | Define each. Give failure scenarios for each violation. |
| **Isolation Levels** | Read Uncommitted → Read Committed → Repeatable Read → Serializable |
| **Locks** | Shared lock, exclusive lock, deadlock in DB context |
| **SQL vs NoSQL** | When to use each. CAP theorem connection. |

#### Top 20 DBMS Interview Questions

1. What is normalization? Explain up to BCNF.
2. What are ACID properties?
3. Difference between DELETE, TRUNCATE, DROP?
4. What is indexing? How does B-tree indexing work?
5. Clustered vs non-clustered index?
6. What are transactions? Why do we need them?
7. Explain isolation levels.
8. What is a deadlock in databases? How to prevent it?
9. What is a view? Materialized view?
10. Write a query: 2nd highest salary.
11. Write a query: employees earning more than their manager.
12. What are JOINs? Explain all types.
13. Difference between WHERE and HAVING?
14. What is a foreign key? What happens on delete?
15. What is denormalization? When to use it?
16. SQL vs NoSQL — when to choose which?
17. What is a stored procedure?
18. Explain query optimization techniques.
19. What is sharding?
20. What is database replication?

#### SQL Practice Problems (Do 30 problems)

Use: LeetCode SQL questions (Easy → Medium) + HackerRank SQL track

---

### 6.3 Operating Systems — Week 9-10 | **HIGH PRIORITY**

**Interview depth: Conceptual understanding. No need to write OS code.**

| Topic | What to Know | Priority |
|-------|-------------|----------|
| **Process** | Definition, states, PCB, creation (fork) | HIGH |
| **Thread** | Definition, user vs kernel threads | HIGH |
| **Process vs Thread** | Memory sharing, overhead, use cases | HIGH |
| **Concurrency vs Parallelism** | Definitions with examples | HIGH |
| **Context Switching** | What happens, overhead, when it occurs | HIGH |
| **CPU Scheduling** | FCFS, SJF, Round Robin, Priority — trade-offs | MEDIUM |
| **Deadlock** | Conditions (mutual exclusion, hold & wait, no preemption, circular wait) | HIGH |
| **Deadlock Prevention** | Break one of the 4 conditions | HIGH |
| **Race Condition** | What it is, how it occurs, real-world examples | HIGH |
| **Mutex vs Semaphore** | Difference, when to use each | HIGH |
| **Memory Management** | Paging, segmentation, page table | MEDIUM |
| **Virtual Memory** | Why it exists, page faults, thrashing | MEDIUM |
| **Stack vs Heap** | What goes where, allocation, deallocation | HIGH |
| **System Calls** | What they are, examples (open, read, write, fork) | MEDIUM |

#### Top 15 OS Interview Questions

1. Process vs Thread?
2. What is a deadlock? How to prevent it?
3. What is a race condition? How to solve it?
4. Mutex vs Semaphore?
5. What is context switching?
6. What is virtual memory?
7. What is paging?
8. Stack vs Heap memory?
9. What is thrashing?
10. Explain CPU scheduling algorithms.
11. What is a critical section?
12. What is starvation?
13. Difference between concurrency and parallelism?
14. What is a page fault?
15. What are system calls?

---

### 6.4 Computer Networks — Week 11-12 | **HIGH PRIORITY**

| Topic | What to Know | Priority |
|-------|-------------|----------|
| **OSI Model** | 7 layers, what each does, examples | HIGH |
| **TCP/IP Model** | 4 layers, mapping to OSI | HIGH |
| **HTTP** | Methods (GET, POST, PUT, PATCH, DELETE), headers, body | HIGH |
| **HTTPS** | TLS handshake, certificates, why it matters | HIGH |
| **HTTP Status Codes** | 200, 201, 204, 301, 302, 400, 401, 403, 404, 500, 502, 503 | HIGH |
| **TCP vs UDP** | Reliability, ordering, use cases | HIGH |
| **DNS** | Resolution process, A record, CNAME | HIGH |
| **IP Addressing** | IPv4, subnetting basics, ports | MEDIUM |
| **Cookies vs Sessions** | How they work, stateless HTTP, session management | HIGH |
| **JWT** | Structure (header.payload.signature), how it works, pros/cons | HIGH |
| **REST** | Principles, statelessness, resource-based URLs | HIGH |
| **WebSockets** | Full-duplex, when to use vs REST/SSE | MEDIUM |
| **SSE** | Server-sent events, one-way communication | LOW |
| **CORS** | Same-origin policy, preflight requests, headers | HIGH |

#### Top 15 Networking Interview Questions

1. What is the OSI model? Explain each layer.
2. TCP vs UDP?
3. What happens when you type a URL in the browser?
4. What is DNS? How does DNS resolution work?
5. HTTP vs HTTPS?
6. What are HTTP methods? Idempotency?
7. What is a cookie? How do sessions work?
8. What is JWT? How does authentication work?
9. What is CORS? Why does it exist?
10. What is a REST API? What makes an API RESTful?
11. WebSocket vs REST?
12. What is TLS? How does the TLS handshake work?
13. What are HTTP status codes? Name important ones.
14. What is a CDN?
15. What is a reverse proxy?

---

## 7. JavaScript Roadmap

### Week 6-8 | **CRITICAL PRIORITY**

> **This is your most tested interview language. Every concept below has been asked in real interviews.**

#### 7.1 Variables & Scope

| Concept | Interview Depth |
|---------|----------------|
| `var` vs `let` vs `const` | Scope differences, hoisting, TDZ, redeclaration |
| Scope chain | Lexical scope, how JS resolves variables |
| Hoisting | Variable hoisting vs function hoisting, behavior differences |
| Block scope vs function scope | `let`/`const` are block-scoped, `var` is function-scoped |

**Coding Exercise:** Predict the output of 10 scope/hoisting snippets.

#### 7.2 Closures

- What is a closure? (Function + its lexical environment)
- Closure in loops (the classic `var` in loop problem)
- Practical uses: data privacy, factory functions, memoization
- Memory implications of closures

**Coding Exercise:** Implement a counter using closures. Build a memoize function.

#### 7.3 `this` Keyword

| Context | `this` refers to |
|---------|-----------------|
| Global | `window` (browser) / `global` (Node) |
| Object method | The object |
| Arrow function | Lexical `this` (parent scope) |
| Constructor | New instance |
| `call`/`apply`/`bind` | Explicitly set |
| Event handler | The element |

**Coding Exercise:** Predict `this` in 10 different contexts.

#### 7.4 Call, Apply, Bind

- `call(context, arg1, arg2)` — calls immediately
- `apply(context, [args])` — calls immediately with array
- `bind(context)` — returns new function

**Coding Exercise:** Implement your own `bind` polyfill.

#### 7.5 Prototypes & Prototypal Inheritance

- Everything is an object (except primitives)
- `__proto__` vs `prototype`
- Prototype chain
- `Object.create()`
- How `class` is syntactic sugar over prototypes

#### 7.6 ES6+ Features

Must know: destructuring, spread/rest, template literals, default params, optional chaining, nullish coalescing, `Map`/`Set`, `Symbol`, iterators, generators (basic awareness).

#### 7.7 Promises & Async/Await

| Concept | Must Know |
|---------|-----------|
| Promise states | Pending, fulfilled, rejected |
| `.then()`, `.catch()`, `.finally()` | Chaining, error propagation |
| `Promise.all()` | All succeed or first failure |
| `Promise.allSettled()` | Wait for all, regardless of outcome |
| `Promise.race()` | First to resolve/reject |
| `Promise.any()` | First to resolve |
| `async/await` | Syntactic sugar, error handling with try/catch |
| Error handling | Unhandled rejections, `.catch()` placement |

**Coding Exercise:** Implement `Promise.all` from scratch. Chain 3 async operations.

#### 7.8 Event Loop

```
┌──────────────────────────┐
│        Call Stack         │ ← Executes synchronous code
├──────────────────────────┤
│    Web APIs / Node APIs  │ ← setTimeout, fetch, DOM events
├──────────────────────────┤
│    Microtask Queue       │ ← Promise callbacks, queueMicrotask
├──────────────────────────┤
│    Macrotask Queue       │ ← setTimeout, setInterval, I/O
└──────────────────────────┘

Execution order:
1. Execute all synchronous code (call stack)
2. Execute ALL microtasks (Promise.then, async/await continuations)
3. Execute ONE macrotask (setTimeout callback)
4. Repeat from step 2
```

**Coding Exercise:** Predict the output order of 5 event loop questions.

#### 7.9 Practical JS Patterns

- **Debouncing:** Delay execution until user stops triggering (search input)
- **Throttling:** Execute at most once per interval (scroll handler)
- **Event delegation:** Single handler on parent instead of many on children
- **Module pattern:** IIFE for encapsulation
- **Currying:** Transform `f(a, b)` to `f(a)(b)`

**Coding Exercise:** Implement debounce and throttle from scratch.

#### 7.10 Advanced Concepts

- **Garbage collection:** Mark-and-sweep, reference counting, memory leaks
- **WeakMap/WeakSet:** Weak references, use cases
- **Proxy/Reflect:** Awareness level
- **Error handling:** Custom errors, error boundaries concept

#### Top 25 JavaScript Interview Questions

1. Explain var vs let vs const.
2. What is hoisting?
3. What is a closure? Give an example.
4. Explain `this` keyword in different contexts.
5. What is the event loop?
6. What is the difference between microtask and macrotask?
7. Explain Promise and its methods.
8. What is async/await? How does error handling work?
9. Implement debounce/throttle.
10. What is prototypal inheritance?
11. Explain call, apply, bind.
12. What is event delegation?
13. What is the difference between `==` and `===`?
14. What are arrow functions? How is `this` different?
15. What is destructuring?
16. Explain the spread and rest operators.
17. What is a higher-order function?
18. What is currying?
19. How does garbage collection work in JS?
20. What is the module pattern?
21. Explain `Promise.all` vs `Promise.allSettled`.
22. What is optional chaining?
23. What is nullish coalescing?
24. Implement `Array.prototype.map` from scratch.
25. What is a memory leak in JS? How to prevent it?

---

## 8. React Roadmap

### Week 9-14 | **HIGH PRIORITY**

#### What to Know Theoretically vs What to Implement

| Topic | Theory | Implementation |
|-------|--------|----------------|
| Virtual DOM, Reconciliation | ✅ Explain how React updates the DOM | Not needed |
| Components, Props, State | ✅ Explain | ✅ Must code fluently |
| Hooks (all major ones) | ✅ Explain rules, dependencies | ✅ Must code fluently |
| Context API | ✅ When to use vs Redux | ✅ Must implement |
| Redux/Redux Toolkit | ✅ Flux pattern, store, actions, reducers | ✅ Must implement in project |
| React Router | ✅ Explain routing concepts | ✅ Must implement with protected routes |
| Performance (memo, lazy) | ✅ When/why to optimize | ✅ Should have used in project |
| Testing | ✅ What to test, testing strategies | Basic Jest + RTL test writing |

#### 8.1 Core React (Revise — Week 9)

- Components: functional vs class (focus on functional)
- JSX, rendering, conditional rendering
- Props: passing data, prop drilling problem
- State: useState, state updates, batching
- Lists and keys: why keys matter
- Forms: controlled vs uncontrolled, form handling
- Event handling in React

#### 8.2 Hooks Deep Dive (Week 10)

| Hook | When to Use | Interview Depth |
|------|------------|----------------|
| `useState` | Local component state | Must explain re-renders |
| `useEffect` | Side effects, lifecycle replacement | Dependency array, cleanup, common pitfalls |
| `useRef` | Persist value without re-render, DOM access | Difference from state |
| `useMemo` | Memoize expensive computations | When NOT to use it |
| `useCallback` | Memoize functions for child components | Connection to React.memo |
| `useReducer` | Complex state logic | When to use over useState |
| `useContext` | Consume context values | Performance implications |
| Custom Hooks | Extract reusable logic | Must build 2-3 custom hooks |

**Build:** `useFetch`, `useDebounce`, `useLocalStorage` custom hooks.

#### 8.3 State Management (Week 11)

- **Context API:** Create context, provider, consumer. When it's enough.
- **Redux Toolkit:** Store, slices, reducers, actions, selectors, async thunks.
- **When to use what:**
  - Local state → `useState`
  - Shared between few components → Lifting state / Context
  - Complex app-wide state → Redux Toolkit

#### 8.4 React Router (Week 11)

- `BrowserRouter`, `Routes`, `Route`
- Dynamic routes, URL parameters
- `useNavigate`, `useParams`, `useLocation`
- Protected routes (auth-based routing)
- 404 page handling
- Nested routes, layout routes

#### 8.5 API Integration Patterns (Week 12)

- Fetching data with `useEffect` + `useState`
- Loading states, error states, empty states
- Custom `useFetch` hook
- Axios interceptors for auth tokens
- Optimistic updates
- Pagination patterns (offset-based, cursor-based)

#### 8.6 Performance Optimization (Week 13)

- `React.memo` — prevent unnecessary re-renders
- `useMemo` — memoize computed values
- `useCallback` — memoize event handlers
- `React.lazy` + `Suspense` — code splitting
- Virtualization (awareness: react-window)
- Profiler tool (React DevTools)

#### 8.7 Component Architecture (Week 13)

- Container vs Presentational components
- Compound components pattern
- Render props pattern (awareness)
- Higher-Order Components (awareness)
- Component composition over inheritance
- Folder structure for scalable React apps

#### Top 25 React Interview Questions

1. What is the Virtual DOM? How does reconciliation work?
2. What is the difference between state and props?
3. Explain the component lifecycle (using hooks).
4. What is `useEffect`? Explain the dependency array.
5. What is `useMemo` vs `useCallback`?
6. What is `useRef`? Use cases?
7. What are custom hooks? Build one.
8. Explain Context API. When to use it?
9. What is Redux? Explain the Flux architecture.
10. What is Redux Toolkit? How is it different from Redux?
11. How does React Router work? Explain protected routes.
12. What is code splitting? How to implement it?
13. How to optimize React performance?
14. What is `React.memo`?
15. Controlled vs Uncontrolled components?
16. What are keys in React? Why are they important?
17. What is prop drilling? How to avoid it?
18. How to handle forms in React?
19. How to handle errors in React? Error boundaries?
20. What is server-side rendering? (awareness)
21. What is hydration? (awareness)
22. Explain the React rendering process.
23. How to handle authentication in React?
24. What is the difference between client-side and server-side rendering?
25. How do you test React components?

---

## 9. Backend Roadmap (Node.js + Express)

### Week 10-16 | **HIGH PRIORITY**

#### 9.1 Node.js Fundamentals (Week 10)

| Concept | Depth |
|---------|-------|
| What is Node.js? | V8 engine, non-blocking I/O, event-driven |
| Event Loop (Node) | Phases: timers, I/O, check, close. `process.nextTick` vs `setImmediate` |
| Modules | CommonJS vs ESM, `require` vs `import` |
| Streams | Readable, writable, transform, pipe (awareness level) |
| Buffer | What it is, when it's used (file/network I/O) |
| `process` object | `env`, `argv`, `exit`, `cwd` |
| Error handling | Uncaught exceptions, unhandled rejections |

#### 9.2 Express Framework (Week 11)

| Concept | Must Know |
|---------|-----------|
| **Middleware** | What it is, `next()`, execution order, types (app-level, router-level, error-handling) |
| **Routing** | Route parameters, query strings, route handlers |
| **Request/Response** | `req.body`, `req.params`, `req.query`, `req.headers`, `res.json()`, `res.status()` |
| **Error handling middleware** | Centralized error handler, `(err, req, res, next)` |
| **Static files** | `express.static()` |
| **Template engines** | Awareness (EJS, Pug) — not critical |

#### 9.3 Production Architecture (Week 12-13)

```
src/
├── config/          # Environment configs, DB connection
├── controllers/     # Handle request/response
├── services/        # Business logic
├── models/          # Database models/schemas
├── routes/          # Route definitions
├── middleware/       # Auth, validation, error handling
├── utils/           # Helper functions
├── validators/      # Input validation schemas (Joi/Zod)
└── app.js           # Express app setup
```

**Layers:**
1. **Route** → Defines endpoints
2. **Controller** → Parses request, calls service, sends response
3. **Service** → Business logic, calls repository/model
4. **Model** → Database interaction

#### 9.4 Authentication & Authorization (Week 14)

| Concept | Implementation |
|---------|---------------|
| Password hashing | bcrypt, salt rounds, never store plaintext |
| JWT authentication | Generate on login, verify on protected routes |
| Token refresh | Access token (short-lived) + refresh token (long-lived) |
| Authorization | Role-based access control (RBAC), middleware-based |
| Session vs JWT | When to use which, trade-offs |
| OAuth 2.0 | Awareness: how social login works |

#### 9.5 API Design Best Practices (Week 14-15)

- RESTful URL design: `/api/v1/users/:id`
- HTTP methods: GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove)
- Status codes: 200, 201, 204, 400, 401, 403, 404, 409, 422, 500
- Pagination: `?page=1&limit=20`, return total count
- Filtering: `?status=active&role=admin`
- Sorting: `?sort=-createdAt` (prefix `-` for descending)
- Search: `?search=keyword`
- API versioning: `/api/v1/` vs `/api/v2/`
- Rate limiting: express-rate-limit
- CORS configuration
- Input validation: Joi or Zod
- Response format consistency

#### 9.6 Security (Week 15)

| Vulnerability | Prevention |
|--------------|------------|
| SQL Injection | Parameterized queries, ORM |
| NoSQL Injection | Input sanitization, mongoose validation |
| XSS | Output encoding, CSP headers, helmet.js |
| CSRF | CSRF tokens, SameSite cookies |
| Rate limiting | express-rate-limit |
| CORS | Whitelist specific origins |
| Headers | helmet.js for security headers |
| Secrets | Environment variables, .env, never commit |
| File uploads | Validate type, size, sanitize filename |

#### 9.7 Advanced Backend Topics (Week 16)

| Topic | Depth for SDE-1 |
|-------|-----------------|
| WebSockets (Socket.io) | Build a basic real-time feature |
| Caching (Redis) | Awareness: what to cache, TTL, invalidation strategies |
| Background Jobs | Awareness: Bull/BullMQ, when to use queues |
| File uploads | Implement with Multer |
| Logging | Winston or Pino, log levels |
| Testing | Jest + Supertest for API testing |
| Docker | Containerize your app |

---

## 10. Database Roadmap

### Week 13-14 | **HIGH PRIORITY**

#### 10.1 SQL Practical Track

**Practice these query patterns (30 problems on LeetCode/HackerRank SQL):**

1. **Basic CRUD** — INSERT, SELECT, UPDATE, DELETE with conditions
2. **JOINs** — Multi-table queries, self-joins, LEFT vs INNER
3. **Aggregations** — GROUP BY, HAVING, COUNT, SUM, AVG
4. **Subqueries** — WHERE IN (SELECT...), correlated subqueries
5. **Window Functions** — ROW_NUMBER, RANK, LEAD, LAG
6. **Complex queries** — Find duplicates, nth highest salary, running totals

#### 10.2 MongoDB Practical Track

| Concept | What to Know |
|---------|-------------|
| **Documents & Collections** | Schema-less nature, BSON format |
| **CRUD** | insertOne, find, updateOne, deleteOne, operators ($set, $push, $in, $gt) |
| **Embedding vs Referencing** | When to embed (1:few) vs reference (1:many, many:many) |
| **Indexes** | Single field, compound, text, unique — performance impact |
| **Aggregation Pipeline** | $match, $group, $project, $sort, $lookup (join), $unwind |
| **Mongoose** | Schema definition, validation, middleware (pre/post hooks), populate |
| **Schema Design** | Denormalization patterns, trade-offs |

#### 10.3 When to Choose SQL vs NoSQL

| Factor | SQL (PostgreSQL/MySQL) | NoSQL (MongoDB) |
|--------|----------------------|-----------------|
| Data structure | Well-defined, relational | Flexible, evolving |
| Relationships | Many complex relationships | Few relationships, denormalized |
| Transactions | ACID compliance needed | Eventually consistent is OK |
| Query complexity | Complex queries, joins | Simple queries, aggregation |
| Scale | Vertical primarily | Horizontal primarily |
| Use cases | E-commerce, banking, ERP | Content management, real-time, IoT |

#### 10.4 Database Design Exercises

**Exercise 1:** Design schema for an e-commerce platform
- Users, Products, Orders, Reviews, Categories
- Handle: one user → many orders → many products
- SQL approach vs MongoDB approach

**Exercise 2:** Design schema for a social media platform
- Users, Posts, Comments, Likes, Followers
- Handle: feed generation, follower relationships
- Indexing strategy for timeline queries

**Exercise 3:** Design schema for a chat application
- Users, Conversations, Messages
- Handle: group chats, read receipts, message history
- Embedding messages vs referencing
