# 🧩 DSA Day 4: Array Problems — Your First 3

> **Time: 1 hour** | Solve using the 12-step framework from your roadmap

---

## Before You Start

For **every** problem, follow this framework:

```
1. Read the problem 2-3 times
2. Identify: What is the INPUT? What is the OUTPUT?
3. Write 2-3 examples by hand (including edge cases)
4. Think: What PATTERN does this look like?
5. Think of brute force first (even if slow)
6. Optimize: Can I use a hash map? Two pointers? Sorting?
7. Write pseudocode
8. Code the solution
9. Trace through your examples manually
10. Analyze: Time complexity? Space complexity?
11. Edge cases: Empty array? One element? All same? Negative numbers?
12. Can I optimize further?
```

---

## Problem 1: Contains Duplicate

> **LeetCode #217** | [Link](https://leetcode.com/problems/contains-duplicate/) | **Easy**

### Problem

Given an integer array `nums`, return `true` if any value appears **at least twice**, and `false` if every element is distinct.

```
Input:  [1, 2, 3, 1]
Output: true

Input:  [1, 2, 3, 4]
Output: false

Input:  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

### Think First! 🧠

Before reading solutions, ask yourself:
- Brute force: How would you check every pair?
- Better: What data structure gives O(1) lookup?

---

### Approach 1: Brute Force — Check all pairs

```js
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n²)** — nested loops |
| Space | **O(1)** — no extra space |

❌ Too slow for large inputs.

---

### Approach 2: Sort First

If we sort the array, duplicates will be **adjacent**:

```js
function containsDuplicate(nums) {
    nums.sort((a, b) => a - b);
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }
    return false;
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n log n)** — sorting |
| Space | **O(1)** — in-place sort (or O(n) depending on sort) |

Better, but not optimal.

---

### Approach 3: Hash Set ✅ (Optimal)

Use a Set — if we've seen the number before, it's a duplicate:

```js
function containsDuplicate(nums) {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) return true;  // Already seen!
        seen.add(num);
    }
    return false;
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n)** — one pass |
| Space | **O(n)** — Set stores up to n elements |

**Pattern recognized:** When checking for duplicates/existence → think **Hash Set**.

### One-Liner (bonus)

```js
const containsDuplicate = (nums) => new Set(nums).size !== nums.length;
```

---

## Problem 2: Best Time to Buy and Sell Stock

> **LeetCode #121** | [Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | **Easy**

### Problem

Given an array `prices` where `prices[i]` is the stock price on day `i`, find the **maximum profit** from one buy and one sell. You must buy BEFORE selling. Return `0` if no profit is possible.

```
Input:  [7, 1, 5, 3, 6, 4]
Output: 5
Explanation: Buy at 1 (day 2), sell at 6 (day 5) → profit = 5

Input:  [7, 6, 4, 3, 1]
Output: 0
Explanation: Prices only go down, no profit possible
```

### Think First! 🧠

- Brute force: Check every buy-sell pair?
- Better: As you scan left to right, what do you need to track?

---

### Approach 1: Brute Force — Check all pairs

```js
function maxProfit(prices) {
    let max = 0;
    
    for (let buy = 0; buy < prices.length; buy++) {
        for (let sell = buy + 1; sell < prices.length; sell++) {
            const profit = prices[sell] - prices[buy];
            max = Math.max(max, profit);
        }
    }
    return max;
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n²)** |
| Space | **O(1)** |

❌ Too slow.

---

### Approach 2: One Pass — Track Minimum ✅ (Optimal)

**Key insight:** At each day, we only need to know the **cheapest day so far** (best day to have bought).

```js
function maxProfit(prices) {
    let minPrice = Infinity;  // Cheapest price seen so far
    let maxProfit = 0;        // Best profit so far
    
    for (const price of prices) {
        // Update cheapest buying price
        if (price < minPrice) {
            minPrice = price;
        }
        
        // Calculate profit if we sell today
        const profit = price - minPrice;
        
        // Update best profit
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    
    return maxProfit;
}
```

### Dry Run

```
prices = [7, 1, 5, 3, 6, 4]

Day 0: price=7, min=7,  profit=0,  maxProfit=0
Day 1: price=1, min=1,  profit=0,  maxProfit=0
Day 2: price=5, min=1,  profit=4,  maxProfit=4
Day 3: price=3, min=1,  profit=2,  maxProfit=4
Day 4: price=6, min=1,  profit=5,  maxProfit=5  ← Answer!
Day 5: price=4, min=1,  profit=3,  maxProfit=5

Return: 5 ✅
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n)** — single pass |
| Space | **O(1)** — just two variables |

**Pattern recognized:** Track a running **minimum/maximum** while scanning → **Greedy/Kadane-style**.

---

## Problem 3: Maximum Subarray (Kadane's Algorithm)

> **LeetCode #53** | [Link](https://leetcode.com/problems/maximum-subarray/) | **Medium**

### Problem

Given an integer array `nums`, find the **subarray** with the largest sum and return its sum. A subarray is a contiguous part of the array.

```
Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: Subarray [4, -1, 2, 1] has the largest sum = 6

Input:  [1]
Output: 1

Input:  [5, 4, -1, 7, 8]
Output: 23 (entire array)
```

### Think First! 🧠

- Brute force: Try every possible subarray?
- Better: At each position, should you extend the previous subarray or start fresh?

---

### Approach 1: Brute Force — Check all subarrays

```js
function maxSubArray(nums) {
    let maxSum = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n²)** |
| Space | **O(1)** |

---

### Approach 2: Kadane's Algorithm ✅ (Optimal)

**The Key Insight:** At each element, make a decision:

> "Should I **extend** the previous subarray by adding this element? Or should I **start fresh** from this element?"

If the previous subarray sum is negative, it can only hurt us. Start fresh!

```js
function maxSubArray(nums) {
    let currentSum = nums[0];   // Sum of current subarray
    let maxSum = nums[0];       // Best sum found so far
    
    for (let i = 1; i < nums.length; i++) {
        // Decision: extend previous subarray OR start new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update global maximum
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
```

### Dry Run

```
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

i=0: currentSum=-2, maxSum=-2
i=1: max(1, -2+1)=max(1,-1)=1,     maxSum=1
i=2: max(-3, 1+(-3))=max(-3,-2)=-2, maxSum=1
i=3: max(4, -2+4)=max(4,2)=4,       maxSum=4
i=4: max(-1, 4+(-1))=max(-1,3)=3,   maxSum=4
i=5: max(2, 3+2)=max(2,5)=5,        maxSum=5
i=6: max(1, 5+1)=max(1,6)=6,        maxSum=6  ← Answer!
i=7: max(-5, 6+(-5))=max(-5,1)=1,   maxSum=6
i=8: max(4, 1+4)=max(4,5)=5,        maxSum=6

Return: 6 ✅  (subarray [4, -1, 2, 1])
```

| Complexity | Value |
|-----------|-------|
| Time | **O(n)** — single pass |
| Space | **O(1)** — just two variables |

**Pattern recognized:** **Kadane's Algorithm** — decide at each step whether to extend or restart. This pattern appears in many subarray problems.

---

## 📊 Summary of Today's Problems

| # | Problem | Pattern | Optimal | Time | Space |
|---|---------|---------|---------|------|-------|
| 1 | Contains Duplicate | Hash Set | Set for O(1) lookup | O(n) | O(n) |
| 2 | Best Time Buy/Sell | Track Running Min | Greedy single pass | O(n) | O(1) |
| 3 | Maximum Subarray | Kadane's Algorithm | Extend or restart | O(n) | O(1) |

## 🎯 Patterns to Remember

| Pattern | When to Use | Example Problems |
|---------|------------|-----------------|
| **Hash Set/Map** | Need O(1) lookup, check duplicates | Two Sum, Contains Dup |
| **Track Min/Max** | Need best value seen so far | Buy/Sell Stock |
| **Kadane's** | Max/min subarray sum | Maximum Subarray |

---

## ✅ Practice Checklist

After solving, make sure you can:

- [ ] Explain the brute force approach and WHY it's slow
- [ ] Explain the optimal approach step by step
- [ ] State the time and space complexity
- [ ] Handle edge cases (empty, one element, all negative)
- [ ] Solve each problem **without looking at the solution** within 15 minutes

> 💡 **Tomorrow (Day 5):** More array problems — Product of Array Except Self, Move Zeroes, Sort Colors, Merge Intervals. Plus Kadane's practice!
