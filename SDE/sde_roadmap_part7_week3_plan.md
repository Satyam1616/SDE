# SDE-1 Preparation Roadmap — Part 7: Week 3 Plan (Days 15-21)

---

## 33. Week 3 Overview

> **Theme:** Trees & BST → Heaps & Priority Queues → Greedy Algorithms → React Fundamentals

### What You're Building On (Week 1 + Week 2 Recap)

| What You Covered | Status |
|-----------------|--------|
| 50+ DSA problems solved | ✅ |
| 27 DSA patterns learned | ✅ |
| Data structures: Arrays, Strings, Linked Lists, Stacks, Queues | ✅ |
| JS: var/let/const, closures, this, promises, event loop, GC, currying, generators, Proxy, polyfills | ✅ |
| OOP: 4 Pillars + 5 SOLID Principles + 3 Design Patterns | ✅ |
| 50+ Flashcards created | ✅ |
| 2 Timed tests passed | ✅ |

### ⚠️ Week 2 Weak Areas (MUST address this week)

```
FROM YOUR DAY 14 FEEDBACK:

❌ WEAK: Sliding Window (String) — Longest Substring Without Repeating Characters
   → Could NOT think about the problem at all
   → Root cause: don't understand WHEN to shrink the window
   → Fix: Guided practice on Day 15 with hints, re-solve on Day 17 & Day 20

⚠️ SHAKY: Backtracking — Subsets
   → Got stuck somewhere during solve
   → Root cause: choose-explore-unchoose template not automatic yet
   → Fix: Guided practice on Day 16 with hints, re-solve on Day 18 & Day 20

✅ SOLID: Linked List Cycle (Fast/Slow Pointer)
✅ SOLID: Min Stack (Auxiliary Stack)
✅ SOLID: Binary Search (Template)

ACTION ITEMS FOR WEEK 3:
1. EVERY day starts with 10-min weak pattern warm-up (Sliding Window OR Backtracking)
2. Day 15: Guided Sliding Window practice WITH hints → then try without
3. Day 16: Guided Backtracking practice WITH hints → then try without
4. Day 20: Cold re-solve of BOTH weak patterns (no hints, timed)
5. Day 21 timed test includes a hints warm-up round BEFORE the cold test
6. More revision slots dedicated to weak areas (not just new content)
```

### Week 3 Goals

| Goal | Target |
|------|--------|
| DSA problems solved (cumulative) | **70** |
| New data structures | Trees, BST, Heaps |
| New DSA patterns | 12 more (total **39**) |
| React fundamentals | Components, Hooks, Context, Router |
| Flashcards (cumulative) | **80+** |
| Timed tests completed | **3** (Week 1 + Week 2 + Week 3) |
| **Sliding Window confidence** | **⭐ Must be able to solve without hints** |
| **Backtracking confidence** | **⭐ Must be able to solve without hints** |

---

## 34. Why Trees Are the Most Important Topic

```
Trees show up in EVERY tech interview. Here's why:

1. They test RECURSION mastery — 90% of tree problems use recursion
2. They test MULTIPLE patterns — DFS, BFS, divide & conquer
3. They connect to REAL systems — file systems, DOM, databases (B-trees)
4. BST operations test your understanding of BINARY SEARCH in a new context
5. They're the gateway to GRAPHS (trees are just acyclic connected graphs)

If you can ace trees, you can ace most of the interview DSA portion.
```

---

## 35. Days 15-21 — Exact Day-by-Day Tasks

### Day 15: Trees — Traversals + React Components Intro + 🔴 Sliding Window Fix

| Time | Activity | Details |
|------|----------|---------|
| 30m | **🔴 GUIDED: Sliding Window Deep Dive (WITH HINTS)** | Re-learn sliding window from scratch. Step 1: Read the pattern template. Step 2: Solve Longest Substring Without Repeating (LC #3) WITH these hints visible — see Sliding Window Guided Practice below. Step 3: Solve it once more from memory. |
| 1.5h | **DSA: Tree Fundamentals + Traversals** | Learn tree structure, build from scratch. Solve: Binary Tree Inorder Traversal (LC #94), Binary Tree Preorder Traversal (LC #144), Binary Tree Postorder Traversal (LC #145), Binary Tree Level Order Traversal (LC #102) |
| 1h | **DSA: Tree DFS Practice** | Solve: Maximum Depth of Binary Tree (LC #104), Same Tree (LC #100) |
| 1h | **React: Components, Props & State** | Functional components, JSX, props passing, useState basics, conditional rendering, lists & keys |
| 30m | **Revision** | Spaced recall from Day 11 (4 days ago): Stack patterns, Monotonic stack, Valid Parentheses |
| 30m | **Flashcards** | Create 5 new cards: tree traversal orders, DFS vs BFS, sliding window template (re-make!) |

#### 🔴 Sliding Window Guided Practice (Day 15) — Use This!

```
SLIDING WINDOW — THE PATTERN YOU MISSED

WHEN TO USE: "Find longest/shortest SUBSTRING/SUBARRAY with some constraint"

TEMPLATE (memorize this!):
  1. Use TWO pointers: left and right (both start at 0)
  2. EXPAND right pointer → add element to window
  3. While window VIOLATES constraint → SHRINK left pointer
  4. Update answer (max/min window size)

THINK OF IT AS:
  right = "explorer" — always moves forward
  left  = "cleaner"  — moves forward only when window is invalid

PROBLEM: Longest Substring Without Repeating Characters
  STEP-BY-STEP HINTS (read one at a time, try after each):

  HINT 1: What data structure tracks "what's in my current window"?
          → A SET (or hash map). If a char is in the set, it's in the window.

  HINT 2: When do you shrink the window?
          → When s[right] is ALREADY in the set (duplicate found!)

  HINT 3: How do you shrink?
          → Remove s[left] from the set, move left forward. Repeat until no duplicate.

  HINT 4: When do you update the answer?
          → AFTER the window is valid: maxLen = max(maxLen, right - left + 1)

  NOW TRY CODING IT! Then check the solution in the Day 14 plan.
```

```
BONUS: Solve ONE more sliding window problem to cement it:
  → Minimum Window Substring (LC #76) — just READ the approach, don't solve fully
  → OR: Maximum Sum Subarray of Size K (easy warm-up)
```

**Resources:** NeetCode Trees playlist, Striver's Binary Tree series, React official tutorial
**By end of day:** 56 total DSA problems. Can write all 4 traversals from memory. **Sliding window pattern re-learned with hints.** React component created.

---

### Day 16: BST Operations + React Hooks + 🔴 Backtracking Fix

| Time | Activity | Details |
|------|----------|---------|
| 30m | **🔴 GUIDED: Backtracking Deep Dive (WITH HINTS)** | Re-learn backtracking from scratch. Step 1: Read the pattern template. Step 2: Solve Subsets (LC #78) WITH hints visible — see Backtracking Guided Practice below. Step 3: Solve Permutations (LC #46) from memory. |
| 1.5h | **DSA: BST Fundamentals** | Solve: Validate BST (LC #98), Search in BST (LC #700), Insert into BST (LC #701), Kth Smallest Element in BST (LC #230) |
| 1h | **DSA: BST + Tree DFS** | Solve: Lowest Common Ancestor of BST (LC #235), Invert Binary Tree (LC #226) |
| 1h | **React: Hooks Deep Dive** | useState patterns, useEffect (deps, cleanup, pitfalls), controlled forms |
| 30m | **Revision: Sliding Window Re-test** | Cold re-solve Longest Substring Without Repeating (LC #3) — NO hints this time. If stuck >5 min, review yesterday's guided notes, then try again. |
| 30m | **Flashcards** | Create 5 new cards: BST property, validate BST approach, backtracking template (re-make!), useEffect rules |

#### 🔴 Backtracking Guided Practice (Day 16) — Use This!

```
BACKTRACKING — THE PATTERN YOU GOT STUCK ON

WHEN TO USE: "Generate ALL possible combinations/subsets/permutations"

TEMPLATE (memorize this!):
  function backtrack(choices, current, result, startIndex):
      result.add(copy of current)     ← every state might be valid
      for i from startIndex to end:
          current.add(choices[i])      ← CHOOSE
          backtrack(choices, current, result, i+1)  ← EXPLORE
          current.removeLast()         ← UNCHOOSE (undo the choice!)

THINK OF IT AS A DECISION TREE:
  At each element, you make a BINARY CHOICE: include it or skip it
  nums = [1, 2, 3]

                    []
               /          \
            [1]            []
           /    \         /    \
        [1,2]  [1]     [2]    []
        / \    / \     / \    / \
   [1,2,3][1,2][1,3][1][2,3][2][3][]

PROBLEM: Subsets (LC #78)
  STEP-BY-STEP HINTS (read one at a time, try after each):

  HINT 1: Base case?
          → There is NO explicit base case! Every call to backtrack
            adds the current state to result (even empty []).

  HINT 2: What is "startIndex" for?
          → Prevents going backward. If you included nums[2], don't
            reconsider nums[0] or nums[1] in deeper recursion.

  HINT 3: Why "removeLast" (pop_back)?
          → You're UNDOING the choice so the next iteration can try
            a different element. Without this, current keeps growing.

  HINT 4: Subsets vs Permutations — what changes?
          → Subsets: startIndex = i + 1 (order doesn't matter, no repeats)
          → Permutations: always loop from 0, but skip "used" elements

  NOW TRY CODING SUBSETS! Then code PERMUTATIONS to prove you get the pattern.
```

**Resources:** LeetCode BST tag, React docs — Hooks
**By end of day:** 62 total DSA problems. BST operations mastered. **Backtracking template re-learned with hints.** useEffect understood.

---

### Day 17: Tree Hard Problems + React Performance Hooks + Weak Area Check

| Time | Activity | Details |
|------|----------|---------|
| 10m | **🔴 Warm-up: Sliding Window** | Speed-solve Longest Substring Without Repeating (LC #3) — target: under 5 min, no hints. If you fail, add 20 min extra practice tonight. |
| 1.5h | **DSA: Tree DFS/BFS Advanced** | Solve: Diameter of Binary Tree (LC #543), Balanced Binary Tree (LC #110), Lowest Common Ancestor of Binary Tree (LC #236), Binary Tree Right Side View (LC #199) |
| 1h | **DSA: Tree Construction** | Solve: Construct Binary Tree from Preorder and Inorder (LC #105), Serialize and Deserialize Binary Tree (LC #297 — understand approach) |
| 1h | **React: useRef, useMemo, useCallback** | When to use each, React.memo, performance optimization patterns |
| 30m | **Revision** | Spaced recall from Day 13 (4 days ago): Binary search templates, BS on answer space. ALSO: cold-solve Subsets (LC #78) — no hints, under 5 min. |
| 30m | **Flashcards** | Create 5 new cards: LCA approach, diameter technique, useMemo vs useCallback |

**Resources:** NeetCode Trees advanced, React performance docs
**By end of day:** 68 total DSA problems. Can solve tree problems confidently. **Sliding window should be automatic by now.** React perf hooks understood.

---

### Day 18: Heaps & Priority Queues + React Custom Hooks + 🟡 Day 17 Carry-Over

| Time | Activity | Details |
|------|----------|---------|
| 10m | **🔴 Warm-up: Backtracking** | Speed-solve Subsets (LC #78) — target: under 5 min, no hints. This was skipped from Day 17 revision. If you fail, add 15 min extra practice tonight. |
| 1.5h | **DSA: Heap Fundamentals** | Learn min/max heap, priority_queue in C++. Solve: Kth Largest Element in Array (LC #215), Top K Frequent Elements (LC #347), Last Stone Weight (LC #1046) |
| 1h | **DSA: Heap Applications** | Solve: Find Median from Data Stream (LC #295 — understand approach), Merge K Sorted Lists (LC #23) |
| 1h | **React: Custom Hooks** | Build: useFetch, useDebounce, useLocalStorage. Extract reusable logic patterns. |
| 45m | **Revision (COMBINED — Day 17 carry-over + Day 18)** | **From Day 17 (skipped):** Spaced recall from Day 13 — Binary search templates, BS on answer space (Search in Rotated Sorted Array, Koko Eating Bananas). Cold-solve Subsets (LC #78) if warm-up didn't go well. **Day 18 own:** Spaced recall from Day 14 (4 days ago) — All 27 patterns, timed test review. Cold re-solve Permutations (LC #46). Also: Spaced recall from Day 16 (2 days ago) — BST operations, Validate BST. |
| 45m | **Flashcards (COMBINED — Day 17 carry-over + Day 18)** | **From Day 17 (skipped, create these FIRST):** LCA approach (BST vs Binary Tree difference), diameter technique (global max + return height), useMemo vs useCallback (when to use each). **Day 18 own:** heap operations (insert/delete/peek complexities), priority_queue C++ syntax (min vs max), Top K pattern (min heap of size k), Two Heaps pattern (median), custom hook rules (prefix with "use", top-level only). **Total: ~10 cards this session to catch up.** |

> ⚠️ **Day 17 carry-over:** Revision and Flashcards were skipped yesterday. Today's session is 15 min longer for each to cover both days. Prioritize the Day 17 cards first since they're already a day late for spaced repetition.

**Resources:** LeetCode Heap tag, NeetCode Heap playlist
**By end of day:** 73 total DSA problems. Heap operations understood. 3 custom hooks built. **Day 17 debt cleared — all flashcards and revision caught up.**

---

### Day 19: Greedy Algorithms + React Context API

| Time | Activity | Details |
|------|----------|---------|
| 1.5h | **DSA: Greedy Fundamentals** | Learn greedy approach vs DP. Solve: Jump Game (LC #55), Jump Game II (LC #45), Best Time to Buy and Sell Stock II (LC #122), Gas Station (LC #134) |
| 1h | **DSA: Greedy + Interval** | Solve: Meeting Rooms (understanding), Non-overlapping Intervals (LC #435), Merge Intervals review |
| 1h | **React: Context API** | createContext, Provider, useContext. When Context is enough vs when you need Redux. |
| 30m | **Revision** | Spaced recall from Day 15 (4 days ago): Tree traversals, Maximum Depth |
| 30m | **Flashcards** | Create 5 new cards: greedy vs DP, jump game approach, Context API pattern |

**Resources:** NeetCode Greedy playlist, React Context docs
**By end of day:** 78+ total DSA problems. Greedy pattern identified. Context API implemented.

---

### Day 20: Mixed Practice + React Router + 🔴 Final Weak Area Stress Test

| Time | Activity | Details |
|------|----------|---------|
| 30m | **🔴 COLD STRESS TEST: Week 2 Weak Areas (TIMED, NO HINTS)** | Set a 30-min timer. Solve these 3 problems cold: (1) Longest Substring Without Repeating (LC #3) — 8 min, (2) Subsets (LC #78) — 8 min, (3) Combination Sum (LC #39) — 10 min. Grade yourself: if you solve all 3 without hints, your weak areas are FIXED. |
| 1h | **DSA: Mixed Practice** | Re-solve: 1 tree (Validate BST), 1 heap (Top K Frequent), 1 greedy (Jump Game), 1 binary search (Koko Bananas) |
| 1h | **React: React Router** | BrowserRouter, Routes, Route, Link, useNavigate, useParams, protected routes, 404 handling |
| 1h | **Catch-up** | Any weak topic from this week. Re-attempt problems you got wrong. Extra tree/heap problems if confident. |
| 30m | **Revision** | Spaced recall from Day 16 (4 days ago): BST operations, Validate BST |
| 30m | **Flashcards** | Full deck review + 5 new cards: React Router patterns, protected route logic |

**Resources:** React Router v6 docs, LeetCode mixed practice
**By end of day:** 80+ total DSA problems. React Router working. **Sliding Window & Backtracking should be fully fixed.**

---

### Day 21: Week 3 Review Day (IMPROVED FORMAT — with Hints Warm-up!)

| Time | Activity | Details |
|------|----------|---------|
| 30m | **🟡 Hints Warm-up Round (NEW!)** | Before the real test, warm up by solving 2 problems WITH pattern hints visible: (1) Solve any Tree DFS problem using the template on screen, (2) Solve Sliding Window or Backtracking problem with the template visible. This builds confidence before the cold test. |
| 1h | **Week 3 Timed Test (COLD — NO hints)** | Timed 60 min: Solve 3 problems without notes — 1 tree (LCA or Diameter), 1 BST (Validate BST or Kth Smallest), 1 heap/greedy (Top K Frequent or Jump Game) |
| 30m | **Test Review & Reflection** | What went well? What went wrong? Compare to Week 2 test — did confidence improve? Did sliding window/backtracking feel better? |
| 30m | **DSA Re-solve** | Re-solve 5 problems from Week 3 without hints: Inorder Traversal, Invert Tree, Kth Largest, Jump Game, Level Order |
| 30m | **React Interview Sim** | Answer 10 React interview questions out loud (components, hooks, Context, Router) |
| 30m | **JS + OOP Review** | Quick fire: 10 JS questions + 5 SOLID + 3 design patterns |
| 30m | **Full Pattern Review** | Write down ALL 39 patterns — name, when to use, example. **Star the ones you're still shaky on.** |
| 30m | **Weekly Revision + Plan Week 4** | Full flashcard review (80+ cards). Mistake notebook. Week 3 scorecard. Identify weak areas → Preview Graphs & DP! |

**By end of day:** 80+ total DSA problems. Week 3 complete. Trees + Heaps + Greedy solid. **Sliding Window & Backtracking should be fully cemented.** React basics working.

---

## 36. Week 3 — All LeetCode Problems List

### Trees & BST (Day 15-17) — 14 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 51 | Binary Tree Inorder Traversal | [LC #94](https://leetcode.com/problems/binary-tree-inorder-traversal/) | Easy | DFS (Inorder) |
| 52 | Binary Tree Preorder Traversal | [LC #144](https://leetcode.com/problems/binary-tree-preorder-traversal/) | Easy | DFS (Preorder) |
| 53 | Binary Tree Postorder Traversal | [LC #145](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Easy | DFS (Postorder) |
| 54 | Binary Tree Level Order Traversal | [LC #102](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | BFS (Level-order) |
| 55 | Maximum Depth of Binary Tree | [LC #104](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Easy | DFS (Recursive) |
| 56 | Same Tree | [LC #100](https://leetcode.com/problems/same-tree/) | Easy | DFS (Simultaneous) |
| 57 | Validate Binary Search Tree | [LC #98](https://leetcode.com/problems/validate-binary-search-tree/) | Medium | DFS + Range Check |
| 58 | Search in a BST | [LC #700](https://leetcode.com/problems/search-in-a-binary-search-tree/) | Easy | BST Search |
| 59 | Insert into a BST | [LC #701](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | Medium | BST Insert |
| 60 | Kth Smallest Element in BST | [LC #230](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Medium | Inorder + Counter |
| 61 | Lowest Common Ancestor of BST | [LC #235](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Medium | BST Property |
| 62 | Invert Binary Tree | [LC #226](https://leetcode.com/problems/invert-binary-tree/) | Easy | DFS (Swap Children) |
| 63 | Diameter of Binary Tree | [LC #543](https://leetcode.com/problems/diameter-of-binary-tree/) | Easy | DFS + Global Max |
| 64 | Balanced Binary Tree | [LC #110](https://leetcode.com/problems/balanced-binary-tree/) | Easy | DFS + Height Check |
| 65 | Lowest Common Ancestor of Binary Tree | [LC #236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | Medium | DFS (Post-order) |
| 66 | Binary Tree Right Side View | [LC #199](https://leetcode.com/problems/binary-tree-right-side-view/) | Medium | BFS or DFS |
| 67 | Construct from Preorder and Inorder | [LC #105](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Medium | Divide & Conquer |
| 68 | Serialize and Deserialize Binary Tree | [LC #297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Hard | BFS/DFS + String |

### Heaps & Priority Queues (Day 18) — 5 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 69 | Kth Largest Element in Array | [LC #215](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | Min Heap / Quickselect |
| 70 | Top K Frequent Elements | [LC #347](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Heap + Frequency Map |
| 71 | Last Stone Weight | [LC #1046](https://leetcode.com/problems/last-stone-weight/) | Easy | Max Heap |
| 72 | Find Median from Data Stream | [LC #295](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | Two Heaps |
| 73 | Merge K Sorted Lists | [LC #23](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Min Heap |

### Greedy Algorithms (Day 19) — 5 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 74 | Jump Game | [LC #55](https://leetcode.com/problems/jump-game/) | Medium | Greedy (Reachability) |
| 75 | Jump Game II | [LC #45](https://leetcode.com/problems/jump-game-ii/) | Medium | Greedy (BFS-like) |
| 76 | Best Time to Buy and Sell Stock II | [LC #122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | Medium | Greedy (Collect Profits) |
| 77 | Gas Station | [LC #134](https://leetcode.com/problems/gas-station/) | Medium | Greedy (Running Sum) |
| 78 | Non-overlapping Intervals | [LC #435](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | Greedy (Sort by End) |

### Mixed Review (Day 20) — Re-solve 5 from above (cumulative reaches 80+)

---

## 37. Week 3 New Patterns Learned

### Cumulative Pattern Library (Week 1 + Week 2 + Week 3)

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
31  BST Property              Use left<root<right invariant      Validate BST, LCA of BST, Search BST
32  Tree Divide & Conquer     Build result from left+right       Diameter, Balanced Tree, Construct Tree
33  LCA Pattern               Find common ancestor               LCA of Binary Tree, LCA of BST
34  Min/Max Heap              Find kth largest/smallest, top k   Kth Largest, Top K Frequent
35  Two Heaps                 Running median, stream data        Find Median from Data Stream
36  Greedy (Reachability)     Can you reach the end?             Jump Game, Jump Game II
37  Greedy (Interval)         Schedule/overlap problems          Non-overlapping Intervals, Meeting Rooms
38  Greedy (Running Sum)      Circular or cumulative problems    Gas Station
39  Greedy (Collect Profits)  Maximize gain from local choices   Best Time to Buy/Sell Stock II
```

---

## 38. Detailed Problem Guides — Trees

### Tree Fundamentals: The Mental Model

```
TREE TERMINOLOGY:
  Root: topmost node (no parent)
  Leaf: node with NO children
  Height: longest path from node to leaf (root height = tree height)
  Depth: distance from root to node (root depth = 0)
  
BINARY TREE: each node has at most 2 children (left, right)
BST PROPERTY: for EVERY node: all left descendants < node < all right descendants

TREE NODE STRUCTURE:
  struct TreeNode {
      int val;
      TreeNode* left;
      TreeNode* right;
      TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  };

THE GOLDEN RULE OF TREES:
  Think RECURSIVELY. At each node, ask:
  1. What is my BASE CASE? (usually: node is null)
  2. What do I do with the LEFT subtree result?
  3. What do I do with the RIGHT subtree result?
  4. What do I return UP to my parent?
```

### The 4 Traversals — KNOW ALL OF THEM

```
Given tree:
        1
       / \
      2   3
     / \
    4   5

INORDER (Left → Root → Right):    4, 2, 5, 1, 3
  → For BST: gives SORTED order
  
PREORDER (Root → Left → Right):   1, 2, 4, 5, 3
  → Root is FIRST → useful for copying/serializing
  
POSTORDER (Left → Right → Root):  4, 5, 2, 3, 1
  → Root is LAST → useful for deletion, eval expressions
  
LEVEL ORDER (BFS):                [1], [2, 3], [4, 5]
  → Uses a QUEUE, processes level by level
```

**Traversal Code Templates:**

```cpp
// INORDER — Recursive
void inorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    inorder(root->left, result);     // Left
    result.push_back(root->val);     // Root
    inorder(root->right, result);    // Right
}

// PREORDER — Recursive
void preorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    result.push_back(root->val);     // Root
    preorder(root->left, result);    // Left
    preorder(root->right, result);   // Right
}

// POSTORDER — Recursive
void postorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    postorder(root->left, result);   // Left
    postorder(root->right, result);  // Right
    result.push_back(root->val);     // Root
}

// LEVEL ORDER — Iterative (BFS with Queue)
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;

    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        int size = q.size();  // CRUCIAL: snapshot the level size
        vector<int> level;

        for (int i = 0; i < size; i++) {
            TreeNode* node = q.front();
            q.pop();
            level.push_back(node->val);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }

        result.push_back(level);
    }

    return result;
}
```

**Why snapshot `size`?**
```
Without snapshot: you process newly added children in the same iteration
With snapshot: you process ONLY nodes from the current level

q = [1]         → size=1, process 1, add 2,3
q = [2, 3]      → size=2, process 2,3, add 4,5
q = [4, 5]      → size=2, process 4,5
```

### Iterative Traversals — Know These Too

```cpp
// INORDER — Iterative (using stack)
vector<int> inorderIterative(TreeNode* root) {
    vector<int> result;
    stack<TreeNode*> st;
    TreeNode* curr = root;

    while (curr || !st.empty()) {
        // Go as far left as possible
        while (curr) {
            st.push(curr);
            curr = curr->left;
        }
        // Process node
        curr = st.top(); st.pop();
        result.push_back(curr->val);
        // Go right
        curr = curr->right;
    }

    return result;
}
```

---

### Key Tree Problems — Detailed Solutions

#### Maximum Depth (LC #104)

```cpp
int maxDepth(TreeNode* root) {
    if (!root) return 0;  // base case
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}
// Time: O(n), Space: O(h) where h = height
```

**Think recursively:**
- Empty tree → depth 0
- Otherwise → 1 + max(left depth, right depth)

#### Invert Binary Tree (LC #226)

```cpp
TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    swap(root->left, root->right);  // swap children
    invertTree(root->left);         // recurse left
    invertTree(root->right);        // recurse right
    return root;
}
// Time: O(n), Space: O(h)
```

#### Validate BST (LC #98) — Tricky!

**Common mistake:** Only checking `left->val < root->val < right->val` for immediate children. This fails for:
```
    5
   / \
  1   6
     / \
    3   7    ← 3 is less than 5, but it's in the RIGHT subtree!
```

**Correct approach:** Pass down valid RANGE for each node.

```cpp
bool isValidBST(TreeNode* root) {
    return validate(root, LONG_MIN, LONG_MAX);
}

bool validate(TreeNode* node, long minVal, long maxVal) {
    if (!node) return true;
    if (node->val <= minVal || node->val >= maxVal) return false;

    return validate(node->left, minVal, node->val) &&    // left must be < current
           validate(node->right, node->val, maxVal);     // right must be > current
}
// Time: O(n), Space: O(h)
```

#### Lowest Common Ancestor of BST (LC #235)

**Key insight:** Use the BST property! If both nodes are less than root, LCA is in left. If both greater, LCA is in right. Otherwise, root IS the LCA.

```cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    while (root) {
        if (p->val < root->val && q->val < root->val) {
            root = root->left;   // both in left subtree
        } else if (p->val > root->val && q->val > root->val) {
            root = root->right;  // both in right subtree
        } else {
            return root;  // split point — this IS the LCA
        }
    }
    return nullptr;
}
// Time: O(h), Space: O(1)
```

#### Lowest Common Ancestor of Binary Tree (LC #236)

**No BST property here.** Use post-order DFS:

```cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) return root;

    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);

    if (left && right) return root;  // p and q are in different subtrees → root is LCA
    return left ? left : right;      // both are in the same subtree
}
// Time: O(n), Space: O(h)
```

**Trace through example:**
```
        3
       / \
      5   1
     / \
    6   2

LCA(5, 1):
  root=3: left=LCA(5, p=5, q=1) returns 5
          right=LCA(1, p=5, q=1) returns 1
          Both non-null → return 3 ✅

LCA(5, 6):
  root=3: left=LCA(5, p=5, q=6) → root=5 == p → returns 5
          right=LCA(1, p=5, q=6) → returns null
          Only left non-null → return 5 ✅
```

#### Diameter of Binary Tree (LC #543)

**Key insight:** Diameter = longest path between ANY two nodes. At each node, the path through it = leftHeight + rightHeight. Track the maximum globally.

```cpp
int diameter = 0;

int diameterOfBinaryTree(TreeNode* root) {
    height(root);
    return diameter;
}

int height(TreeNode* node) {
    if (!node) return 0;

    int left = height(node->left);
    int right = height(node->right);

    diameter = max(diameter, left + right);  // update global max
    return 1 + max(left, right);             // return height to parent
}
// Time: O(n), Space: O(h)
```

#### Binary Tree Right Side View (LC #199)

**BFS approach:** Take the LAST node of each level.

```cpp
vector<int> rightSideView(TreeNode* root) {
    vector<int> result;
    if (!root) return result;

    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        int size = q.size();
        for (int i = 0; i < size; i++) {
            TreeNode* node = q.front(); q.pop();
            if (i == size - 1) result.push_back(node->val);  // last in level
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
    }

    return result;
}
```

#### Construct Tree from Preorder + Inorder (LC #105)

```
Preorder: [3, 9, 20, 15, 7]    → first element is ROOT
Inorder:  [9, 3, 15, 20, 7]    → root splits into LEFT and RIGHT

Root = 3
Inorder: [9] | 3 | [15, 20, 7]
         left       right

Recurse on left (preorder[1:2], inorder[0:1]) → builds node 9
Recurse on right (preorder[2:5], inorder[2:5]) → builds subtree with 20 as root
```

```cpp
unordered_map<int, int> inorderIndex;

TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    for (int i = 0; i < inorder.size(); i++) {
        inorderIndex[inorder[i]] = i;
    }
    int preIdx = 0;
    return build(preorder, 0, inorder.size() - 1, preIdx);
}

TreeNode* build(vector<int>& preorder, int inLeft, int inRight, int& preIdx) {
    if (inLeft > inRight) return nullptr;

    int rootVal = preorder[preIdx++];
    TreeNode* root = new TreeNode(rootVal);
    int inIdx = inorderIndex[rootVal];

    root->left = build(preorder, inLeft, inIdx - 1, preIdx);
    root->right = build(preorder, inIdx + 1, inRight, preIdx);

    return root;
}
// Time: O(n), Space: O(n) for the map
```

---

## 39. Detailed Problem Guides — Heaps

### Heap Fundamentals

```
WHAT IS A HEAP?
  A complete binary tree where:
  - MAX HEAP: parent >= children (root is maximum)
  - MIN HEAP: parent <= children (root is minimum)

OPERATIONS:
  Insert:     O(log n) — add at end, bubble UP
  Delete top: O(log n) — swap with last, bubble DOWN
  Peek top:   O(1) — just read the root

IN C++:
  priority_queue<int> maxHeap;                         // MAX heap (default)
  priority_queue<int, vector<int>, greater<int>> minHeap;  // MIN heap

WHEN TO USE:
  - "Find kth largest/smallest" → heap of size k
  - "Top K elements" → heap
  - "Running median" → two heaps
  - "Merge K sorted" → min heap
```

### Kth Largest Element (LC #215)

**Approach 1: Min Heap of size K**

```cpp
int findKthLargest(vector<int>& nums, int k) {
    // Min heap of size k — top is the kth largest
    priority_queue<int, vector<int>, greater<int>> minHeap;

    for (int num : nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();  // remove smallest — keep only k largest
        }
    }

    return minHeap.top();  // smallest of the k largest = kth largest
}
// Time: O(n log k), Space: O(k)
```

**Why min heap?** We keep the k largest elements. The min heap's top is the SMALLEST of those k — which is the kth largest overall.

### Top K Frequent Elements (LC #347)

```cpp
vector<int> topKFrequent(vector<int>& nums, int k) {
    // Step 1: Count frequencies
    unordered_map<int, int> freq;
    for (int n : nums) freq[n]++;

    // Step 2: Min heap of size k, ordered by frequency
    auto cmp = [](pair<int,int>& a, pair<int,int>& b) {
        return a.second > b.second;  // min heap by frequency
    };
    priority_queue<pair<int,int>, vector<pair<int,int>>, decltype(cmp)> minHeap(cmp);

    for (auto& [num, count] : freq) {
        minHeap.push({num, count});
        if (minHeap.size() > k) minHeap.pop();
    }

    // Step 3: Extract results
    vector<int> result;
    while (!minHeap.empty()) {
        result.push_back(minHeap.top().first);
        minHeap.pop();
    }
    return result;
}
// Time: O(n log k), Space: O(n)
```

**Alternative: Bucket Sort O(n)**
```cpp
vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int n : nums) freq[n]++;

    // Buckets: index = frequency, value = list of numbers with that frequency
    vector<vector<int>> buckets(nums.size() + 1);
    for (auto& [num, count] : freq) {
        buckets[count].push_back(num);
    }

    vector<int> result;
    for (int i = buckets.size() - 1; i >= 0 && result.size() < k; i--) {
        for (int num : buckets[i]) {
            result.push_back(num);
            if (result.size() == k) break;
        }
    }
    return result;
}
// Time: O(n), Space: O(n)
```

### Find Median from Data Stream (LC #295) — Two Heaps

```
IDEA: Split numbers into two halves:
  MAX HEAP (left half) — stores the smaller half, top = largest of small half
  MIN HEAP (right half) — stores the larger half, top = smallest of large half

  Median = maxHeap.top() if odd
         = (maxHeap.top() + minHeap.top()) / 2 if even

Invariant: maxHeap.size() == minHeap.size() OR maxHeap.size() == minHeap.size() + 1
```

```cpp
class MedianFinder {
    priority_queue<int> maxHeap;  // left half (smaller numbers)
    priority_queue<int, vector<int>, greater<int>> minHeap;  // right half (larger)

public:
    void addNum(int num) {
        maxHeap.push(num);  // add to left

        // Ensure max of left <= min of right
        if (!minHeap.empty() && maxHeap.top() > minHeap.top()) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        }

        // Balance sizes (left can be at most 1 bigger)
        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
    }

    double findMedian() {
        if (maxHeap.size() > minHeap.size()) return maxHeap.top();
        return (maxHeap.top() + minHeap.top()) / 2.0;
    }
};
// addNum: O(log n), findMedian: O(1)
```

### Merge K Sorted Lists (LC #23)

```cpp
ListNode* mergeKLists(vector<ListNode*>& lists) {
    auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
    priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> minHeap(cmp);

    // Add head of each list to the heap
    for (auto list : lists) {
        if (list) minHeap.push(list);
    }

    ListNode dummy(0);
    ListNode* tail = &dummy;

    while (!minHeap.empty()) {
        ListNode* smallest = minHeap.top(); minHeap.pop();
        tail->next = smallest;
        tail = tail->next;
        if (smallest->next) minHeap.push(smallest->next);
    }

    return dummy.next;
}
// Time: O(n log k), Space: O(k) — k = number of lists, n = total nodes
```

---

## 40. Detailed Problem Guides — Greedy

### Greedy Algorithm Mental Model

```
GREEDY vs DYNAMIC PROGRAMMING:
  Greedy:  Make the BEST local choice at each step → hope it leads to global optimum
  DP:      Consider ALL choices → pick the best overall (via subproblems)

WHEN DOES GREEDY WORK?
  1. Optimal substructure: optimal solution contains optimal sub-solutions
  2. Greedy choice property: local optimum leads to global optimum
  3. You can PROVE (or intuit) that being greedy doesn't miss better solutions

HOW TO IDENTIFY GREEDY PROBLEMS:
  - "Maximum/minimum" something with constraints
  - Sorting + making local decisions
  - Interval scheduling / selection
  - Problems where DP would be overkill
```

### Jump Game (LC #55)

**What it asks:** Can you reach the last index?

```cpp
bool canJump(vector<int>& nums) {
    int maxReach = 0;

    for (int i = 0; i < nums.size(); i++) {
        if (i > maxReach) return false;   // can't reach this position
        maxReach = max(maxReach, i + nums[i]);  // update farthest reachable
    }

    return true;
}
// Time: O(n), Space: O(1)
```

**Trace:** `[2, 3, 1, 1, 4]`
```
i=0: maxReach = max(0, 0+2) = 2
i=1: maxReach = max(2, 1+3) = 4
i=2: maxReach = max(4, 2+1) = 4
i=3: maxReach = max(4, 3+1) = 4
i=4: maxReach = max(4, 4+4) = 8
All positions reachable → true ✅
```

### Jump Game II (LC #45)

**What it asks:** Minimum number of jumps to reach the end.

```cpp
int jump(vector<int>& nums) {
    int jumps = 0, end = 0, farthest = 0;

    for (int i = 0; i < nums.size() - 1; i++) {
        farthest = max(farthest, i + nums[i]);

        if (i == end) {  // reached the end of current jump's range
            jumps++;
            end = farthest;
        }
    }

    return jumps;
}
// Time: O(n), Space: O(1)
```

**Think of it as BFS on an array:**
```
[2, 3, 1, 1, 4]

Jump 1 range: indices 1-2 (from index 0, can reach 1 or 2)
  Farthest from this range: max(1+3, 2+1) = 4

Jump 2 range: indices 3-4
  We've reached the end!

Answer: 2 jumps
```

### Gas Station (LC #134)

**What it asks:** Circular route with gas stations. Find the starting station to complete the circuit.

```cpp
int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
    int totalGas = 0, totalCost = 0;
    int tank = 0, start = 0;

    for (int i = 0; i < gas.size(); i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            start = i + 1;  // can't start from any station 0..i
            tank = 0;
        }
    }

    return totalGas >= totalCost ? start : -1;
}
// Time: O(n), Space: O(1)
```

**Key insight:** If total gas ≥ total cost, a solution ALWAYS exists. If tank goes negative at station i, none of stations 0..i can be the start.

### Non-overlapping Intervals (LC #435)

**What it asks:** Minimum number of intervals to remove to make the rest non-overlapping.

```cpp
int eraseOverlapIntervals(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end(),
         [](auto& a, auto& b) { return a[1] < b[1]; });  // sort by END time

    int count = 0, prevEnd = INT_MIN;

    for (auto& interval : intervals) {
        if (interval[0] >= prevEnd) {
            prevEnd = interval[1];  // no overlap — keep it
        } else {
            count++;  // overlap — remove this one (it ends later)
        }
    }

    return count;
}
// Time: O(n log n), Space: O(1)
```

**Why sort by end time?** Ending earlier leaves MORE room for future intervals. This is the classic **Activity Selection** greedy approach.

---

## 41. React Fundamentals Reference

### Core Concepts to Cover This Week

```
DAY 15: Components + Props + State
  - Functional components (the standard now)
  - JSX compilation, conditional rendering
  - Props: one-way data flow, prop drilling
  - useState: state updates, re-rendering

DAY 16: Hooks Deep Dive
  - useEffect: side effects, dependency array, cleanup
  - Controlled forms
  - Common pitfalls (infinite loops, stale state)

DAY 17: Performance Hooks
  - useRef: persist values without re-render, DOM access
  - useMemo: memoize expensive computations
  - useCallback: memoize functions (for child components)
  - React.memo: prevent unnecessary re-renders

DAY 18: Custom Hooks
  - Extract reusable logic into custom hooks
  - Build: useFetch, useDebounce, useLocalStorage
  - Rules of hooks (top-level, inside components/hooks only)

DAY 19: Context API
  - createContext, Provider, useContext
  - When Context is enough vs Redux
  - Avoiding unnecessary re-renders with Context

DAY 20: React Router
  - BrowserRouter, Routes, Route, Link
  - useNavigate, useParams, useLocation
  - Protected routes, 404 handling
```

### React Interview Quick Reference

| Concept | Key Points |
|---------|------------|
| **Virtual DOM** | In-memory representation of real DOM. React diffs virtual DOMs, applies minimal updates to real DOM (reconciliation). |
| **State vs Props** | State: internal, mutable (via setState/useState). Props: external, immutable (read-only). |
| **useEffect** | Runs after render. Empty deps `[]` = mount only. No deps = every render. Cleanup on unmount/before re-run. |
| **useRef** | Persists across renders without causing re-render. Common use: DOM access, storing previous values. |
| **useMemo** | `useMemo(() => expensive(), [deps])` — recalculates only when deps change. |
| **useCallback** | `useCallback(fn, [deps])` — returns memoized version of fn. Use with React.memo children. |
| **Keys** | Help React identify which items changed. Use stable, unique IDs (not array index). |
| **Controlled forms** | Form value driven by React state. `value={state}` + `onChange={handler}`. |

### Custom Hook Examples

```jsx
// useFetch — reusable data fetching
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        
        fetch(url, { signal: controller.signal })
            .then(res => res.json())
            .then(data => { setData(data); setLoading(false); })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setError(err); setLoading(false);
                }
            });

        return () => controller.abort();  // cleanup
    }, [url]);

    return { data, loading, error };
}

// useDebounce — debounced value
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}

// useLocalStorage — persist state
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
```

---

## 42. Week 3 — Theory & Concepts Reference

### React Concepts to Cover

| Concept | Day | Key Points |
|---------|-----|------------|
| **Components & JSX** | Day 15 | Functional components, JSX compilation, composition |
| **Props & State** | Day 15 | One-way data flow, useState, re-rendering |
| **useEffect** | Day 16 | Side effects, dependency array, cleanup, common pitfalls |
| **useRef** | Day 17 | Persist without re-render, DOM access |
| **useMemo / useCallback** | Day 17 | Memoization, when to use, when NOT to use |
| **Custom Hooks** | Day 18 | Extract reusable logic, rules of hooks |
| **Context API** | Day 19 | Global state without prop drilling, Provider/Consumer |
| **React Router** | Day 20 | Routing, navigation, protected routes |

---

## 43. Spaced Repetition Schedule for Week 3 (UPDATED with Weak Area Focus)

### What to Revise Each Day

| Day | Revise From | What to Review |
|-----|------------|----------------|
| Day 15 | Day 11 (4 days ago) | Stack patterns, Monotonic stack, Valid Parentheses |
| Day 15 | **🔴 WEAK AREA** | **Sliding Window guided practice (see Day 15 session above)** |
| Day 16 | Day 12 (4 days ago) | **🔴 Backtracking guided practice (see Day 16 session above)** |
| Day 16 | Day 14 (2 days ago) | All 27 patterns, timed test review. **Cold re-solve Sliding Window.** |
| Day 17 | Day 13 (4 days ago) | Binary search on rotated array, event loop |
| Day 17 | **🔴 WEAK AREA** | **Speed-check: Sliding Window (5 min) + Subsets (5 min) — no hints** |
| Day 18 | Day 14 (4 days ago) | Week 2 review, all patterns |
| Day 18 | Day 16 (2 days ago) | BST operations, Validate BST. **Cold re-solve Permutations.** |
| Day 19 | Day 15 (4 days ago) | Tree traversals, DFS template |
| Day 19 | Day 17 (2 days ago) | Tree divide & conquer, LCA |
| Day 20 | **🔴 STRESS TEST** | **Timed cold solve: Sliding Window + Subsets + Combination Sum (30 min)** |
| Day 20 | Day 18 (2 days ago) | Heap operations, Top K pattern |
| Day 21 | EVERYTHING | Full review day — all patterns, all concepts. **Hints warm-up before timed test.** |

---

## 44. Tree Problems Cheat Sheet

```
┌─────────────────────────────────────────────────────────────┐
│                     TREE PATTERNS                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PATTERN 1: DFS (Recursive)                                  │
│  Template: base case (null) → recurse left/right → combine  │
│  Example: Max Depth, Same Tree, Invert Tree                 │
│                                                              │
│  PATTERN 2: BFS (Level Order)                                │
│  Template: queue + process level by level                    │
│  Example: Level Order Traversal, Right Side View             │
│                                                              │
│  PATTERN 3: BST Property                                     │
│  Key: left < root < right for ALL descendants                │
│  Example: Validate BST, Search/Insert BST, LCA of BST       │
│                                                              │
│  PATTERN 4: Divide & Conquer                                 │
│  Key: Build answer from left result + right result           │
│  Example: Diameter, Balanced Tree, Construct from traversals │
│                                                              │
│  PATTERN 5: Inorder = Sorted (BST)                           │
│  Key: Inorder traversal of BST gives sorted order            │
│  Example: Kth Smallest in BST, Convert BST to Sorted List   │
│                                                              │
│  PATTERN 6: Ancestor                                         │
│  Key: Post-order DFS, return found node upward               │
│  Example: LCA of Binary Tree                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 45. Heap Cheat Sheet

```
┌─────────────────────────────────────────────────────────────┐
│                     HEAP PATTERNS                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PATTERN 1: Top K / Kth Element                              │
│  Use: Min heap of size k → top is kth largest                │
│  Example: Kth Largest Element, Top K Frequent                │
│                                                              │
│  PATTERN 2: Two Heaps (Running Median)                       │
│  Use: Max heap (left half) + Min heap (right half)           │
│  Example: Find Median from Data Stream                       │
│                                                              │
│  PATTERN 3: Merge K Sorted                                   │
│  Use: Min heap holding one element from each sorted source   │
│  Example: Merge K Sorted Lists                               │
│                                                              │
│  C++ SYNTAX:                                                 │
│  Max heap: priority_queue<int> pq;                           │
│  Min heap: priority_queue<int, vector<int>, greater<int>> pq;│
│  Custom:   priority_queue<T, vector<T>, Compare> pq;         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 46. Greedy Cheat Sheet

```
┌─────────────────────────────────────────────────────────────┐
│                    GREEDY PATTERNS                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PATTERN 1: Reachability / Farthest Point                    │
│  Track maximum reachable position                            │
│  Example: Jump Game, Jump Game II                            │
│                                                              │
│  PATTERN 2: Interval Scheduling                              │
│  Sort by END time → greedily select non-overlapping          │
│  Example: Non-overlapping Intervals, Meeting Rooms           │
│                                                              │
│  PATTERN 3: Running Sum / Circular                           │
│  Track running sum, reset when negative                      │
│  Example: Gas Station                                        │
│                                                              │
│  PATTERN 4: Collect All Profits                              │
│  Take every positive gain                                    │
│  Example: Best Time to Buy and Sell Stock II                 │
│                                                              │
│  HOW TO IDENTIFY GREEDY:                                     │
│  ✓ "Minimum/maximum" with a constraint                      │
│  ✓ Making local decisions leads to global optimum            │
│  ✓ Sorting + one-pass works                                 │
│  ✓ Problem seems "too easy" for DP                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 47. Week 3 Scorecard

| Metric | Target | Check |
|--------|--------|-------|
| DSA problems solved (cumulative) | 80+ | ☐ |
| New data structures learned | Trees, BST, Heaps | ☐ |
| Can write all 4 tree traversals from memory | Yes | ☐ |
| Can validate BST with range approach | Yes | ☐ |
| Can find LCA in both BST and Binary Tree | Yes | ☐ |
| Heap operations (insert, delete, peek) understood | Yes | ☐ |
| Can use priority_queue in C++ fluently | Yes | ☐ |
| Greedy vs DP — can explain the difference | Yes | ☐ |
| React: Components + Props + State | Yes | ☐ |
| React: useEffect with dependency array | Yes | ☐ |
| React: useMemo, useCallback, useRef | Yes | ☐ |
| React: Built 3 custom hooks | Yes | ☐ |
| React: Context API implemented | Yes | ☐ |
| React: React Router with protected routes | Yes | ☐ |
| Mistake notebook entries | 15+ (cumulative) | ☐ |
| Flashcards created | 80+ (cumulative) | ☐ |
| Timed tests passed | 3 (Week 1 + 2 + 3) | ☐ |

---

## 48. Week 4 Preview

> **Week 4 Theme:** Graphs → Dynamic Programming → Backend (Node.js + Express)

| Day | DSA Focus | Theory/JS |
|-----|-----------|-----------|
| Day 22 | Graphs: BFS & DFS, Adjacency List, Number of Islands | Node.js: Fundamentals, Event Loop, Modules |
| Day 23 | Graphs: Clone Graph, Pacific Atlantic Water Flow, Course Schedule | Express: Middleware, Routing, Request/Response |
| Day 24 | Graphs: Topological Sort, Dijkstra (awareness) | Express: Production Architecture, Error Handling |
| Day 25 | DP: Fibonacci, Climbing Stairs, House Robber, Coin Change | Auth: JWT, bcrypt, Protected Routes |
| Day 26 | DP: Longest Common Subsequence, 0/1 Knapsack, Word Break | API Design: REST best practices, Pagination |
| Day 27 | Mixed DSA Practice + Catch-up | Backend Review + API Project Start |
| Day 28 | Week 4 Review + Timed Test | Full mock interview simulation |

---

> **Week 3 is where you level up! 🌳** Trees are the #1 most asked data structure in tech interviews, and you're about to master them. Combined with heaps and greedy, you'll have covered ALL the major data structures except graphs. React fundamentals round out your frontend skills. By Day 21, you'll have **80+ problems, 39 patterns, and can build React apps** — that's serious interview readiness. Trees are the mountain — let's climb it! 🏔️💪
