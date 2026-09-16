# Day 26 — TODO Checklist ✅ COMPLETED
### Dynamic Programming — 2D DP + Subsequences + API Design

---

## 🔥 Warm-up: 1D DP (10 min)

- [x] Speed-check: solve Climbing Stairs (LC #70) from memory — recurrence in under 2 min, code in under 3 min

---

## 📊 DSA: 2D DP + Subsequences (2h)

- [x] **Solve: Unique Paths (LC #62)** — 2D DP grid, dp[i][j] = dp[i-1][j] + dp[i][j-1]
- [x] **Solve: Longest Common Subsequence (LC #1143)** — 2D DP string, dp[i][j] = dp[i-1][j-1]+1 if match, else max(dp[i-1][j], dp[i][j-1])
- [x] **Solve: Word Break (LC #139)** — 1D DP string, dp[i] = true if any dp[j] && s[j..i] is in dict
- [x] **Solve: Decode Ways (LC #91)** — 1D DP decision, dp[i] depends on 1-digit and 2-digit decodings
- [x] **Solve: Longest Increasing Subsequence (LC #300)** — DP O(n²) or Binary Search O(n log n)

---

## 💻 Backend: API Design Best Practices (1h)

- [x] RESTful URL design — `/api/v1/users/:id`, nouns not verbs
- [x] HTTP methods & status codes — GET/POST/PUT/PATCH/DELETE, 200/201/400/401/404/500
- [x] Pagination — `?page=1&limit=20`, return total count
- [x] Filtering & sorting — `?status=active&sort=createdAt`
- [x] Response format consistency — `{ success, data, error, message }`
- [x] Rate limiting concept — prevent abuse, token bucket / sliding window
- [x] Input validation patterns — validate early, fail fast

---

## 🔄 Revision — Spaced Recall from Day 22 (30 min)

- [x] Graph BFS/DFS templates recall
- [x] Number of Islands approach — DFS to sink island, count starts
- [x] Adjacency list representation

---

## 🃏 Flashcards (30 min)

- [x] Create card: 2D DP grid pattern — dp[i][j] = dp[i-1][j] + dp[i][j-1]
- [x] Create card: LCS recurrence — match → dp[i-1][j-1]+1, else max(skip either)
- [x] Create card: LIS approach — DP O(n²) vs Binary Search O(n log n)
- [x] Create card: REST API design rules — nouns, versioning, status codes
- [x] Create card: HTTP status codes — 200/201/400/401/403/404/500

---

## 📈 Day 26 Scorecard

- [x] DSA problems solved today: **5** (Unique Paths, LCS, Word Break, Decode Ways, LIS)
- [x] Cumulative DSA problems: **106+** ✅
- [x] Can write 2D DP recurrences ✅
- [x] API design principles solid ✅
- [x] Flashcards created: 5 new (cumulative: 105+)

---

> 🕐 **Total time today: ~4h 30m**
>
> ✅ **Day 26 COMPLETE** — 2D DP and subsequences mastered. API design principles solid. Ready for mixed practice + backend project!
