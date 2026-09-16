# SDE-1 Preparation Roadmap — Part 9: Week 5 Plan (Days 29-35)

---

## 62. Week 5 Overview

> **Theme:** Advanced DP (Knapsack, Stocks, Intervals) → Tries + Bit Manipulation → DBMS + SQL → OS + Networks

### What You're Building On (Weeks 1-4 Recap)

| What You Covered | Status |
|-----------------|--------|
| 110+ DSA problems solved | ✅ |
| 51 DSA patterns learned | ✅ |
| Data structures: Arrays, Strings, Linked Lists, Stacks, Queues, Trees, BST, Heaps, Graphs | ✅ |
| Graph algorithms: BFS, DFS, Topological Sort, Union-Find, Dijkstra | ✅ |
| DP foundations: 1D (Fibonacci, Skip/Take, Unbounded) + 2D (Grid, String Match) | ✅ |
| JS: var/let/const, closures, this, promises, event loop, GC, currying, generators, Proxy, polyfills | ✅ |
| OOP: 4 Pillars + 5 SOLID Principles + 3 Design Patterns | ✅ |
| React: Components, Hooks, Context, Router, Custom Hooks | ✅ |
| Backend: Node.js, Express, Middleware, JWT Auth, bcrypt, API Design, Layered Architecture | ✅ |
| auth-api project built with production architecture | ✅ |
| 115+ Flashcards created | ✅ |
| 4 Timed tests passed | ✅ |

### ⚠️ Week 4 Weak Areas (Address this week)

```
FROM YOUR DAY 28 REVIEW — CHECK AND UPDATE:

Review your Day 28 timed test results:
  → Did DP problems feel natural? If NOT → extra DP practice Days 29-31
  → Could you write Graph BFS/DFS from memory? → Warm up on Day 29 morning
  → Was the 2D DP (LCS/Unique Paths) recurrence clear? → More 2D DP practice Day 30

COMMON WEAK SPOTS ENTERING WEEK 5:
  ⚠️ DP State Definition: If you struggled to define dp[i] → Day 29 focuses on this
  ⚠️ 2D DP: If LCS or Unique Paths were shaky → Day 30 has Edit Distance (same pattern)
  ⚠️ Graph Cycle Detection: If Course Schedule felt unclear → warm-up Day 32
  ⚠️ Backend: If JWT/Express architecture is fuzzy → revisit auth-api code Day 34

ACTION ITEMS FOR WEEK 5:
  1. Days 29-31: Advanced DP — the MOST differentiating topic at top companies
  2. Day 32: Tries (new data structure!) + OS fundamentals begin
  3. Day 33: Bit Manipulation + OS continued
  4. Day 34: Mixed practice + Computer Networks
  5. Day 35: Week 5 timed test + full mock interview
  6. DBMS/SQL integrated throughout the week
```

### Week 5 Goals

| Goal | Target |
|------|--------|
| DSA problems solved (cumulative) | **135+** |
| New data structures | Tries |
| New DSA patterns | 10 more (total **61**) |
| Advanced DP mastered | Knapsack, Stocks, Edit Distance, Palindromic DP |
| CS Subjects covered | DBMS + SQL, OS essentials, Computer Networks basics |
| SQL queries practiced | **30** problems (LeetCode SQL / HackerRank) |
| Flashcards (cumulative) | **150+** |
| Timed tests completed | **5** (Week 1 + 2 + 3 + 4 + 5) |
| **DP confidence** | **⭐ Can solve any 1D/2D DP, identify Knapsack, write Stock DP** |
| **CS fundamentals** | **⭐ Can answer top 15 DBMS + OS + Networks interview questions** |

---

## 63. Why Advanced DP, Tries & CS Subjects Are Critical Now

```
ADVANCED DP — WHAT SEPARATES "GOOD" FROM "GREAT" CANDIDATES:

  1. 0/1 Knapsack is THE MOST VERSATILE DP pattern — once you get it,
     you can solve Subset Sum, Partition, Target Sum, and more
  2. Stock problems (Buy/Sell with variations) are EXTREMELY common in interviews
  3. Edit Distance is a classic Google/Amazon question
  4. Palindromic DP tests your 2D thinking
  5. If you master these, you can handle 80%+ of DP questions

TRIES — A UNIQUE DATA STRUCTURE THAT STANDS OUT:

  1. Tries are asked in ~10% of interviews but most candidates CAN'T implement them
  2. Knowing Tries shows you understand more than just arrays and trees
  3. Word Search II (LC #212) is a FAMOUS hard problem that combines Trie + Backtracking
  4. Autocomplete, spell check, prefix matching — real-world applications

CS SUBJECTS — THE "OTHER HALF" OF TECH INTERVIEWS:

  1. DBMS + SQL: Almost EVERY company asks SQL queries + normalization + ACID
  2. OS: Process vs Thread, Deadlock, Mutex vs Semaphore — asked in 60%+ interviews
  3. Networks: "What happens when you type a URL?" — THE most common CS question
  4. These subjects are LOWER EFFORT, HIGH ROI — mostly theory you can memorize
  5. Many candidates skip these and LOSE offers because of it
```

---

## 64. Days 29-35 — Exact Day-by-Day Tasks

### Day 29: Advanced DP — 0/1 Knapsack Pattern + DBMS Fundamentals

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: DP Review** | Speed-check: solve House Robber (LC #198) from memory — write recurrence in under 2 min. This activates your DP thinking. |
| 2h | **DSA: 0/1 Knapsack + Subset DP** | Learn: 0/1 Knapsack pattern (take or skip each item). Solve: Partition Equal Subset Sum (LC #416 — re-solve for mastery), Target Sum (LC #494), Last Stone Weight II (LC #1049), Ones and Zeroes (LC #474) |
| 1h | **DBMS: Normalization + ACID + Transactions** | Normalization: 1NF → 2NF → 3NF → BCNF with examples. Why denormalize? ACID properties (Atomicity, Consistency, Isolation, Durability). Transactions: BEGIN, COMMIT, ROLLBACK. Isolation levels overview. |
| 30m | **SQL Practice** | Solve 5 easy SQL problems on LeetCode SQL or HackerRank. Focus: SELECT, WHERE, ORDER BY, basic JOINs. |
| 30m | **Revision** | Spaced recall from Day 25 (4 days ago): 1D DP patterns, Climbing Stairs, Coin Change recurrence, JWT auth flow |
| 30m | **Flashcards** | Create 5 new cards: 0/1 Knapsack template, Subset Sum reduction, ACID properties, Normalization (1NF-BCNF), Transaction isolation levels |

#### 0/1 Knapsack — THE MASTER PATTERN

```
THE 0/1 KNAPSACK FRAMEWORK:

  YOU HAVE: N items, each with a weight and value
  CONSTRAINT: Knapsack has capacity W
  GOAL: Maximize total value without exceeding capacity
  RULE: Each item can be taken AT MOST ONCE (0 or 1 — hence "0/1")

  STATE: dp[i][w] = max value using first i items with capacity w

  RECURRENCE:
    If weight[i] > w:  dp[i][w] = dp[i-1][w]           (can't take item i)
    Else:              dp[i][w] = max(
                         dp[i-1][w],                     (skip item i)
                         dp[i-1][w - weight[i]] + val[i] (take item i)
                       )

  BASE CASE: dp[0][w] = 0 for all w (no items = no value)

  SPACE OPTIMIZATION: Use 1D array, iterate capacity RIGHT TO LEFT
    for each item:
      for w = W down to weight[i]:
        dp[w] = max(dp[w], dp[w - weight[i]] + val[i])

  WHY RIGHT TO LEFT? So we don't use the same item twice!

  MANY PROBLEMS REDUCE TO KNAPSACK:
    Partition Equal Subset Sum → target = totalSum/2, "values" = nums
    Target Sum                → transform to subset sum problem
    Ones and Zeroes           → 2D knapsack (m zeros, n ones as capacity)
    Last Stone Weight II      → minimize |S1 - S2|, same as Partition
```

**Resources:** Striver's DP series (Knapsack playlist), NeetCode DP playlist
**By end of day:** 114+ total DSA problems. 0/1 Knapsack pattern mastered. DBMS fundamentals understood.

---

### Day 30: Advanced DP — Edit Distance + Palindromic DP + SQL JOINs

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: Knapsack DP** | Speed-check: explain the 0/1 Knapsack recurrence out loud, then code Partition Equal Subset Sum (LC #416) in under 5 min |
| 2h | **DSA: String DP + Palindromic DP** | Solve: Edit Distance (LC #72 — CLASSIC), Longest Palindromic Subsequence (LC #516), Palindromic Substrings (LC #647), Interleaving String (LC #97) |
| 1h | **DBMS: Indexing + SQL JOINs** | Indexing: B-tree vs Hash index, clustered vs non-clustered, composite indexes, when to/not to index. SQL JOINs practice: INNER, LEFT, RIGHT, FULL OUTER, SELF JOIN. |
| 30m | **SQL Practice** | Solve 5 medium SQL problems. Focus: JOINs, GROUP BY + HAVING, aggregate functions (COUNT, SUM, AVG). |
| 30m | **Revision** | Spaced recall from Day 26 (4 days ago): 2D DP recurrences, LCS, LIS, Unique Paths, Word Break |
| 30m | **Flashcards** | Create 5 new cards: Edit Distance recurrence, Palindromic Subsequence approach, B-tree vs Hash index, clustered vs non-clustered index, SQL JOIN types |

#### Edit Distance — DETAILED WALKTHROUGH

```
EDIT DISTANCE (LC #72) — One of the MOST important DP problems

  PROBLEM: Given two strings word1 and word2, find minimum operations
           (insert, delete, replace) to convert word1 → word2.

  STATE: dp[i][j] = min operations to convert word1[0..i-1] to word2[0..j-1]

  RECURRENCE:
    If word1[i-1] == word2[j-1]:
      dp[i][j] = dp[i-1][j-1]       (characters match, no operation needed)
    Else:
      dp[i][j] = 1 + min(
        dp[i-1][j],                  (delete from word1)
        dp[i][j-1],                  (insert into word1)
        dp[i-1][j-1]                 (replace in word1)
      )

  BASE CASES:
    dp[0][j] = j    (empty word1 → insert j characters)
    dp[i][0] = i    (word2 is empty → delete i characters)

  TRACE: word1 = "horse", word2 = "ros"
         ""  r  o  s
    ""  [ 0  1  2  3 ]
    h   [ 1  1  2  3 ]
    o   [ 2  2  1  2 ]
    r   [ 3  2  2  2 ]
    s   [ 4  3  3  2 ]
    e   [ 5  4  4  3 ]  → Answer: 3

  TIME: O(m*n), SPACE: O(m*n) or O(n) with optimization
```

**Resources:** NeetCode Edit Distance video, Striver's DP string series
**By end of day:** 118+ total DSA problems. String DP and palindromic DP solid. SQL JOINs mastered.

---

### Day 31: Advanced DP — Stock Problems + Matrix Chain + Advanced SQL

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: String DP** | Speed-check: write the Edit Distance recurrence from memory in under 2 min |
| 2h | **DSA: Stock DP + Interval DP** | Solve: Best Time to Buy/Sell Stock III (LC #123 — at most 2 transactions), Best Time to Buy/Sell Stock with Cooldown (LC #309), Best Time to Buy/Sell Stock with Transaction Fee (LC #714), Minimum Cost to Cut a Stick (LC #1547 — interval DP awareness) |
| 1h | **SQL: Advanced Queries** | Window functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LEAD(), LAG(). Common Table Expressions (CTEs). Subqueries: correlated vs non-correlated. Practice: 2nd highest salary, employees earning more than manager, running totals. |
| 30m | **SQL Practice** | Solve 5 medium-hard SQL problems. Focus: Window functions, CTEs, complex subqueries. |
| 30m | **Revision** | Spaced recall from Day 27 (4 days ago): Mixed practice, Partition Equal Subset Sum, auth-api architecture |
| 30m | **Flashcards** | Create 5 new cards: Stock DP state machine, Buy/Sell with Cooldown states, ROW_NUMBER vs RANK vs DENSE_RANK, CTE syntax, correlated vs non-correlated subquery |

#### Stock Problems — STATE MACHINE APPROACH

```
STOCK DP — THE STATE MACHINE FRAMEWORK:

  THE KEY INSIGHT: At any day, you are in one of these STATES:
    • HOLDING a stock (bought but not sold)
    • NOT HOLDING a stock (either never bought, or sold)
    • COOLDOWN (just sold, can't buy today) — for cooldown variant

  GENERAL RECURRENCE:
    hold[i]    = max(hold[i-1],    notHold[i-1] - prices[i])  // keep holding OR buy today
    notHold[i] = max(notHold[i-1], hold[i-1] + prices[i])     // keep not holding OR sell today

  STOCK III (at most 2 transactions):
    Track: buy1, sell1, buy2, sell2
    buy1  = max(buy1,  -prices[i])           // first buy
    sell1 = max(sell1, buy1 + prices[i])     // first sell
    buy2  = max(buy2,  sell1 - prices[i])    // second buy (use profit from first sell)
    sell2 = max(sell2, buy2 + prices[i])     // second sell

  STOCK WITH COOLDOWN:
    hold[i]     = max(hold[i-1], cooldown[i-1] - prices[i])
    notHold[i]  = max(notHold[i-1], hold[i-1] + prices[i])
    cooldown[i] = notHold[i-1]  // sold yesterday → forced cooldown

  STOCK WITH TRANSACTION FEE:
    hold[i]    = max(hold[i-1], notHold[i-1] - prices[i])
    notHold[i] = max(notHold[i-1], hold[i-1] + prices[i] - fee)
```

**Resources:** NeetCode Stock series, Striver's DP playlist
**By end of day:** 122+ total DSA problems. Stock DP mastered. Advanced SQL queries solid.

---

### Day 32: Tries + OS Fundamentals (Process, Thread, Deadlock)

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: DP Review** | Speed-check: solve Coin Change (LC #322) from memory — under 5 min |
| 1.5h | **DSA: Trie Data Structure** | Learn: Trie structure (node with children[26], isEnd flag). Implement: Insert, Search, StartsWith. Solve: Implement Trie (LC #208), Design Add and Search Words Data Structure (LC #211), Word Search II (LC #212 — Trie + Backtracking, Hard) |
| 1h | **DSA: Bit Manipulation Basics** | Learn: AND, OR, XOR, NOT, left/right shift. Key tricks: n & (n-1) removes lowest set bit, n & (-n) isolates lowest set bit. Solve: Single Number (LC #136 — XOR), Counting Bits (LC #338), Reverse Bits (LC #190) |
| 1h | **OS: Processes, Threads, Deadlock** | Process vs Thread (memory sharing, overhead). Process states: New → Ready → Running → Waiting → Terminated. Context switching (what happens, overhead). Deadlock: 4 conditions (mutual exclusion, hold & wait, no preemption, circular wait). Deadlock prevention. |
| 30m | **Revision** | Spaced recall from Day 28 (4 days ago): Week 4 timed test patterns, all 51 patterns quick recall |
| 30m | **Flashcards** | Create 5 new cards: Trie structure and operations, Word Search II approach, XOR trick for single number, Process vs Thread, Deadlock 4 conditions |

#### Trie — IMPLEMENTATION TEMPLATE

```cpp
class TrieNode {
public:
    TrieNode* children[26];
    bool isEnd;
    
    TrieNode() {
        isEnd = false;
        for (int i = 0; i < 26; i++) children[i] = nullptr;
    }
};

class Trie {
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }
    
    // Insert word — O(word.length)
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!node->children[idx])
                node->children[idx] = new TrieNode();
            node = node->children[idx];
        }
        node->isEnd = true;
    }
    
    // Search exact word — O(word.length)
    bool search(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!node->children[idx]) return false;
            node = node->children[idx];
        }
        return node->isEnd;
    }
    
    // Check if any word starts with prefix — O(prefix.length)
    bool startsWith(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            int idx = c - 'a';
            if (!node->children[idx]) return false;
            node = node->children[idx];
        }
        return true;  // don't check isEnd!
    }
};
```

**Resources:** NeetCode Tries, Striver's Trie series, OS concepts from Gate Smashers / Neso Academy
**By end of day:** 128+ total DSA problems. Trie implemented. Bit manipulation basics. OS fundamentals started.

---

### Day 33: Bit Manipulation + OS Continued (Concurrency, Memory)

| Time | Activity | Details |
|------|----------|---------|
| 10m | **Warm-up: Trie** | Speed-check: implement Trie insert + search from memory — under 5 min |
| 1.5h | **DSA: Bit Manipulation + Mixed DP Review** | Solve: Number of 1 Bits (LC #191), Missing Number (LC #268 — XOR approach), Sum of Two Integers (LC #371 — no + operator). DP re-solve: Edit Distance (LC #72), Best Time to Buy/Sell Stock III (LC #123) |
| 1h | **OS: Concurrency + Memory Management** | Race condition (what it is, real-world examples). Mutex vs Semaphore (binary vs counting, when to use). Virtual Memory (why it exists, page table). Paging (page faults, thrashing). Stack vs Heap memory (what goes where). |
| 30m | **OS Interview Questions Practice** | Answer 15 OS interview questions out loud (from Part 2, Section 6.3) |
| 30m | **Revision** | Spaced recall from Day 29 (4 days ago): 0/1 Knapsack pattern, Subset Sum, ACID properties, Normalization |
| 30m | **Flashcards** | Create 5 new cards: Bit manipulation tricks (n & (n-1), XOR), Mutex vs Semaphore, Race condition, Virtual Memory + Page Faults, Stack vs Heap |

**Resources:** LeetCode Bit Manipulation tag, Gate Smashers OS playlist
**By end of day:** 133+ total DSA problems. Bit manipulation done. OS fundamentals solid.

---

### Day 34: Mixed Practice + Computer Networks + Full Review

| Time | Activity | Details |
|------|----------|---------|
| 1h | **DSA: Mixed Re-solve** | Re-solve 1 from each new topic — DP: Edit Distance (LC #72), Knapsack: Partition Equal Subset Sum (LC #416), Trie: Implement Trie (LC #208), Stock: Buy/Sell Stock with Cooldown (LC #309). Plus any problem you got wrong this week. |
| 1h | **DSA: Bonus Problems** | If confident: try Regular Expression Matching (LC #10 — hard DP), Maximum Product Subarray re-solve. If shaky: re-do Coin Change + LCS + House Robber. |
| 1h | **Computer Networks** | OSI Model (7 layers, what each does). TCP/IP Model. TCP vs UDP. HTTP/HTTPS (methods, status codes, TLS handshake). DNS (resolution process). Cookies vs Sessions. CORS. REST principles. |
| 30m | **Networks Interview Questions** | Answer 15 networking interview questions out loud (from Part 2, Section 6.4). Key: "What happens when you type a URL in the browser?" |
| 30m | **Revision** | Spaced recall from Day 30 (4 days ago): Edit Distance, Palindromic DP, SQL JOINs, Indexing. Also: Day 32 (2 days ago): Trie, Process vs Thread |
| 30m | **Flashcards** | Full deck review (should have 145+ cards) + 5 new cards: OSI Model layers, TCP vs UDP, DNS resolution, "URL in browser" answer, CORS + Same-Origin Policy |

**Resources:** Computer Networks from Gate Smashers, Neso Academy
**By end of day:** 137+ total DSA problems. All CS subjects (DBMS + OS + Networks) covered at interview level.

---

### Day 35: Week 5 Review Day (Advanced DP + CS Subjects Assessment)

| Time | Activity | Details |
|------|----------|---------|
| 30m | **🟡 Hints Warm-up Round** | Before the real test, warm up: (1) Solve a Knapsack DP problem with the Knapsack template visible, (2) Write the Edit Distance recurrence on paper. |
| 1h | **Week 5 Timed Test (COLD — NO hints)** | Timed 60 min: Solve 3 problems without notes — 1 Advanced DP (Partition Equal Subset Sum or Edit Distance), 1 Stock DP (Buy/Sell with Cooldown or Transaction Fee), 1 Trie (Implement Trie or Design Add & Search Words) |
| 30m | **Test Review & Reflection** | What went well? What went wrong? Compare to Week 4 test — did advanced DP feel approachable? Which topic needs more work? |
| 30m | **DSA Re-solve** | Re-solve 5 problems from Week 5 without hints: Partition Equal Subset Sum, Edit Distance, Stock III, Implement Trie, Single Number |
| 30m | **CS Subjects Interview Sim** | Answer 10 questions out loud: 3 DBMS (normalization, ACID, indexing), 3 OS (process vs thread, deadlock, mutex vs semaphore), 4 Networks (OSI, TCP vs UDP, DNS, "what happens when you type a URL?") |
| 30m | **JS + React + Backend + OOP Review** | Quick fire: 10 JS questions + 5 React questions + 5 Backend questions + 5 OOP questions (all from memory) |
| 30m | **Full Pattern Review** | Write down ALL 61 patterns — name, when to use, example. **Star the ones you're still shaky on.** |
| 30m | **Weekly Revision + Plan Week 6** | Full flashcard review (150+ cards). Mistake notebook. Week 5 scorecard. Identify weak areas → Preview Week 6: Projects + System Design + Mock Interviews! |

**By end of day:** 137+ total DSA problems. Week 5 complete. Advanced DP, Tries, Bit Manipulation mastered. DBMS + OS + Networks interview-ready. **Ready for projects and system design.**

---

## 65. Cumulative — All LeetCode Problems List (Weeks 1-4 + Week 5)

### ✅ WEEKS 1-4 (See Parts 5-8 for full list — problems #1-103)

---

### ✅ WEEK 5: Advanced DP + Tries + Bit Manipulation (Day 29-35) — 25+ problems

#### Advanced DP — 0/1 Knapsack (Day 29) — 4 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 104 | Partition Equal Subset Sum (re-master) | [LC #416](https://leetcode.com/problems/partition-equal-subset-sum/) | Medium | 0/1 Knapsack |
| 105 | Target Sum | [LC #494](https://leetcode.com/problems/target-sum/) | Medium | 0/1 Knapsack + Count |
| 106 | Last Stone Weight II | [LC #1049](https://leetcode.com/problems/last-stone-weight-ii/) | Medium | 0/1 Knapsack (min diff) |
| 107 | Ones and Zeroes | [LC #474](https://leetcode.com/problems/ones-and-zeroes/) | Medium | 2D Knapsack |

#### Advanced DP — String + Palindromic (Day 30) — 4 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 108 | Edit Distance | [LC #72](https://leetcode.com/problems/edit-distance/) | Medium | 2D DP (String Edit) |
| 109 | Longest Palindromic Subsequence | [LC #516](https://leetcode.com/problems/longest-palindromic-subsequence/) | Medium | 2D DP (Palindromic) |
| 110 | Palindromic Substrings | [LC #647](https://leetcode.com/problems/palindromic-substrings/) | Medium | DP / Expand Around Center |
| 111 | Interleaving String | [LC #97](https://leetcode.com/problems/interleaving-string/) | Medium | 2D DP (String Interleave) |

#### Advanced DP — Stocks + Interval (Day 31) — 4 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 112 | Best Time to Buy/Sell Stock III | [LC #123](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | Hard | Stock DP (k=2 transactions) |
| 113 | Buy/Sell Stock with Cooldown | [LC #309](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | Medium | Stock DP (State Machine) |
| 114 | Buy/Sell Stock with Transaction Fee | [LC #714](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) | Medium | Stock DP (State Machine) |
| 115 | Minimum Cost to Cut a Stick | [LC #1547](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) | Hard | Interval DP |

#### Tries (Day 32) — 3 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 116 | Implement Trie | [LC #208](https://leetcode.com/problems/implement-trie-prefix-tree/) | Medium | Trie Implementation |
| 117 | Design Add and Search Words | [LC #211](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium | Trie + DFS |
| 118 | Word Search II | [LC #212](https://leetcode.com/problems/word-search-ii/) | Hard | Trie + Backtracking |

#### Bit Manipulation (Day 32-33) — 6 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 119 | Single Number | [LC #136](https://leetcode.com/problems/single-number/) | Easy | XOR Trick |
| 120 | Counting Bits | [LC #338](https://leetcode.com/problems/counting-bits/) | Easy | Bit DP |
| 121 | Reverse Bits | [LC #190](https://leetcode.com/problems/reverse-bits/) | Easy | Bit Manipulation |
| 122 | Number of 1 Bits | [LC #191](https://leetcode.com/problems/number-of-1-bits/) | Easy | n & (n-1) trick |
| 123 | Missing Number (XOR) | [LC #268](https://leetcode.com/problems/missing-number/) | Easy | XOR |
| 124 | Sum of Two Integers | [LC #371](https://leetcode.com/problems/sum-of-two-integers/) | Medium | Bit Add (carry + XOR) |

#### Mixed Review + Bonus (Day 34) — Re-solve 5 + bonus

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 125+ | Re-solve from above | — | — | Review |

---

## 66. Week 5 New Patterns Learned

### Cumulative Pattern Library (Weeks 1-4 + Week 5)

```
WEEK 5 PATTERNS (52-61):
 #  Pattern                    When to Use                        Example Problem
52  0/1 Knapsack              Take/skip items with capacity       Partition Equal Subset Sum, Target Sum
53  Subset Sum                Can we form target sum?             Target Sum, Last Stone Weight II
54  String Edit DP            Transform one string to another     Edit Distance
55  Palindromic DP            Longest palindrome in string        Longest Palindromic Subsequence
56  Stock DP (State Machine)  Buy/sell with constraints           Stock III, Cooldown, Transaction Fee
57  Interval DP               Optimal split/merge of ranges       Min Cost to Cut a Stick, Matrix Chain
58  Trie (Prefix Tree)        Prefix matching, autocomplete       Implement Trie, Word Search II
59  Trie + Backtracking       Word search in grid with dict       Word Search II
60  XOR Trick                 Find unique/missing element         Single Number, Missing Number
61  Bit Manipulation          Arithmetic without operators        Sum of Two Integers, Counting Bits

TOTAL: 61 PATTERNS across 5 weeks!
```

---

## 67. Week 5 CS Subject Notes

### DBMS Quick Reference

```
NORMALIZATION:
  1NF: No repeating groups, atomic values
  2NF: 1NF + no partial dependencies (non-key depends on FULL primary key)
  3NF: 2NF + no transitive dependencies (non-key depends only on key)
  BCNF: 3NF + every determinant is a candidate key

ACID:
  Atomicity:    All or nothing — transaction fully completes or fully rolls back
  Consistency:  Database moves from one valid state to another
  Isolation:    Concurrent transactions don't interfere with each other
  Durability:   Once committed, data persists even after crash

INDEXING:
  B-tree index:     Balanced tree, good for range queries, most common
  Hash index:       O(1) lookup, exact match only, no range queries
  Clustered:        Data rows stored in index order (1 per table)
  Non-clustered:    Separate from data, pointer to data row (many per table)
  Composite:        Index on multiple columns (order matters!)

  WHEN TO INDEX:    Frequently queried columns, JOIN columns, WHERE columns
  WHEN NOT TO:      Small tables, frequently updated columns, low cardinality

SQL QUICK PATTERNS:
  2nd highest salary:    SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp)
  OR:                    SELECT salary FROM emp ORDER BY salary DESC LIMIT 1 OFFSET 1
  Nth highest:           Window function: DENSE_RANK() OVER (ORDER BY salary DESC)
  Running total:         SUM(amount) OVER (ORDER BY date ROWS UNBOUNDED PRECEDING)
  Self-join:             SELECT e.name FROM emp e JOIN emp m ON e.manager_id = m.id WHERE e.salary > m.salary
```

### OS Quick Reference

```
PROCESS vs THREAD:
  Process: Independent, own memory space, heavier context switch, IPC needed
  Thread:  Share process memory, lighter context switch, shared data (race conditions!)

DEADLOCK — 4 NECESSARY CONDITIONS (ALL must hold):
  1. Mutual Exclusion:  Resource held exclusively
  2. Hold & Wait:       Holding one, waiting for another
  3. No Preemption:     Can't forcibly take resources
  4. Circular Wait:     A→B→C→A cycle of waiting
  Prevention: Break ANY one condition

MUTEX vs SEMAPHORE:
  Mutex:      Binary lock, only owner can unlock, one thread at a time
  Semaphore:  Counter, any thread can signal, controls N concurrent accesses
  Binary Semaphore ≈ Mutex but with weaker ownership semantics

VIRTUAL MEMORY:
  Why:     Programs can use more memory than physically available
  How:     Pages mapped to frames, page table tracks mapping
  Page Fault: Requested page not in RAM → load from disk (SLOW)
  Thrashing:  Too many page faults → system spends more time swapping than executing

STACK vs HEAP:
  Stack: Local variables, function calls, LIFO, fast, auto-deallocated
  Heap:  Dynamic allocation (new/malloc), manual deallocation, slower, fragmentation
```

### Computer Networks Quick Reference

```
OSI MODEL (7 layers — top to bottom):
  7. Application:   HTTP, FTP, DNS, SMTP        (user-facing protocols)
  6. Presentation:  Encryption, compression       (data format)
  5. Session:       Session management             (connections)
  4. Transport:     TCP, UDP                       (reliability, ports)
  3. Network:       IP, routing                    (addressing)
  2. Data Link:     MAC addresses, switches        (framing)
  1. Physical:      Cables, signals                (bits)

TCP vs UDP:
  TCP: Reliable, ordered, connection-oriented, slower (HTTP, FTP, email)
  UDP: Unreliable, unordered, connectionless, faster (video, gaming, DNS)

"WHAT HAPPENS WHEN YOU TYPE A URL?" (THE answer):
  1. Browser checks cache (browser → OS → router → ISP)
  2. DNS resolution: domain → IP address
  3. TCP 3-way handshake (SYN → SYN-ACK → ACK)
  4. TLS handshake (if HTTPS — certificate exchange, key negotiation)
  5. HTTP request sent (GET /path)
  6. Server processes request, sends HTTP response
  7. Browser renders HTML → parses CSS → executes JS → paints DOM
  8. TCP connection closed (FIN → FIN-ACK)

CORS (Cross-Origin Resource Sharing):
  Same-Origin Policy: Browser blocks requests to different origin (protocol + domain + port)
  CORS headers: Access-Control-Allow-Origin, Access-Control-Allow-Methods
  Preflight: OPTIONS request before actual request (for non-simple requests)
```

---

## 68. Week 5 Scorecard

| Metric | Target | Check |
|--------|--------|-------|
| DSA problems solved (cumulative) | 135+ | ☐ |
| New topics learned | Advanced DP, Tries, Bit Manipulation | ☐ |
| Can explain 0/1 Knapsack and reduce problems to it | Yes | ☐ |
| Can write Edit Distance recurrence from memory | Yes | ☐ |
| Can solve Stock DP problems using state machine approach | Yes | ☐ |
| Can implement a Trie (insert, search, startsWith) from memory | Yes | ☐ |
| Can solve bit manipulation problems (XOR, n & (n-1)) | Yes | ☐ |
| DBMS: Normalization (1NF-BCNF), ACID, Indexing, SQL JOINs | Yes | ☐ |
| SQL: Can write Window functions, CTEs, complex subqueries | Yes | ☐ |
| OS: Process vs Thread, Deadlock, Mutex vs Semaphore, Virtual Memory | Yes | ☐ |
| Networks: OSI, TCP/UDP, DNS, HTTP/HTTPS, CORS | Yes | ☐ |
| Can answer "What happens when you type a URL?" comprehensively | Yes | ☐ |
| SQL problems practiced | 30 | ☐ |
| Mistake notebook entries | 25+ (cumulative) | ☐ |
| Flashcards created | 150+ (cumulative) | ☐ |
| Timed tests passed | 5 (Week 1 + 2 + 3 + 4 + 5) | ☐ |

---

## 69. Week 6 Preview

> **Week 6 Theme:** Projects (Full-Stack App) → System Design Basics → Mock Interviews → Job Applications Begin

| Day | Focus | Details |
|-----|-------|---------|
| Day 36 | Project 1 Setup | Full-stack Task Manager: React + Redux + Express + MongoDB. Setup, auth, folder structure. |
| Day 37 | Project 1 Features | CRUD operations, task board UI, API integration |
| Day 38 | Project 1 Polish | Real-time updates (Socket.io awareness), deploy to Vercel/Railway |
| Day 39 | System Design Basics | Building blocks: Load Balancer, CDN, Cache, Message Queue. Design template. |
| Day 40 | System Design Problems | URL Shortener + Chat Application design |
| Day 41 | Mock Interview Day | Full mock: DSA (2 medium) + CS questions + Project discussion |
| Day 42 | Week 6 Review + Applications | Resume polish, LinkedIn optimization, start applying |

---

> **Week 5 is where you become COMPLETE! 🚀** You already have the DSA foundation (51 patterns) and backend skills. This week you're adding the HARDEST DP problems (Knapsack, Stocks, Edit Distance), unique data structures (Tries), AND all three CS subjects. By Day 35, you'll have **135+ problems, 61 patterns, 30 SQL queries, and can answer any CS fundamentals question** — that's a FULL-STACK SDE-1 candidate. The finish line is in sight! 💪🔥
