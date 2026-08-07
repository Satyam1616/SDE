# 🧩 DSA Day 6: Arrays Continued — 5 More Problems

> **Time: 1.5 hours** | Keep building your array pattern library

---

## Today's Problems

| # | Problem | Pattern | Difficulty |
|---|---------|---------|------------|
| 1 | Set Matrix Zeroes | In-place marking | Medium |
| 2 | Next Permutation | Observation + Algorithm | Medium |
| 3 | Rotate Array | Reverse trick | Medium |
| 4 | Majority Element | Boyer-Moore Voting | Easy |
| 5 | Pascal's Triangle | Build from previous | Easy |

---

## Problem 1: Set Matrix Zeroes

> **LeetCode #73** | [Link](https://leetcode.com/problems/set-matrix-zeroes/) | **Medium**

### Problem

Given an `m x n` integer matrix, if an element is `0`, set its **entire row and column** to `0`. Do it **in-place**.

```
Input:                  Output:
[[1, 1, 1],            [[1, 0, 1],
 [1, 0, 1],     →      [0, 0, 0],
 [1, 1, 1]]            [1, 0, 1]]

Input:                  Output:
[[0, 1, 2, 0],         [[0, 0, 0, 0],
 [3, 4, 5, 2],   →     [0, 4, 5, 0],
 [1, 3, 1, 5]]         [0, 3, 1, 0]]
```

### Think First! 🧠

- Can you use extra space to track which rows/cols need zeroing?
- Can you use the **matrix itself** to store that information?

---

### Approach 1: Brute Force — Extra Sets

Track which rows and columns contain zeroes:

```js
function setZeroes(matrix) {
    const rows = new Set();
    const cols = new Set();
    const m = matrix.length;
    const n = matrix[0].length;

    // Step 1: Find all zeroes
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    // Step 2: Zero out marked rows and columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(m × n)** |
| Space | **O(m + n)** — extra sets |

---

### Approach 2: Use First Row/Column as Markers ✅ (Optimal)

**Key Insight:** Use the first row and first column of the matrix itself as markers!

```js
function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;

    // Step 1: Check if first row/col themselves have zeros
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }

    // Step 2: Use first row/col as markers for rest of matrix
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;  // Mark row
                matrix[0][j] = 0;  // Mark column
            }
        }
    }

    // Step 3: Zero out cells based on markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 4: Handle first row and column
    if (firstRowZero) {
        for (let j = 0; j < n; j++) matrix[0][j] = 0;
    }
    if (firstColZero) {
        for (let i = 0; i < m; i++) matrix[i][0] = 0;
    }
}
```

### Dry Run

```
Original:          After marking:       After zeroing:
[[1, 1, 1],        [[1, 0, 1],         [[1, 0, 1],
 [1, 0, 1],    →    [0, 0, 1],    →     [0, 0, 0],
 [1, 1, 1]]         [1, 1, 1]]          [1, 0, 1]]

Row 1, Col 1 has 0 → mark matrix[1][0]=0 and matrix[0][1]=0
Then zero any cell where its row marker or col marker is 0.
```

| Complexity | Value |
|-----------|-------|
| Time | **O(m × n)** |
| Space | **O(1)** — no extra space! |

**Pattern recognized:** **In-place marking** — use the data structure itself to store metadata.

---

## Problem 2: Next Permutation

> **LeetCode #31** | [Link](https://leetcode.com/problems/next-permutation/) | **Medium**

### Problem

Given an array of integers, rearrange it into the **next lexicographically greater permutation**. If no greater permutation exists (array is in descending order), rearrange as the lowest possible (ascending order).

```
Input:  [1, 2, 3]  →  Output: [1, 3, 2]
Input:  [3, 2, 1]  →  Output: [1, 2, 3]  (wrap around)
Input:  [1, 1, 5]  →  Output: [1, 5, 1]
Input:  [1, 3, 2]  →  Output: [2, 1, 3]
```

### Think First! 🧠

- Think about how you'd order numbers: 123 → 132 → 213 → 231 → 312 → 321
- From the right, find where the "increasing trend" breaks

---

### The Algorithm (3 Steps)

```
Step 1: From right, find first index i where nums[i] < nums[i+1]
        (this is the "breakpoint" — where ascending order from right breaks)

Step 2: From right, find first index j where nums[j] > nums[i]
        (smallest number larger than nums[i])

Step 3: Swap nums[i] and nums[j], then REVERSE everything after index i
```

### Visual Example

```
nums = [1, 3, 5, 4, 2]

Step 1: From right, find i where nums[i] < nums[i+1]
        i=1 because 3 < 5 ✅ (after this, 5,4,2 is descending)

Step 2: From right, find j where nums[j] > nums[i]=3
        j=3 because nums[3]=4 > 3 ✅

Step 3: Swap i=1 and j=3: [1, 4, 5, 3, 2]
        Reverse after i=1:  [1, 4, 2, 3, 5] ← Answer!
```

### Implementation

```js
function nextPermutation(nums) {
    const n = nums.length;

    // Step 1: Find breakpoint (from right, first i where nums[i] < nums[i+1])
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: Find first number from right that is > nums[i]
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }

        // Step 3a: Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3b: Reverse everything after index i
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n)** — at most 3 linear scans |
| Space | **O(1)** — in-place |

**Pattern recognized:** **Observation-based algorithm** — no classic pattern, must understand the permutation ordering logic.

---

## Problem 3: Rotate Array

> **LeetCode #189** | [Link](https://leetcode.com/problems/rotate-array/) | **Medium**

### Problem

Given an integer array `nums`, rotate the array to the **right** by `k` steps.

```
Input:  nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]

Input:  nums = [-1, -100, 3, 99], k = 2
Output: [3, 99, -1, -100]
```

### Think First! 🧠

- Extra array approach: easy but O(n) space
- Can you do it in-place? Hint: think about **reversing**

---

### Approach 1: Extra Array

```js
function rotate(nums, k) {
    const n = nums.length;
    k = k % n;  // Handle k > n
    const temp = [...nums];

    for (let i = 0; i < n; i++) {
        nums[(i + k) % n] = temp[i];
    }
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n)** |
| Space | **O(n)** — extra array |

---

### Approach 2: Reverse Trick ✅ (Optimal)

**Key Insight:** Three reverses achieve the rotation!

```
Original:     [1, 2, 3, 4, 5, 6, 7],  k = 3

Step 1: Reverse entire array:     [7, 6, 5, 4, 3, 2, 1]
Step 2: Reverse first k elements:  [5, 6, 7, 4, 3, 2, 1]
Step 3: Reverse rest (k to end):   [5, 6, 7, 1, 2, 3, 4]  ← Answer!
```

```js
function rotate(nums, k) {
    const n = nums.length;
    k = k % n;  // Handle k > n

    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    reverse(nums, 0, n - 1);     // Reverse all
    reverse(nums, 0, k - 1);     // Reverse first k
    reverse(nums, k, n - 1);     // Reverse rest
}
```

### Why Does This Work?

```
Think of the array in two parts: [A | B] where B is the last k elements.
We want: [B | A]

Reverse all:  [A_rev | B_rev]  → [reverse of whole thing]
Reverse A:    [A     | B_rev]  → Wait, that's not right...

Actually:
[A | B]  → reverse all → [B_rev | A_rev] → reverse first k → [B | A_rev] → reverse rest → [B | A]
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n)** — three O(n) reverses |
| Space | **O(1)** — in-place! |

**Pattern recognized:** **Reverse trick** — useful for rotation and rearrangement problems.

---

## Problem 4: Majority Element

> **LeetCode #169** | [Link](https://leetcode.com/problems/majority-element/) | **Easy**

### Problem

Given an array `nums` of size `n`, return the element that appears **more than n/2 times**. You may assume the majority element always exists.

```
Input:  [3, 2, 3]
Output: 3

Input:  [2, 2, 1, 1, 1, 2, 2]
Output: 2
```

### Think First! 🧠

- Hash map to count? O(n) space
- Sort and check middle? O(n log n)
- Can you do O(1) space and O(n) time?

---

### Approach 1: Hash Map

```js
function majorityElement(nums) {
    const count = {};

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > nums.length / 2) return num;
    }
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n)** |
| Space | **O(n)** — hash map |

---

### Approach 2: Boyer-Moore Voting Algorithm ✅ (Optimal)

**Key Insight:** The majority element will "survive" if we cancel out different elements.

Think of it like an election:
- Every time two different votes appear, they cancel each other out
- The majority element has more than half the votes, so it will always survive

```js
function majorityElement(nums) {
    let candidate = nums[0];
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;  // Pick new candidate
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;  // Guaranteed to be majority
}
```

### Dry Run

```
nums = [2, 2, 1, 1, 1, 2, 2]

num=2: count=0 → candidate=2, count=1
num=2: count=2
num=1: count=1
num=1: count=0
num=1: count=0 → candidate=1, count=1
num=2: count=0
num=2: count=0 → candidate=2, count=1

Return: 2 ✅
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n)** — single pass |
| Space | **O(1)** — just two variables |

**Pattern recognized:** **Boyer-Moore Voting** — use for finding majority/frequent elements. The core idea is "cancellation."

---

## Problem 5: Pascal's Triangle

> **LeetCode #118** | [Link](https://leetcode.com/problems/pascals-triangle/) | **Easy**

### Problem

Given an integer `numRows`, return the first `numRows` rows of **Pascal's Triangle**.

```
Input: numRows = 5
Output:
[
     [1],
    [1, 1],
   [1, 2, 1],
  [1, 3, 3, 1],
 [1, 4, 6, 4, 1]
]
```

Each number is the sum of the two numbers directly above it.

### Think First! 🧠

- Each row starts and ends with 1
- Middle elements = sum of `prev[j-1] + prev[j]`

---

### Solution: Build Row by Row

```js
function generate(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);  // Start with all 1s

        // Fill middle elements from previous row
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
}
```

### Dry Run

```
i=0: row = [1]                           → triangle = [[1]]
i=1: row = [1, 1]                        → triangle = [[1], [1,1]]
i=2: row = [1, _, 1] → [1, 1+1, 1]      → [1, 2, 1]
i=3: row = [1, _, _, 1] → j=1: 1+2=3, j=2: 2+1=3 → [1, 3, 3, 1]
i=4: row = [1, _, _, _, 1] → j=1: 1+3=4, j=2: 3+3=6, j=3: 3+1=4 → [1, 4, 6, 4, 1]
```

| Complexity | Value |
|-----------|-------|
| Time | **O(numRows²)** — building all rows |
| Space | **O(numRows²)** — storing the triangle |

**Pattern recognized:** **Build from previous state** — each step depends on the result of the previous step (dynamic programming concept preview!).

---

## 📊 Summary of Today's Problems

| # | Problem | Pattern | Optimal | Time | Space |
|---|---------|---------|---------|------|-------|
| 1 | Set Matrix Zeroes | In-place marking | Use first row/col as flags | O(m×n) | O(1) |
| 2 | Next Permutation | Observation-based | Find breakpoint + swap + reverse | O(n) | O(1) |
| 3 | Rotate Array | Reverse trick | Three reverses | O(n) | O(1) |
| 4 | Majority Element | Boyer-Moore Voting | Candidate with cancel count | O(n) | O(1) |
| 5 | Pascal's Triangle | Build from previous | Row-by-row construction | O(n²) | O(n²) |

## 🎯 New Patterns to Remember

| Pattern | When to Use | Example Problems |
|---------|------------|-----------------|
| **In-place Marking** | Need to track info without extra space | Set Matrix Zeroes |
| **Observation/Algorithm** | No standard pattern, need to see the trick | Next Permutation |
| **Reverse Trick** | Rotation, rearrangement in-place | Rotate Array |
| **Boyer-Moore Voting** | Find majority/frequent element | Majority Element |
| **Build from Previous** | Each step depends on prior results | Pascal's Triangle |

---

## 🏆 Running Problem Count

| Day | Problems | Cumulative |
|-----|----------|-----------|
| Day 4 | Contains Duplicate, Buy/Sell Stock, Maximum Subarray | 3 |
| Day 5 | Product of Array, Move Zeroes, Sort Colors, Merge Intervals | 7 |
| **Day 6** | **Set Matrix Zeroes, Next Permutation, Rotate Array, Majority Element, Pascal's Triangle** | **12** |

> Target: 16-20 by end of Week 1 ✅ On track!

---

## ✅ Practice Checklist

- [ ] Solve Set Matrix Zeroes — can you explain the O(1) space approach?
- [ ] Solve Next Permutation — can you explain the 3-step algorithm?
- [ ] Solve Rotate Array — can you prove WHY the reverse trick works?
- [ ] Solve Majority Element — can you explain Boyer-Moore to an interviewer?
- [ ] Solve Pascal's Triangle — can you handle follow-ups (get kth row, specific element)?
- [ ] Re-solve at least 2 problems from Day 4-5 **without looking**

> 💡 **Tomorrow (Day 7):** Arrays Advanced — 3Sum, Container With Most Water, Subarray Sum Equals K, Missing Number + Week 1 Review!
