/*
 * ============================================================
 *   TIME & SPACE COMPLEXITY — A Complete Guide with Examples
 * ============================================================
 *
 *  TIME COMPLEXITY  = How many operations does the code do
 *                     as the input size (n) grows?
 *
 *  SPACE COMPLEXITY = How much extra memory does the code use
 *                     as the input size (n) grows?
 *
 *  We always care about the WORST CASE (Big-O notation).
 *
 *  Common complexities (fastest → slowest):
 *  ─────────────────────────────────────────
 *  O(1)        → Constant        (instant, no matter the size)
 *  O(log n)    → Logarithmic     (halving each step)
 *  O(n)        → Linear          (touch every element once)
 *  O(n log n)  → Linearithmic    (efficient sorting)
 *  O(n²)       → Quadratic       (nested loops)
 *  O(n³)       → Cubic           (triple nested loops)
 *  O(2^n)      → Exponential     (doubles each step — very slow)
 *  O(n!)       → Factorial       (all permutations — insanely slow)
 *
 * ============================================================
 */

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
#include <cmath>
using namespace std;

// ════════════════════════════════════════════════════════════
// 1. O(1) TIME  |  O(1) SPACE  —  Constant
// ════════════════════════════════════════════════════════════
/*
 * No matter if the array has 10 elements or 10 million,
 * this function does the SAME number of operations (just 1).
 *
 * Real-world analogy: Looking at the first page of a book.
 *                     Doesn't matter if the book is 100 or 1000 pages.
 */
int getFirstElement(int arr[], int n) {
    return arr[0];   // 1 operation, always
}

int addTwoNumbers(int a, int b) {
    return a + b;    // 1 operation, always
}

bool isEven(int n) {
    return n % 2 == 0;  // 1 operation, always
}

void demo_O1() {
    cout << "═══ O(1) — Constant Time & Space ═══\n";
    int arr[] = {10, 20, 30, 40, 50};
    cout << "First element: " << getFirstElement(arr, 5) << endl;
    cout << "Add 3 + 7: " << addTwoNumbers(3, 7) << endl;
    cout << "Is 4 even? " << (isEven(4) ? "Yes" : "No") << endl;
    cout << "→ Same speed whether array has 5 or 5 million elements!\n\n";
}


// ════════════════════════════════════════════════════════════
// 2. O(log n) TIME  |  O(1) SPACE  —  Logarithmic
// ════════════════════════════════════════════════════════════
/*
 * Binary Search: We cut the search space IN HALF every step.
 *
 *   n = 1000 → about 10 steps   (log₂ 1000 ≈ 10)
 *   n = 1,000,000 → about 20 steps only!
 *
 * KEY INSIGHT: Every time you see "divide in half", think O(log n).
 *
 * Real-world analogy: Finding a word in a dictionary.
 *                     You open the middle, then go left or right.
 */
int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;

    while (low <= high) {               // This loop runs at most log₂(n) times
        int mid = low + (high - low) / 2;  // Avoid overflow

        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;   // Discard left half
        else high = mid - 1;                           // Discard right half
    }
    return -1;  // Not found
}

void demo_OlogN() {
    cout << "═══ O(log n) — Logarithmic Time ═══\n";
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = 10;
    int target = 23;
    int result = binarySearch(arr, n, target);
    cout << "Searching for " << target << " → Found at index " << result << endl;
    cout << "→ Array of 10 elements: ~3-4 steps (not 10!)\n";
    cout << "→ Array of 1 billion: only ~30 steps!\n\n";
}


// ════════════════════════════════════════════════════════════
// 3. O(n) TIME  |  O(1) SPACE  —  Linear
// ════════════════════════════════════════════════════════════
/*
 * We look at EVERY element exactly once.
 * If the array doubles in size, the time doubles.
 *
 * Real-world analogy: Reading every page of a book to find a quote.
 */
int findMax(int arr[], int n) {
    int maxVal = arr[0];             // O(1)
    for (int i = 1; i < n; i++) {    // This loop runs n-1 times → O(n)
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {    // Worst case: check ALL n elements
        if (arr[i] == target) return i;
    }
    return -1;
}

void demo_ON() {
    cout << "═══ O(n) — Linear Time ═══\n";
    int arr[] = {3, 7, 1, 9, 4, 6, 8, 2};
    int n = 8;
    cout << "Max element: " << findMax(arr, n) << endl;
    cout << "Linear search for 4: index " << linearSearch(arr, n, 4) << endl;
    cout << "→ Must check each element. Double the array = double the time.\n\n";
}


// ════════════════════════════════════════════════════════════
// 4. O(n) TIME  |  O(n) SPACE  —  Linear Time AND Space
// ════════════════════════════════════════════════════════════
/*
 * Sometimes we need extra memory proportional to input size.
 *
 * Here we create a COPY of the array (reversed).
 * The extra vector takes O(n) space.
 *
 * Real-world analogy: Photocopying every page of a book.
 */
vector<int> reverseArray(int arr[], int n) {
    vector<int> reversed(n);          // O(n) EXTRA space!
    for (int i = 0; i < n; i++) {     // O(n) time
        reversed[i] = arr[n - 1 - i];
    }
    return reversed;
}

// Another example: Counting frequency using a hash map
void countFrequency(int arr[], int n) {
    unordered_map<int, int> freq;     // O(n) EXTRA space in worst case
    for (int i = 0; i < n; i++) {     // O(n) time
        freq[arr[i]]++;
    }

    cout << "Frequencies: ";
    for (auto& p : freq) {
        cout << p.first << "→" << p.second << "  ";
    }
    cout << endl;
}

void demo_ON_space() {
    cout << "═══ O(n) Time + O(n) Space ═══\n";
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;

    vector<int> rev = reverseArray(arr, n);
    cout << "Reversed: ";
    for (int x : rev) cout << x << " ";
    cout << endl;

    int arr2[] = {1, 3, 2, 1, 3, 3, 2};
    countFrequency(arr2, 7);
    cout << "→ We used extra memory (vector/hashmap) proportional to n.\n\n";
}


// ════════════════════════════════════════════════════════════
// 5. O(n log n) TIME  |  O(n) SPACE  —  Merge Sort
// ════════════════════════════════════════════════════════════
/*
 * Merge Sort: Divide array in half (log n levels), merge each level (n work).
 * Total = n × log n
 *
 * This is the BEST possible time for comparison-based sorting!
 *
 *   n = 1000 → about 10,000 operations
 *   n = 1,000,000 → about 20,000,000 operations (way less than n²!)
 *
 *   Compare: O(n²) for n=1,000,000 = 1,000,000,000,000 (trillion!)
 *
 * Real-world analogy: Sorting exam papers by dividing pile in half,
 *                     sorting each half, then merging them.
 */
void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp(right - left + 1);  // Extra space O(n)
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    for (int p = 0; p < k; p++)
        arr[left + p] = temp[p];
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left >= right) return;

    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);       // Sort left half
    mergeSort(arr, mid + 1, right);  // Sort right half
    merge(arr, left, mid, right);    // Merge them — O(n) work per level
}
// Total: log n levels × n work each = O(n log n)

void demo_ONlogN() {
    cout << "═══ O(n log n) — Merge Sort ═══\n";
    vector<int> arr = {38, 27, 43, 3, 9, 82, 10};
    cout << "Before: ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    mergeSort(arr, 0, arr.size() - 1);

    cout << "After:  ";
    for (int x : arr) cout << x << " ";
    cout << endl;
    cout << "→ For 7 elements: ~7 × log₂(7) ≈ 7 × 3 = 21 operations\n";
    cout << "→ For n²: 7² = 49 operations (more than double!)\n\n";
}


// ════════════════════════════════════════════════════════════
// 6. O(n²) TIME  |  O(1) SPACE  —  Quadratic (Bubble Sort)
// ════════════════════════════════════════════════════════════
/*
 * TWO nested loops, each going up to n.
 * n × n = n² operations.
 *
 *   n = 1000 → 1,000,000 operations
 *   n = 10,000 → 100,000,000 operations (starts getting slow!)
 *
 * This is why Bubble Sort is BAD for large arrays.
 *
 * Real-world analogy: Comparing every student with every other student
 *                     to find the tallest pair.
 */
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {        // Outer loop: n times
        for (int j = 0; j < n - i - 1; j++) { // Inner loop: n times
            if (arr[j] > arr[j + 1]) {         // Total: n × n = n²
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

// Another O(n²) example: Check if array has any duplicates (brute force)
bool hasDuplicateBrute(int arr[], int n) {
    for (int i = 0; i < n; i++) {            // For each element...
        for (int j = i + 1; j < n; j++) {    // ...compare with every other
            if (arr[i] == arr[j]) return true;
        }
    }
    return false;
}

void demo_ON2() {
    cout << "═══ O(n²) — Quadratic Time ═══\n";
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;

    bubbleSort(arr, n);
    cout << "Bubble sorted: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    int arr2[] = {1, 5, 3, 5, 7};
    cout << "Has duplicates? " << (hasDuplicateBrute(arr2, 5) ? "Yes" : "No") << endl;
    cout << "→ Very slow for large n. Avoid if possible!\n\n";
}


// ════════════════════════════════════════════════════════════
// 7. O(n²) TIME  |  O(n²) SPACE  —  Quadratic Both
// ════════════════════════════════════════════════════════════
/*
 * Creating a 2D matrix of size n×n.
 * Filling it requires n² operations AND n² memory.
 *
 * Real-world analogy: A distance table between n cities.
 *                     n cities → n² entries in the table.
 */
void createMultiplicationTable(int n) {
    // Allocating n×n matrix → O(n²) SPACE
    vector<vector<int>> table(n, vector<int>(n));

    // Filling it → O(n²) TIME
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            table[i][j] = (i + 1) * (j + 1);
        }
    }

    // Print it
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << table[i][j] << "\t";
        }
        cout << endl;
    }
}

void demo_ON2_space() {
    cout << "═══ O(n²) Time + O(n²) Space — Multiplication Table ═══\n";
    createMultiplicationTable(5);
    cout << "→ 5×5 = 25 cells. If n=1000, we'd need 1,000,000 cells!\n\n";
}


// ════════════════════════════════════════════════════════════
// 8. O(2^n) TIME  |  O(n) SPACE  —  Exponential (Fibonacci)
// ════════════════════════════════════════════════════════════
/*
 * Naive recursive Fibonacci: Each call spawns TWO more calls.
 *
 *   fib(5)  →  calls fib(4) + fib(3)
 *   fib(4)  →  calls fib(3) + fib(2)
 *   fib(3)  →  calls fib(2) + fib(1)
 *   ... and so on (lots of REPEATED work!)
 *
 *   n = 10  → ~1,000 calls
 *   n = 20  → ~1,000,000 calls
 *   n = 40  → ~1,000,000,000 calls (takes SECONDS)
 *   n = 50  → MINUTES. n = 100 → YEARS!
 *
 * Space is O(n) because the recursion stack goes n levels deep.
 *
 * Real-world analogy: Asking "How was your vacation?" and every answer
 *                     creates 2 more questions, exponentially.
 */
int fibNaive(int n) {
    if (n <= 1) return n;               // Base case
    return fibNaive(n - 1) + fibNaive(n - 2);  // TWO recursive calls!
}

void demo_O2N() {
    cout << "═══ O(2^n) — Exponential Time (Naive Fibonacci) ═══\n";
    for (int i = 0; i <= 10; i++) {
        cout << "fib(" << i << ") = " << fibNaive(i) << endl;
    }
    cout << "→ Try fib(40)... it takes seconds. fib(50)... minutes!\n";
    cout << "→ This is why we need Dynamic Programming (see below).\n\n";
}


// ════════════════════════════════════════════════════════════
// 9. O(n) TIME  |  O(n) SPACE  —  DP Fibonacci (MUCH better!)
// ════════════════════════════════════════════════════════════
/*
 * Dynamic Programming: Store results to avoid recalculating.
 * Instead of 2^n calls, we do just n calculations!
 *
 * This transforms O(2^n) → O(n). HUGE improvement!
 *
 *   n = 50 → 50 operations (instead of ~1,000,000,000,000,000!)
 *
 * Real-world analogy: Writing down answers on a cheat sheet
 *                     instead of re-solving the same problem.
 */
int fibDP(int n) {
    if (n <= 1) return n;
    vector<int> dp(n + 1);   // O(n) space to store results
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {   // O(n) time — just one loop!
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Even better: O(n) time, O(1) space — only keep last 2 values!
int fibOptimized(int n) {
    if (n <= 1) return n;
    int prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

void demo_DP() {
    cout << "═══ O(n) — DP Fibonacci vs O(2^n) Naive ═══\n";
    cout << "fib(40) with DP:        " << fibDP(40) << " (instant!)\n";
    cout << "fib(40) optimized O(1): " << fibOptimized(40) << " (instant!)\n";
    cout << "→ Same answer, but DP does 40 operations vs 2^40 ≈ 1 trillion!\n\n";
}


// ════════════════════════════════════════════════════════════
// 10. PRACTICAL COMPARISON: Same Problem, Different Approaches
// ════════════════════════════════════════════════════════════
/*
 * PROBLEM: Given an array, find two numbers that sum to a target.
 *
 * We'll solve it 3 ways to show how complexity affects performance:
 *
 *  Approach 1: Brute Force     → O(n²) time, O(1) space
 *  Approach 2: Sort + Pointers → O(n log n) time, O(1) space
 *  Approach 3: Hash Map        → O(n) time, O(n) space
 */

// ──── Approach 1: Brute Force — O(n²) time, O(1) space ────
// Try every pair. Simple but SLOW.
pair<int,int> twoSumBrute(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {           // n iterations
        for (int j = i + 1; j < n; j++) {   // n iterations → n²
            if (arr[i] + arr[j] == target) {
                return {i, j};
            }
        }
    }
    return {-1, -1};
}

// ──── Approach 2: Sort + Two Pointers — O(n log n) time, O(1) space ────
// Sort first, then use two pointers from both ends.
pair<int,int> twoSumSorted(int arr[], int n, int target) {
    // Note: Sorting modifies the array. For simplicity, we sort here.
    sort(arr, arr + n);  // O(n log n)

    int left = 0, right = n - 1;
    while (left < right) {                   // O(n) — each pointer moves once
        int sum = arr[left] + arr[right];
        if (sum == target) return {left, right};
        else if (sum < target) left++;
        else right--;
    }
    return {-1, -1};
}

// ──── Approach 3: Hash Map — O(n) time, O(n) space ────
// Trade space for time. FASTEST approach!
pair<int,int> twoSumHash(int arr[], int n, int target) {
    unordered_map<int, int> seen;            // O(n) extra space

    for (int i = 0; i < n; i++) {            // O(n) time
        int complement = target - arr[i];
        if (seen.count(complement)) {
            return {seen[complement], i};
        }
        seen[arr[i]] = i;
    }
    return {-1, -1};
}

void demo_comparison() {
    cout << "═══ SAME PROBLEM, 3 APPROACHES ═══\n";
    cout << "Problem: Find two numbers that sum to 9\n";
    cout << "Array: [2, 7, 11, 15, 1, 8]\n\n";

    int arr1[] = {2, 7, 11, 15, 1, 8};
    int arr2[] = {2, 7, 11, 15, 1, 8};
    int arr3[] = {2, 7, 11, 15, 1, 8};

    pair<int,int> r1 = twoSumBrute(arr1, 6, 9);
    cout << "Brute Force O(n²):      indices (" << r1.first << ", " << r1.second << ")\n";

    pair<int,int> r2 = twoSumSorted(arr2, 6, 9);
    cout << "Sorted+Ptrs O(n log n): indices (" << r2.first << ", " << r2.second << ")\n";

    pair<int,int> r3 = twoSumHash(arr3, 6, 9);
    cout << "Hash Map O(n):          indices (" << r3.first << ", " << r3.second << ")\n";

    cout << "\n→ For n = 1,000,000:\n";
    cout << "  Brute:  1,000,000,000,000 operations (SLOW)\n";
    cout << "  Sorted: 20,000,000 operations (OK)\n";
    cout << "  Hash:   1,000,000 operations (FAST!)\n\n";
}


// ════════════════════════════════════════════════════════════
//  SUMMARY TABLE
// ════════════════════════════════════════════════════════════
void printSummary() {
    cout << "╔══════════════════════════════════════════════════════════════════╗\n";
    cout << "║           TIME & SPACE COMPLEXITY — CHEAT SHEET                ║\n";
    cout << "╠═══════════════╦══════════════╦═══════════════╦═════════════════╣\n";
    cout << "║ Complexity    ║ n=100        ║ n=10,000      ║ Example         ║\n";
    cout << "╠═══════════════╬══════════════╬═══════════════╬═════════════════╣\n";
    cout << "║ O(1)          ║ 1            ║ 1             ║ Array access    ║\n";
    cout << "║ O(log n)      ║ 7            ║ 14            ║ Binary search   ║\n";
    cout << "║ O(n)          ║ 100          ║ 10,000        ║ Linear search   ║\n";
    cout << "║ O(n log n)    ║ 700          ║ 140,000       ║ Merge sort      ║\n";
    cout << "║ O(n²)         ║ 10,000       ║ 100,000,000   ║ Bubble sort     ║\n";
    cout << "║ O(2^n)        ║ 1.26 × 10³⁰  ║ IMPOSSIBLE    ║ Naive Fibonacci ║\n";
    cout << "╚═══════════════╩══════════════╩═══════════════╩═════════════════╝\n\n";

    cout << "╔══════════════════════════════════════════════════════════════════╗\n";
    cout << "║                     KEY TAKEAWAYS                              ║\n";
    cout << "╠══════════════════════════════════════════════════════════════════╣\n";
    cout << "║ 1. Nested loops → multiply complexities (O(n) × O(n) = O(n²)) ║\n";
    cout << "║ 2. Sequential code → add complexities (O(n) + O(n) = O(n))    ║\n";
    cout << "║ 3. Drop constants: O(2n) = O(n), O(n²+n) = O(n²)             ║\n";
    cout << "║ 4. Hash maps trade SPACE for TIME (O(n²) → O(n) with O(n) sp) ║\n";
    cout << "║ 5. Divide & conquer gives O(log n) — binary search, merge sort║\n";
    cout << "║ 6. DP eliminates redundant work — O(2^n) → O(n) for Fibonacci ║\n";
    cout << "╚══════════════════════════════════════════════════════════════════╝\n";
}


// ════════════════════════════════════════════════════════════
//  MAIN — Run all demos
// ════════════════════════════════════════════════════════════
int main() {
    cout << "\n";
    printSummary();
    cout << "\n────────────── DETAILED EXAMPLES ──────────────\n\n";

    demo_O1();
    demo_OlogN();
    demo_ON();
    demo_ON_space();
    demo_ONlogN();
    demo_ON2();
    demo_ON2_space();
    demo_O2N();
    demo_DP();
    demo_comparison();

    return 0;
}
