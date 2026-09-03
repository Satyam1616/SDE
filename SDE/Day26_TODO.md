# Day 26 — TODO Checklist 🎯 PRODESK BATTLE PLAN
### REVISE & SIMULATE Day — DSA Revision, Interview Q&A, Mock Rounds, Setup

> ⚠️ **CONTEXT:** Prodesk drive is in 2 days. Today is about REVISION, not learning new things.
> Solidify what you know. Practice verbal explanations. Simulate the actual test.
> By end of today, you should feel CONFIDENT walking into that room on Sep 8.

---

## 🔁 Block 1: DSA Pattern Speed Revision (1.5h)

> 💡 **Why this matters:** You've solved 85+ problems. The goal is to make sure you can recall your top patterns COLD in under 5 minutes each. No new problems today.

### Speed Solve — 12 Key Problems (5-7 min each, NO hints)
Set a stopwatch for each. If you can't solve in 7 min, look at solution, understand, then RE-SOLVE from memory.

#### Arrays (10 min)
- [ ] **Two Sum (LC #1)** — HashMap, O(n) — target under 3 min
- [ ] **Maximum Subarray (LC #53)** — Kadane's Algorithm — target under 3 min

#### Strings (7 min)
- [ ] **Longest Substring Without Repeating Characters (LC #3)** — Sliding Window — target under 5 min

#### Trees (10 min)
- [ ] **Maximum Depth of Binary Tree (LC #104)** — DFS recursive — under 2 min
- [ ] **Validate BST (LC #98)** — Range approach (pass min/max bounds) — under 5 min

#### Graphs (7 min)
- [ ] **Number of Islands (LC #200)** — Grid DFS — target under 5 min

#### Heaps (7 min)
- [ ] **Top K Frequent Elements (LC #347)** — Frequency map + min heap — under 7 min

#### DP (15 min)
- [ ] **Climbing Stairs (LC #70)** — `dp[i] = dp[i-1] + dp[i-2]` — under 3 min
- [ ] **Coin Change (LC #322)** — `dp[i] = min(dp[i-coin] + 1)` — under 5 min

#### Backtracking (7 min)
- [ ] **Subsets (LC #78)** — Choose-explore-unchoose — under 5 min

#### Binary Search (5 min)
- [ ] **Binary Search (LC #704)** — Standard template — under 2 min

#### Linked List (5 min)
- [ ] **Reverse Linked List (LC #206)** — Iterative with prev/curr — under 3 min

### Grade Yourself
- [ ] All 12 solved cold → ✅ You're interview-ready for DSA
- [ ] 10-11 solved → ⚠️ Re-solve the missed ones once more tonight
- [ ] Below 10 → 🔴 Spend 30 min extra re-drilling the weak patterns

---

## 🔁 Block 2: JavaScript Interview Questions — Verbal Practice (45 min)

> 💡 **Why this matters:** Rounds 3-5 are VERBAL technical interviews. You need to EXPLAIN concepts clearly, not just code them. Practice answering OUT LOUD.

### Core JavaScript — Answer Each in 1-2 Minutes ALOUD
- [ ] 1. What's the difference between `var`, `let`, and `const`?
  > Hint: scope (function vs block), hoisting, re-assignment, TDZ
- [ ] 2. What is a closure? Give a real use case.
  > Hint: inner function accesses outer scope even after outer returns. Use: data privacy, event handlers, debounce
- [ ] 3. Explain the JavaScript event loop.
  > Hint: call stack → Web APIs → callback queue → microtask queue (Promises) → event loop picks from queues when stack empty
- [ ] 4. What is hoisting?
  > Hint: var declarations moved to top (undefined), let/const are hoisted but in TDZ, function declarations fully hoisted
- [ ] 5. Explain `this` in arrow functions vs regular functions.
  > Hint: arrow inherits `this` from surrounding scope, regular depends on HOW it's called (object, new, call/apply/bind)
- [ ] 6. What is prototypal inheritance?
  > Hint: objects inherit from other objects via `__proto__`/prototype chain. `Object.create()`, constructor prototype
- [ ] 7. `Promise.all` vs `Promise.allSettled` vs `Promise.race`?
  > Hint: all = fail-fast (rejects on first rejection), allSettled = waits for all (never rejects), race = first to settle wins
- [ ] 8. What is debouncing vs throttling?
  > Hint: debounce = waits for pause (search input), throttle = max once per interval (scroll handler)
- [ ] 9. Explain `map`, `filter`, `reduce` with examples.
  > Hint: map transforms each, filter selects matching, reduce accumulates to single value
- [ ] 10. What does `async/await` do under the hood?
  > Hint: syntactic sugar over Promises. async returns Promise, await pauses execution until Promise resolves

---

## 🔁 Block 3: React Interview Questions — Verbal Practice (45 min)

### React Core — Answer Each in 1-2 Minutes ALOUD
- [ ] 1. What is the Virtual DOM? How does reconciliation work?
  > Hint: lightweight JS copy of real DOM. React diffs old vs new VDOM, updates only changed nodes (reconciliation). Uses diffing algorithm with keys.
- [ ] 2. Explain `useState` — why can't you mutate state directly?
  > Hint: useState returns [value, setter]. Direct mutation won't trigger re-render. React needs setter to know state changed → schedule re-render.
- [ ] 3. Explain `useEffect` — dependencies array, cleanup function.
  > Hint: runs side effects. [] = mount only, [dep] = when dep changes, no array = every render. Cleanup runs before next effect and on unmount.
- [ ] 4. `useRef` — when to use? Does it trigger re-render?
  > Hint: NO re-render. Persists value across renders. Use for: DOM refs, storing previous values, interval IDs.
- [ ] 5. `useMemo` vs `useCallback` — when to use each?
  > Hint: useMemo = memoize computed VALUE, useCallback = memoize FUNCTION reference. Use when passing to child components to prevent unnecessary re-renders.
- [ ] 6. What is Context API? When to use it vs Redux?
  > Hint: Context = createContext + Provider + useContext. Good for simple shared state (theme, auth). Redux = complex state with many actions, middleware, devtools.
- [ ] 7. React Router — BrowserRouter, Route, Link, useNavigate, useParams.
  > Hint: BrowserRouter wraps app, Route maps path to component, Link for navigation (no reload), useNavigate for programmatic nav, useParams for dynamic segments.
- [ ] 8. What is a controlled vs uncontrolled component?
  > Hint: Controlled = React state drives the input (value + onChange). Uncontrolled = DOM manages its own state (useRef to read).
- [ ] 9. What are keys in React? Why are they important?
  > Hint: Keys help React identify which items changed/added/removed in lists. Without unique keys, React re-renders everything. Use unique IDs, NOT array index.
- [ ] 10. Explain React lifecycle in functional components.
  > Hint: Mount = useEffect(fn, []), Update = useEffect(fn, [deps]), Unmount = cleanup function in useEffect.

---

## 🔁 Block 4: Node.js + Express + Backend Interview Questions (30 min)

### Answer Each ALOUD
- [ ] 1. What is Node.js? V8 engine? Non-blocking I/O?
  > Hint: JS runtime built on Chrome's V8. Single-threaded, event-driven, non-blocking I/O for high concurrency.
- [ ] 2. Explain the Node.js event loop.
  > Hint: Phases: timers → I/O callbacks → idle/prepare → poll → check → close. Process.nextTick runs between phases.
- [ ] 3. CommonJS vs ESM?
  > Hint: CommonJS = require/module.exports (Node default). ESM = import/export (modern, tree-shakable). "type": "module" in package.json.
- [ ] 4. What is Express middleware? How does next() work?
  > Hint: Functions with (req, res, next). Executed in order. Call next() to pass to next middleware. Error middleware has 4 params (err, req, res, next).
- [ ] 5. `req.params` vs `req.query` vs `req.body`?
  > Hint: params = URL segments (/users/:id), query = ?key=value pairs, body = POST/PUT payload (needs express.json()).
- [ ] 6. How do you handle errors in Express?
  > Hint: Error-handling middleware with 4 params. Use try/catch in async routes. Centralized error handler at bottom of middleware chain.
- [ ] 7. What is JWT? How does auth work?
  > Hint: JSON Web Token = header.payload.signature. Stateless auth. Server signs token on login, client sends in Authorization header, server verifies signature.
- [ ] 8. What is REST? Name HTTP methods and status codes.
  > Hint: Representational State Transfer. GET=read, POST=create, PUT=update, DELETE=delete. 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error.
- [ ] 9. What is CORS? How do you enable it?
  > Hint: Cross-Origin Resource Sharing. Browser security. Enable with `cors` middleware or set Access-Control-Allow-Origin header.
- [ ] 10. SQL vs NoSQL — when to use each?
  > Hint: SQL = structured, relations, ACID (PostgreSQL). NoSQL = flexible schema, nested data, horizontal scaling (MongoDB). SQL for complex joins, NoSQL for rapid iteration.

---

## 🔁 Block 5: Mock Coding Round Simulation (1.5h)

> 💡 **CRITICAL:** This simulates the ACTUAL Prodesk test format. Treat this as the real thing. No looking up. No hints. Timer is LAW.

### Simulation 1 — Online Technical Test (30 min STRICT)
> Set a 30-minute timer. Close all tabs except VS Code. No Google.

- [ ] **Problem 1 (15 min): Implement Selection Sort**
  - Input: array of integers
  - Output: sorted array
  - Write clean code with good variable names
  - Test with at least 2 different inputs

- [ ] **Problem 2 (15 min): Implement a Closure-based Module**
  - Create `createCounter()` that returns an object with:
    - `increment()` → increases count by 1
    - `decrement()` → decreases count by 1
    - `getValue()` → returns current count
    - `reset()` → sets count back to 0
  - The internal count should NOT be directly accessible (private via closure)

### Grade Simulation 1
- [ ] Both solved cleanly within time → ✅ Round 1 ready
- [ ] One solved → ⚠️ Practice the failed one once more
- [ ] Neither solved → 🔴 Go back to Day 25 Block 3 and re-drill

### Simulation 2 — Machine/Coding Test (60 min STRICT)
> Set a 60-minute timer. Use VS Code. Build actual working code.

- [ ] **Task 1 (20 min): Build an Accordion in React**
  - At least 3 sections with title + content
  - Click to toggle, only one open at a time
  - Looks presentable (basic CSS styling)
  - Test: all interactions work correctly

- [ ] **Task 2 (20 min): Build a Contact Form in React**
  - Name, Email, Phone, Message fields
  - Validation: required fields, email format, phone format
  - Error messages shown below invalid fields
  - Success state on valid submission

- [ ] **Task 3 (20 min): Build a Simple REST API with Express**
  - At least 2 routes (GET all items, POST new item)
  - Proper status codes (200, 201)
  - JSON response format
  - Error handling for invalid requests

### Grade Simulation 2
- [ ] All 3 built and working within time → ✅ Round 2 ready!
- [ ] 2/3 built → ⚠️ You'll pass but practice the missed one tonight
- [ ] 1/3 or 0/3 → 🔴 Spend more time on React components — that's the main test

---

## 🔁 Block 6: VS Code Setup & Environment Check (30 min)

> 💡 **CRITICAL:** Prodesk does OFFLINE coding on YOUR laptop. If your environment fails, you fail.

### Extensions Installed & Working
- [ ] ES7+ React/Redux/React-Native Snippets (`rfce` → creates component)
- [ ] Prettier — Code Formatter
- [ ] ESLint
- [ ] Live Server (for HTML/CSS/JS files)
- [ ] Thunder Client (for testing APIs)

### Environment Verified
- [ ] Run `node -v` — Node.js installed? ✅
- [ ] Run `npm -v` — npm working? ✅
- [ ] Run `npx create-react-app test-check --template default` — React works? ✅
- [ ] Can create Express server and hit it with Thunder Client? ✅
- [ ] Delete test projects after verifying

### VS Code Shortcuts (memorize for speed)
- [ ] `Ctrl+D` — Select next occurrence
- [ ] `Ctrl+Shift+P` — Command palette
- [ ] `` Ctrl+` `` — Toggle terminal
- [ ] `Alt+Up/Down` — Move line up/down
- [ ] `Ctrl+/` — Toggle comment
- [ ] `Ctrl+Shift+K` — Delete line
- [ ] `rfce` + Tab — React functional component (with ES7 snippets)

### Prepare Boilerplate Files (save these for quick start on drive day)
- [ ] Save a blank React component template
- [ ] Save a blank Express server template
- [ ] Save a basic HTML/CSS/JS template

---

## 🔁 Block 7: System Design & Conceptual Awareness (30 min)

> 💡 **Why this matters:** The 2 extra technical rounds for SDE will test if you understand HOW systems work, not just coding.

### Know These Concepts (explain in 2-3 sentences each)
- [ ] **Microservices vs Monolith** — Monolith: single codebase, simpler deploy. Microservices: separate services communicating via APIs, independently deployable, better for large teams/scale.
- [ ] **Docker** — Containerization tool. Packages app + dependencies into a container. Runs the same everywhere (dev, staging, prod). Dockerfile defines the image.
- [ ] **CI/CD** — Continuous Integration (auto test on push) + Continuous Deployment (auto deploy on merge). Tools: GitHub Actions, Jenkins.
- [ ] **OAuth 2.0** — Delegated authorization. "Login with Google" — app gets limited access without seeing user's Google password. Uses authorization codes + tokens.
- [ ] **JWT** — JSON Web Token for stateless auth. Three parts: header.payload.signature. Server signs on login, client sends with each request, server verifies.
- [ ] **WebSockets** — Full-duplex (bidirectional) real-time communication. Unlike HTTP (request-response), both client and server can send anytime. Use: chat, live updates.
- [ ] **Redis** — In-memory key-value store. Used as cache (fast lookups), session store, rate limiter. Sub-millisecond reads.
- [ ] **LLM** — Large Language Model (GPT, etc). Trained on text data, generates human-like responses. Used in chatbots, code assistants, content generation.
- [ ] **CAP Theorem** — Distributed systems can guarantee only 2 of 3: Consistency, Availability, Partition tolerance. Most systems choose AP or CP.
- [ ] **MVC Pattern** — Model (data/business logic), View (UI/presentation), Controller (handles input, updates model). Separates concerns.

---

## 🔁 Block 8: Resume & Project Preparation (30 min)

### For EVERY Project on Your Resume, Answer These
- [ ] What problem does it solve? (1 sentence)
- [ ] What tech stack did you use and WHY each choice?
- [ ] What was the hardest challenge and how did you overcome it?
- [ ] What would you improve if you rebuilt it today?
- [ ] Can you explain every line of code?

### Prepare Standard HR Answers (practice ALOUD)
- [ ] **"Tell me about yourself"** (30-second pitch):
  > "I'm [name], a [year] B.Tech student from [college]. I'm passionate about full-stack development — I've built projects using React, Node.js, and Express. I've solved 85+ DSA problems covering arrays, trees, graphs, and DP. I'm excited about building scalable web applications, which is why the SDE role at Prodesk excites me."

- [ ] **"Why Prodesk?"**
  > "Prodesk is building custom ERP solutions with a modern tech stack including Python, React, and AI integration. I'm excited about the chance to work on real enterprise systems while growing as a full-stack developer. The breadth of technologies — from frontend to cloud deployment — aligns perfectly with my learning goals."

- [ ] **"Where do you see yourself in 2-3 years?"**
  > "In the short term, I want to master full-stack development and contribute meaningfully to production systems. In 2-3 years, I see myself taking ownership of modules, mentoring juniors, and growing toward a tech lead role where I can influence architectural decisions."

- [ ] **"Tell me about a challenge you overcame"** (STAR Format):
  > Situation: [describe context]
  > Task: [what you needed to do]
  > Action: [what you specifically did]
  > Result: [what happened, what you learned]

- [ ] **"What are your strengths?"**
  > "I'm a disciplined learner — I've been following a structured 28-day SDE preparation plan, solving problems daily and building projects. I write clean, well-documented code and I'm comfortable working across the full stack."

---

## 📈 Day 26 Scorecard

- [ ] All 12 DSA problems solved cold within time limits ✅
- [ ] Can answer all 10 JS interview questions verbally ✅
- [ ] Can answer all 10 React interview questions verbally ✅
- [ ] Can answer all 10 Backend interview questions verbally ✅
- [ ] Mock Simulation 1 passed (Selection Sort + Closure) ✅
- [ ] Mock Simulation 2 passed (Accordion + Form + API) ✅
- [ ] VS Code environment verified and ready ✅
- [ ] System design concepts can be explained in 2-3 sentences each ✅
- [ ] Resume projects prepared — can explain every detail ✅
- [ ] HR answers practiced aloud ✅

---

> 🕐 **Total time today: ~6h**
>
> ⚡ **Priority if short on time:** Mock Simulation (Block 5) → DSA Speed Revision (Block 1) → React Interview Q&A (Block 3) → JS Interview Q&A (Block 2) → VS Code Setup (Block 6) → Backend Q&A (Block 4) → System Design (Block 7) → HR Prep (Block 8)
>
> 🎯 **After today, you should feel CONFIDENT. You've solved 85+ problems, you can build React components fast, you know Express, and you can explain everything verbally. That puts you ahead of most candidates. Go get it! 💪**
