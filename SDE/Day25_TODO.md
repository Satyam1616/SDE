# Day 25 — TODO Checklist ✅ COMPLETED
### Dynamic Programming — 1D DP Foundations + Auth (JWT + bcrypt)

---

## 🔥 Warm-up: Graph BFS (10 min)

- [x] Speed-check: solve Rotting Oranges (LC #994) from memory — under 5 min

---

## 📊 DSA: 1D DP Fundamentals (2h)

- [x] Learn: DP = recursion + memoization (optimized recursion)
- [x] Understand: Top-down (memo) vs Bottom-up (tabulation)
- [x] Master the 4-Step DP Framework:
  - [x] Step 1: Define the STATE — what uniquely describes the subproblem?
  - [x] Step 2: Write the RECURRENCE RELATION — how does dp[i] relate to previous states?
  - [x] Step 3: Identify BASE CASES — what are the trivially known values?
  - [x] Step 4: Determine ORDER of computation — fill smallest to largest
- [x] **Solve: Climbing Stairs (LC #70)** — dp[i] = dp[i-1] + dp[i-2] (Fibonacci pattern)
- [x] **Solve: House Robber (LC #198)** — dp[i] = max(dp[i-1], dp[i-2] + nums[i]) (Skip/Take)
- [x] **Solve: House Robber II (LC #213)** — Circular variant (run twice: skip first or skip last)
- [x] **Solve: Coin Change (LC #322)** — dp[i] = min(dp[i], dp[i-coin] + 1) (Unbounded)
- [x] **Solve: Maximum Product Subarray (LC #152)** — Track both min and max (negative * negative = positive)

---

## 💻 Backend: Authentication (1h)

- [x] JWT structure — header.payload.signature
- [x] bcrypt for password hashing — salt rounds, `bcrypt.hash()`, `bcrypt.compare()`
- [x] Register + Login flow — hash password on register, compare on login, issue JWT
- [x] Middleware for protected routes — verify JWT, attach user to `req`
- [x] Access token vs refresh token (concept)

---

## 🔄 Revision — Spaced Recall from Day 21 (30 min)

- [x] Week 3 timed test patterns recall
- [x] All 39 patterns quick recall check

---

## 🃏 Flashcards (30 min)

- [x] Create card: DP vs Greedy vs Recursion — when to use which
- [x] Create card: Top-down (memoization) vs Bottom-up (tabulation)
- [x] Create card: Climbing Stairs recurrence — dp[i] = dp[i-1] + dp[i-2]
- [x] Create card: Coin Change approach — dp[i] = min(dp[i], dp[i-coin] + 1)
- [x] Create card: JWT structure — header.payload.signature, signing, verification

---

## 📈 Day 25 Scorecard

- [x] DSA problems solved today: **5** (Climbing Stairs, House Robber, House Robber II, Coin Change, Max Product Subarray)
- [x] Cumulative DSA problems: **101+** ✅
- [x] 1D DP framework understood ✅
- [x] JWT auth flow implemented ✅
- [x] Flashcards created: 5 new (cumulative: 100+)

---

> 🕐 **Total time today: ~4h 30m**
>
> ✅ **Day 25 COMPLETE** — 1D DP framework solid. Auth with JWT + bcrypt working. Ready for 2D DP!
