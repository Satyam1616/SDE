# SDE-1 Preparation Roadmap — Part 6: Week 2 Plan (Days 8-14)

---

## 26. Week 2 Overview

> **Theme:** Strings & Hashing → Linked Lists → Stacks & Queues → Recursion/Backtracking → Binary Search

### What You're Building On (Week 1 Recap)

| What You Covered | Status |
|-----------------|--------|
| 16 Array problems solved | ✅ |
| 14 DSA patterns learned | ✅ |
| JS: var/let/const, closures, this, promises, event loop, error handling | ✅ |
| OOP: 4 Pillars + All 5 SOLID Principles | ✅ |
| 20+ Flashcards created | ✅ |

### Week 2 Goals

| Goal | Target |
|------|--------|
| DSA problems solved (cumulative) | **50** |
| New data structures | Strings, Linked Lists, Stacks, Queues |
| New DSA patterns | 13 more (total 27) |
| Design patterns | Singleton, Observer, Factory |
| JS advanced | Garbage Collection, Currying, Generators, Proxy, Polyfills |
| Flashcards (cumulative) | **50+** |
| Timed tests completed | **2** (Week 1 + Week 2) |

---

## 27. Days 8-14 — Exact Day-by-Day Tasks

### Day 8: Strings & Hashing + Design Patterns Start

| Time | Activity | Details |
|------|----------|---------|
| 1.5h | **DSA: Strings** | Solve: Valid Anagram (LC #242), Valid Palindrome (LC #125), Longest Substring Without Repeating Characters (LC #3), Group Anagrams (LC #49) |
| 1h | **OOP: Singleton Pattern** | What is Singleton? Why use it? Implement in JS (lazy init, module pattern). Interview: "When would you use Singleton?" |
| 1h | **JS: Garbage Collection** | Mark-and-sweep algorithm, reference counting, WeakMap/WeakSet, common memory leak patterns (forgotten listeners, closures, timers) |
| 30m | **Revision** | Re-solve 2 array problems from Week 1 (Kadane's + 3Sum) without looking |
| 30m | **Flashcards** | Create 10 new cards: string patterns (sliding window, hash map frequency) + Singleton pattern |

**Resources:** LeetCode String tag (Easy → Medium), Refactoring Guru — Singleton
**By end of day:** 20 total DSA problems. Can explain sliding window for strings. Singleton implemented.

---

### Day 9: Strings Deep + Linked Lists Intro

| Time | Activity | Details |
|------|----------|---------|
| 1h | **DSA: Strings** | Solve: Longest Palindromic Substring (LC #5), String to Integer / atoi (LC #8), Implement strStr() / indexOf (LC #28) |
| 1.5h | **DSA: Linked Lists Intro** | Understand: node structure, singly vs doubly. Implement from scratch: insert (head/tail/middle), delete, traverse, search, reverse |
| 1h | **JS: Currying & Composition** | Implement generic curry function, function composition (`compose`, `pipe`), partial application. Code 3 exercises. |
| 30m | **OOP: Observer Pattern** | Publisher-Subscriber model. Implement EventEmitter class. Real-world: Node.js events, React state updates |
| 30m | **Revision** | Review Day 8 topics + spaced recall from Day 5 (prefix sum, debounce/throttle) |

**Resources:** Striver's Linked List playlist, NeetCode LL section
**By end of day:** 23 total DSA problems. Can implement linked list from scratch. Observer pattern coded.

---

### Day 10: Linked Lists Deep

| Time | Activity | Details |
|------|----------|---------|
| 1.5h | **DSA: Linked Lists** | Solve: Reverse Linked List (LC #206), Linked List Cycle (LC #141 — Floyd's Tortoise & Hare), Merge Two Sorted Lists (LC #21), Middle of Linked List (LC #876) |
| 1h | **DSA: Linked Lists** | Solve: Remove Nth Node From End (LC #19), Intersection of Two Linked Lists (LC #160) |
| 1h | **JS: Iterators & Generators** | `Symbol.iterator`, `for...of`, generator functions with `yield`, `function*`, lazy evaluation, async generators (awareness) |
| 30m | **OOP: Factory Pattern** | Simple factory vs factory method. When to use over constructors. Implement in JS. |
| 30m | **Revision** | Re-solve 3 problems without hints (Two Sum, Move Zeroes, Valid Anagram) + flashcard review |

**Resources:** LeetCode Linked List tag, MDN Iterators and Generators guide
**By end of day:** 29 total DSA problems. Floyd's cycle detection mastered. Can explain slow/fast pointer technique.

---

### Day 11: Stacks & Queues

| Time | Activity | Details |
|------|----------|---------|
| 1h | **DSA: Stack Implementation** | Implement stack using array and linked list. Understand: LIFO, push, pop, peek, isEmpty |
| 1h | **DSA: Stack Problems** | Solve: Valid Parentheses (LC #20), Min Stack (LC #155), Next Greater Element I (LC #496), Daily Temperatures (LC #739) |
| 1h | **DSA: Queue Problems** | Implement queue. Solve: Implement Stack using Queues (LC #225), Implement Queue using Stacks (LC #232) |
| 1h | **JS: Proxy & Reflect** | What is Proxy, handler traps (get, set, has), practical uses: validation, logging, default values. Reflect API basics. |
| 30m | **OOP: Composition vs Inheritance** | "Has-a" vs "Is-a", why composition is preferred in modern code, practical refactoring examples |
| 30m | **Revision** | Spaced recall from Day 7 (1 week ago!) — re-solve 3Sum or Container With Most Water. Review mistake notebook. |

**Resources:** NeetCode Stack playlist, LeetCode Stack/Queue tags
**By end of day:** 35 total DSA problems. Stack/Queue patterns started. Monotonic stack concept understood.

---

### Day 12: Recursion & Backtracking

| Time | Activity | Details |
|------|----------|---------|
| 1.5h | **DSA: Recursion/Backtracking** | Solve: Subsets (LC #78), Permutations (LC #46), Combination Sum (LC #39), Letter Combinations of Phone Number (LC #17) |
| 1h | **DSA: Backtracking Deep** | Understand: decision tree, choose-explore-unchoose pattern. Solve: Palindrome Partitioning (LC #131), N-Queens (LC #51 — understand approach, don't memorize) |
| 1h | **JS: Polyfills** | Implement from scratch: `Promise.all`, `Array.prototype.flat`, `Array.prototype.reduce`. Understand WHY each works. |
| 30m | **OOP Review** | All 5 SOLID principles + 3 Design Patterns (Singleton, Observer, Factory) — explain each in 30 seconds aloud |
| 30m | **Revision** | Flashcards + re-solve one linked list problem (Reverse LL or Cycle Detection) |

**Resources:** Striver's Recursion/Backtracking playlist, NeetCode Backtracking section
**By end of day:** 41 total DSA problems. Backtracking template memorized. Can draw decision trees.

---

### Day 13: Binary Search + Catch-up

| Time | Activity | Details |
|------|----------|---------|
| 1.5h | **DSA: Binary Search** | Learn: binary search template (left ≤ right vs left < right). Solve: Binary Search (LC #704), Search Insert Position (LC #35), First and Last Position (LC #34), Search in Rotated Sorted Array (LC #33) |
| 1h | **DSA: Binary Search Advanced** | Solve: Find Minimum in Rotated Sorted Array (LC #153), Peak Element (LC #162), Koko Eating Bananas (LC #875 — binary search on answer) |
| 1h | **JS: Event Loop Deep Dive** | 10 output prediction questions. `process.nextTick` vs `setImmediate` (Node.js). Microtask priority edge cases. |
| 30m | **Catch-up** | Any topic from this week you feel behind on. Re-attempt any problem you got wrong. |
| 30m | **Revision** | Full flashcard deck review (should have 40+ cards by now) + mistake notebook |

**Resources:** LeetCode Binary Search study plan, NeetCode Binary Search playlist
**By end of day:** 48 total DSA problems. Binary search template memorized. Can identify "binary search on answer" problems.

---

### Day 14: Week 2 Review Day

| Time | Activity | Details |
|------|----------|---------|
| 1h | **Week 2 Timed Test** | Timed 60 min: Solve 3 problems without notes — 1 string (Group Anagrams), 1 linked list (Reverse LL), 1 stack/binary search (Valid Parentheses or Search in Rotated Array) |
| 30m | **DSA Re-solve** | Re-solve 5 problems from Week 2 without hints: Longest Substring Without Repeating, Linked List Cycle, Min Stack, Subsets, Binary Search |
| 30m | **JS Interview Sim** | Answer 15 random JS interview questions out loud (add Week 2 topics: GC, currying, generators, Proxy) |
| 30m | **OOP Interview Sim** | Explain all 5 SOLID principles + 3 design patterns as if in an interview. Time yourself: 2 min max per concept. |
| 30m | **Pattern Review** | Write down ALL DSA patterns learned (should be 20+). For each: name, when to use, one example problem. |
| 30m | **Weekly Revision** | Review ALL notes from both weeks. Flashcards. Mistake notebook. Grade yourself on Week 2 scorecard. |
| 30m | **Plan Week 3** | Identify weak areas. Write down: What topics next week? (Trees & BST!) Where am I weakest? |

**By end of day:** 50+ total DSA problems. Week 2 complete. All 3 design patterns solid. Ready for Trees.

---

### Week 2 Scorecard

| Metric | Target | Check |
|--------|--------|-------|
| DSA problems solved (cumulative) | 50 | ☐ |
| New data structures learned | Strings, Linked Lists, Stacks, Queues | ☐ |
| Can implement linked list from scratch | Yes | ☐ |
| Binary search template memorized | Yes | ☐ |
| Backtracking template memorized | Yes | ☐ |
| Design patterns known | Singleton, Observer, Factory | ☐ |
| JS advanced concepts | GC, currying, generators, Proxy, polyfills | ☐ |
| Can explain SOLID + 3 patterns aloud | Yes | ☐ |
| Mistake notebook entries | 10+ (cumulative) | ☐ |
| Flashcards created | 50+ (cumulative) | ☐ |
| Timed tests passed | 2 (Week 1 + Week 2) | ☐ |

---

## 28. Week 2 — All LeetCode Problems List

### Strings (Day 8-9) — 7 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 17 | Valid Anagram | [LC #242](https://leetcode.com/problems/valid-anagram/) | Easy | Frequency Map |
| 18 | Valid Palindrome | [LC #125](https://leetcode.com/problems/valid-palindrome/) | Easy | Two Pointer (String) |
| 19 | Longest Substring Without Repeating Characters | [LC #3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | Sliding Window |
| 20 | Group Anagrams | [LC #49](https://leetcode.com/problems/group-anagrams/) | Medium | Frequency Map / Sorting |
| 21 | Longest Palindromic Substring | [LC #5](https://leetcode.com/problems/longest-palindromic-substring/) | Medium | Expand Around Center |
| 22 | String to Integer (atoi) | [LC #8](https://leetcode.com/problems/string-to-integer-atoi/) | Medium | Parsing / Edge Cases |
| 23 | Implement strStr() | [LC #28](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | Easy | String Matching |

### Linked Lists (Day 9-10) — 6 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 24 | Reverse Linked List | [LC #206](https://leetcode.com/problems/reverse-linked-list/) | Easy | Linked List Reversal |
| 25 | Linked List Cycle | [LC #141](https://leetcode.com/problems/linked-list-cycle/) | Easy | Fast & Slow Pointer |
| 26 | Merge Two Sorted Lists | [LC #21](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | Merge Two Lists |
| 27 | Middle of Linked List | [LC #876](https://leetcode.com/problems/middle-of-the-linked-list/) | Easy | Fast & Slow Pointer |
| 28 | Remove Nth Node From End | [LC #19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | Two Pointer (Gap) |
| 29 | Intersection of Two Linked Lists | [LC #160](https://leetcode.com/problems/intersection-of-two-linked-lists/) | Easy | Two Pointer (Length Diff) |

### Stacks & Queues (Day 11) — 6 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 30 | Valid Parentheses | [LC #20](https://leetcode.com/problems/valid-parentheses/) | Easy | Stack for Matching |
| 31 | Min Stack | [LC #155](https://leetcode.com/problems/min-stack/) | Medium | Auxiliary Stack |
| 32 | Next Greater Element I | [LC #496](https://leetcode.com/problems/next-greater-element-i/) | Easy | Monotonic Stack |
| 33 | Daily Temperatures | [LC #739](https://leetcode.com/problems/daily-temperatures/) | Medium | Monotonic Stack |
| 34 | Implement Stack using Queues | [LC #225](https://leetcode.com/problems/implement-stack-using-queues/) | Easy | Data Structure Design |
| 35 | Implement Queue using Stacks | [LC #232](https://leetcode.com/problems/implement-queue-using-stacks/) | Easy | Data Structure Design |

### Recursion & Backtracking (Day 12) — 6 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 36 | Subsets | [LC #78](https://leetcode.com/problems/subsets/) | Medium | Choose-Explore-Unchoose |
| 37 | Permutations | [LC #46](https://leetcode.com/problems/permutations/) | Medium | Choose-Explore-Unchoose |
| 38 | Combination Sum | [LC #39](https://leetcode.com/problems/combination-sum/) | Medium | Choose-Explore-Unchoose |
| 39 | Letter Combinations of a Phone Number | [LC #17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Medium | Backtracking |
| 40 | Palindrome Partitioning | [LC #131](https://leetcode.com/problems/palindrome-partitioning/) | Medium | Backtracking + Palindrome |
| 41 | N-Queens | [LC #51](https://leetcode.com/problems/n-queens/) | Hard | Backtracking + Constraint |

### Binary Search (Day 13) — 7 problems

| # | Problem | LeetCode | Difficulty | Pattern |
|---|---------|----------|------------|---------|
| 42 | Binary Search | [LC #704](https://leetcode.com/problems/binary-search/) | Easy | Binary Search Template |
| 43 | Search Insert Position | [LC #35](https://leetcode.com/problems/search-insert-position/) | Easy | Binary Search Template |
| 44 | First and Last Position | [LC #34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Medium | Binary Search (Bounds) |
| 45 | Search in Rotated Sorted Array | [LC #33](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | BS on Rotated Array |
| 46 | Find Minimum in Rotated Sorted Array | [LC #153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | BS on Rotated Array |
| 47 | Find Peak Element | [LC #162](https://leetcode.com/problems/find-peak-element/) | Medium | Binary Search (Condition) |
| 48 | Koko Eating Bananas | [LC #875](https://leetcode.com/problems/koko-eating-bananas/) | Medium | BS on Answer Space |

---

## 29. Week 2 New Patterns Learned

### Cumulative Pattern Library (Week 1 + Week 2)

```
WEEK 1 PATTERNS (1-14):
 #  Pattern                When to Use                       Example Problem
 1  Hash Map               O(1) lookup, pairs                Two Sum, Contains Duplicate
 2  Kadane's Algorithm     Max subarray                      Maximum Subarray
 3  Prefix Sum             Cumulative operations             Product of Array Except Self
 4  Two Pointer Swap       In-place partition                Move Zeroes, Sort Colors
 5  Sort + Merge           Interval problems                 Merge Intervals
 6  In-place Marking       Use data as metadata              Set Matrix Zeroes
 7  Observation-based      Recognize the trick               Next Permutation
 8  Reverse Trick          Rotation, rearrangement           Rotate Array
 9  Boyer-Moore Voting     Majority/frequent element         Majority Element
10  Build from Previous    Each step uses prior result       Pascal's Triangle
11  Sort + Two Pointers    k-element combinations            3Sum
12  Greedy Two Pointers    Maximize/minimize from ends       Container With Most Water
13  Prefix Sum + HashMap   Count subarrays with sum          Subarray Sum = K
14  Math/XOR Trick         Missing from known range          Missing Number

WEEK 2 PATTERNS (15-27):
 #  Pattern                 When to Use                       Example Problem
15  Sliding Window (String) Find substring with constraint    Longest Substring Without Repeating
16  Frequency Map           Anagram, character counting       Valid Anagram, Group Anagrams
17  Two Pointer (String)    Palindrome check, comparison      Valid Palindrome
18  Expand Around Center    Palindromic substrings            Longest Palindromic Substring
19  Linked List Reversal    Reverse in-place                  Reverse Linked List
20  Fast & Slow Pointer     Cycle detection, find middle      Linked List Cycle, Middle of LL
21  Merge Two Lists         Combine sorted structures         Merge Two Sorted Lists
22  Monotonic Stack         Next greater/smaller element      Next Greater Element, Daily Temps
23  Stack for Matching      Bracket matching, nesting         Valid Parentheses
24  Choose-Explore-Unchoose Backtracking template             Subsets, Permutations, Combination Sum
25  Binary Search Template  Sorted array search               Binary Search, Search Insert Position
26  BS on Rotated Array     Modified binary search            Search in Rotated Sorted Array
27  BS on Answer Space      Min/max optimization              Koko Eating Bananas
```

---

## 30. Week 2 — Theory & Concepts Reference

### Design Patterns to Learn

| Pattern | What It Is | When to Use | Key Interview Point |
|---------|-----------|-------------|---------------------|
| **Singleton** | Only one instance exists | Database connections, config, logger | Lazy init, thread safety, testing drawbacks |
| **Observer** | Publisher notifies subscribers on changes | Event systems, React state, real-time updates | Loose coupling, EventEmitter in Node.js |
| **Factory** | Create objects without specifying exact class | Multiple similar objects, conditional creation | Encapsulates creation logic, polymorphism |

### JS Advanced Concepts to Cover

| Concept | Day | Key Points |
|---------|-----|------------|
| **Garbage Collection** | Day 8 | Mark-and-sweep, WeakMap/WeakSet, memory leak prevention |
| **Currying** | Day 9 | `f(a, b)` → `f(a)(b)`, partial application, reusable config functions |
| **Iterators & Generators** | Day 10 | `Symbol.iterator`, `yield`, lazy evaluation, `function*` |
| **Proxy & Reflect** | Day 11 | Handler traps, validation, logging, reactive programming |
| **Polyfills** | Day 12 | Build `Promise.all`, `Array.flat`, `Array.reduce` from scratch |
| **Event Loop Deep** | Day 13 | `process.nextTick` vs `setImmediate`, microtask edge cases |

### OOP Concepts to Cover

| Concept | Day | Key Points |
|---------|-----|------------|
| **Singleton Pattern** | Day 8 | One instance, lazy init, module pattern in JS |
| **Observer Pattern** | Day 9 | Pub-Sub, EventEmitter, decoupling |
| **Factory Pattern** | Day 10 | Object creation encapsulation, polymorphism |
| **Composition vs Inheritance** | Day 11 | "Has-a" vs "Is-a", favor composition |

---

## 31. Spaced Repetition Schedule for Week 2

### What to Revise Each Day

| Day | Revise From | What to Review |
|-----|------------|----------------|
| Day 8 | Day 4 (4 days ago) | Event Loop diagram, Promise execution order |
| Day 8 | Day 6 (2 days ago) | SOLID: SRP + OCP, Set Matrix Zeroes approach |
| Day 9 | Day 5 (4 days ago) | Debounce/Throttle implementations, Prefix Sum |
| Day 9 | Day 7 (2 days ago) | 3Sum duplicate handling, Container greedy proof |
| Day 10 | Day 6 (4 days ago) | OOP 4 Pillars definitions, Boyer-Moore |
| Day 10 | Day 8 (2 days ago) | Sliding window for strings, Singleton |
| Day 11 | Day 7 (4 days ago) | SOLID: LSP/ISP/DIP, Subarray Sum = K |
| Day 11 | Day 1 (10 days — full review) | Big O analysis, STL basics, Two Sum |
| Day 12 | Day 8 (4 days ago) | String patterns, GC mark-and-sweep |
| Day 12 | Day 10 (2 days ago) | Floyd's cycle detection, LL reversal |
| Day 13 | Day 9 (4 days ago) | Currying, Observer pattern |
| Day 13 | Day 11 (2 days ago) | Stack patterns, Monotonic stack |
| Day 14 | EVERYTHING | Full review day — all patterns, all concepts |

---

## 32. Week 3 Preview

> **Week 3 Theme:** Trees & BST → Heaps → Greedy Algorithms

| Day | DSA Focus | Theory/JS |
|-----|-----------|-----------|
| Day 15 | Trees: Traversals (Inorder, Preorder, Postorder, Level-order) | React: Components, Props, State intro |
| Day 16 | BST: Search, Insert, Delete, Validate BST | React: Hooks (useState, useEffect) |
| Day 17 | Trees: Max Depth, Diameter, Balanced Tree, LCA | React: useRef, useMemo, useCallback |
| Day 18 | Heaps: Min/Max Heap, Priority Queue, Kth Largest | React: Custom Hooks |
| Day 19 | Greedy Algorithms: Activity Selection, Jump Game | React: Context API |
| Day 20 | Mixed DSA Practice + Catch-up | React: React Router basics |
| Day 21 | Week 3 Review + Timed Test | Full mock interview simulation |

---

> **Remember: You're building momentum. Week 1 laid the foundation with arrays + JS + OOP. Week 2 expands into 4 new data structures and starts design patterns. By Day 14, you'll have 50 problems and 27 patterns — that's REAL progress toward interview readiness.** 🎯
