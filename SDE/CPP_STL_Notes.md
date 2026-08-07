# C++ STL (Standard Template Library) — Complete Notes

> **Header:** `#include <bits/stdc++.h>` includes everything (competitive programming).  
> For production code, include specific headers like `<vector>`, `<algorithm>`, etc.

---

## 1. Pairs & Tuples

### `pair<T1, T2>`
```cpp
#include <utility>

pair<int, string> p = {1, "hello"};    // or make_pair(1, "hello")
cout << p.first << " " << p.second;    // 1 hello

// Nested pair
pair<int, pair<int, int>> np = {1, {2, 3}};
cout << np.second.second;              // 3
```

### `tuple<T1, T2, T3...>`
```cpp
#include <tuple>

tuple<int, string, float> t = {1, "hi", 3.14};
cout << get<0>(t);    // 1
cout << get<1>(t);    // hi

auto [a, b, c] = t;   // C++17 structured bindings
```

---

## 2. Containers

### 2.1 `vector<T>` — Dynamic Array
```cpp
#include <vector>
```

| Operation | Syntax | Time |
|-----------|--------|------|
| Create | `vector<int> v;` | — |
| Create with size | `vector<int> v(5, 0);` → `{0,0,0,0,0}` | O(n) |
| Create from list | `vector<int> v = {1,2,3};` | O(n) |
| Push back | `v.push_back(10);` | O(1) amortized |
| Emplace back | `v.emplace_back(10);` | O(1) amortized |
| Pop back | `v.pop_back();` | O(1) |
| Access | `v[i]` or `v.at(i)` | O(1) |
| Front / Back | `v.front()` / `v.back()` | O(1) |
| Size | `v.size()` | O(1) |
| Empty check | `v.empty()` | O(1) |
| Insert at pos | `v.insert(v.begin()+i, val)` | O(n) |
| Erase at pos | `v.erase(v.begin()+i)` | O(n) |
| Clear | `v.clear()` | O(n) |
| Resize | `v.resize(10)` | O(n) |

```cpp
// 2D vector
vector<vector<int>> mat(3, vector<int>(4, 0));  // 3x4 matrix of 0s

// Copy vector
vector<int> v2(v.begin(), v.end());
```

---

### 2.2 `list<T>` — Doubly Linked List
```cpp
#include <list>

list<int> l = {1, 2, 3};
l.push_front(0);      // {0,1,2,3}
l.push_back(4);       // {0,1,2,3,4}
l.pop_front();
l.pop_back();
```

| Operation | Time |
|-----------|------|
| Insert / Delete (at iterator) | O(1) |
| Access (no `[]` operator) | O(n) — must traverse |
| `push_front` / `push_back` | O(1) |

---

### 2.3 `deque<T>` — Double-Ended Queue
```cpp
#include <deque>

deque<int> dq = {2, 3, 4};
dq.push_front(1);     // {1,2,3,4}
dq.push_back(5);      // {1,2,3,4,5}
dq.pop_front();
dq.pop_back();
cout << dq[0];         // random access works!
```

| Operation | Time |
|-----------|------|
| `push_front` / `push_back` | O(1) |
| `pop_front` / `pop_back` | O(1) |
| Random access `dq[i]` | O(1) |
| Insert in middle | O(n) |

---

### 2.4 `stack<T>` — LIFO
```cpp
#include <stack>

stack<int> st;
st.push(1);
st.push(2);
st.push(3);
cout << st.top();    // 3
st.pop();            // removes 3
cout << st.size();   // 2
cout << st.empty();  // 0 (false)
```

> ⚠️ **No iterator, no random access, no `[]`.** Only `top()`, `push()`, `pop()`.

---

### 2.5 `queue<T>` — FIFO
```cpp
#include <queue>

queue<int> q;
q.push(1);
q.push(2);
q.push(3);
cout << q.front();   // 1
cout << q.back();    // 3
q.pop();             // removes 1 (front)
```

> ⚠️ Only `front()`, `back()`, `push()`, `pop()`.

---

### 2.6 `priority_queue<T>` — Max Heap (by default)
```cpp
#include <queue>

// Max Heap (largest on top)
priority_queue<int> pq;
pq.push(10);
pq.push(30);
pq.push(20);
cout << pq.top();    // 30
pq.pop();            // removes 30

// Min Heap (smallest on top)
priority_queue<int, vector<int>, greater<int>> minpq;
minpq.push(10);
minpq.push(30);
minpq.push(20);
cout << minpq.top(); // 10
```

| Operation | Time |
|-----------|------|
| `push` | O(log n) |
| `pop` | O(log n) |
| `top` | O(1) |

---

### 2.7 `set<T>` — Sorted, Unique Elements (BST-based)
```cpp
#include <set>

set<int> s;
s.insert(3);
s.insert(1);
s.insert(2);
s.insert(1);          // ignored (duplicate)
// s = {1, 2, 3}  ← always sorted

s.erase(2);            // remove by value
s.count(1);            // 1 if exists, 0 if not
s.find(3);             // returns iterator (or s.end() if not found)

auto it = s.lower_bound(2);  // first element >= 2
auto it2 = s.upper_bound(2); // first element > 2
```

| Operation | Time |
|-----------|------|
| `insert` / `erase` / `find` | O(log n) |
| `lower_bound` / `upper_bound` | O(log n) |

### `multiset<T>` — Sorted, Allows Duplicates
```cpp
multiset<int> ms;
ms.insert(1);
ms.insert(1);
ms.insert(1);
cout << ms.count(1);  // 3

ms.erase(ms.find(1)); // erases ONE instance of 1
ms.erase(1);           // erases ALL instances of 1
```

---

### 2.8 `map<K, V>` — Sorted Key-Value Pairs (BST-based)
```cpp
#include <map>

map<string, int> m;
m["apple"] = 5;
m["banana"] = 3;
m.insert({"cherry", 7});

cout << m["apple"];     // 5
cout << m.count("kiwi"); // 0

// Iterate (sorted by key)
for (auto &[key, val] : m) {
    cout << key << " -> " << val << endl;
}

m.erase("banana");
```

| Operation | Time |
|-----------|------|
| `insert` / `erase` / `find` / `[]` | O(log n) |

> ⚠️ **Gotcha:** `m["newkey"]` creates the key with default value 0 if it doesn't exist! Use `m.count()` or `m.find()` to check first.

### `multimap<K, V>` — Sorted, Allows Duplicate Keys
```cpp
multimap<int, string> mm;
mm.insert({1, "a"});
mm.insert({1, "b"});   // duplicate key OK
// ⚠️ No [] operator for multimap
```

---

### 2.9 `unordered_set<T>` — Hash Set (Unsorted, Unique)
```cpp
#include <unordered_set>

unordered_set<int> us = {3, 1, 4, 1, 5};
// stores {3, 1, 4, 5} — no duplicates, no guaranteed order

us.insert(9);
us.erase(3);
us.count(4);    // 1
us.find(4);     // iterator
```

| Operation | Avg Time | Worst Time |
|-----------|----------|------------|
| `insert` / `erase` / `find` | **O(1)** | O(n) |

---

### 2.10 `unordered_map<K, V>` — Hash Map (Unsorted)
```cpp
#include <unordered_map>

unordered_map<string, int> um;
um["hello"] = 1;
um["world"] = 2;

// Same API as map, but O(1) avg instead of O(log n)
```

---

## 3. Iterators

Iterators are "pointers" to container elements.

```cpp
vector<int> v = {10, 20, 30, 40};

// Forward iteration
for (auto it = v.begin(); it != v.end(); it++) {
    cout << *it << " ";  // 10 20 30 40
}

// Reverse iteration
for (auto it = v.rbegin(); it != v.rend(); it++) {
    cout << *it << " ";  // 40 30 20 10
}

// Range-based for loop (preferred)
for (int x : v)       cout << x;       // by copy
for (int &x : v)      x *= 2;          // by reference (modifies)
for (const auto &x : v) cout << x;     // read-only, no copy
```

### Useful Iterator Functions
```cpp
advance(it, 3);        // move iterator 3 positions forward
auto it2 = next(it);   // returns iterator to next element
auto it3 = prev(it);   // returns iterator to previous element
int d = distance(v.begin(), it);  // number of steps between iterators
```

---

## 4. Algorithms (`#include <algorithm>`)

### 4.1 Sorting
```cpp
vector<int> v = {5, 2, 8, 1, 9};

sort(v.begin(), v.end());                    // ascending: {1,2,5,8,9}
sort(v.begin(), v.end(), greater<int>());    // descending: {9,8,5,2,1}

// Custom comparator
sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;   // descending
});

// Sort pairs by second element
vector<pair<int,int>> vp = {{1,3},{2,1},{3,2}};
sort(vp.begin(), vp.end(), [](auto &a, auto &b) {
    return a.second < b.second;
});
```

> **Time:** O(n log n) — uses IntroSort (hybrid of quicksort, heapsort, insertion sort)

### 4.2 Searching
```cpp
// Binary search (array MUST be sorted)
sort(v.begin(), v.end());

bool found = binary_search(v.begin(), v.end(), 5);  // true/false

auto it = lower_bound(v.begin(), v.end(), 5);  // first element >= 5
auto it2 = upper_bound(v.begin(), v.end(), 5); // first element > 5

// Linear search
auto it3 = find(v.begin(), v.end(), 5);        // O(n)
if (it3 != v.end()) cout << "Found!";

// Count occurrences
int c = count(v.begin(), v.end(), 5);
```

### 4.3 Min / Max
```cpp
cout << *min_element(v.begin(), v.end());  // smallest element
cout << *max_element(v.begin(), v.end());  // largest element

cout << min(3, 5);       // 3
cout << max(3, 5);       // 5
cout << min({3,1,4,1});  // 1  (initializer list)

auto [lo, hi] = minmax({3, 1, 4, 1, 5});  // lo=1, hi=5
```

### 4.4 Reverse, Rotate, Swap
```cpp
reverse(v.begin(), v.end());               // reverse in-place

rotate(v.begin(), v.begin()+2, v.end());   // left rotate by 2

swap(v[0], v[1]);                          // swap two values
```

### 4.5 Accumulate & Transform
```cpp
#include <numeric>

int sum = accumulate(v.begin(), v.end(), 0);          // sum with init=0
int product = accumulate(v.begin(), v.end(), 1, multiplies<int>());

// Transform: apply function to each element
transform(v.begin(), v.end(), v.begin(), [](int x) {
    return x * 2;
});
```

### 4.6 Permutations
```cpp
vector<int> v = {1, 2, 3};
sort(v.begin(), v.end());  // MUST sort first

do {
    for (int x : v) cout << x << " ";
    cout << endl;
} while (next_permutation(v.begin(), v.end()));
// Prints: 1 2 3 → 1 3 2 → 2 1 3 → 2 3 1 → 3 1 2 → 3 2 1
```

### 4.7 Other Useful Algorithms
```cpp
// Fill
fill(v.begin(), v.end(), 0);              // set all to 0

// Unique (remove consecutive duplicates — sort first!)
sort(v.begin(), v.end());
v.erase(unique(v.begin(), v.end()), v.end());

// is_sorted
bool ok = is_sorted(v.begin(), v.end());

// all_of, any_of, none_of
bool allPos = all_of(v.begin(), v.end(), [](int x){ return x > 0; });
bool anyNeg = any_of(v.begin(), v.end(), [](int x){ return x < 0; });

// for_each
for_each(v.begin(), v.end(), [](int &x){ x *= 2; });

// nth_element — puts nth element in its sorted position, O(n)
nth_element(v.begin(), v.begin()+2, v.end());  // v[2] is now the 3rd smallest

// partial_sort — sort only first k elements, O(n log k)
partial_sort(v.begin(), v.begin()+3, v.end());
```

---

## 5. Strings

```cpp
#include <string>

string s = "hello";
s += " world";            // concatenation
s.length();                // or s.size()  → 11
s.substr(0, 5);            // "hello" (pos, len)
s.find("world");           // 6 (index) or string::npos if not found
s.replace(0, 5, "Hi");    // "Hi world"

// Convert
string num = to_string(42);       // int → string
int n = stoi("42");                // string → int
long l = stol("123456789");        // string → long
double d = stod("3.14");           // string → double

// Character checks
isalpha('a');   // true
isdigit('5');   // true
islower('a');   // true
toupper('a');   // 'A'
tolower('A');   // 'a'

// Sort a string
sort(s.begin(), s.end());

// Reverse a string
reverse(s.begin(), s.end());
```

### `stringstream` — Parse / Split Strings
```cpp
#include <sstream>

string line = "10 20 30";
stringstream ss(line);
int a, b, c;
ss >> a >> b >> c;   // a=10, b=20, c=30

// Split by delimiter
string csv = "apple,banana,cherry";
stringstream ss2(csv);
string token;
while (getline(ss2, token, ',')) {
    cout << token << endl;
}
```

---

## 6. `bitset<N>` — Fixed-Size Bit Array
```cpp
#include <bitset>

bitset<8> b1(42);         // from int   → 00101010
bitset<8> b2("11001100"); // from string

b1.count();       // number of 1s
b1.set(0);        // set bit 0 to 1
b1.reset(0);      // set bit 0 to 0
b1.flip();        // flip all bits
b1.test(3);       // check if bit 3 is 1

// Bitwise operations
auto b3 = b1 & b2;
auto b4 = b1 | b2;
auto b5 = b1 ^ b2;
```

---

## 7. Quick Reference — Which Container to Use?

| Need | Use | Why |
|------|-----|-----|
| Dynamic array, fast access | `vector` | O(1) access, cache-friendly |
| Insert/delete at both ends | `deque` | O(1) front & back |
| Frequent insert/delete in middle | `list` | O(1) at iterator position |
| LIFO (undo, DFS, brackets) | `stack` | Simple push/pop interface |
| FIFO (BFS, scheduling) | `queue` | Simple push/pop interface |
| Get min/max quickly | `priority_queue` | O(1) top, O(log n) push/pop |
| Sorted unique elements | `set` | O(log n) everything |
| Fast lookup, no order needed | `unordered_set` | O(1) avg lookup |
| Key→value, sorted keys | `map` | O(log n) everything |
| Key→value, fast lookup | `unordered_map` | O(1) avg lookup |
| Duplicate sorted elements | `multiset` | Like set but allows dupes |

---

## 8. Common Patterns for Interviews

### Frequency Map
```cpp
unordered_map<int, int> freq;
for (int x : v) freq[x]++;
```

### Sliding Window (with deque)
```cpp
deque<int> dq;
for (int i = 0; i < n; i++) {
    while (!dq.empty() && dq.front() < i - k + 1) dq.pop_front();
    while (!dq.empty() && v[dq.back()] < v[i]) dq.pop_back();
    dq.push_back(i);
}
```

### Monotonic Stack
```cpp
stack<int> st;
vector<int> nge(n, -1); // next greater element
for (int i = 0; i < n; i++) {
    while (!st.empty() && v[st.top()] < v[i]) {
        nge[st.top()] = v[i];
        st.pop();
    }
    st.push(i);
}
```

### Two Pointers
```cpp
int left = 0, right = n - 1;
while (left < right) {
    int sum = v[left] + v[right];
    if (sum == target) { /* found */ break; }
    else if (sum < target) left++;
    else right--;
}
```

---

## 9. Cheat Sheet — Time Complexities

| Container | Access | Search | Insert | Delete |
|-----------|--------|--------|--------|--------|
| `vector` | O(1) | O(n) | O(n)* | O(n) |
| `deque` | O(1) | O(n) | O(1)** | O(1)** |
| `list` | O(n) | O(n) | O(1)† | O(1)† |
| `set` / `map` | — | O(log n) | O(log n) | O(log n) |
| `unordered_set` / `unordered_map` | — | O(1) avg | O(1) avg | O(1) avg |
| `priority_queue` | O(1) top | — | O(log n) | O(log n) |

\* O(1) amortized at back &nbsp; \** at front/back &nbsp; † at known iterator position

---

> 💡 **Pro Tip:** In competitive programming, prefer `unordered_map` over `map` unless you  
> need sorted keys. It's ~3-5x faster. But watch out for hash collision attacks — use  
> `map` if you suspect adversarial inputs (e.g., Codeforces hack cases).
