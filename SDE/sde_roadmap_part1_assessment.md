# SDE-1 Preparation Roadmap — Part 1: Assessment & Foundation

> **Goal: GET HIRED AS AN SDE-1 / Software Engineer / Full Stack Developer**

---

## 1. Your Current Skill Assessment

### 🟢 Strong (Can discuss confidently, minor revision needed)

| Skill | Evidence | Action |
|-------|----------|--------|
| HTML/CSS | Project experience, Tailwind usage | Revise semantic HTML, accessibility basics |
| Git Basics | GitHub usage, version control | Deepen: rebase, cherry-pick, conflict resolution |
| REST API Concepts | Built full-stack projects | Revise status codes, idempotency, versioning |
| Basic CRUD with MongoDB | Project experience | Need schema design depth |
| React Basics | Component creation, props, state | Need depth in hooks, optimization, architecture |

### 🟡 Intermediate (Know the basics, gaps in depth)

| Skill | What You Likely Know | Critical Gaps |
|-------|---------------------|---------------|
| **C++** | Syntax, basic OOP, loops | STL mastery, pointers/references depth, memory model |
| **Python** | Scripting, basic syntax | Collections, generators, decorators (less critical for SDE-1) |
| **JavaScript** | DOM, ES6, async/await | Event loop internals, closures depth, prototypes, `this` keyword |
| **React.js** | Components, useState, useEffect | Reconciliation, useMemo/useCallback, Redux, performance, testing |
| **Node.js/Express** | Basic server, routes, middleware | Architecture patterns, error handling, security, production patterns |
| **MongoDB** | Basic CRUD, Mongoose | Aggregation pipeline, indexing strategy, schema design trade-offs |
| **SQL/DBMS** | SELECT, INSERT, basic joins | Complex joins, indexing, transactions, normalization, query optimization |
| **DSA** | Know topics exist, solved some problems | Pattern recognition, optimization, consistency |
| **TypeScript** | Basic types | Generics, utility types, strict typing patterns |

### 🔴 Weak (Surface-level knowledge, not interview-ready)

| Skill | Current State | Required State |
|-------|--------------|----------------|
| **Advanced DSA** | Sporadic practice, no systematic approach | 250+ problems, pattern mastery |
| **System Design** | "Basic" = likely just client-server | Need: caching, queues, scaling, DB design |
| **Operating Systems** | Minimal | Process/threads, deadlocks, memory (interview essentials) |
| **Computer Networks** | Minimal | HTTP deep dive, TCP/UDP, DNS, TLS, WebSockets |
| **OOP Principles** | Can write classes | Need SOLID, design patterns, real-world application |
| **Backend Architecture** | Express routes work | Need layered architecture, auth, security, production patterns |

### ⚫ Missing but Important for SDE-1

| Skill | Priority | Why It Matters |
|-------|----------|---------------|
| **Testing** | HIGH | Every company asks "how do you test?" |
| **Docker** | HIGH | Standard in modern dev workflows |
| **CI/CD Basics** | MEDIUM | Shows production awareness |
| **Linux Command Line** | HIGH | Expected skill in any SDE role |
| **Behavioral Interview Skills** | HIGH | 50% of candidates fail here |
| **System Design Communication** | HIGH | Can't just know it — must articulate it |
| **Security Fundamentals** | MEDIUM | Auth, CORS, injection, XSS awareness |
| **Caching Concepts** | MEDIUM | Redis basics, cache strategies |
| **Message Queues** | LOW | Awareness level for SDE-1 |

---

## 2. Skills I Need to Improve — Priority Map

### 🔴 CRITICAL (Will get you rejected if weak)

1. **DSA** — Most companies have coding rounds. No DSA = No job.
2. **JavaScript Deep Concepts** — var/let/const, closures, `this`, event loop, promises. Asked in every full-stack interview.
3. **OOP** — Classes, SOLID, polymorphism. Asked in nearly every SDE interview.
4. **DBMS** — SQL queries, joins, indexing, normalization. Guaranteed questions.
5. **Projects** — Must explain architecture, decisions, trade-offs deeply.

### 🟠 HIGH PRIORITY (Strong differentiators)

6. **React Advanced** — Hooks mastery, state management, performance, architecture.
7. **Backend Architecture** — Layered structure, middleware, auth, error handling.
8. **OS Concepts** — Process/threads, deadlocks, scheduling. Quick wins for interviews.
9. **Networking** — HTTP, TCP, DNS, status codes. Quick to learn, frequently asked.
10. **System Design Basics** — URL shortener level. Expected even at SDE-1.

### 🟡 MEDIUM PRIORITY (Good to have)

11. **Git Advanced** — Rebase, cherry-pick, conflict resolution.
12. **Docker** — Containerize your projects.
13. **Testing** — Unit testing basics with Jest.
14. **TypeScript** — Growing requirement but basic level is fine.
15. **Linux** — Navigate, manage processes, read logs.

### 🟢 LOW PRIORITY (Learn if time permits)

16. **AWS Basics** — EC2, S3 awareness level.
17. **CI/CD** — GitHub Actions basics.
18. **Redis** — Caching awareness.
19. **GraphQL** — Not required for most SDE-1 roles.
20. **Kubernetes** — Skip for now.

---

## 3. Complete SDE Learning Roadmap — Overview

```
Phase 0: Foundations (Week 1-2)
├── C++ Refresh: OOP, STL, Pointers, References
├── Time/Space Complexity Mastery
├── Recursion Fundamentals
└── JavaScript Deep Dive Begins

Phase 1: DSA Core (Week 3-10)
├── Arrays → Strings → Hashing → Two Pointers → Sliding Window
├── Sorting → Binary Search → Linked Lists → Stack/Queue
├── Recursion → Backtracking → Trees → BST → Heaps
├── Greedy → Graphs (BFS/DFS) → Topo Sort
└── Dynamic Programming → Tries → Bit Manipulation

Phase 2: CS Fundamentals (Week 5-12, parallel with DSA)
├── OOP + SOLID (Week 5-6)
├── DBMS + SQL (Week 7-8)
├── Operating Systems (Week 9-10)
└── Computer Networks (Week 11-12)

Phase 3: JavaScript + React Mastery (Week 6-14)
├── JS Deep Concepts (Week 6-8)
├── React Advanced (Week 9-11)
└── React Project Work (Week 12-14)

Phase 4: Backend Mastery (Week 10-16)
├── Node.js + Express Architecture (Week 10-12)
├── Database Design (Week 13-14)
└── Auth, Security, Production Patterns (Week 15-16)

Phase 5: Projects (Week 12-20)
├── Project 1: Full-Stack Production App (Week 12-16)
├── Project 2: Backend-Heavy Scalable System (Week 16-19)
└── Project 3: Focused Technical Demo (Week 19-20)

Phase 6: System Design (Week 16-22)
├── Fundamentals + Building Blocks
├── Common System Design Problems
└── Practice Articulation

Phase 7: Interview Prep (Week 20-26)
├── Mock Interviews
├── Resume Polish
├── Application Strategy
├── Revision Cycles
└── Behavioral Prep
```

---

## 4. Learning Order / Dependency Map

### Why This Order?

| Order Decision | Reasoning |
|---------------|-----------|
| C++ before DSA | You code DSA in C++. STL mastery saves time in contests/interviews. |
| Complexity before DSA | You must analyze solutions. Can't optimize what you can't measure. |
| JS parallel with DSA | Development skills grow alongside algorithmic skills. No burnout. |
| OOP during DSA phase | OOP concepts appear in DSA (class design) and system design. |
| DBMS before Backend | You need DB knowledge to build proper backends. |
| Projects after Backend | Projects integrate everything. Building too early = bad architecture. |
| System Design after DSA + Backend | You need data structures + backend knowledge to design systems. |
| Interview prep last | You need content mastery before practicing delivery. |

---

## 5. DSA Roadmap

### DSA Philosophy

> **Don't solve 500 random problems. Master 15 patterns and solve 250 targeted problems.**

### Topic Progression

#### 5.1 Arrays & Complexity Analysis — Week 3-4 (25 problems)

**Concepts:**
- Array traversal, manipulation, in-place operations
- Time complexity: O(1), O(n), O(n²), O(log n), O(n log n)
- Space complexity: auxiliary vs total
- Amortized analysis basics

**Patterns:**
- Kadane's Algorithm (max subarray)
- Dutch National Flag (sort colors)
- Frequency counting
- Prefix sum
- Two pointers on sorted arrays

**Key Problems (25):**

| # | Problem | Difficulty | Pattern |
|---|---------|-----------|---------|
| 1 | Two Sum | Easy | Hash Map |
| 2 | Best Time to Buy and Sell Stock | Easy | Kadane's variant |
| 3 | Contains Duplicate | Easy | Hashing |
| 4 | Maximum Subarray | Medium | Kadane's |
| 5 | Product of Array Except Self | Medium | Prefix/Suffix |
| 6 | Move Zeroes | Easy | Two Pointers |
| 7 | Sort Colors | Medium | Dutch National Flag |
| 8 | Next Permutation | Medium | Pattern |
| 9 | Merge Intervals | Medium | Sorting + Sweep |
| 10 | Set Matrix Zeroes | Medium | In-place marking |
| 11 | Rotate Array | Medium | Reversal |
| 12 | Pascal's Triangle | Easy | Simulation |
| 13 | Majority Element | Easy | Moore's Voting |
| 14 | Missing Number | Easy | XOR / Math |
| 15 | 3Sum | Medium | Sorting + Two Pointers |
| 16 | 4Sum | Medium | Extension of 3Sum |
| 17 | Subarray Sum Equals K | Medium | Prefix Sum + HashMap |
| 18 | Container With Most Water | Medium | Two Pointers |
| 19 | Trapping Rain Water | Hard | Two Pointers / Stack |
| 20 | Find Duplicate Number | Medium | Floyd's Cycle |
| 21-25 | 5 revision problems from Striver SDE Sheet | Mixed | Mixed |

**When to move on:** Can solve medium array problems in < 25 min. Can explain complexity of any solution.

---

#### 5.2 Strings — Week 4 (15 problems)

**Concepts:** String manipulation, pattern matching, character frequency

**Patterns:** Anagram detection, Palindrome checking, String hashing, Sliding window on strings, Two pointers on strings

**Key Problems (15):**

| # | Problem | Difficulty |
|---|---------|-----------|
| 1 | Valid Anagram | Easy |
| 2 | Valid Palindrome | Easy |
| 3 | Longest Common Prefix | Easy |
| 4 | Reverse Words in a String | Medium |
| 5 | String to Integer (atoi) | Medium |
| 6 | Longest Substring Without Repeating Characters | Medium |
| 7 | Group Anagrams | Medium |
| 8 | Longest Palindromic Substring | Medium |
| 9 | Count and Say | Medium |
| 10 | Minimum Window Substring | Hard |
| 11 | Repeated DNA Sequences | Medium |
| 12 | Implement strStr (KMP basics) | Medium |
| 13-15 | 3 from Striver Sheet | Mixed |

---

#### 5.3 Hashing — Week 4-5 (10 problems)

**Concepts:** Hash maps, hash sets, collision handling, frequency maps

**Key Problems:** Longest Consecutive Sequence, Top K Frequent Elements, Valid Sudoku, 4Sum II, Intersection of Two Arrays, First Unique Character, Encode and Decode Strings

**When to move on:** Can identify when hashing optimizes a brute-force approach.

---

#### 5.4 Two Pointers + Sliding Window — Week 5 (15 problems)

**Patterns:**
- Opposite-direction pointers (sorted array problems)
- Same-direction pointers (fast/slow)
- Fixed-size sliding window
- Variable-size sliding window

**Key Problems:** 3Sum, Container With Most Water, Max Consecutive Ones III, Longest Repeating Character Replacement, Minimum Size Subarray Sum, Sliding Window Maximum, Fruit Into Baskets, Permutation in String

---

#### 5.5 Sorting + Binary Search — Week 5-6 (20 problems)

**Sorting Concepts:** Merge sort, quick sort, counting sort, comparator functions

**Binary Search Patterns:** Standard binary search, Lower/upper bound, Binary search on answer, Search in rotated array, Matrix binary search

**Key Problems:** Search in Rotated Sorted Array, Find Peak Element, Median of Two Sorted Arrays, Koko Eating Bananas, Search a 2D Matrix, Aggressive Cows, Book Allocation, Find Minimum in Rotated Array, Single Element in Sorted Array

---

#### 5.6 Linked Lists — Week 6-7 (15 problems)

**Key Problems:** Reverse Linked List, Detect Cycle, Merge Two Sorted Lists, Remove Nth Node, Reorder List, Copy List with Random Pointer, LRU Cache, Flatten a Linked List, Add Two Numbers

---

#### 5.7 Stack & Queue — Week 7 (15 problems)

**Patterns:** Monotonic stack, next greater element, valid parentheses, queue using stacks

**Key Problems:** Valid Parentheses, Min Stack, Next Greater Element, Largest Rectangle in Histogram, Sliding Window Maximum, Daily Temperatures, Online Stock Span, Implement Queue using Stacks, Celebrity Problem

---

#### 5.8 Recursion & Backtracking — Week 7-8 (20 problems)

**Key Problems:** Subsets, Permutations, Combination Sum, N-Queens, Sudoku Solver, Palindrome Partitioning, Word Search, Generate Parentheses, Letter Combinations of Phone Number, Rat in a Maze

---

#### 5.9 Trees — Week 8-9 (25 problems)

**Key Problems:** All traversals, Level Order, Max Depth, Diameter, Balanced Binary Tree, LCA, Zigzag Level Order, Validate BST, Kth Smallest, Serialize/Deserialize, Binary Tree from Preorder+Inorder, Flatten BT to Linked List, Morris Traversal

---

#### 5.10 Heaps & Priority Queues — Week 9-10 (10 problems)

**Key Problems:** Kth Largest, Top K Frequent Elements, Merge K Sorted Lists, Find Median from Data Stream, Task Scheduler, Reorganize String

---

#### 5.11 Greedy — Week 10 (10 problems)

**Key Problems:** Jump Game, Activity Selection, Minimum Platforms, Job Sequencing, Fractional Knapsack, Assign Cookies, Gas Station, Candy

---

#### 5.12 Graphs — Week 10-12 (25 problems)

**Concepts:** Adjacency list/matrix, BFS, DFS, connected components, cycle detection, topological sort, shortest path (Dijkstra, Bellman-Ford basics), Union-Find

**Key Problems:** Number of Islands, Clone Graph, Course Schedule, Rotten Oranges, Word Ladder, Network Delay Time, Pacific Atlantic Water Flow, Detect Cycle, Topological Sort, Dijkstra's, Kruskal's/Prim's basics, Surrounded Regions, Alien Dictionary

---

#### 5.13 Dynamic Programming — Week 12-15 (30 problems)

**Progression:**
1. **1D DP:** Fibonacci, Climbing Stairs, House Robber, Coin Change
2. **2D DP:** Unique Paths, LCS, Edit Distance, 0/1 Knapsack
3. **String DP:** Longest Palindromic Subsequence, Wildcard Matching
4. **DP on Subsequences:** Subset Sum, Partition Equal Subset Sum
5. **DP on Stocks:** Buy/Sell Stock variants (II, III, IV, Cooldown)
6. **Interval DP:** Matrix Chain Multiplication, Burst Balloons

---

#### 5.14 Tries — Week 15 (5 problems)

**Key Problems:** Implement Trie, Word Search II, Design Add and Search Words, Longest Word in Dictionary

---

#### 5.15 Bit Manipulation — Week 15 (5 problems)

**Key Problems:** Single Number, Counting Bits, Reverse Bits, Power of Two, Subsets using bitmask

---

### DSA Summary

| Phase | Weeks | Topics | Problems |
|-------|-------|--------|----------|
| Foundation | 3-5 | Arrays, Strings, Hashing, Two Pointers, Sliding Window | 65 |
| Core | 5-10 | Sorting, Binary Search, Linked Lists, Stacks, Queues, Recursion, Trees | 95 |
| Advanced | 10-15 | Heaps, Greedy, Graphs, DP, Tries, Bits | 85 |
| **Total** | **13 weeks** | **15 topics** | **~245 problems** |

---

## 18. DSA Problem-Solving Framework

### The 12-Step Process (Use for EVERY problem)

```
┌─────────────────────────────────────────────┐
│           THE DSA PROBLEM FRAMEWORK         │
├─────────────────────────────────────────────┤
│  1. READ  → Read problem twice              │
│  2. EXAMPLES → Walk through all examples    │
│  3. CONSTRAINTS → Note n size, value range  │
│  4. BRUTE → What's the naive solution?      │
│  5. COMPLEXITY → Analyze brute force T & S  │
│  6. PATTERN → Which pattern applies?        │
│  7. OPTIMIZE → Apply pattern to optimize    │
│  8. PSEUDO → Write pseudocode first         │
│  9. CODE → Translate to clean code          │
│ 10. TEST → Dry run with examples            │
│ 11. EDGE → Test: empty, single, max, min   │
│ 12. EXPLAIN → Verbalize approach + T(n)     │
└─────────────────────────────────────────────┘
```

### Pattern Recognition Cheat Sheet

| If you see... | Think about... |
|--------------|----------------|
| "Subarray" | Sliding window, prefix sum, Kadane's |
| "Sorted array" | Binary search, two pointers |
| "All permutations/subsets" | Backtracking |
| "Top/bottom K" | Heap |
| "Common substring/subsequence" | DP |
| "Tree" | DFS/BFS, recursion |
| "Graph connections" | BFS/DFS, Union-Find |
| "String matching" | Trie, KMP |
| "Min/max optimization" | DP, greedy, binary search on answer |
| "Parentheses" | Stack |
| "Frequency/duplicates" | Hash map |
| "Linked list cycle" | Fast/slow pointers |
| "Next greater/smaller" | Monotonic stack |
| "Range query" | Prefix sum, segment tree |

### How to Use LeetCode Effectively

1. **Filter by topic + company** — Focus on frequently asked questions
2. **Sort by acceptance rate** — Start with higher acceptance (easier)
3. **Time yourself** — Easy: 15 min, Medium: 25 min, Hard: 40 min
4. **If stuck after 15 min** — Read ONE hint, try again for 10 min
5. **If still stuck** — Read the editorial, understand, close it, solve from scratch
6. **Tag problems** — Create lists: "Solved Clean", "Needed Hint", "Review"
7. **Never skip understanding** — Don't just submit. Understand WHY it works.

### How to Use Striver's SDE Sheet

1. Follow the topic order (it's well-structured)
2. Attempt every problem before watching the video
3. Use the video only for problems you couldn't solve
4. After understanding, close the video and code it yourself
5. Revisit "Needed Hint" problems after 3 days

### How to Use GeeksforGeeks

- Use for **concept articles** (not primary problem solving)
- Good for **company-specific** question lists
- Use **practice section** for extra topic-wise problems after LeetCode
