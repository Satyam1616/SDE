# Day 20 — TODO Checklist
### Mixed Practice + React Router + 🔴 Final Weak Area Stress Test

---

## 🔴 COLD STRESS TEST: Week 2 Weak Areas (30 min — TIMED, NO HINTS)
> ⚠️ Set a 30-min timer. This is the FINAL test of your weak areas. If you solve all 3 without hints, your weak areas are FIXED.

- [x] **Solve: Longest Substring Without Repeating Characters (LC #3)** — 8 min max, no hints
- [x] **Solve: Subsets (LC #78)** — 8 min max, no hints
- [x] **Solve: Combination Sum (LC #39)** — 10 min max, no hints
- [x] **Grade yourself:**
  - [x] All 3 solved without hints → ✅ Weak areas FIXED
  - [x] 2/3 solved → ⚠️ One more session needed on the failed one
  - [x] 1/3 or 0/3 → 🔴 Revisit the guided practice from Day 15/16 tonight

---

## DSA: Mixed Practice (1h)
> Re-solve one problem from each major topic this week — tests breadth and retention.

- [x] **Re-solve: Validate BST (LC #98)** — Tree: range approach, pass min/max bounds
- [x] **Re-solve: Top K Frequent Elements (LC #347)** — Heap: frequency map + min heap of size k
- [x] **Re-solve: Jump Game (LC #55)** — Greedy: track `maxReach`, if `i > maxReach` return false
- [x] **Re-solve: Koko Eating Bananas (LC #875)** — Binary Search on Answer Space: BS on speed, check feasibility

---

## React: React Router (1h)
- [x] Install React Router v6: `npm install react-router-dom`
- [x] Learn `BrowserRouter` — wraps entire app, enables client-side routing
- [x] Learn `Routes` + `Route` — `<Routes><Route path="/" element={<Home />} /></Routes>`
- [x] Learn `Link` vs `<a>` — `<Link to="/about">` prevents full page reload
- [x] Learn `useNavigate()` — programmatic navigation (`navigate('/dashboard')`)
- [x] Learn `useParams()` — extract dynamic URL params (`/user/:id` → `const { id } = useParams()`)
- [x] **Build: Protected Route** — redirect to `/login` if not authenticated (check auth context from Day 19)
- [x] **Build: 404 Page** — `<Route path="*" element={<NotFound />} />` for unmatched routes
- [x] Learn nested routes — `<Route path="dashboard" element={<Dashboard />}><Route path="settings" element={<Settings />} /></Route>`

---

## Catch-up (1h)
> Use this time for ANY weak topic from this week. Pick based on your stress test results.

- [x] If Sliding Window failed: Re-do guided practice from Day 15, then cold-solve LC #3 again
- [x] If Backtracking failed: Re-do guided practice from Day 16, then cold-solve LC #78 and LC #39 again
- [x] If Trees shaky: Re-solve Diameter (LC #543) + LCA of Binary Tree (LC #236)
- [x] If Heaps shaky: Re-solve Kth Largest (LC #215) + Merge K Sorted Lists (LC #23)
- [x] If all confident: Try **new problems** — Subtree of Another Tree (LC #572), Task Scheduler (LC #621)

---

## 📝 Revision (30 min)

### Spaced recall from Day 16 (4 days ago):
- [x] Recall: **BST Property** — for EVERY node: all left descendants < node < all right descendants
- [x] Recall: **Validate BST approach** — pass down valid range (minVal, maxVal), check `node->val > min && node->val < max`
- [x] Recall: **BST Search** — if target < root go left, if target > root go right, O(h)
- [x] Recall: **BST Insert** — find the null position using BST search, insert there
- [x] Recall: **Kth Smallest in BST** — inorder traversal (gives sorted order), stop at kth element

### Spaced recall from Day 18 (2 days ago):
- [x] Recall: **Heap operations** — insert O(log n), delete top O(log n), peek O(1)
- [x] Recall: **Top K pattern** — min heap of size k, top element = kth largest
- [x] Recall: **Two Heaps for median** — max heap (left half) + min heap (right half), balance sizes
- [x] Recall: **Backtracking template** — choose → explore → unchoose, `startIndex` prevents going backward

---

## 🃏 Flashcards (30 min)

### Full deck review:
- [x] Review ALL existing flashcards (~75+ cards) — mark any you get wrong for re-study

### Create 5 new cards:
- [x] Card: **React Router setup** — `<BrowserRouter><Routes><Route path="/" element={<Home />} /></Routes></BrowserRouter>`
- [x] Card: **useNavigate vs Link** — `Link` for declarative (JSX), `useNavigate()` for programmatic (after form submit, auth check)
- [x] Card: **useParams** — `<Route path="/user/:id">` → `const { id } = useParams()` extracts dynamic segments
- [x] Card: **Protected Route pattern** — Component that checks auth state, renders children if authenticated, redirects to login if not
- [x] Card: **Combination Sum (LC #39)** — Backtracking with `startIndex`, BUT allow reuse of same element (`recurse with i`, not `i+1`)

---

## End-of-Day Self-Check

- [x] Stress test complete — did you solve all 3 weak area problems without hints?
- [x] Can re-solve Validate BST, Top K Frequent, Jump Game, and Koko Bananas from memory?
- [x] Can set up React Router with routes, links, params, and protected routes?
- [x] Can explain `useNavigate` vs `Link` and when to use each?
- [x] Can implement a protected route using auth context?
- [x] Catch-up session addressed your weakest topic?
- [x] Day 16 + Day 18 revision complete — BST ops and heap patterns recalled?
- [x] Full flashcard deck reviewed?
- [x] Total problems solved: **80+** ✅

---

> 🕐 **Total time today: ~5h 30m**
> 
> ⚡ **Priority order if short on time:** 🔴 Stress Test → Mixed Practice → Revision (Day 16 recall) → React Router → Catch-up → Flashcards
