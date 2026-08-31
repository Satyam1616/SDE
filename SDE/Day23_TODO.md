# Day 23 — TODO Checklist
### Graphs — Connected Components, Cycle Detection + Express Basics

---

## 🔥 Warm-up: Graph BFS (10 min)

- [ ] Re-solve **Number of Islands (LC #200)** from memory — target under 5 min
- [ ] Confirm BFS/DFS on grids feels natural before moving on

---

## 📊 DSA: Graph Applications (1.5h)

- [ ] **Solve: Pacific Atlantic Water Flow (LC #417)** — Multi-source DFS/BFS
- [ ] **Solve: Rotting Oranges (LC #994)** — Multi-source BFS (simultaneous spread)
- [ ] **Solve: 01 Matrix (LC #542)** — Multi-source BFS (shortest distance)

> 💡 **Key insight for multi-source BFS:** Start by adding ALL sources to the queue at once, then expand level by level. This gives you "simultaneous wave" expansion.

---

## 📊 DSA: Cycle Detection + Course Schedule (1h)

- [ ] Learn cycle detection in **directed** graphs (3 states: unvisited, in-progress, visited)
- [ ] Learn cycle detection in **undirected** graphs (parent tracking)
- [ ] Learn **Kahn's Algorithm** (BFS-based topological sort using in-degree)
- [ ] **Solve: Course Schedule (LC #207)** — Cycle detection in directed graph
- [ ] **Solve: Course Schedule II (LC #210)** — Topological sort (return order)

> 💡 **Kahn's in plain English:**
> 1. Find all nodes with no incoming edges (no prerequisites)
> 2. Process them, remove their outgoing edges
> 3. New nodes with zero incoming edges → add to queue
> 4. If ALL nodes processed → no cycle. If some remain → cycle exists.

---

## 💻 Backend: Express Fundamentals (1h)

- [ ] Express setup — `npm init`, `npm install express`, basic server
- [ ] Middleware concept — `next()`, order matters, `app.use()`
- [ ] Route parameters — `req.params` (e.g., `/users/:id`)
- [ ] Query strings — `req.query` (e.g., `?page=1&limit=20`)
- [ ] Request body — `req.body` (with `express.json()` middleware)
- [ ] Response methods — `res.json()`, `res.status()`, `res.send()`
- [ ] Error-handling middleware — `(err, req, res, next)` signature

---

## 🔄 Revision — Spaced Recall from Day 19 (30 min)

- [ ] Greedy patterns — Jump Game (reachability), Gas Station (running sum)
- [ ] Non-overlapping Intervals — sort by end, greedy skip
- [ ] Best Time to Buy/Sell Stock II — collect all profits
- [ ] When to use Greedy vs DP (greedy = local optimal works globally)

---

## 🃏 Flashcards (30 min)

- [ ] Create card: BFS vs DFS on graphs — when to use which
- [ ] Create card: Cycle detection — directed (3 states) vs undirected (parent tracking)
- [ ] Create card: Topological sort — Kahn's BFS vs DFS approach
- [ ] Create card: Express middleware chain — how `next()` works
- [ ] Create card: `req.params` vs `req.query` vs `req.body`

---

## 📈 Day 23 Targets

- [ ] DSA problems solved today: **5** (Pacific Atlantic, Rotting Oranges, 01 Matrix, Course Schedule, Course Schedule II)
- [ ] Cumulative DSA problems: **91+**
- [ ] New patterns learned: Multi-source BFS, Cycle Detection (Directed), Topological Sort
- [ ] Can detect cycles in graphs ✅
- [ ] Topological sort understood ✅
- [ ] Express middleware working ✅
- [ ] Flashcards created: 5 new (cumulative: 90+)

---

> 🕐 **Total time today: ~4h 30m**
>
> ⚡ **Priority order if short on time:** Warm-up → Graph Applications (Rotting Oranges is highest priority) → Cycle Detection + Course Schedule → Express → Revision → Flashcards
