# Day 19 — TODO Checklist
### Greedy Algorithms + React Context API

---

## 🔴 Warm-up (10 min)
- [ ] Speed-solve **Longest Substring Without Repeating Characters (LC #3)** — no hints, target under 5 min
- [ ] Speed-solve **Subsets (LC #78)** — no hints, target under 5 min
- [ ] If failed either: schedule 15 min extra practice tonight for the weak one

---

## DSA: Greedy Fundamentals (1.5h)
- [ ] Learn greedy approach — make the BEST local choice at each step
- [ ] Learn greedy vs DP — greedy picks local optimum, DP considers ALL choices via subproblems
- [ ] Learn when greedy works: optimal substructure + greedy choice property
- [ ] Learn how to identify greedy problems: "max/min" with constraints, sorting + one-pass, interval scheduling
- [ ] **Solve: Jump Game (LC #55)** — Greedy reachability: track `maxReach`, if `i > maxReach` return false
- [ ] **Solve: Jump Game II (LC #45)** — Greedy BFS-like: track `farthest`, `end`, increment `jumps` when `i == end`
- [ ] **Solve: Best Time to Buy and Sell Stock II (LC #122)** — Greedy collect profits: add every positive difference
- [ ] **Solve: Gas Station (LC #134)** — Greedy running sum: if `tank < 0`, reset start to `i+1`

---

## DSA: Greedy + Interval Problems (1h)
- [ ] **Understand: Meeting Rooms** — Sort by start time, check for overlaps (understanding only)
- [ ] **Solve: Non-overlapping Intervals (LC #435)** — Sort by END time, greedily select non-overlapping (Activity Selection)
- [ ] **Review: Merge Intervals (LC #56)** — Sort by start, merge overlapping (already solved in Week 1, quick re-solve)
- [ ] Understand WHY sorting by end time works for interval scheduling (ending earlier = more room for future intervals)

---

## React: Context API (1h)
- [ ] Learn `createContext()` — creates a context object with a default value
- [ ] Learn `<Context.Provider value={...}>` — provides context value to child tree
- [ ] Learn `useContext(Context)` — consumes the nearest Provider's value
- [ ] **Build: Theme Context** — dark/light mode toggle using Context (Provider at App level, useContext in child components)
- [ ] **Build: Auth Context** — user login state shared across components without prop drilling
- [ ] Learn when Context is enough vs when you need Redux/Zustand (Context = simple shared state, Redux = complex state logic with many actions)
- [ ] Learn to avoid unnecessary re-renders with Context (split contexts, memoize values)

---

## 📝 Revision (30 min)

### Spaced recall from Day 15 (4 days ago):
- [ ] Recall: **All 4 tree traversals** — Inorder (L→Root→R), Preorder (Root→L→R), Postorder (L→R→Root), Level Order (BFS with queue)
- [ ] Recall: **Maximum Depth of Binary Tree approach** — `1 + max(left, right)`, base case `null → 0`
- [ ] Recall: **DFS template for trees** — base case (null) → recurse left/right → combine results → return to parent
- [ ] Recall: **Sliding Window template** — two pointers, expand right, shrink left when invalid, update answer

### Spaced recall from Day 17 (2 days ago):
- [ ] Recall: **Tree Divide & Conquer** — build result from left + right subtree results (Diameter, Balanced Tree)
- [ ] Recall: **LCA of BST** — use BST property: both less → go left, both greater → go right, split → LCA
- [ ] Recall: **LCA of Binary Tree** — post-order DFS, if both left and right non-null → root is LCA
- [ ] Recall: **Diameter of Binary Tree** — global max variable + return height upward, diameter = leftH + rightH at each node

---

## 🃏 Flashcards (30 min)
- [ ] Card: **Greedy vs DP** — Greedy: best LOCAL choice each step. DP: consider ALL choices via subproblems. Greedy works when local optimum → global optimum.
- [ ] Card: **Jump Game approach (LC #55)** — Track `maxReach`. If `i > maxReach`, can't reach → false. Update `maxReach = max(maxReach, i + nums[i])`. O(n).
- [ ] Card: **Jump Game II approach (LC #45)** — BFS-like: track `farthest`, `end`, `jumps`. When `i == end`, increment jumps, set `end = farthest`. O(n).
- [ ] Card: **Gas Station approach (LC #134)** — Track `totalGas`, `totalCost`, `tank`, `start`. If `tank < 0`, reset `start = i+1`, `tank = 0`. Return start if `totalGas >= totalCost`, else -1.
- [ ] Card: **Non-overlapping Intervals (LC #435)** — Sort by END time. Greedily keep non-overlapping (if `start >= prevEnd`). Count removals. O(n log n). Why end? Ending earlier = more room.
- [ ] Card: **Context API pattern** — `createContext()` → `<Provider value={state}>` wraps tree → `useContext()` consumes. Avoids prop drilling. Split contexts to avoid re-render.
- [ ] Card: **Greedy identification checklist** — "max/min" + constraint, sorting + one-pass works, problem seems "too easy" for DP, interval scheduling

---

## End-of-Day Self-Check

- [ ] Can explain greedy vs DP and WHEN greedy works?
- [ ] Can solve Jump Game (reachability) from memory?
- [ ] Can explain WHY we sort by end time for interval scheduling?
- [ ] Can explain Gas Station's key insight (if total gas ≥ total cost, solution exists)?
- [ ] Can use createContext + Provider + useContext to share state without prop drilling?
- [ ] Can explain when Context is enough vs when you need Redux?
- [ ] Day 15 + Day 17 revision complete — tree traversals and LCA patterns recalled?
- [ ] Total problems solved: **78+** ✅

---

> 🕐 **Total time today: ~5h 30m**
> 
> ⚡ **Priority order if short on time:** Greedy Fundamentals → Greedy Intervals → Revision (Day 15 recall) → React Context → Flashcards
