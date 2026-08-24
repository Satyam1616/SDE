# Day 20 — TODO Checklist
### Mixed Practice + React Router + 🔴 Final Weak Area Stress Test

---

## 🔴 COLD STRESS TEST: Week 2 Weak Areas (30 min — TIMED, NO HINTS)
> ⚠️ Set a 30-min timer. This is the FINAL test of your weak areas. If you solve all 3 without hints, your weak areas are FIXED.

- [ ] **Solve: Longest Substring Without Repeating Characters (LC #3)** — 8 min max, no hints
- [ ] **Solve: Subsets (LC #78)** — 8 min max, no hints
- [ ] **Solve: Combination Sum (LC #39)** — 10 min max, no hints
- [ ] **Grade yourself:**
  - [ ] All 3 solved without hints → ✅ Weak areas FIXED
  - [ ] 2/3 solved → ⚠️ One more session needed on the failed one
  - [ ] 1/3 or 0/3 → 🔴 Revisit the guided practice from Day 15/16 tonight

---

## DSA: Mixed Practice (1h)
> Re-solve one problem from each major topic this week — tests breadth and retention.

- [ ] **Re-solve: Validate BST (LC #98)** — Tree: range approach, pass min/max bounds
- [ ] **Re-solve: Top K Frequent Elements (LC #347)** — Heap: frequency map + min heap of size k
- [ ] **Re-solve: Jump Game (LC #55)** — Greedy: track `maxReach`, if `i > maxReach` return false
- [ ] **Re-solve: Koko Eating Bananas (LC #875)** — Binary Search on Answer Space: BS on speed, check feasibility

---

## React: React Router (1h)
- [ ] Install React Router v6: `npm install react-router-dom`
- [ ] Learn `BrowserRouter` — wraps entire app, enables client-side routing
- [ ] Learn `Routes` + `Route` — `<Routes><Route path="/" element={<Home />} /></Routes>`
- [ ] Learn `Link` vs `<a>` — `<Link to="/about">` prevents full page reload
- [ ] Learn `useNavigate()` — programmatic navigation (`navigate('/dashboard')`)
- [ ] Learn `useParams()` — extract dynamic URL params (`/user/:id` → `const { id } = useParams()`)
- [ ] **Build: Protected Route** — redirect to `/login` if not authenticated (check auth context from Day 19)
- [ ] **Build: 404 Page** — `<Route path="*" element={<NotFound />} />` for unmatched routes
- [ ] Learn nested routes — `<Route path="dashboard" element={<Dashboard />}><Route path="settings" element={<Settings />} /></Route>`

---

## Catch-up (1h)
> Use this time for ANY weak topic from this week. Pick based on your stress test results.

- [ ] If Sliding Window failed: Re-do guided practice from Day 15, then cold-solve LC #3 again
- [ ] If Backtracking failed: Re-do guided practice from Day 16, then cold-solve LC #78 and LC #39 again
- [ ] If Trees shaky: Re-solve Diameter (LC #543) + LCA of Binary Tree (LC #236)
- [ ] If Heaps shaky: Re-solve Kth Largest (LC #215) + Merge K Sorted Lists (LC #23)
- [ ] If all confident: Try **new problems** — Subtree of Another Tree (LC #572), Task Scheduler (LC #621)

---

## 📝 Revision (30 min)

### Spaced recall from Day 16 (4 days ago):
- [ ] Recall: **BST Property** — for EVERY node: all left descendants < node < all right descendants
- [ ] Recall: **Validate BST approach** — pass down valid range (minVal, maxVal), check `node->val > min && node->val < max`
- [ ] Recall: **BST Search** — if target < root go left, if target > root go right, O(h)
- [ ] Recall: **BST Insert** — find the null position using BST search, insert there
- [ ] Recall: **Kth Smallest in BST** — inorder traversal (gives sorted order), stop at kth element

### Spaced recall from Day 18 (2 days ago):
- [ ] Recall: **Heap operations** — insert O(log n), delete top O(log n), peek O(1)
- [ ] Recall: **Top K pattern** — min heap of size k, top element = kth largest
- [ ] Recall: **Two Heaps for median** — max heap (left half) + min heap (right half), balance sizes
- [ ] Recall: **Backtracking template** — choose → explore → unchoose, `startIndex` prevents going backward

---

## 🃏 Flashcards (30 min)

### Full deck review:
- [ ] Review ALL existing flashcards (~75+ cards) — mark any you get wrong for re-study

### Create 5 new cards:
- [ ] Card: **React Router setup** — `<BrowserRouter><Routes><Route path="/" element={<Home />} /></Routes></BrowserRouter>`
- [ ] Card: **useNavigate vs Link** — `Link` for declarative (JSX), `useNavigate()` for programmatic (after form submit, auth check)
- [ ] Card: **useParams** — `<Route path="/user/:id">` → `const { id } = useParams()` extracts dynamic segments
- [ ] Card: **Protected Route pattern** — Component that checks auth state, renders children if authenticated, redirects to login if not
- [ ] Card: **Combination Sum (LC #39)** — Backtracking with `startIndex`, BUT allow reuse of same element (`recurse with i`, not `i+1`)

---

## End-of-Day Self-Check

- [ ] Stress test complete — did you solve all 3 weak area problems without hints?
- [ ] Can re-solve Validate BST, Top K Frequent, Jump Game, and Koko Bananas from memory?
- [ ] Can set up React Router with routes, links, params, and protected routes?
- [ ] Can explain `useNavigate` vs `Link` and when to use each?
- [ ] Can implement a protected route using auth context?
- [ ] Catch-up session addressed your weakest topic?
- [ ] Day 16 + Day 18 revision complete — BST ops and heap patterns recalled?
- [ ] Full flashcard deck reviewed?
- [ ] Total problems solved: **80+** ✅

---

> 🕐 **Total time today: ~5h 30m**
> 
> ⚡ **Priority order if short on time:** 🔴 Stress Test → Mixed Practice → Revision (Day 16 recall) → React Router → Catch-up → Flashcards
