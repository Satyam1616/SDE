# 📋 Day 6 — Review & Checklist

> **Time: 30 min** | Consolidate everything + revision + plan ahead

---

## 🗂️ Today's Study Plan

| Time | Topic | File | Status |
|------|-------|------|--------|
| 1.5h | DSA: 5 Array Problems (Set Matrix Zeroes, Next Permutation, Rotate Array, Majority Element, Pascal's Triangle) | `01_DSA_Arrays_Continued.md` | ☐ |
| 1h | OOP: 4 Pillars (Encapsulation, Abstraction, Inheritance, Polymorphism) | `02_OOP_Fundamentals.md` | ☐ |
| 1h | SOLID: SRP + OCP (with Strategy Pattern) | `03_SOLID_SRP_OCP.md` | ☐ |
| 1h | JS: Error Handling (try/catch, Custom Errors, Promise Errors) | `04_Error_Handling.md` | ☐ |
| 30m | Revision: Flashcards + Mistake Notebook | (this section below) | ☐ |
| 30m | Plan Next Week | (this section below) | ☐ |

---

## 🎯 End-of-Day Self-Test

Answer these OUT LOUD without looking at notes.

### DSA — Arrays Continued

- [ ] Set Matrix Zeroes: How do you achieve O(1) space? What do you use as markers?
- [ ] Next Permutation: What are the 3 steps? Why do we reverse after swapping?
- [ ] Rotate Array: Explain why 3 reverses work for rotation
- [ ] Majority Element: Explain Boyer-Moore Voting in one sentence
- [ ] Pascal's Triangle: What formula generates middle elements?

### OOP — 4 Pillars

- [ ] Define each pillar in ONE sentence
- [ ] What is the difference between Encapsulation and Abstraction?
- [ ] What is the Diamond Problem? How is it solved in C++ vs JS?
- [ ] What is the difference between compile-time and runtime polymorphism?
- [ ] Is method overloading possible in JavaScript? (No — use default/rest params)

### SOLID — SRP + OCP

- [ ] Single Responsibility: "A class should have only ___ reason to change"
- [ ] How do you check if a class violates SRP? (If you use "and" to describe it)
- [ ] Open/Closed: "Open for ___, closed for ___"
- [ ] Name the design pattern used to implement OCP (Strategy Pattern)
- [ ] Fix this violation: A function with if/else branches for each discount type

### JS Error Handling

- [ ] What are the 3 parts of error handling? (try, catch, finally)
- [ ] Can try/catch catch errors inside setTimeout? (No! Different execution context)
- [ ] How do you catch errors in promises? (.catch() at end of chain)
- [ ] How do you catch errors in async/await? (try/catch inside async function)
- [ ] What is Promise.allSettled vs Promise.all for error handling?

---

## 📝 Quick Reference Cards

### DSA Patterns (Updated)

```
Day 4:
  Hash Set/Map      → O(1) lookup, duplicates     → Contains Duplicate, Two Sum
  Track Min/Max     → running state while scanning → Buy/Sell Stock
  Kadane's Algo     → extend or restart subarray   → Maximum Subarray

Day 5:
  Prefix Sum        → precompute cumulative sums   → Product of Array Except Self
  Two Pointer Swap  → partition array in-place      → Move Zeroes, Sort Colors
  Sorting/Merging   → interval-based problems       → Merge Intervals

Day 6 (NEW):
  In-place Marking  → use data as metadata          → Set Matrix Zeroes
  Observation-based → recognize the trick            → Next Permutation
  Reverse Trick     → rotation, rearrangement        → Rotate Array
  Boyer-Moore       → majority/frequent element      → Majority Element
  Build from Prev   → each step uses prior result    → Pascal's Triangle
```

### OOP Quick Reference

```
Encapsulation  → Hide DATA     → private fields, getters/setters
Abstraction    → Hide COMPLEX  → abstract classes, interfaces
Inheritance    → REUSE code    → extends, super()
Polymorphism   → SAME name, DIFFERENT behavior → overriding, overloading
```

### SOLID Quick Reference

```
S → Single Responsibility → One class = one job
O → Open/Closed → Extend, don't modify (Strategy Pattern)
L → Liskov Substitution → (Day 7)
I → Interface Segregation → (Day 7)
D → Dependency Inversion → (Day 7)
```

### Error Handling Quick Reference

```
Sync errors       → try/catch/finally
Promise errors    → .catch() at end
async/await       → try/catch inside async
Custom errors     → class XError extends Error
Global fallback   → process.on('uncaughtException')
Multiple promises → Promise.allSettled (safe) vs Promise.all (fail-fast)
```

---

## 📓 Mistake Notebook Reminder

Update your mistake notebook! Use this format:

```
┌──────────────────────────────────────────────────────┐
│                  MISTAKE ENTRY #___                  │
├──────────────────────────────────────────────────────┤
│ Date:                                                │
│ Problem: [Name + Link]                               │
│ Topic: [e.g., Arrays / OOP / Error Handling]         │
│                                                      │
│ My Approach:                                         │
│ [What I tried and why it failed]                     │
│                                                      │
│ Mistake:                                             │
│ [Specific error — wrong pattern, missed edge case,   │
│  complexity issue, syntax error, etc.]               │
│                                                      │
│ Correct Approach:                                    │
│ [Brief description of the right solution]            │
│                                                      │
│ Pattern:                                             │
│ [What pattern should I have recognized?]             │
│                                                      │
│ Key Takeaway:                                        │
│ [One sentence I should remember]                     │
│                                                      │
│ Review Dates: [ ] Day 3  [ ] Day 7  [ ] Day 14      │
└──────────────────────────────────────────────────────┘
```

**Today, log entries for:**
- Any DSA problem where you got stuck or used the wrong approach
- Any OOP concept you confused (e.g., encapsulation vs abstraction)
- Any error handling gotcha that surprised you

---

## 📇 Flashcards to Create Today

### JS Flashcards (10 cards)

| Front | Back |
|-------|------|
| What does `try/catch` NOT catch? | Errors inside async callbacks (setTimeout, etc.) |
| How to handle errors in async/await? | `try/catch` inside the async function |
| Promise.all vs Promise.allSettled | `.all` fails fast; `.allSettled` returns all results |
| What is a custom Error class? | `class XError extends Error` with statusCode, name |
| Where to put `.catch()` in a chain? | At the END to catch all errors above |
| Can you have `try` without `catch`? | Yes, if you have `finally` |
| What is an operational vs programming error? | Operational = expected (user input); Programming = bug |
| What does `finally` do? | Runs ALWAYS — whether error occurred or not |
| Unhandled rejection in Node.js? | `process.on('unhandledRejection', handler)` |
| `throw` inside `.then()` goes where? | To the nearest `.catch()` downstream |

### OOP Flashcards (5 cards)

| Front | Back |
|-------|------|
| Encapsulation vs Abstraction | Encap = hide data; Abstract = hide complexity |
| Diamond Problem | Multiple inheritance ambiguity; solve with virtual inheritance (C++) |
| Compile-time vs Runtime polymorphism | Overloading (compile) vs Overriding (runtime) |
| Does JS have method overloading? | No — use default params or rest params |
| `class` in JS is ___? | Syntactic sugar over prototype-based inheritance |

---

## 🔄 Revision — Spaced Repetition

### From Day 4 (2 days ago — review needed!)

- [ ] Re-solve Contains Duplicate without looking (2 min max)
- [ ] Re-solve Maximum Subarray (Kadane's) without looking (5 min max)
- [ ] Explain the Event Loop order (sync → microtasks → macrotasks)

### From Day 5 (yesterday — quick recall)

- [ ] What is Prefix Sum? When do you use it?
- [ ] Explain Debounce vs Throttle in one sentence each
- [ ] What is destructuring? Give an example

---

## 🔮 Day 7 Preview: Arrays Advanced + Week Review

| Time | Topic | Details |
|------|-------|---------|
| 1.5h | DSA: Arrays | 3Sum, Container With Most Water, Subarray Sum Equals K, Missing Number |
| 1h | OOP: SOLID Continued | Liskov Substitution, Interface Segregation, Dependency Inversion |
| 1h | JS Review | Practice all 25 JS interview questions, answer 15 out loud |
| 30m | Week 1 Test | Timed: Solve 2 array problems in 40 minutes |
| 30m | DSA Review | Re-solve 5 problems from the week without hints |
| 30m | Weekly Revision | Review ALL notes, flashcards, mistake notebook. Grade yourself. |

---

## 📊 Week 1 Progress Check

| Metric | Target | Day 6 Status |
|--------|--------|-------------|
| DSA problems solved | 16-20 | 12 (need 4-8 more on Day 7) |
| JS concepts mastered | var/let/const, closures, this, promises, event loop, error handling | ☐ |
| OOP concepts mastered | 4 pillars + SOLID started | ☐ |
| Mistake notebook entries | 5+ | ☐ |
| Flashcards created | 20+ | ☐ |
| Can explain concepts aloud | Test yourself! | ☐ |

---

> **Day 6 complete?** You've now solved 12+ array problems (on track for 16-20!), understand OOP's 4 pillars in both C++ and JS, started SOLID principles, and can handle errors professionally. Tomorrow is Day 7 — the big **Week 1 Review Day!** 💪
