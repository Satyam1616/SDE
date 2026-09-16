# Day 23 — TODO Checklist ✅ COMPLETED
### Graphs — Connected Components, Cycle Detection + Express Basics

---

## 🔥 Warm-up: Graph BFS (10 min)

- [x] Re-solve **Number of Islands (LC #200)** from memory — target under 5 min
- [x] Confirm BFS/DFS on grids feels natural before moving on

---

## 📊 DSA: Graph Applications (1.5h)

- [x] **Solve: Pacific Atlantic Water Flow (LC #417)** — Multi-source DFS/BFS
- [x] **Solve: Rotting Oranges (LC #994)** — Multi-source BFS (simultaneous spread)
- [x] **Solve: 01 Matrix (LC #542)** — Multi-source BFS (shortest distance)

> 💡 **Key insight for multi-source BFS:** Start by adding ALL sources to the queue at once, then expand level by level. This gives you "simultaneous wave" expansion.

---

## 📊 DSA: Cycle Detection + Course Schedule (1h)

- [x] Learn cycle detection in **directed** graphs (3 states: unvisited, in-progress, visited)
- [x] Learn cycle detection in **undirected** graphs (parent tracking)
- [x] Learn **Kahn's Algorithm** (BFS-based topological sort using in-degree)
- [x] **Solve: Course Schedule (LC #207)** — Cycle detection in directed graph
- [x] **Solve: Course Schedule II (LC #210)** — Topological sort (return order)

> 💡 **Kahn's in plain English:**
> 1. Find all nodes with no incoming edges (no prerequisites)
> 2. Process them, remove their outgoing edges
> 3. New nodes with zero incoming edges → add to queue
> 4. If ALL nodes processed → no cycle. If some remain → cycle exists.

---

## 💻 Backend: Express Fundamentals (1h)

- [x] Express setup — `npm init`, `npm install express`, basic server
- [x] Middleware concept — `next()`, order matters, `app.use()`
- [x] Route parameters — `req.params` (e.g., `/users/:id`)
- [x] Query strings — `req.query` (e.g., `?page=1&limit=20`)
- [x] Request body — `req.body` (with `express.json()` middleware)
- [x] Response methods — `res.json()`, `res.status()`, `res.send()`
- [x] Error-handling middleware — `(err, req, res, next)` signature

---

## 🔄 Revision — Spaced Recall from Day 19 (30 min)

- [x] Greedy patterns — Jump Game (reachability), Gas Station (running sum)
- [x] Non-overlapping Intervals — sort by end, greedy skip
- [x] Best Time to Buy/Sell Stock II — collect all profits
- [x] When to use Greedy vs DP (greedy = local optimal works globally)

---

## 🃏 Flashcards (30 min)

- [x] Create card: BFS vs DFS on graphs — when to use which
- [x] Create card: Cycle detection — directed (3 states) vs undirected (parent tracking)
- [x] Create card: Topological sort — Kahn's BFS vs DFS approach
- [x] Create card: Express middleware chain — how `next()` works
- [x] Create card: `req.params` vs `req.query` vs `req.body`

---

## 📈 Day 23 Targets

- [x] DSA problems solved today: **5** (Pacific Atlantic, Rotting Oranges, 01 Matrix, Course Schedule, Course Schedule II)
- [x] Cumulative DSA problems: **91+**
- [x] New patterns learned: Multi-source BFS, Cycle Detection (Directed), Topological Sort
- [x] Can detect cycles in graphs ✅
- [x] Topological sort understood ✅
- [x] Express middleware working ✅
- [x] Flashcards created: 5 new (cumulative: 90+)

---

> 🕐 **Total time today: ~4h 30m**
>
> ⚡ **Priority order if short on time:** Warm-up → Graph Applications (Rotting Oranges is highest priority) → Cycle Detection + Course Schedule → Express → Revision → Flashcards
