# Day 24 — TODO Checklist ✅ COMPLETED
### Graphs — Topological Sort, Shortest Path + Express Architecture

---

## 🔥 Warm-up: Graph DFS (10 min)

- [x] Speed-check: solve Clone Graph (LC #133) from memory — under 5 min
- [x] Confirm graph DFS with HashMap feels natural

---

## 📊 DSA: Topological Sort + Advanced Graphs (1.5h)

- [x] **Solve: Alien Dictionary** (understand approach — use Course Schedule II pattern)
- [x] **Solve: Word Ladder (LC #127)** — BFS shortest path (word transformation)
- [x] **Solve: Number of Connected Components** — Union-Find or DFS approach

> 💡 **Word Ladder insight:** Each word is a node, two words are connected if they differ by exactly 1 character. BFS gives shortest transformation sequence.

---

## 📊 DSA: Shortest Path + Union-Find (1h)

- [x] Learn Dijkstra's algorithm (greedy + min-heap, for weighted graphs)
- [x] Learn Union-Find (Disjoint Set Union) — find + union with path compression + union by rank
- [x] **Solve: Redundant Connection (LC #684)** — Union-Find (detect cycle-forming edge)
- [x] **Solve: Network Delay Time (LC #743)** — Dijkstra's algorithm

> 💡 **Union-Find key operations:**
> - `find(x)` — find root with path compression
> - `unite(x, y)` — merge sets, return false if already connected (= cycle!)

---

## 💻 Backend: Production Architecture (1h)

- [x] Layered architecture: Route → Controller → Service → Repository/Model
- [x] Folder structure best practices (`src/routes`, `src/controllers`, `src/services`, `src/middlewares`)
- [x] Input validation (Joi/Zod) — validate before processing
- [x] Centralized error handling — single error handler middleware
- [x] Environment variables — `.env` + `dotenv` package

---

## 🔄 Revision — Spaced Recall from Day 20 (30 min)

- [x] Mixed practice patterns from Week 3
- [x] React Router setup — BrowserRouter, Routes, Route, Link, useNavigate, useParams
- [x] Validate BST range approach — pass min/max bounds through recursion

---

## 🃏 Flashcards (30 min)

- [x] Create card: Topological sort — Kahn's BFS vs DFS approach
- [x] Create card: Dijkstra's algorithm — greedy + min-heap, O((V+E) log V)
- [x] Create card: Union-Find — path compression + union by rank
- [x] Create card: Express layered architecture — Route → Controller → Service → Model
- [x] Create card: Centralized error handling in Express

---

## 📈 Day 24 Scorecard

- [x] DSA problems solved today: **5** (Alien Dictionary, Word Ladder, Connected Components, Redundant Connection, Network Delay Time)
- [x] Cumulative DSA problems: **96+** ✅
- [x] New patterns learned: Union-Find, Dijkstra's, BFS Shortest Path
- [x] Graph patterns complete ✅
- [x] Express architecture understood ✅
- [x] Flashcards created: 5 new (cumulative: 95+)

---

> 🕐 **Total time today: ~4h 30m**
>
> ✅ **Day 24 COMPLETE** — All graph patterns done! Ready for Dynamic Programming.
