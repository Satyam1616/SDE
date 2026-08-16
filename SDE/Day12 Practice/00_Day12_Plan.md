# Day 12: Recursion & Backtracking + JS Polyfills + OOP Review

> **Date:** Day 12 of SDE-1 Prep | **Week 2, Day 5**
> **Cumulative DSA Target:** 41 problems by end of day
> **Theme:** Master recursion thinking → Backtracking template (choose-explore-unchoose) → Build JS polyfills from scratch → Solidify all SOLID + Design Patterns

---

## Today's Schedule at a Glance

| Time | Activity | Details |
|------|----------|---------|
| 1.5h | **DSA: Recursion + Backtracking Part 1** | Solve: Subsets, Permutations, Combination Sum, Letter Combinations of Phone Number |
| 1h | **DSA: Backtracking Deep** | Solve: Palindrome Partitioning, N-Queens (understand approach) |
| 1h | **JS: Polyfills** | Implement from scratch: Promise.all, Array.prototype.flat, Array.prototype.reduce |
| 30m | **OOP Review** | All 5 SOLID principles + 3 Design Patterns — explain each in 30 seconds aloud |
| 30m | **Revision** | Spaced recall from Day 8 (string patterns, GC) + Day 10 (Floyd's cycle, LL reversal) |

**Total Study Time:** ~5 hours

---

## Session 1: DSA — Recursion & Backtracking Part 1 (1.5 hours)

### Before You Start: Understand Recursion Thinking

Every recursive function needs 3 things:
1. **Base case** — when to STOP
2. **Recursive case** — break problem into SMALLER version of itself
3. **Trust** — trust that the recursive call will give you the right answer for the smaller problem

```
How to think recursively:
1. What is the SMALLEST version of this problem? (base case)
2. If I had the answer for a slightly smaller input, how would I build the answer for the current input?
3. Am I moving TOWARD the base case with each recursive call?
```

### The Backtracking Template — MEMORIZE THIS

```
function backtrack(candidates, path, result, startIndex) {
    // BASE CASE: when to add path to result
    if (someCondition) {
        result.push([...path]);  // always copy the path!
        return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
        // 1. CHOOSE — add candidate to current path
        path.push(candidates[i]);

        // 2. EXPLORE — recurse with remaining candidates
        backtrack(candidates, path, result, i + 1);  // or i for reuse

        // 3. UNCHOOSE — remove candidate (backtrack!)
        path.pop();
    }
}
```

This is the **choose-explore-unchoose** pattern. Every backtracking problem follows this.

---

### Problems to Solve

| # | Problem | LeetCode | Difficulty | Pattern | Time Limit |
|---|---------|----------|------------|---------|------------|
| 36 | Subsets | [LC #78](https://leetcode.com/problems/subsets/) | Medium | Choose-Explore-Unchoose | 20 min |
| 37 | Permutations | [LC #46](https://leetcode.com/problems/permutations/) | Medium | Choose-Explore-Unchoose | 20 min |
| 38 | Combination Sum | [LC #39](https://leetcode.com/problems/combination-sum/) | Medium | Choose-Explore-Unchoose | 20 min |
| 39 | Letter Combinations of Phone Number | [LC #17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Medium | Backtracking | 15 min |

---

### Problem 36: Subsets (LC #78)

**What it asks:** Given an array of unique integers, return all possible subsets.
**Input:** `[1, 2, 3]`
**Output:** `[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]`

**How to think about it:**
For each element, you have 2 choices: INCLUDE it or EXCLUDE it.
Draw the decision tree:

```
                        []
                   /          \
              [1]               []
            /     \           /    \
        [1,2]    [1]       [2]     []
        /  \     / \       / \    / \
   [1,2,3][1,2][1,3][1] [2,3][2][3] []
```

**Template applied:**

```js
function subsets(nums) {
    const result = [];

    function backtrack(start, path) {
        // Every path is a valid subset — add it
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);           // CHOOSE
            backtrack(i + 1, path);       // EXPLORE (i+1: no reuse)
            path.pop();                   // UNCHOOSE
        }
    }

    backtrack(0, []);
    return result;
}

console.log(subsets([1, 2, 3]));
// [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
```

**Key insight:** We add to result at EVERY node, not just at leaves. Every partial path is a valid subset.

---

### Problem 37: Permutations (LC #46)

**What it asks:** Given an array of distinct integers, return all possible permutations.
**Input:** `[1, 2, 3]`
**Output:** `[[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]`

**Difference from Subsets:**
- Subsets: order doesn't matter, `[1,2]` = `[2,1]`
- Permutations: order MATTERS, `[1,2]` ≠ `[2,1]`

**Key difference in code:**
- Subsets: loop starts from `start` (to avoid going backward)
- Permutations: loop starts from `0` every time (can pick any unused element)
- Need a `used` set to track what's already in the path

```js
function permute(nums) {
    const result = [];

    function backtrack(path, used) {
        // Base case: permutation is complete when path length = nums length
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used.has(i)) continue;  // skip already used elements

            path.push(nums[i]);         // CHOOSE
            used.add(i);

            backtrack(path, used);      // EXPLORE

            path.pop();                 // UNCHOOSE
            used.delete(i);
        }
    }

    backtrack([], new Set());
    return result;
}

console.log(permute([1, 2, 3]));
```

**Key insight:** Unlike subsets, we always loop from 0. We use a `used` set to skip elements already in the current path.

---

### Problem 38: Combination Sum (LC #39)

**What it asks:** Given candidates and a target, find all unique combinations where candidates sum to target. Same number CAN be used unlimited times.
**Input:** `candidates = [2, 3, 6, 7], target = 7`
**Output:** `[[2, 2, 3], [7]]`

**Difference from Subsets:**
- Can REUSE elements (pass `i` instead of `i + 1`)
- Stop when sum exceeds target (pruning)

```js
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, path, remaining) {
        // Base cases
        if (remaining === 0) {
            result.push([...path]);  // found a valid combination!
            return;
        }
        if (remaining < 0) return;   // overshot, prune this branch

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);                          // CHOOSE
            backtrack(i, path, remaining - candidates[i]);     // EXPLORE (i, not i+1: allow reuse!)
            path.pop();                                        // UNCHOOSE
        }
    }

    backtrack(0, [], target);
    return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
// [[2, 2, 3], [7]]
```

**Key insight:** Pass `i` (not `i + 1`) in the recursive call to allow reusing the same element. The `remaining < 0` check prunes invalid branches early.

---

### Problem 39: Letter Combinations of Phone Number (LC #17)

**What it asks:** Given a string of digits 2-9, return all possible letter combinations (like old phone keypads).
**Input:** `"23"`
**Output:** `["ad","ae","af","bd","be","bf","cd","ce","cf"]`

```js
function letterCombinations(digits) {
    if (!digits.length) return [];

    const phone = {
        '2': 'abc', '3': 'def', '4': 'ghi',
        '5': 'jkl', '6': 'mno', '7': 'pqrs',
        '8': 'tuv', '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, current) {
        // Base case: built a complete combination
        if (index === digits.length) {
            result.push(current);
            return;
        }

        const letters = phone[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, current + letter);
            // No explicit unchoose needed — strings are immutable in JS
            // current + letter creates a NEW string each time
        }
    }

    backtrack(0, "");
    return result;
}

console.log(letterCombinations("23"));
```

**Key insight:** Since strings are immutable in JS, we don't need explicit pop(). Each `current + letter` creates a new string, so backtracking happens automatically.

---

## Session 2: DSA — Backtracking Deep (1 hour)

### Problems to Solve

| # | Problem | LeetCode | Difficulty | Pattern | Time Limit |
|---|---------|----------|------------|---------|------------|
| 40 | Palindrome Partitioning | [LC #131](https://leetcode.com/problems/palindrome-partitioning/) | Medium | Backtracking + Palindrome Check | 25 min |
| 41 | N-Queens | [LC #51](https://leetcode.com/problems/n-queens/) | Hard | Backtracking + Constraint Checking | 30 min (understand, don't memorize) |

---

### Problem 40: Palindrome Partitioning (LC #131)

**What it asks:** Partition a string such that every substring is a palindrome. Return all possible partitions.
**Input:** `"aab"`
**Output:** `[["a","a","b"], ["aa","b"]]`

**How to think:** At each position, try every possible substring starting from there. If it's a palindrome, take it and recurse on the rest.

```js
function partition(s) {
    const result = [];

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start, path) {
        // Base case: reached end of string
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            // Only proceed if current substring is a palindrome
            if (isPalindrome(s, start, end)) {
                path.push(s.substring(start, end + 1));  // CHOOSE
                backtrack(end + 1, path);                 // EXPLORE
                path.pop();                               // UNCHOOSE
            }
        }
    }

    backtrack(0, []);
    return result;
}

console.log(partition("aab"));
// [["a", "a", "b"], ["aa", "b"]]
```

**Key insight:** This is backtracking with a CONSTRAINT — we only choose substrings that are palindromes. The constraint acts as pruning.

---

### Problem 41: N-Queens (LC #51) — Understand the Approach

**What it asks:** Place N queens on an N×N board so no two queens attack each other (no same row, column, or diagonal).

**Don't memorize this code.** Understand the APPROACH:

1. Place queens row by row (one per row guarantees no row conflict)
2. For each row, try every column
3. Check: is this column safe? Is this diagonal safe?
4. If safe → place queen → recurse to next row → backtrack

```js
function solveNQueens(n) {
    const result = [];
    const cols = new Set();       // columns where queens are placed
    const diag1 = new Set();      // row - col (identifies "/" diagonals)
    const diag2 = new Set();      // row + col (identifies "\" diagonals)

    function backtrack(row, board) {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            // Check if this position is safe
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;  // not safe, skip
            }

            // CHOOSE
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            // EXPLORE
            backtrack(row + 1, board);

            // UNCHOOSE
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    backtrack(0, board);
    return result;
}

console.log(solveNQueens(4).length);  // 2 solutions exist for 4-Queens
```

**Key insight:** The diagonal trick — all cells on the same "/" diagonal have the same `row - col` value. All cells on the same "\" diagonal have the same `row + col` value. Using sets for O(1) lookup makes constraint checking fast.

---

## Session 3: JS — Polyfills (1 hour)

### Why Polyfills Matter in Interviews
Interviewers ask you to build polyfills to test if you TRULY understand how built-in methods work, not just how to use them.

### Polyfill 1: Promise.all

**What it does:** Takes an array of promises. Resolves when ALL resolve. Rejects if ANY one rejects.

```js
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            resolve([]);
            return;
        }

        const results = new Array(promises.length);
        let completed = 0;

        promises.forEach((promise, index) => {
            // Wrap in Promise.resolve to handle non-promise values
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;  // maintain order!
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);  // any rejection rejects the whole thing
        });
    });
}

// Test
promiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(console.log);  // [1, 2, 3]

promiseAll([
    Promise.resolve(1),
    Promise.reject("Error!"),
    Promise.resolve(3)
]).catch(console.log);  // "Error!"
```

**Key things interviewers check:**
- Do you maintain ORDER? (results[index], not push)
- Do you handle non-promise values? (Promise.resolve wrapper)
- Do you handle empty array? (edge case)

---

### Polyfill 2: Array.prototype.flat

**What it does:** Flattens nested arrays to a specified depth.

```js
Array.prototype.myFlat = function(depth = 1) {
    const result = [];

    function flatten(arr, currentDepth) {
        for (const item of arr) {
            if (Array.isArray(item) && currentDepth < depth) {
                flatten(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }
    }

    flatten(this, 0);
    return result;
};

// Test
console.log([1, [2, [3, [4]]]].myFlat());     // [1, 2, [3, [4]]]
console.log([1, [2, [3, [4]]]].myFlat(2));     // [1, 2, 3, [4]]
console.log([1, [2, [3, [4]]]].myFlat(Infinity)); // [1, 2, 3, 4]
```

**Key insight:** Recursion with a depth counter. Only recurse deeper if we haven't hit the depth limit.

---

### Polyfill 3: Array.prototype.reduce

**What it does:** Reduces an array to a single value by applying a function to each element.

```js
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        if (this.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

// Test
console.log([1, 2, 3, 4].myReduce((acc, val) => acc + val, 0));      // 10
console.log([1, 2, 3, 4].myReduce((acc, val) => acc + val));          // 10
console.log([[1,2],[3,4],[5]].myReduce((acc, val) => acc.concat(val), [])); // [1,2,3,4,5]
```

**Key things:**
- If no initialValue, use first element as accumulator and start from index 1
- If empty array and no initialValue → throw TypeError
- Callback gets 4 args: accumulator, currentValue, index, array

---

## Session 4: OOP Review (30 min)

### 30-Second Explanation for Each — Practice Saying These Aloud

**SRP:** "A class should have only one reason to change. If it's doing validation AND emailing AND logging, split it. Each class gets one job."

**OCP:** "Open for extension, closed for modification. Don't add if-else for new features. Use Strategy pattern — new behavior = new class."

**LSP:** "If class B extends A, you should be able to swap B in for A without breaking anything. Classic example: Square extending Rectangle breaks because setting width changes height."

**ISP:** "Don't force a class to implement methods it doesn't need. Split fat interfaces into small focused ones. Dog shouldn't need a fly() method."

**DIP:** "Don't hardcode dependencies. Inject them from outside. OrderService shouldn't create StripePayment inside its constructor — pass the payment processor in."

**Singleton:** "Only one instance exists. Used for database connections, loggers, config. Lazy initialization — create only when first needed."

**Observer:** "Publisher-Subscriber. When state changes, all subscribers get notified. Like EventEmitter in Node.js or state updates in React."

**Factory:** "Creates objects without specifying the exact class. Pass a type, get the right object back. Encapsulates creation logic."

---

## Session 5: Revision (30 min)

### Spaced Recall — Day 8 (String Patterns + GC)
1. What is the sliding window pattern? When do you use it?
2. How does JavaScript's garbage collector work? (mark-and-sweep)
3. What's a WeakMap and why does it exist?
4. Re-solve: Group Anagrams — write the approach without looking

### Spaced Recall — Day 10 (Linked Lists)
1. Write Floyd's Cycle Detection from memory
2. Reverse a Linked List — can you do it iteratively AND recursively?
3. How do you find the middle of a linked list in one pass?

---

## Backtracking Cheat Sheet — When to Use What

| Problem Type | startIndex | Can Reuse? | Need Used Set? |
|-------------|------------|------------|----------------|
| Subsets | `i + 1` | No | No |
| Permutations | `0` | No | Yes |
| Combination Sum | `i` (same element) | Yes | No |
| Combination Sum II | `i + 1` + skip duplicates | No | No |

```
KEY FORMULA:
Subsets     → add at every node, loop from start, pass i+1
Permutations → add only at leaves, loop from 0, use "used" set
Combination → add when target met, pass i (reuse) or i+1 (no reuse)
```

---

## End of Day Checklist

- [ ] Subsets solved and understood
- [ ] Permutations solved — understand difference from subsets
- [ ] Combination Sum solved — understand reuse (i vs i+1)
- [ ] Letter Combinations solved
- [ ] Palindrome Partitioning solved — backtracking with constraint
- [ ] N-Queens approach understood (don't need to memorize code)
- [ ] Promise.all polyfill written from scratch
- [ ] Array.flat polyfill written from scratch
- [ ] Array.reduce polyfill written from scratch
- [ ] Can explain all 5 SOLID + 3 patterns in 30 seconds each
- [ ] Revised Day 8 (strings, GC) and Day 10 (linked lists)

**Cumulative progress:** 41 problems, 24 patterns, backtracking template memorized.

---

> Day 13 Preview: Binary Search — template mastery, rotated arrays, and "binary search on answer" problems.
