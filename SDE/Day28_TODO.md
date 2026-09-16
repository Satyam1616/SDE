# Day 28 — TODO Checklist
### Week 4 Review Day (Graphs + DP + Backend Assessment)

---

## 🟡 Hints Warm-up Round (30 min)
> Before the real test, warm up by solving 2 problems WITH templates visible. Builds confidence.

- [ ] Solve a **graph BFS problem** with the BFS template on screen (e.g., Rotting Oranges or Number of Islands)
- [ ] Solve a **1D DP problem** with the DP framework on screen (e.g., Climbing Stairs or House Robber)
- [ ] Confirm you feel confident before moving to the cold test

---

## ⏱️ Week 4 Timed Test — COLD, NO HINTS (1h)
> Set a 60-min timer. Solve 3 problems without notes. This is your Week 4 assessment.

- [ ] **Problem 1 — Graph (20 min):** Number of Islands (LC #200) OR Rotting Oranges (LC #994)
- [ ] **Problem 2 — DP 1D (20 min):** House Robber (LC #198) OR Coin Change (LC #322)
- [ ] **Problem 3 — DP 2D (20 min):** Unique Paths (LC #62) OR Longest Common Subsequence (LC #1143)
- [ ] **Grade yourself:**
  - [ ] All 3 solved correctly → ✅ Week 4 solid
  - [ ] 2/3 solved → ⚠️ Review the failed topic tonight
  - [ ] 1/3 or 0/3 → 🔴 Spend extra time on weak areas before Week 5

---

## 📊 Test Review & Reflection (30 min)

- [ ] What went well in the timed test?
- [ ] What went wrong? Which problem was hardest and why?
- [ ] Compare to Week 3 test — did graph/DP feel approachable?
- [ ] Which topic needs more work going into Week 5?
- [ ] Note any patterns you blanked on → add to revision list

---

## DSA Re-solve (30 min)
> Re-solve 5 problems from Week 4 without hints — tests retention.

- [ ] **Re-solve: Number of Islands (LC #200)** — Graph DFS on grid
- [ ] **Re-solve: Course Schedule (LC #207)** — Kahn's topological sort
- [ ] **Re-solve: Climbing Stairs (LC #70)** — 1D DP Fibonacci
- [ ] **Re-solve: Coin Change (LC #322)** — 1D DP unbounded
- [ ] **Re-solve: Longest Common Subsequence (LC #1143)** — 2D DP string match

---

## 🎤 Backend Interview Sim (30 min)
> Answer these 10 backend interview questions OUT LOUD — practice verbal explanation.

- [ ] 1. What is Node.js? How is it different from browser JS?
- [ ] 2. Explain the Node.js event loop — phases: timers, I/O, check.
- [ ] 3. What is Express middleware? How does `next()` work?
- [ ] 4. Explain the layered architecture: Route → Controller → Service → Repository.
- [ ] 5. What is REST? Name 5 HTTP methods and when to use each.
- [ ] 6. How does JWT authentication work? What's in the token?
- [ ] 7. How does bcrypt hash passwords? What are salt rounds?
- [ ] 8. How would you handle errors in an Express API? Centralized error handler?
- [ ] 9. What HTTP status codes do you commonly use? (200, 201, 400, 401, 404, 500)
- [ ] 10. How would you design a RESTful API for a blog? (users, posts, comments)

---

## 🔥 JS + React + OOP Quick-Fire Review (30 min)

### JS Questions (answer from memory):
- [ ] 1. `var` vs `let` vs `const` — scoping differences?
- [ ] 2. What is a closure? Give an example.
- [ ] 3. Explain `this` in arrow functions vs regular functions.
- [ ] 4. What is the event loop? Call stack vs task queue vs microtask queue?
- [ ] 5. `Promise.all` vs `Promise.allSettled` vs `Promise.race`?
- [ ] 6. What is currying? Write a curried add function.
- [ ] 7. Explain prototypal inheritance.
- [ ] 8. What does `async/await` do under the hood?
- [ ] 9. What is garbage collection in JS? Mark-and-sweep?
- [ ] 10. Explain `Proxy` and `Reflect` — when would you use them?

### React Questions:
- [ ] 1. What is `useState` and how does it work?
- [ ] 2. Explain `useEffect` — dependencies, cleanup.
- [ ] 3. `useMemo` vs `useCallback`?
- [ ] 4. What is React Context API?
- [ ] 5. How does React Router work? Protected Routes?

### OOP Questions:
- [ ] 1. Name the 4 pillars of OOP.
- [ ] 2. Explain each SOLID principle in one sentence.
- [ ] 3. Singleton, Observer, Factory — explain each.
- [ ] 4. Strategy pattern vs Factory pattern?
- [ ] 5. What is Dependency Inversion? Give a real example.

---

## 📋 Full Pattern Review (30 min)
> Write down ALL 51 patterns — name, when to use, example. **Star the ones you're still shaky on.**

### Week 1 Patterns (1-14):
- [ ] 1. Hash Map — O(1) lookup, pairs → Two Sum
- [ ] 2. Kadane's Algorithm — Max subarray → Maximum Subarray
- [ ] 3. Prefix Sum — Cumulative operations → Product of Array Except Self
- [ ] 4. Two Pointer Swap — In-place partition → Move Zeroes, Sort Colors
- [ ] 5. Sort + Merge — Interval problems → Merge Intervals
- [ ] 6. In-place Marking — Use data as metadata → Set Matrix Zeroes
- [ ] 7. Observation-based — Recognize the trick → Next Permutation
- [ ] 8. Reverse Trick — Rotation → Rotate Array
- [ ] 9. Boyer-Moore Voting — Majority element → Majority Element
- [ ] 10. Build from Previous — Each step uses prior → Pascal's Triangle
- [ ] 11. Sort + Two Pointers — k-element combinations → 3Sum
- [ ] 12. Greedy Two Pointers — Maximize from ends → Container With Most Water
- [ ] 13. Prefix Sum + HashMap — Count subarrays with sum → Subarray Sum = K
- [ ] 14. Math/XOR Trick — Missing from range → Missing Number

### Week 2 Patterns (15-27):
- [ ] 15. Sliding Window (String) → Longest Substring Without Repeating
- [ ] 16. Frequency Map → Valid Anagram, Group Anagrams
- [ ] 17. Two Pointer (String) → Valid Palindrome
- [ ] 18. Expand Around Center → Longest Palindromic Substring
- [ ] 19. Linked List Reversal → Reverse Linked List
- [ ] 20. Fast & Slow Pointer → Linked List Cycle
- [ ] 21. Merge Two Lists → Merge Two Sorted Lists
- [ ] 22. Monotonic Stack → Daily Temperatures
- [ ] 23. Stack for Matching → Valid Parentheses
- [ ] 24. Choose-Explore-Unchoose → Subsets, Permutations
- [ ] 25. Binary Search Template → Binary Search
- [ ] 26. BS on Rotated Array → Search in Rotated Sorted Array
- [ ] 27. BS on Answer Space → Koko Eating Bananas

### Week 3 Patterns (28-39):
- [ ] 28. Tree DFS (Recursive) → Max Depth, Same Tree
- [ ] 29. Tree BFS (Level Order) → Level Order Traversal
- [ ] 30. Inorder Traversal → Kth Smallest in BST
- [ ] 31. BST Property → Validate BST, LCA of BST
- [ ] 32. Tree Divide & Conquer → Diameter, Balanced Tree
- [ ] 33. LCA Pattern → LCA of Binary Tree
- [ ] 34. Min/Max Heap → Kth Largest, Top K Frequent
- [ ] 35. Two Heaps → Find Median from Data Stream
- [ ] 36. Greedy (Reachability) → Jump Game
- [ ] 37. Greedy (Interval) → Non-overlapping Intervals
- [ ] 38. Greedy (Running Sum) → Gas Station
- [ ] 39. Greedy (Collect Profits) → Buy/Sell Stock II

### Week 4 Patterns (40-51):
- [ ] 40. Graph DFS (Grid) → Number of Islands, Flood Fill
- [ ] 41. Graph BFS (Grid) → Rotting Oranges, 01 Matrix
- [ ] 42. Multi-source BFS → Rotting Oranges, Pacific Atlantic
- [ ] 43. Graph DFS + HashMap → Clone Graph
- [ ] 44. Cycle Detection (Directed) → Course Schedule
- [ ] 45. Topological Sort (Kahn's) → Course Schedule II
- [ ] 46. Union-Find → Redundant Connection
- [ ] 47. Dijkstra's Algorithm → Network Delay Time
- [ ] 48. 1D DP (Fibonacci/Skip) → Climbing Stairs, House Robber
- [ ] 49. 1D DP (Unbounded) → Coin Change, Word Break
- [ ] 50. 2D DP (Grid) → Unique Paths
- [ ] 51. 2D DP (String Match) → LCS, LIS

---

## 📝 Weekly Revision + Plan Week 5 (30 min)

- [ ] Full flashcard review (115+ cards) — mark any you get wrong
- [ ] Update mistake notebook with any errors from today's test
- [ ] **Week 4 Scorecard:**
  - [ ] Total DSA problems solved: **110+** ✅
  - [ ] New data structures learned: Graphs (adjacency list), DP tables ✅
  - [ ] New patterns learned: 12 (total 51) ✅
  - [ ] Backend: Node.js, Express, Auth (JWT + bcrypt), API Design ✅
  - [ ] Flashcards: 115+ ✅
  - [ ] Timed tests: 4 (Week 1 + 2 + 3 + 4) ✅
  - [ ] Graph confidence: Can solve Number of Islands & Course Schedule from memory? ✅ / ⚠️ / 🔴
  - [ ] DP confidence: Can identify 1D vs 2D DP and write recurrence? ✅ / ⚠️ / 🔴
- [ ] Identify Week 4 weak areas → carry forward to Week 5
- [ ] Preview Week 5: **Advanced DP + DBMS + SQL** 🚀

---

> 🕐 **Total time today: ~4h 30m**
>
> ⚡ **Priority order if short on time:** Hints Warm-up → Timed Test → Test Review → Full Pattern Review (51 patterns) → DSA Re-solve → Backend Interview Sim → JS+React+OOP Review → Flashcards
