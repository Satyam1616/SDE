# SDE-1 Preparation Roadmap — Part 8: Week 4 Plan (Days 22-28)

---

## 49. Week 4 Overview

> **Theme:** Graphs (BFS/DFS/Topo Sort) → Dynamic Programming (1D + 2D) → Backend (Node.js + Express)

### What You're Building On (Week 1 + Week 2 + Week 3 Recap)

| What You Covered | Status |
|-----------------|--------|
| 80+ DSA problems solved | ✅ |
| 39 DSA patterns learned | ✅ |
| Data structures: Arrays, Strings, Linked Lists, Stacks, Queues, Trees, BST, Heaps | ✅ |
| JS: var/let/const, closures, this, promises, event loop, GC, currying, generators, Proxy, polyfills | ✅ |
| OOP: 4 Pillars + 5 SOLID Principles + 3 Design Patterns | ✅ |
| React: Components, Hooks, Context, Router, Custom Hooks | ✅ |
| 80+ Flashcards created | ✅ |
| 3 Timed tests passed | ✅ |
| Sliding Window & Backtracking fixed | ✅ |

### ⚠️ Week 3 Weak Areas (Address this week)

```
FROM YOUR DAY 21 REVIEW — CHECK AND UPDATE:

Review your Day 21 stress test results:
  → Which Week 3 patterns still feel shaky? Star them below.
  → Any tree patterns you couldn't recall? → Warm-up on Day 22 morning.
  → Were greedy problems intuitive? → If not, extra practice on Day 27.

COMMON WEAK SPOTS ENTERING WEEK 4:
  ⚠️ Tree DFS: If you struggled with LCA or Diameter → re-solve Day 22 morning warm-up
  ⚠️ Heaps: If priority_queue syntax still trips you → practice Day 22 warm-up
  ⚠️ React: If Context API or Router felt shaky → revisit during Day 27 catch-up

ACTION ITEMS FOR WEEK 4:
  1. Days 22-24: Graph BFS/DFS — builds directly on tree traversals
  2. Days 25-26: DP — the HARDEST topic, but most important after graphs
  3. Day 27: Mixed practice + backend deep dive
  4. Day 28: Week 4 timed test + full review
  5. Spaced recall of tree/heap/greedy patterns every day
```

### Week 4 Goals

| Goal | Target |
|------|--------|
| DSA problems solved (cumulative) | **105+** |
| New data structures | Graphs (adjacency list), DP tables |
| New DSA patterns | 12 more (total **51**) |
| Backend fundamentals | Node.js, Express, Middleware, Auth, API Design |
| Flashcards (cumulative) | **115+** |
| Timed tests completed | **4** (Week 1 + 2 + 3 + 4) |
| **Graph BFS/DFS confidence** | **⭐ Can solve Number of Islands & Course Schedule from memory** |
| **DP confidence** | **⭐ Can identify 1D vs 2D DP and write recurrence relations** |

---

## 50. Why Graphs and DP Are Critical

```
GRAPHS — THE SECOND-MOST ASKED TOPIC (AFTER TREES):

  1. Graphs GENERALIZE trees — if you understand tree DFS/BFS, graph traversal is natural
  2. They model REAL-WORLD problems — networks, social connections, dependencies
  3. Common in system design too — shortest path, dependency resolution
  4. Topological sort = how build systems, course prerequisites, task scheduling work
  5. 25% of tech interviews include at least one graph problem

DYNAMIC PROGRAMMING — THE HARDEST BUT MOST DIFFERENTIATING TOPIC:

  1. DP problems are the MOST COMMON medium/hard questions at top companies
  2. If you can solve DP, you can solve almost ANYTHING (it builds on every prior topic)
  3. The secret: DP is just OPTIMIZED RECURSION. You already know recursion!
  4. Master the FRAMEWORK, not individual problems:
     a. Define the STATE (what changes between subproblems)
     b. Write the RECURRENCE (how does current state depend on previous states?)
     c. Identify the BASE CASE
     d. Decide: TOP-DOWN (memoization) or BOTTOM-UP (tabulation)
```

---

## 51. Days 22-28 — Exact Day-by-Day Tasks

### Day 22: Graphs — BFS & DFS Fundamentals + Node.js Intro

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: Tree Patterns** | Speed-check: solve Maximum Depth (LC #104) or Validate BST (LC #98) in under 3 min. This activates your DFS/BFS skills before graphs. |
| 1.5h | **DSA: Graph Fundamentals + BFS/DFS** | Learn graph representation (adjacency list vs matrix). Implement BFS and DFS on a graph. Solve: Number of Islands (LC #200), Flood Fill (LC #733), Clone Graph (LC #133) |
| 1h | **DSA: Graph DFS Practice** | Solve: Max Area of Island (LC #695), Surrounded Regions (LC #130) |
| 1h | **Backend: Node.js Fundamentals** | What is Node.js (V8, non-blocking I/O), Node event loop (phases: timers, I/O, check), CommonJS vs ESM (`require` vs `import`), `process` object, `fs` module basics |
| 30m | **Revision** | Spaced recall from Day 18 (4 days ago): Heap operations, Top K pattern, Two Heaps, priority_queue syntax |
| 30m | **Flashcards** | Create 5 new cards: adjacency list vs matrix, BFS template (queue), DFS template (stack/recursion), graph vs tree, Node.js event loop |

#### Graph Representation — Know Both

```
ADJACENCY LIST (use this 95% of the time):
  Space: O(V + E) — efficient for sparse graphs
  Lookup "is there an edge u→v?": O(degree of u)
  
  // C++ implementation
  unordered_map<int, vector<int>> graph;
  // or: vector<vector<int>> graph(n);
  
  // Building from edge list
  for (auto& edge : edges) {
      graph[edge[0]].push_back(edge[1]);
      graph[edge[1]].push_back(edge[0]);  // undirected
  }

ADJACENCY MATRIX:
  Space: O(V²) — only for dense graphs
  Lookup "is there an edge u→v?": O(1)
  
  vector<vector<int>> matrix(n, vector<int>(n, 0));
  matrix[u][v] = 1;  // edge from u to v
```

**Resources:** NeetCode Graphs playlist, Striver's Graph series, Node.js official docs
**By end of day:** 85+ total DSA problems. Can traverse graphs with BFS and DFS. Node.js basics understood.

---

### Day 23: Graphs — Connected Components, Cycle Detection + Express Basics

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: Graph BFS** | Re-solve Number of Islands (LC #200) from memory — target under 5 min |
| 1.5h | **DSA: Graph Applications** | Solve: Pacific Atlantic Water Flow (LC #417), Rotting Oranges (LC #994), 01 Matrix (LC #542) |
| 1h | **DSA: Cycle Detection + Course Schedule** | Solve: Course Schedule (LC #207 — detect cycle in directed graph), Course Schedule II (LC #210 — topological sort) |
| 1h | **Backend: Express Fundamentals** | Express setup, middleware concept (`next()`), route parameters, query strings, `req.body`/`req.params`/`req.query`, `res.json()`/`res.status()`, error-handling middleware `(err, req, res, next)` |
| 30m | **Revision** | Spaced recall from Day 19 (4 days ago): Greedy patterns (Jump Game, Gas Station, Non-overlapping Intervals) |
| 30m | **Flashcards** | Create 5 new cards: BFS vs DFS on graphs, cycle detection (directed vs undirected), topological sort, Express middleware chain, `req` vs `res` objects |

**Resources:** LeetCode Graph tag, Express.js official guide
**By end of day:** 91+ total DSA problems. Can detect cycles in graphs. Topological sort understood. Express middleware working.

---

### Day 24: Graphs — Topological Sort, Shortest Path + Express Architecture

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: Graph DFS** | Speed-check: solve Clone Graph (LC #133) from memory — under 5 min |
| 1.5h | **DSA: Topological Sort + Advanced Graphs** | Solve: Alien Dictionary (understand approach — LC premium alternative: use Course Schedule II pattern), Word Ladder (LC #127 — BFS shortest path), Number of Connected Components (use Union-Find or DFS) |
| 1h | **DSA: Shortest Path + Union-Find** | Learn: Dijkstra's algorithm (awareness), Union-Find data structure (find + union with path compression). Solve: Redundant Connection (LC #684), Network Delay Time (LC #743 — Dijkstra) |
| 1h | **Backend: Production Architecture** | Layered architecture: Route → Controller → Service → Model. Folder structure. Input validation (Joi/Zod). Centralized error handling. Environment variables (.env). |
| 30m | **Revision** | Spaced recall from Day 20 (4 days ago): Mixed practice patterns, React Router setup, Validate BST range approach |
| 30m | **Flashcards** | Create 5 new cards: topological sort (Kahn's BFS vs DFS), Dijkstra's algorithm, Union-Find, Express layered architecture, centralized error handling |

**Resources:** NeetCode Graphs advanced, Striver's Graph series, Express best practices
**By end of day:** 96+ total DSA problems. Graph patterns complete. Express architecture understood.

---

### Day 25: Dynamic Programming — 1D DP Foundations + Auth (JWT + bcrypt)

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: Graph BFS** | Speed-check: solve Rotting Oranges (LC #994) from memory — under 5 min |
| 2h | **DSA: 1D DP Fundamentals** | Learn: DP = recursion + memoization. Top-down (memo) vs bottom-up (tabulation). Solve: Climbing Stairs (LC #70), House Robber (LC #198), House Robber II (LC #213), Coin Change (LC #322), Maximum Product Subarray (LC #152) |
| 1h | **Backend: Authentication** | JWT structure (header.payload.signature), bcrypt for password hashing, register + login flow, middleware for protected routes, access token vs refresh token (concept) |
| 30m | **Revision** | Spaced recall from Day 21 (4 days ago): Week 3 timed test patterns, all 39 patterns quick recall |
| 30m | **Flashcards** | Create 5 new cards: DP vs greedy vs recursion, top-down vs bottom-up, Climbing Stairs recurrence, Coin Change approach, JWT structure |

#### 🔴 DP Guided Practice (Day 25) — Use This!

```
DYNAMIC PROGRAMMING — THE PATTERN THAT CHANGES EVERYTHING

WHEN TO USE: "Count ways" / "Min/max cost" / "Is it possible?" / "Optimal solution"
             + The problem has OVERLAPPING SUBPROBLEMS + OPTIMAL SUBSTRUCTURE

THE 4-STEP FRAMEWORK (use for EVERY DP problem!):

  STEP 1: Define the STATE
    → What variable(s) uniquely describe where you are in the problem?
    → dp[i] = "the answer for the first i elements" OR "the answer ending at index i"

  STEP 2: Write the RECURRENCE RELATION
    → How does dp[i] relate to previous states?
    → Example: dp[i] = dp[i-1] + dp[i-2]  (Climbing Stairs)
    → Example: dp[i] = min(dp[i], dp[i-coin] + 1)  (Coin Change)

  STEP 3: Identify BASE CASES
    → What are the trivially known values?
    → dp[0] = 1 (one way to stay at step 0)
    → dp[0] = 0 (zero coins needed for amount 0)

  STEP 4: Determine the ORDER of computation
    → Bottom-up: fill from smallest to largest
    → Does dp[i] depend on dp[i-1]? Then fill left to right.

THINK OF DP AS:
  "Recursion that remembers past answers to avoid re-computing them"
  
  Recursion:    O(2^n) — recomputes same subproblems
  Memoization:  O(n) — stores answers, looks up before computing
  Tabulation:   O(n) — builds answers iteratively, no recursion overhead

PROBLEM: Climbing Stairs (LC #70)
  STEP-BY-STEP HINTS:

  HINT 1: At each step, you can climb 1 or 2 stairs.
          → To reach step i, you came from step i-1 (took 1 step)
             OR from step i-2 (took 2 steps)
  
  HINT 2: How many ways to reach step i?
          → dp[i] = dp[i-1] + dp[i-2]  (Fibonacci!)

  HINT 3: Base cases?
          → dp[0] = 1 (one way to be at ground — do nothing)
          → dp[1] = 1 (one way to reach step 1 — take 1 step)

  NOW TRY CODING IT! Then try House Robber (similar 1D DP).
```

**Resources:** NeetCode DP playlist, Striver's DP series, Aditya Verma DP playlist
**By end of day:** 101+ total DSA problems. 1D DP framework understood. JWT auth flow implemented.

---

### Day 26: Dynamic Programming — 2D DP + Subsequences + API Design

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: 1D DP** | Speed-check: solve Climbing Stairs (LC #70) from memory — write the recurrence relation in under 2 min, code in under 3 min |
| 2h | **DSA: 2D DP + Subsequences** | Solve: Unique Paths (LC #62), Longest Common Subsequence (LC #1143), Word Break (LC #139), Decode Ways (LC #91), Longest Increasing Subsequence (LC #300) |
| 1h | **Backend: API Design Best Practices** | RESTful URL design (`/api/v1/users/:id`), HTTP methods & status codes, pagination (`?page=1&limit=20`), filtering & sorting, response format consistency, rate limiting concept, input validation patterns |
| 30m | **Revision** | Spaced recall from Day 22 (4 days ago): Graph BFS/DFS, Number of Islands approach, adjacency list |
| 30m | **Flashcards** | Create 5 new cards: 2D DP grid pattern, LCS recurrence, LIS approach (DP vs binary search), REST API design rules, HTTP status codes (200/201/400/401/404/500) |

**Resources:** LeetCode DP study plan, NeetCode 2D DP, RESTful API design guides
**By end of day:** 106+ total DSA problems. Can write 2D DP recurrences. API design principles solid.

---

### Day 27: Mixed Practice + Backend Project + Catch-up

| Time | Activity | Details |
|------|----------|---------|
| 1h | **DSA: Mixed Re-solve** | Re-solve 1 from each new topic — Graph: Number of Islands (LC #200), DP: Coin Change (LC #322), DP: Longest Common Subsequence (LC #1143). Plus re-solve any problem you got wrong this week. |
| 1h | **DSA: Bonus Problems** | If confident: try Partition Equal Subset Sum (LC #416 — DP on subsequences), Graph Valid Tree (use DFS + cycle check). If shaky: re-do House Robber + Climbing Stairs + Course Schedule. |
| 1h | **Backend: Mini API Project** | Build a simple REST API from scratch: User registration + login (bcrypt + JWT), protected GET route, error handling middleware, input validation. Use the layered architecture from Day 24. |
| 1h | **Catch-up** | Any weak topic from this week. Pick based on what felt hardest. |
| 30m | **Revision** | Spaced recall from Day 23 (4 days ago): Cycle detection, topological sort, Course Schedule approach. Also: Day 25 (2 days ago): 1D DP patterns, Coin Change recurrence |
| 30m | **Flashcards** | Full deck review (should have 115+ cards) + 5 new cards: graph cycle detection (directed vs undirected), Union-Find, DP state definition, Partition Equal Subset Sum, Express production patterns |

**Resources:** LeetCode mixed practice, Express.js tutorials
**By end of day:** 110+ total DSA problems. Backend API working. All week's topics reviewed.

---

### Day 28: Week 4 Review Day (Graphs + DP + Backend Assessment)

| Time | Activity | Details |
|------|----------|---------|
| 30m | **🟡 Hints Warm-up Round** | Before the real test, warm up: (1) Solve a graph BFS problem with the BFS template visible, (2) Solve a 1D DP problem with the DP framework visible. |
| 1h | **Week 4 Timed Test (COLD — NO hints)** | Timed 60 min: Solve 3 problems without notes — 1 graph (Number of Islands or Rotting Oranges), 1 DP-1D (House Robber or Coin Change), 1 DP-2D (Unique Paths or LCS) |
| 30m | **Test Review & Reflection** | What went well? What went wrong? Compare to Week 3 test — did graph/DP feel approachable? Which topic needs more work? |
| 30m | **DSA Re-solve** | Re-solve 5 problems from Week 4 without hints: Number of Islands, Course Schedule, Climbing Stairs, Coin Change, Longest Common Subsequence |
| 30m | **Backend Interview Sim** | Answer 10 backend interview questions out loud: Node.js event loop, middleware, REST API design, JWT auth, Express architecture, error handling |
| 30m | **JS + React + OOP Review** | Quick fire: 10 JS questions + 5 React questions + 5 OOP questions (all from memory) |
| 30m | **Full Pattern Review** | Write down ALL 51 patterns — name, when to use, example. **Star the ones you're still shaky on.** |
| 30m | **Weekly Revision + Plan Week 5** | Full flashcard review (115+ cards). Mistake notebook. Week 4 scorecard. Identify weak areas → Preview Week 5: Advanced DP + DBMS + SQL! |

**By end of day:** 110+ total DSA problems. Week 4 complete. Graphs + DP foundations solid. Backend with auth working. **Ready for advanced DP and databases.**

---

## 52. Cumulative — All LeetCode Problems List (Week 1 + 2 + 3 + Week 4)

### ✅ WEEK 1: Arrays (Day 1-7) — 16 problems

(See Part 5 / Part 7 for full list — problems #1-16)

### ✅ WEEK 2: Strings + LL + Stacks + Backtracking + Binary Search (Day 8-14) — 32 problems

(See Part 6 / Part 7 for full list — problems #17-48)

### ✅ WEEK 3: Trees + Heaps + Greedy (Day 15-21) — 28 problems + re-solves

(See Part 7 for full list — problems #51-78)

---

### ✅ WEEK 4: Graphs + Dynamic Programming (Day 22-28) — 28 problems

#### Graphs — BFS & DFS (Day 22-23) — 10 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 79 | Number of Islands | [LC #200](https://leetcode.com/problems/number-of-islands/) | Medium | Graph DFS/BFS (Grid) |
| 80 | Flood Fill | [LC #733](https://leetcode.com/problems/flood-fill/) | Easy | Graph DFS (Grid) |
| 81 | Clone Graph | [LC #133](https://leetcode.com/problems/clone-graph/) | Medium | Graph DFS + HashMap |
| 82 | Max Area of Island | [LC #695](https://leetcode.com/problems/max-area-of-island/) | Medium | Graph DFS (Grid) |
| 83 | Surrounded Regions | [LC #130](https://leetcode.com/problems/surrounded-regions/) | Medium | Graph DFS (Border) |
| 84 | Pacific Atlantic Water Flow | [LC #417](https://leetcode.com/problems/pacific-atlantic-water-flow/) | Medium | Multi-source DFS/BFS |
| 85 | Rotting Oranges | [LC #994](https://leetcode.com/problems/rotting-oranges/) | Medium | Multi-source BFS |
| 86 | 01 Matrix | [LC #542](https://leetcode.com/problems/01-matrix/) | Medium | Multi-source BFS |
| 87 | Course Schedule | [LC #207](https://leetcode.com/problems/course-schedule/) | Medium | Cycle Detection (Directed) |
| 88 | Course Schedule II | [LC #210](https://leetcode.com/problems/course-schedule-ii/) | Medium | Topological Sort |

#### Graphs — Advanced (Day 24) — 3 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 89 | Word Ladder | [LC #127](https://leetcode.com/problems/word-ladder/) | Hard | BFS Shortest Path |
| 90 | Redundant Connection | [LC #684](https://leetcode.com/problems/redundant-connection/) | Medium | Union-Find |
| 91 | Network Delay Time | [LC #743](https://leetcode.com/problems/network-delay-time/) | Medium | Dijkstra's Algorithm |

#### Dynamic Programming — 1D (Day 25) — 5 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 92 | Climbing Stairs | [LC #70](https://leetcode.com/problems/climbing-stairs/) | Easy | 1D DP (Fibonacci) |
| 93 | House Robber | [LC #198](https://leetcode.com/problems/house-robber/) | Medium | 1D DP (Skip/Take) |
| 94 | House Robber II | [LC #213](https://leetcode.com/problems/house-robber-ii/) | Medium | 1D DP (Circular) |
| 95 | Coin Change | [LC #322](https://leetcode.com/problems/coin-change/) | Medium | 1D DP (Unbounded) |
| 96 | Maximum Product Subarray | [LC #152](https://leetcode.com/problems/maximum-product-subarray/) | Medium | 1D DP (Track min/max) |

#### Dynamic Programming — 2D + Subsequences (Day 26) — 5 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 97 | Unique Paths | [LC #62](https://leetcode.com/problems/unique-paths/) | Medium | 2D DP (Grid) |
| 98 | Longest Common Subsequence | [LC #1143](https://leetcode.com/problems/longest-common-subsequence/) | Medium | 2D DP (String) |
| 99 | Word Break | [LC #139](https://leetcode.com/problems/word-break/) | Medium | 1D DP (String) |
| 100 | Decode Ways | [LC #91](https://leetcode.com/problems/decode-ways/) | Medium | 1D DP (Decision) |
| 101 | Longest Increasing Subsequence | [LC #300](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium | DP / Binary Search |

#### Mixed Review + Bonus (Day 27) — Re-solve 5 + 2 bonus

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 102 | Partition Equal Subset Sum | [LC #416](https://leetcode.com/problems/partition-equal-subset-sum/) | Medium | DP (Subset Sum) |
| 103+ | Re-solve from above | — | — | Review |

---

## 53. Week 4 New Patterns Learned

### Cumulative Pattern Library (Week 1 + 2 + 3 + Week 4)

```
WEEK 1 PATTERNS (1-14):
 #  Pattern                 When to Use                        Example Problem
 1  Hash Map                O(1) lookup, pairs                 Two Sum, Contains Duplicate
 2  Kadane's Algorithm      Max subarray                       Maximum Subarray
 3  Prefix Sum              Cumulative operations              Product of Array Except Self
 4  Two Pointer Swap        In-place partition                 Move Zeroes, Sort Colors
 5  Sort + Merge            Interval problems                  Merge Intervals
 6  In-place Marking        Use data as metadata               Set Matrix Zeroes
 7  Observation-based       Recognize the trick                Next Permutation
 8  Reverse Trick           Rotation, rearrangement            Rotate Array
 9  Boyer-Moore Voting      Majority/frequent element          Majority Element
10  Build from Previous     Each step uses prior result        Pascal's Triangle
11  Sort + Two Pointers     k-element combinations             3Sum
12  Greedy Two Pointers     Maximize/minimize from ends        Container With Most Water
13  Prefix Sum + HashMap    Count subarrays with sum           Subarray Sum = K
14  Math/XOR Trick          Missing from known range           Missing Number

WEEK 2 PATTERNS (15-27):
 #  Pattern                  When to Use                        Example Problem
15  Sliding Window (String)  Find substring with constraint     Longest Substring Without Repeating
16  Frequency Map            Anagram, character counting        Valid Anagram, Group Anagrams
17  Two Pointer (String)     Palindrome check, comparison       Valid Palindrome
18  Expand Around Center     Palindromic substrings             Longest Palindromic Substring
19  Linked List Reversal     Reverse in-place                   Reverse Linked List
20  Fast & Slow Pointer      Cycle detection, find middle       Linked List Cycle, Middle of LL
21  Merge Two Lists          Combine sorted structures          Merge Two Sorted Lists
22  Monotonic Stack          Next greater/smaller element       Next Greater Element, Daily Temps
23  Stack for Matching       Bracket matching, nesting          Valid Parentheses
24  Choose-Explore-Unchoose  Backtracking template              Subsets, Permutations, Combination Sum
25  Binary Search Template   Sorted array search                Binary Search, Search Insert Position
26  BS on Rotated Array      Modified binary search             Search in Rotated Sorted Array
27  BS on Answer Space       Min/max optimization               Koko Eating Bananas

WEEK 3 PATTERNS (28-39):
 #  Pattern                   When to Use                        Example Problem
28  Tree DFS (Recursive)      Explore depth-first in trees       Max Depth, Same Tree, Invert Tree
29  Tree BFS (Level Order)    Process level by level             Level Order Traversal, Right Side View
30  Inorder Traversal         Sorted order from BST              Kth Smallest in BST
31  BST Property              Use left<root<right invariant      Validate BST, LCA of BST
32  Tree Divide & Conquer     Build result from left+right       Diameter, Balanced Tree, Construct Tree
33  LCA Pattern               Find common ancestor               LCA of Binary Tree, LCA of BST
34  Min/Max Heap              Find kth largest/smallest, top k   Kth Largest, Top K Frequent
35  Two Heaps                 Running median, stream data        Find Median from Data Stream
36  Greedy (Reachability)     Can you reach the end?             Jump Game, Jump Game II
37  Greedy (Interval)         Schedule/overlap problems          Non-overlapping Intervals
38  Greedy (Running Sum)      Circular or cumulative problems    Gas Station
39  Greedy (Collect Profits)  Maximize gain from local choices   Best Time to Buy/Sell Stock II

WEEK 4 PATTERNS (40-51):
 #  Pattern                   When to Use                        Example Problem
40  Graph DFS (Grid)          Traverse connected cells           Number of Islands, Flood Fill
41  Graph BFS (Grid)          Shortest path in unweighted graph  Rotting Oranges, 01 Matrix
42  Multi-source BFS          Expand from multiple starting pts  Rotting Oranges, Pacific Atlantic
43  Graph DFS + HashMap       Clone/copy graph structures        Clone Graph
44  Cycle Detection (Directed) Find cycles in dependency graphs  Course Schedule
45  Topological Sort (Kahn's) Order with dependencies           Course Schedule II, Alien Dictionary
46  Union-Find                Connected components, redundancy   Redundant Connection
47  Dijkstra's Algorithm      Shortest path (weighted graph)     Network Delay Time
48  1D DP (Fibonacci/Skip)    Sequence optimization              Climbing Stairs, House Robber
49  1D DP (Unbounded)         Min/max with unlimited choices     Coin Change, Word Break
50  2D DP (Grid)              Path counting, grid optimization   Unique Paths
51  2D DP (String Match)      Compare two sequences              LCS, Edit Distance, LIS
```

---

## 54. Detailed Problem Guides — Graphs

### Graph Fundamentals: The Mental Model

```
GRAPH TERMINOLOGY:
  Vertex (Node): A point in the graph
  Edge: A connection between two vertices
  Directed: Edges have direction (A→B ≠ B→A)
  Undirected: Edges go both ways (A—B = B—A)
  Weighted: Edges have costs/weights
  Cycle: A path that starts and ends at the same vertex
  Connected: Every vertex is reachable from every other

GRAPH vs TREE:
  Tree = connected, acyclic, undirected graph with n-1 edges
  Graph = can have cycles, disconnected components, directed edges

THE GOLDEN RULE OF GRAPHS:
  1. How to REPRESENT? (adjacency list almost always)
  2. How to TRAVERSE? (BFS or DFS)
  3. Do you need to track VISITED nodes? (almost always yes)
  4. What are you COUNTING/FINDING? (components, shortest path, cycles)
```

### BFS Template — MEMORIZE THIS

```cpp
// BFS on a graph (adjacency list)
void bfs(unordered_map<int, vector<int>>& graph, int start) {
    queue<int> q;
    unordered_set<int> visited;
    
    q.push(start);
    visited.insert(start);
    
    while (!q.empty()) {
        int node = q.front(); q.pop();
        // Process node
        
        for (int neighbor : graph[node]) {
            if (visited.find(neighbor) == visited.end()) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }
}

// BFS on a 2D grid
void bfs(vector<vector<int>>& grid, int r, int c) {
    int rows = grid.size(), cols = grid[0].size();
    queue<pair<int,int>> q;
    q.push({r, c});
    grid[r][c] = 0;  // mark visited (or use separate visited set)
    
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    
    while (!q.empty()) {
        auto [row, col] = q.front(); q.pop();
        
        for (auto& d : dirs) {
            int nr = row + d[0], nc = col + d[1];
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {
                grid[nr][nc] = 0;  // mark visited
                q.push({nr, nc});
            }
        }
    }
}
```

### DFS Template — MEMORIZE THIS

```cpp
// DFS on a graph (adjacency list)
void dfs(unordered_map<int, vector<int>>& graph, int node, unordered_set<int>& visited) {
    visited.insert(node);
    // Process node
    
    for (int neighbor : graph[node]) {
        if (visited.find(neighbor) == visited.end()) {
            dfs(graph, neighbor, visited);
        }
    }
}

// DFS on a 2D grid
void dfs(vector<vector<char>>& grid, int r, int c) {
    int rows = grid.size(), cols = grid[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != '1') return;
    
    grid[r][c] = '0';  // mark visited
    
    dfs(grid, r+1, c);  // down
    dfs(grid, r-1, c);  // up
    dfs(grid, r, c+1);  // right
    dfs(grid, r, c-1);  // left
}
```

### Key Graph Problems — Detailed Solutions

#### Number of Islands (LC #200)

```cpp
int numIslands(vector<vector<char>>& grid) {
    int count = 0;
    int rows = grid.size(), cols = grid[0].size();
    
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);  // sink the entire island
            }
        }
    }
    
    return count;
}

void dfs(vector<vector<char>>& grid, int r, int c) {
    if (r < 0 || r >= grid.size() || c < 0 || c >= grid[0].size() 
        || grid[r][c] != '1') return;
    
    grid[r][c] = '0';  // mark visited
    dfs(grid, r+1, c);
    dfs(grid, r-1, c);
    dfs(grid, r, c+1);
    dfs(grid, r, c-1);
}
// Time: O(m*n), Space: O(m*n) for recursion stack
```

**Think of it as:** Each DFS/BFS call "sinks" an entire island. Count how many times you start a new traversal.

#### Clone Graph (LC #133)

```cpp
unordered_map<Node*, Node*> cloned;

Node* cloneGraph(Node* node) {
    if (!node) return nullptr;
    
    if (cloned.count(node)) return cloned[node];  // already cloned
    
    Node* copy = new Node(node->val);
    cloned[node] = copy;  // map original → copy
    
    for (Node* neighbor : node->neighbors) {
        copy->neighbors.push_back(cloneGraph(neighbor));
    }
    
    return copy;
}
// Time: O(V + E), Space: O(V)
```

**Key insight:** Use a hashmap to map original nodes to their clones. This prevents infinite loops in cyclic graphs.

#### Rotting Oranges (LC #994) — Multi-source BFS

```cpp
int orangesRotting(vector<vector<int>>& grid) {
    int rows = grid.size(), cols = grid[0].size();
    queue<pair<int,int>> q;
    int fresh = 0;
    
    // Step 1: Find all rotten oranges and count fresh ones
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == 2) q.push({r, c});
            else if (grid[r][c] == 1) fresh++;
        }
    }
    
    if (fresh == 0) return 0;
    
    int minutes = 0;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    
    // Step 2: BFS from ALL rotten oranges simultaneously
    while (!q.empty()) {
        int size = q.size();
        bool rotted = false;
        
        for (int i = 0; i < size; i++) {
            auto [r, c] = q.front(); q.pop();
            
            for (auto& d : dirs) {
                int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols 
                    && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2;  // rot it
                    q.push({nr, nc});
                    fresh--;
                    rotted = true;
                }
            }
        }
        
        if (rotted) minutes++;
    }
    
    return fresh == 0 ? minutes : -1;
}
// Time: O(m*n), Space: O(m*n)
```

**Why multi-source BFS?** All rotten oranges spread simultaneously. BFS naturally handles "waves" of expansion level by level.

#### Course Schedule (LC #207) — Cycle Detection in Directed Graph

```cpp
bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> graph(numCourses);
    vector<int> inDegree(numCourses, 0);
    
    // Build graph
    for (auto& p : prerequisites) {
        graph[p[1]].push_back(p[0]);  // p[1] → p[0]
        inDegree[p[0]]++;
    }
    
    // Kahn's Algorithm (BFS-based topological sort)
    queue<int> q;
    for (int i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) q.push(i);  // no prerequisites
    }
    
    int count = 0;
    while (!q.empty()) {
        int course = q.front(); q.pop();
        count++;
        
        for (int next : graph[course]) {
            inDegree[next]--;
            if (inDegree[next] == 0) q.push(next);
        }
    }
    
    return count == numCourses;  // if we processed all, no cycle
}
// Time: O(V + E), Space: O(V + E)
```

**Kahn's Algorithm in plain English:**
1. Find all nodes with no incoming edges (no prerequisites)
2. Process them, remove their outgoing edges
3. New nodes with zero incoming edges get added to queue
4. If you process ALL nodes → no cycle. If some remain → cycle exists.

#### Union-Find (Disjoint Set Union) — Template

```cpp
class UnionFind {
    vector<int> parent, rank;
public:
    UnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);  // path compression
        }
        return parent[x];
    }
    
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;  // already connected
        
        // union by rank
        if (rank[px] < rank[py]) swap(px, py);
        parent[py] = px;
        if (rank[px] == rank[py]) rank[px]++;
        
        return true;
    }
};
// find: O(α(n)) ≈ O(1) amortized, unite: O(α(n)) ≈ O(1) amortized
```

---

## 55. Detailed Problem Guides — Dynamic Programming

### DP Fundamentals: The Mental Model

```
THE DP DECISION TREE:

  "Does this problem have overlapping subproblems?"
     ├── YES → DP might work
     │    ├── Can I define a STATE?
     │    │    ├── YES → Write recurrence, check base cases
     │    │    └── NO → Rethink the state definition
     │    └── Is there OPTIMAL SUBSTRUCTURE?
     │         ├── YES → DP is correct
     │         └── NO → Maybe Greedy instead
     └── NO → Use recursion/backtracking without memoization

COMMON DP STATES:
  dp[i]       = answer considering first i elements
  dp[i][j]    = answer for subproblem defined by two indices (grid, two strings)
  dp[i][w]    = answer for first i items with capacity w (knapsack)
  dp[i][j]    = answer for substring s[i..j] (interval DP)

COMMON RECURRENCES:
  Fibonacci:      dp[i] = dp[i-1] + dp[i-2]
  Skip/Take:      dp[i] = max(dp[i-1], dp[i-2] + val[i])
  Min coins:      dp[i] = min(dp[i], dp[i-coin] + 1) for each coin
  LCS:            dp[i][j] = dp[i-1][j-1]+1 if match, else max(dp[i-1][j], dp[i][j-1])
  Grid paths:     dp[i][j] = dp[i-1][j] + dp[i][j-1]
```

### Key DP Problems — Detailed Solutions

#### Climbing Stairs (LC #70)

```cpp
int climbStairs(int n) {
    if (n <= 2) return n;
    
    int prev2 = 1, prev1 = 2;
    for (int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}
// Time: O(n), Space: O(1)
```

**Recurrence:** `dp[i] = dp[i-1] + dp[i-2]` — to reach step i, you came from step i-1 or i-2.

#### House Robber (LC #198)

```cpp
int rob(vector<int>& nums) {
    int n = nums.size();
    if (n == 1) return nums[0];
    
    int prev2 = 0, prev1 = 0;
    for (int i = 0; i < n; i++) {
        int curr = max(prev1, prev2 + nums[i]);  // skip or take
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}
// Time: O(n), Space: O(1)
```

**Recurrence:** `dp[i] = max(dp[i-1], dp[i-2] + nums[i])` — either skip house i (take dp[i-1]) or rob house i (take dp[i-2] + nums[i] because you can't rob adjacent).

**Trace:** `[2, 7, 9, 3, 1]`
```
i=0: curr = max(0, 0+2) = 2      → [2]
i=1: curr = max(2, 0+7) = 7      → [2, 7]
i=2: curr = max(7, 2+9) = 11     → [2, 7, 11]
i=3: curr = max(11, 7+3) = 11    → [2, 7, 11, 11]
i=4: curr = max(11, 11+1) = 12   → [2, 7, 11, 11, 12]
Answer: 12 (rob houses 0, 2, 4)
```

#### Coin Change (LC #322)

```cpp
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);  // "infinity"
    dp[0] = 0;  // 0 coins for amount 0
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}
// Time: O(amount * numCoins), Space: O(amount)
```

**Recurrence:** `dp[i] = min(dp[i - coin] + 1)` for each coin — use one coin of value `coin`, then solve for remaining amount `i - coin`.

**Trace:** coins = [1, 3, 5], amount = 7
```
dp[0] = 0
dp[1] = dp[0]+1 = 1     (use coin 1)
dp[2] = dp[1]+1 = 2     (use coin 1)
dp[3] = min(dp[2]+1, dp[0]+1) = 1  (use coin 3!)
dp[4] = min(dp[3]+1, dp[1]+1) = 2  (use coin 3+1)
dp[5] = min(dp[4]+1, dp[2]+1, dp[0]+1) = 1  (use coin 5!)
dp[6] = min(dp[5]+1, dp[3]+1) = 2  (use coin 5+1 or 3+3)
dp[7] = min(dp[6]+1, dp[4]+1, dp[2]+1) = 3  (use coins 5+1+1 or 3+3+1)
```

#### Unique Paths (LC #62)

```cpp
int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];  // from above + from left
        }
    }
    
    return dp[m-1][n-1];
}
// Time: O(m*n), Space: O(m*n) — can optimize to O(n)
```

**Why first row and column are all 1s?** There's only ONE way to reach any cell in the first row (go right) or first column (go down).

#### Longest Common Subsequence (LC #1143)

```cpp
int longestCommonSubsequence(string text1, string text2) {
    int m = text1.size(), n = text2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;  // characters match!
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);  // skip one char
            }
        }
    }
    
    return dp[m][n];
}
// Time: O(m*n), Space: O(m*n)
```

**Trace:** text1 = "abcde", text2 = "ace"
```
     ""  a  c  e
""    0  0  0  0
 a    0  1  1  1
 b    0  1  1  1
 c    0  1  2  2
 d    0  1  2  2
 e    0  1  2  3    ← LCS = "ace" (length 3)
```

**Recurrence:**
- If `text1[i] == text2[j]` → `dp[i][j] = dp[i-1][j-1] + 1` (extend the match)
- Else → `dp[i][j] = max(dp[i-1][j], dp[i][j-1])` (skip one character from either string)

#### Longest Increasing Subsequence (LC #300)

```cpp
int lengthOfLIS(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, 1);  // every element is a subsequence of length 1
    int ans = 1;
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        ans = max(ans, dp[i]);
    }
    
    return ans;
}
// Time: O(n²), Space: O(n)
// Optimal: O(n log n) with binary search — awareness level for now
```

---

## 56. Backend Reference — Node.js + Express

### Node.js Core Concepts

```
WHAT IS NODE.js?
  - JavaScript runtime built on Chrome's V8 engine
  - Non-blocking, event-driven I/O model
  - Single-threaded but handles concurrency via event loop
  - NOT a framework — it's a runtime

NODE.js EVENT LOOP (Different from browser!):
  1. Timers phase → setTimeout, setInterval callbacks
  2. I/O callbacks → fs.readFile, network callbacks
  3. Idle/prepare → internal
  4. Poll → retrieve new I/O events
  5. Check → setImmediate callbacks
  6. Close → socket.on('close')

  process.nextTick → runs BEFORE any phase (microtask priority)
  Promises → microtask queue (after nextTick)

MODULES:
  CommonJS: const fs = require('fs');     // synchronous, Node default
  ESM:      import fs from 'fs';           // async, modern standard
  To use ESM: add "type": "module" in package.json
```

### Express Core Concepts

```
MIDDLEWARE CHAIN:
  Request → Middleware 1 → Middleware 2 → Route Handler → Response

  function middleware(req, res, next) {
    // Do something
    next();  // Pass to next middleware
  }

  // Middleware types:
  app.use(express.json());          // Built-in: parse JSON body
  app.use(cors());                   // Third-party: enable CORS
  app.use(authMiddleware);           // Custom: verify JWT
  app.use(errorHandler);             // Error: (err, req, res, next)

ROUTE PARAMETERS:
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;     // /users/123 → id = "123"
  });

QUERY STRINGS:
  // GET /search?q=hello&page=2
  const query = req.query.q;          // "hello"
  const page = req.query.page;        // "2"

REQUEST BODY:
  // POST /users with JSON body
  app.use(express.json());            // MUST add this middleware
  const { name, email } = req.body;
```

### Production Architecture Template

```
src/
├── config/           # DB connection, env vars
│   └── db.js
├── controllers/      # Handle req/res — THIN layer
│   └── userController.js
├── services/         # Business logic — THICK layer
│   └── userService.js
├── models/           # Database schemas
│   └── User.js
├── routes/           # Route definitions
│   └── userRoutes.js
├── middleware/        # Auth, validation, error handling
│   ├── auth.js
│   ├── validate.js
│   └── errorHandler.js
├── utils/            # Helper functions
│   └── generateToken.js
├── validators/       # Input validation schemas
│   └── userValidator.js
└── app.js            # Express app setup
```

### JWT Authentication Flow

```
REGISTRATION:
  1. User sends { email, password }
  2. Hash password with bcrypt (salt rounds: 10-12)
  3. Store user with hashed password in DB
  4. Generate JWT access token
  5. Return token to client

LOGIN:
  1. User sends { email, password }
  2. Find user by email in DB
  3. Compare password with bcrypt.compare(password, hash)
  4. If match → generate JWT, return to client
  5. If no match → 401 Unauthorized

PROTECTED ROUTE:
  1. Client sends request with header: Authorization: Bearer <token>
  2. Middleware extracts token from header
  3. jwt.verify(token, secret) → decode payload
  4. Attach user to req object: req.user = decoded
  5. Call next() to proceed to route handler
  6. If invalid/expired → 401 Unauthorized

CODE:
  // Generate token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });

  // Verify middleware
  function auth(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token' });
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }
```

### Backend Interview Quick Reference

| Question | Key Answer |
|----------|-----------|
| **What is Node.js?** | JS runtime on V8, non-blocking I/O, event-driven, single-threaded with event loop for concurrency |
| **How does the event loop work in Node?** | 6 phases: timers → I/O → idle → poll → check → close. process.nextTick before all phases. |
| **What is middleware?** | Function with (req, res, next). Executes in order. Must call next() to pass control. Types: app-level, router-level, error-handling. |
| **How does JWT work?** | Signed token with header.payload.signature. Stateless auth. Server signs on login, verifies on each request. |
| **JWT vs Sessions?** | JWT: stateless, scalable, stored client-side. Sessions: stateful, stored server-side (Redis), more secure. |
| **How to handle errors?** | Centralized error middleware `(err, req, res, next)`. Custom error classes. Try-catch in async routes. |
| **What is CORS?** | Cross-Origin Resource Sharing. Browser security. Server must whitelist allowed origins via headers. |
| **RESTful API design?** | Resource-based URLs, HTTP methods (GET/POST/PUT/DELETE), stateless, proper status codes. |
| **bcrypt salt rounds?** | 10-12 rounds. Higher = more secure but slower. Salt prevents rainbow table attacks. |
| **Rate limiting?** | Token bucket or sliding window. Protect against DDoS/abuse. express-rate-limit middleware. |

---

## 57. Spaced Repetition Schedule for Week 4

### What to Revise Each Day

| Day | Revise From | What to Review |
|-----|------------|----------------|
| Day 22 | Day 18 (4 days ago) | Heap operations, Top K pattern, Two Heaps, priority_queue syntax |
| Day 22 | Day 20 (2 days ago) | Validate BST, Jump Game, Koko Bananas approaches |
| Day 23 | Day 19 (4 days ago) | Greedy patterns: Jump Game, Gas Station, Non-overlapping Intervals |
| Day 23 | Day 21 (2 days ago) | Week 3 review, all 39 patterns, React concepts |
| Day 24 | Day 20 (4 days ago) | Mixed practice patterns, React Router, protected routes |
| Day 24 | Day 22 (2 days ago) | Graph BFS/DFS, Number of Islands, adjacency list |
| Day 25 | Day 21 (4 days ago) | Week 3 timed test patterns, all 39 patterns quick recall |
| Day 25 | Day 23 (2 days ago) | Cycle detection, topological sort, Course Schedule |
| Day 26 | Day 22 (4 days ago) | Graph BFS/DFS templates, Number of Islands, Clone Graph |
| Day 26 | Day 24 (2 days ago) | Dijkstra, Union-Find, Express architecture |
| Day 27 | Day 23 (4 days ago) | Course Schedule, Rotting Oranges, Pacific Atlantic |
| Day 27 | Day 25 (2 days ago) | 1D DP: Climbing Stairs, House Robber, Coin Change recurrences |
| Day 28 | EVERYTHING | Full review day — all 51 patterns, all concepts. Hints warm-up before timed test. |

---

## 58. Graph Cheat Sheet

```
┌─────────────────────────────────────────────────────────────┐
│                     GRAPH PATTERNS                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PATTERN 1: DFS on Grid (Connected Components)               │
│  Template: mark visited → recurse 4 directions               │
│  Example: Number of Islands, Max Area of Island              │
│                                                              │
│  PATTERN 2: BFS on Grid (Shortest Path / Level-by-Level)     │
│  Template: queue + process level by level                     │
│  Example: Rotting Oranges, 01 Matrix                         │
│                                                              │
│  PATTERN 3: Multi-source BFS                                  │
│  Key: Start BFS from ALL sources simultaneously               │
│  Example: Rotting Oranges, Pacific Atlantic                   │
│                                                              │
│  PATTERN 4: Topological Sort (Kahn's Algorithm)               │
│  Key: Process nodes with 0 in-degree first                    │
│  Example: Course Schedule, Build Order                        │
│                                                              │
│  PATTERN 5: Cycle Detection                                   │
│  Directed: DFS with 3 states (unvisited, in-progress, done)  │
│  Undirected: DFS/BFS, check if neighbor is visited & !parent │
│  Example: Course Schedule, Detect Cycle                       │
│                                                              │
│  PATTERN 6: Union-Find                                        │
│  Key: find() with path compression + union by rank            │
│  Example: Redundant Connection, Number of Components          │
│                                                              │
│  PATTERN 7: Shortest Path (Weighted)                          │
│  Dijkstra: Min-heap, process nearest unvisited                │
│  Example: Network Delay Time                                  │
│                                                              │
│  BFS vs DFS — WHEN TO USE:                                    │
│  BFS: shortest path, level-order, spreading (rotting oranges) │
│  DFS: connected components, cycle detection, backtracking     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 59. DP Cheat Sheet

```
┌─────────────────────────────────────────────────────────────┐
│                      DP PATTERNS                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PATTERN 1: Fibonacci-type (1D)                               │
│  dp[i] = dp[i-1] + dp[i-2]                                   │
│  Example: Climbing Stairs, Decode Ways                        │
│                                                              │
│  PATTERN 2: Skip/Take (1D)                                    │
│  dp[i] = max(skip: dp[i-1], take: dp[i-2] + val[i])         │
│  Example: House Robber, Delete & Earn                         │
│                                                              │
│  PATTERN 3: Unbounded choices (1D)                            │
│  dp[i] = min/max over all choices                             │
│  Example: Coin Change, Perfect Squares                        │
│                                                              │
│  PATTERN 4: String matching (2D)                              │
│  dp[i][j] = depends on text1[i] vs text2[j]                  │
│  Example: LCS, Edit Distance, Wildcard Matching               │
│                                                              │
│  PATTERN 5: Grid paths (2D)                                   │
│  dp[i][j] = dp[i-1][j] + dp[i][j-1]                          │
│  Example: Unique Paths, Minimum Path Sum                      │
│                                                              │
│  PATTERN 6: Subsequence/Subset (1D/2D)                        │
│  dp[i] = max(dp[j] + 1) for j < i where condition holds     │
│  Example: LIS, Partition Equal Subset Sum                     │
│                                                              │
│  HOW TO IDENTIFY DP:                                          │
│  ✓ "Count ways" / "Min/max cost" / "Is it possible?"         │
│  ✓ Problem has overlapping subproblems                        │
│  ✓ Optimal substructure (optimal answer uses optimal sub)    │
│  ✓ Recursion would work but is too slow (exponential)        │
│  ✓ "Longest/shortest subsequence/substring"                   │
│                                                              │
│  TOP-DOWN vs BOTTOM-UP:                                       │
│  Top-down: Recursive + memo. Easier to write. Stack overflow. │
│  Bottom-up: Iterative + table. Harder to write. More optimal. │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 60. Week 4 Scorecard

| Metric | Target | Check |
|--------|--------|-------|
| DSA problems solved (cumulative) | 110+ | ☐ |
| New topics learned | Graphs, Dynamic Programming | ☐ |
| Can write BFS and DFS templates from memory | Yes | ☐ |
| Can solve Number of Islands from memory | Yes | ☐ |
| Can detect cycles in directed graphs (Kahn's) | Yes | ☐ |
| Understand topological sort and when to use it | Yes | ☐ |
| Understand Union-Find with path compression | Yes | ☐ |
| Can write 1D DP recurrences (Climbing Stairs, House Robber, Coin Change) | Yes | ☐ |
| Can write 2D DP for LCS and grid problems | Yes | ☐ |
| Can identify DP vs Greedy vs plain recursion | Yes | ☐ |
| Node.js: Can explain event loop, modules, non-blocking I/O | Yes | ☐ |
| Express: Middleware, routing, error handling | Yes | ☐ |
| Express: Layered architecture (Route → Controller → Service → Model) | Yes | ☐ |
| JWT authentication flow implemented | Yes | ☐ |
| API design: RESTful URLs, status codes, pagination | Yes | ☐ |
| Mistake notebook entries | 20+ (cumulative) | ☐ |
| Flashcards created | 115+ (cumulative) | ☐ |
| Timed tests passed | 4 (Week 1 + 2 + 3 + 4) | ☐ |

---

## 61. Week 5 Preview

> **Week 5 Theme:** Advanced DP (Stocks, Knapsack, Interval) → DBMS + SQL → OS Concepts

| Day | DSA Focus | Theory |
|-----|-----------|--------|
| Day 29 | DP: 0/1 Knapsack, Subset Sum, Partition Equal | DBMS: Normalization (1NF → BCNF), ACID, Transactions |
| Day 30 | DP: Edit Distance, Palindromic Subsequence | DBMS: Indexing (B-tree, clustered vs non-clustered), SQL Joins practice |
| Day 31 | DP: Buy/Sell Stock (II, III, Cooldown), Matrix Chain | SQL: Complex queries — Window functions, CTEs, subqueries |
| Day 32 | Tries: Implement Trie, Word Search II | OS: Process vs Thread, Context Switching, Deadlock |
| Day 33 | Bit Manipulation + Mixed DP Review | OS: Mutex vs Semaphore, Virtual Memory, Paging |
| Day 34 | Mixed Practice + Full DP Review | Computer Networks: OSI, TCP/UDP, HTTP, DNS |
| Day 35 | Week 5 Review + Timed Test | Full mock interview (DSA + CS + Backend) |

---

> **Week 4 is the TURNING POINT! 🚀** You're tackling the two hardest interview topics — Graphs and Dynamic Programming. But here's the secret: graphs are just trees with cycles, and DP is just recursion with memory. You already have the foundation from Weeks 1-3. Combined with backend skills, by Day 28 you'll have **110+ problems, 51 patterns, and a working API with auth** — that puts you in the top tier of SDE-1 candidates. Let's CRUSH IT! 💪🔥
