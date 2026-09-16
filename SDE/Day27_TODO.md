# Day 27 — TODO Checklist ✅ COMPLETED
### Mixed Practice + Backend API Project + Catch-up

---

## 📊 DSA: Mixed Re-solve (1h)

- [x] **Re-solve: Number of Islands (LC #200)** — Graph DFS on grid
- [x] **Re-solve: Coin Change (LC #322)** — 1D DP (unbounded)
- [x] **Re-solve: Longest Common Subsequence (LC #1143)** — 2D DP (string match)
- [x] Re-solve any problem you got wrong this week

---

## 📊 DSA: Bonus Problems (1h)

- [x] **Solve: Partition Equal Subset Sum (LC #416)** — DP on subsequences (subset sum variant)
- [x] **Graph Valid Tree** — DFS + cycle check (n nodes, n-1 edges, all connected)
- [x] If shaky on any topic: re-did House Robber + Climbing Stairs + Course Schedule

> 💡 **Partition Equal Subset Sum insight:** Reduce to "can we find a subset with sum = totalSum/2?" — classic 0/1 knapsack DP with boolean dp[j] = can we make sum j?

---

## 💻 Backend: Mini API Project — auth-api (1h)

- [x] Built REST API from scratch with layered architecture
- [x] User registration + login (bcrypt + JWT)
- [x] Protected GET route with JWT middleware
- [x] Error handling middleware (centralized)
- [x] Input validation (validators layer)
- [x] Structure: `routes → controllers → services → repositories`
- [x] Environment variables via `.env`

> ✅ **auth-api project structure:**
> ```
> auth-api/src/
> ├── app.js, server.js
> ├── routes/        (auth.routes.js)
> ├── controllers/
> ├── services/      (auth.service.js)
> ├── repositories/  (user.repository.js)
> ├── middlewares/    (validate.middleware.js)
> ├── validators/
> └── utils/         (jwt.js)
> ```

---

## 🔄 Catch-up (1h)

- [x] Reviewed weakest topic from the week
- [x] Extra practice on any shaky patterns

---

## 🔄 Revision — Spaced Recall (30 min)

- [x] Day 23 recall: Cycle detection, topological sort, Course Schedule approach
- [x] Day 25 recall: 1D DP patterns, Coin Change recurrence, House Robber skip/take

---

## 🃏 Flashcards (30 min)

- [x] Full deck review (115+ cards)
- [x] Create card: Graph cycle detection — directed (3 states) vs undirected (parent)
- [x] Create card: Union-Find — find with path compression, union by rank
- [x] Create card: DP state definition — what uniquely describes the subproblem?
- [x] Create card: Partition Equal Subset Sum — reduce to subset sum = total/2
- [x] Create card: Express production patterns — layered architecture, validation, error handling

---

## 📈 Day 27 Scorecard

- [x] DSA problems solved/re-solved today: **5+** (re-solves + Partition Equal Subset Sum + Graph Valid Tree)
- [x] Cumulative DSA problems: **110+** ✅
- [x] Backend auth-api project working ✅
- [x] All week's topics reviewed ✅
- [x] Flashcards: 115+ cumulative ✅

---

> 🕐 **Total time today: ~5h**
>
> ✅ **Day 27 COMPLETE** — Backend API built, all graph + DP topics reviewed. Ready for Day 28 Week 4 Review!
