# Day 18 — TODO Checklist
### Heaps & Priority Queues + React Custom Hooks + 🟡 Day 17 Carry-Over

---

## 🔴 Warm-up (10 min)
- [ ] Speed-solve **Subsets (LC #78)** — no hints, target under 5 min
- [ ] If failed: schedule 15 min extra backtracking practice tonight

---

## DSA: Heap Fundamentals (1.5h)
- [ ] Learn min heap vs max heap concept (parent ≥ or ≤ children)
- [ ] Learn heap operations: insert (bubble up), delete top (bubble down), peek
- [ ] Learn C++ `priority_queue` syntax — max heap (default) vs min heap (`greater<int>`)
- [ ] **Solve: Kth Largest Element in Array (LC #215)** — Min heap of size k
- [ ] **Solve: Top K Frequent Elements (LC #347)** — Frequency map + min heap
- [ ] **Solve: Last Stone Weight (LC #1046)** — Max heap simulation

---

## DSA: Heap Applications (1h)
- [ ] **Understand: Find Median from Data Stream (LC #295)** — Two heaps pattern (max heap left + min heap right)
- [ ] **Solve: Merge K Sorted Lists (LC #23)** — Min heap holding heads of each list

---

## React: Custom Hooks (1h)
- [ ] Learn rules of hooks (prefix with `use`, top-level only, inside components/hooks only)
- [ ] **Build: `useFetch`** — data fetching with loading/error states + AbortController cleanup
- [ ] **Build: `useDebounce`** — debounced value with setTimeout + cleanup
- [ ] **Build: `useLocalStorage`** — persist state to localStorage with lazy initializer

---

## 📝 Revision — COMBINED (45 min)

### From Day 17 (skipped — do these FIRST):
- [ ] Spaced recall: **Binary search templates** (standard BS, BS on rotated array)
- [ ] Spaced recall: **BS on answer space** — re-explain Koko Eating Bananas approach
- [ ] Cold-solve **Subsets (LC #78)** again if warm-up didn't go clean

### Day 18 own:
- [ ] Spaced recall from Day 14: **All 27 Week 1+2 patterns** — name, when to use, example
- [ ] Spaced recall from Day 14: **Timed test review** — what went wrong?
- [ ] Cold re-solve **Permutations (LC #46)** — no hints
- [ ] Spaced recall from Day 16: **BST operations** — search, insert, validate
- [ ] Spaced recall from Day 16: **Validate BST** — range approach (pass min/max bounds)

---

## 🃏 Flashcards — COMBINED (45 min)

### From Day 17 (skipped — create these FIRST):
- [ ] Card: **LCA approach** — BST (use BST property, O(h)) vs Binary Tree (post-order DFS, O(n))
- [ ] Card: **Diameter of Binary Tree technique** — global max variable + return height upward
- [ ] Card: **useMemo vs useCallback** — useMemo memoizes value, useCallback memoizes function
- [ ] Card: **useRef** — persists across renders without causing re-render, DOM access
- [ ] Card: **React.memo** — wraps component to skip re-render if props unchanged

### Day 18 own:
- [ ] Card: **Heap operations complexity** — insert O(log n), delete top O(log n), peek O(1)
- [ ] Card: **C++ priority_queue syntax** — `priority_queue<int>` = max, `priority_queue<int, vector<int>, greater<int>>` = min
- [ ] Card: **Top K pattern** — min heap of size k, top = kth largest
- [ ] Card: **Two Heaps pattern** — max heap (left half) + min heap (right half) for running median
- [ ] Card: **Custom hook rules** — prefix `use`, call at top level only, only in components/hooks

---

## End-of-Day Self-Check

- [ ] Can explain min heap vs max heap?
- [ ] Can write `priority_queue` (both min and max) in C++ from memory?
- [ ] Can explain WHY min heap of size k gives kth largest?
- [ ] Can explain Two Heaps pattern for median?
- [ ] Built all 3 custom hooks (useFetch, useDebounce, useLocalStorage)?
- [ ] Day 17 debt cleared — all skipped cards and revision done?
- [ ] Total problems solved: **73** ✅

---

> 🕐 **Total time today: ~5h 40m** (normal 5h + 40m carry-over from Day 17)
> 
> ⚡ **Priority order if short on time:** Heap Fundamentals → Heap Applications → Day 17 Flashcards → Revision → React Custom Hooks → Day 18 Flashcards
