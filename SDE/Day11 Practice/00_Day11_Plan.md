# Day 11: Stacks & Queues + JS Proxy & Reflect + Composition vs Inheritance

> **Date:** Day 11 of SDE-1 Prep | **Week 2, Day 4**
> **Cumulative DSA Target:** 35 problems by end of day
> **Theme:** Master stack/queue data structures & patterns → JS Proxy/Reflect → Composition over Inheritance
> **Status:** ✅ No backlogs — all Day 10 LL problems done. Full steam ahead!

---

## Today's Schedule at a Glance

| Time | Activity | Details |
|------|----------|---------|
| 1h | **DSA: Stack Implementation + Problems** | Implement stack (array + LL), solve: Valid Parentheses, Min Stack |
| 1h | **DSA: Monotonic Stack Problems** | Solve: Next Greater Element I, Daily Temperatures |
| 1h | **DSA: Queue Implementation + Problems** | Implement queue, solve: Stack using Queues, Queue using Stacks |
| 1h | **JS: Proxy & Reflect** | Handler traps, validation, logging, Reflect API |
| 30m | **OOP: Composition vs Inheritance** | "Has-a" vs "Is-a", why composition is preferred |
| 30m | **Revision** | Spaced recall from Day 7 (SOLID) + Day 1 (10-day review) |

**Total Study Time:** ~5 hours

---

## Session 1: DSA — Stack Implementation + Easy Problems (1 hour)

### Part A: Implement Stack (15 min)

Understand LIFO (Last In, First Out). Implement using both array and linked list:

**Array-based stack:**
```cpp
class Stack {
    int arr[1000];
    int top;
public:
    Stack() { top = -1; }
    void push(int val) { arr[++top] = val; }
    int pop() { return arr[top--]; }
    int peek() { return arr[top]; }
    bool isEmpty() { return top == -1; }
    int size() { return top + 1; }
};
```

**Linked list-based stack (know this too):**
```cpp
struct Node {
    int val;
    Node* next;
    Node(int x) : val(x), next(NULL) {}
};

class StackLL {
    Node* topNode;
    int sz;
public:
    StackLL() : topNode(NULL), sz(0) {}
    void push(int val) {
        Node* newNode = new Node(val);
        newNode->next = topNode;
        topNode = newNode;
        sz++;
    }
    int pop() {
        int val = topNode->val;
        Node* temp = topNode;
        topNode = topNode->next;
        delete temp;
        sz--;
        return val;
    }
    int peek() { return topNode->val; }
    bool isEmpty() { return topNode == NULL; }
    int size() { return sz; }
};
```

**Key insight:** In STL, just use `stack<int> st;` with `push()`, `pop()`, `top()`, `empty()`. But know how it works underneath.

### Part B: Solve 2 Stack Problems (45 min)

| # | Problem | LeetCode | Difficulty | Pattern | Time |
|---|---------|----------|------------|---------|------|
| 30 | Valid Parentheses | [LC #20](https://leetcode.com/problems/valid-parentheses/) | Easy | Stack for Matching | 15 min |
| 31 | Min Stack | [LC #155](https://leetcode.com/problems/min-stack/) | Medium | Auxiliary Stack | 25 min |

#### Valid Parentheses — Approach
```
For each character:
  - If opening bracket ('(', '{', '[') → push onto stack
  - If closing bracket:
    - If stack is empty → return false (no match)
    - If stack top doesn't match → return false
    - Else → pop from stack (matched!)
  - At end: return stack.empty() (all matched?)
```

**Code:**
```cpp
bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) return false;
            st.pop();
        }
    }
    return st.empty();
}
```

#### Min Stack — Approach
```
Maintain TWO stacks:
  1. mainStack → normal push/pop
  2. minStack  → tracks current minimum at each level

Push: push val to mainStack.
      If minStack is empty OR val <= minStack.top(), push val to minStack too.
Pop:  If mainStack.top() == minStack.top(), pop minStack.
      Pop mainStack.
GetMin: return minStack.top()
```

**Code:**
```cpp
class MinStack {
    stack<int> mainStack;
    stack<int> minStack;
public:
    void push(int val) {
        mainStack.push(val);
        if (minStack.empty() || val <= minStack.top()) {
            minStack.push(val);
        }
    }
    void pop() {
        if (mainStack.top() == minStack.top()) {
            minStack.pop();
        }
        mainStack.pop();
    }
    int top() { return mainStack.top(); }
    int getMin() { return minStack.top(); }
};
```

**Why `<=` and not `<`?** If we push duplicate minimums, we need both copies on the minStack to handle pops correctly.

---

## Session 2: DSA — Monotonic Stack Problems (1 hour)

### The Monotonic Stack Pattern

```
When: Need "next greater/smaller element" for each position
Why stack: Stack maintains elements in monotonic order (increasing or decreasing)
Template (Next Greater Element):
  Iterate from right to left (or left to right)
  While stack.top() <= current element: pop (useless, won't be anyone's answer)
  If stack empty: no greater element → answer = -1
  Else: stack.top() is the next greater element
  Push current element
```

### Problems to Solve

| # | Problem | LeetCode | Difficulty | Pattern | Time |
|---|---------|----------|------------|---------|------|
| 32 | Next Greater Element I | [LC #496](https://leetcode.com/problems/next-greater-element-i/) | Easy | Monotonic Stack + Hash Map | 25 min |
| 33 | Daily Temperatures | [LC #739](https://leetcode.com/problems/daily-temperatures/) | Medium | Monotonic Stack (indices) | 30 min |

#### Next Greater Element I — Approach

```
Step 1: Build a "next greater" map for nums2 using monotonic stack
Step 2: Look up each element of nums1 in the map

Example: nums1 = [4,1,2], nums2 = [1,3,4,2]

Process nums2 from left to right:
  1 → stack=[1]
  3 → 3 > 1, so nextGreater[1]=3. stack=[3]
  4 → 4 > 3, so nextGreater[3]=4. stack=[4]
  2 → 2 < 4, push. stack=[4,2]
  Done → remaining in stack have no next greater

Result: nums1[4]=−1, nums1[1]=3, nums1[2]=−1 → [−1, 3, −1]
```

**Code:**
```cpp
vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
    stack<int> st;
    unordered_map<int, int> nextGreater;

    for (int num : nums2) {
        while (!st.empty() && st.top() < num) {
            nextGreater[st.top()] = num;
            st.pop();
        }
        st.push(num);
    }

    vector<int> result;
    for (int num : nums1) {
        result.push_back(nextGreater.count(num) ? nextGreater[num] : -1);
    }
    return result;
}
```

#### Daily Temperatures — Approach

```
"How many days until a warmer temperature?"
Same monotonic stack idea, but store INDICES instead of values.

Process from left to right:
  While stack.top() has temp < current temp:
    Pop it → answer[popped_index] = current_index - popped_index
  Push current index

Example: temps = [73, 74, 75, 71, 69, 72, 76, 73]
  i=0 (73): stack=[0]
  i=1 (74): 74>73 → ans[0]=1. stack=[1]
  i=2 (75): 75>74 → ans[1]=1. stack=[2]
  i=3 (71): stack=[2,3]
  i=4 (69): stack=[2,3,4]
  i=5 (72): 72>69 → ans[4]=1. 72>71 → ans[3]=2. stack=[2,5]
  i=6 (76): 76>72 → ans[5]=1. 76>75 → ans[2]=4. stack=[6]
  i=7 (73): stack=[6,7]
  Remaining: ans[6]=0, ans[7]=0

Result: [1, 1, 4, 2, 1, 1, 0, 0]
```

**Code:**
```cpp
vector<int> dailyTemperatures(vector<int>& temps) {
    int n = temps.size();
    vector<int> answer(n, 0);
    stack<int> st; // stores indices

    for (int i = 0; i < n; i++) {
        while (!st.empty() && temps[st.top()] < temps[i]) {
            int prevIndex = st.top();
            st.pop();
            answer[prevIndex] = i - prevIndex;
        }
        st.push(i);
    }
    return answer;
}
```

**Time: O(n), Space: O(n)** — each element pushed and popped at most once.

---

## Session 3: DSA — Queue Implementation + Cross-Implementation (1 hour)

### Part A: Implement Queue (15 min)

Understand FIFO (First In, First Out):

```cpp
class Queue {
    int arr[1000];
    int front, rear;
public:
    Queue() { front = 0; rear = -1; }
    void enqueue(int val) { arr[++rear] = val; }
    int dequeue() { return arr[front++]; }
    int peek() { return arr[front]; }
    bool isEmpty() { return front > rear; }
    int size() { return rear - front + 1; }
};
```

**STL:** `queue<int> q;` with `push()`, `pop()`, `front()`, `back()`, `empty()`.

### Part B: Cross-Implementation Problems (45 min)

| # | Problem | LeetCode | Difficulty | Pattern | Time |
|---|---------|----------|------------|---------|------|
| 34 | Implement Stack using Queues | [LC #225](https://leetcode.com/problems/implement-stack-using-queues/) | Easy | Queue Rotation | 20 min |
| 35 | Implement Queue using Stacks | [LC #232](https://leetcode.com/problems/implement-queue-using-stacks/) | Easy | Amortized Transfer | 20 min |

#### Stack using Queues — Approach (Single Queue)

```
Push: push to queue, then rotate all previous elements to back
  push(4) to queue [1, 2, 3]:
    queue = [1, 2, 3, 4]
    rotate 3 times: front→back, front→back, front→back
    queue = [4, 1, 2, 3]  ← front is now the "top"

Pop: just dequeue from front
Top: just peek at front
```

**Code:**
```cpp
class MyStack {
    queue<int> q;
public:
    void push(int x) {
        q.push(x);
        int sz = q.size();
        for (int i = 0; i < sz - 1; i++) {
            q.push(q.front());
            q.pop();
        }
    }
    int pop() { int val = q.front(); q.pop(); return val; }
    int top() { return q.front(); }
    bool empty() { return q.empty(); }
};
```

#### Queue using Stacks — Approach (Two Stacks, Amortized)

```
inStack: receives all pushes
outStack: serves all pops/peeks

Push: always push to inStack
Pop/Peek:
  If outStack is empty → pour ALL of inStack into outStack (reverses order!)
  Then pop/peek from outStack

Why this works: pouring reverses the LIFO order back to FIFO.
Amortized O(1) per operation.
```

**Code:**
```cpp
class MyQueue {
    stack<int> inStack, outStack;

    void transfer() {
        if (outStack.empty()) {
            while (!inStack.empty()) {
                outStack.push(inStack.top());
                inStack.pop();
            }
        }
    }
public:
    void push(int x) { inStack.push(x); }
    int pop() { transfer(); int val = outStack.top(); outStack.pop(); return val; }
    int peek() { transfer(); return outStack.top(); }
    bool empty() { return inStack.empty() && outStack.empty(); }
};
```

---

## Session 4: JS — Proxy & Reflect (1 hour)

### What is Proxy? (20 min)

A Proxy wraps an object and intercepts operations on it (get, set, delete, etc.):

```javascript
const user = { name: "Alice", age: 25 };

const handler = {
  get(target, prop) {
    console.log(`Reading property: ${prop}`);
    return prop in target ? target[prop] : `Property ${prop} doesn't exist`;
  },
  set(target, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (prop === "age" && value < 0) {
      throw new RangeError("Age must be positive");
    }
    target[prop] = value;
    console.log(`Set ${prop} = ${value}`);
    return true;
  }
};

const proxy = new Proxy(user, handler);

console.log(proxy.name);     // Reading property: name → "Alice"
console.log(proxy.email);    // Reading property: email → "Property email doesn't exist"
proxy.age = 30;              // Set age = 30
// proxy.age = "thirty";     // TypeError: Age must be a number
// proxy.age = -5;           // RangeError: Age must be positive
```

### Common Proxy Traps (20 min)

| Trap | Intercepts | Use Case |
|------|-----------|----------|
| `get(target, prop)` | Property reading | Default values, logging |
| `set(target, prop, value)` | Property writing | Validation, reactive updates |
| `has(target, prop)` | `in` operator | Custom membership check |
| `deleteProperty(target, prop)` | `delete` operator | Prevent deletion |
| `apply(target, thisArg, args)` | Function calls | Logging, timing |

### Practical Example: Validation Proxy (10 min)
```javascript
function createValidatedObject(schema) {
  return new Proxy({}, {
    set(target, prop, value) {
      if (schema[prop]) {
        const { type, required, min, max } = schema[prop];
        if (type && typeof value !== type) {
          throw new TypeError(`${prop} must be of type ${type}`);
        }
        if (min !== undefined && value < min) {
          throw new RangeError(`${prop} must be >= ${min}`);
        }
        if (max !== undefined && value > max) {
          throw new RangeError(`${prop} must be <= ${max}`);
        }
      }
      target[prop] = value;
      return true;
    }
  });
}

const userSchema = {
  name: { type: "string" },
  age: { type: "number", min: 0, max: 150 }
};

const user = createValidatedObject(userSchema);
user.name = "Alice";  // OK
user.age = 25;        // OK
// user.age = -1;     // RangeError!
```

### Reflect API Basics (10 min)
```javascript
// Reflect provides default behavior for Proxy traps
const handler = {
  get(target, prop, receiver) {
    console.log(`Accessing: ${prop}`);
    return Reflect.get(target, prop, receiver); // default behavior
  },
  set(target, prop, value, receiver) {
    console.log(`Setting: ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
};
```

**Why Reflect?**
- Provides a clean way to call the default operation inside a trap
- Returns `true/false` instead of throwing errors (unlike `Object.defineProperty`)
- One-to-one correspondence with Proxy trap names
- Better than `target[prop]` directly — handles `receiver` correctly for inherited properties

### Proxy vs `Object.defineProperty`

| Feature | Proxy | Object.defineProperty |
|---------|-------|----------------------|
| Scope | Entire object, all properties | Single property at a time |
| Dynamic properties | ✅ Intercepts new properties | ❌ Must define upfront |
| Array support | ✅ Intercepts `push`, `length`, etc. | ❌ Can't intercept array mutations |
| Performance | Slightly slower | Faster |
| Browser support | ES6+ | ES5+ |

**Vue 2 used `Object.defineProperty`, Vue 3 switched to `Proxy`** — this is a popular interview talking point.

### Interview Questions
1. What is a Proxy in JavaScript?
2. Name 3 practical use cases for Proxy (validation, logging, reactive data binding)
3. What is Reflect and why use it with Proxy?
4. How is Proxy different from Object.defineProperty?
5. How does Vue 3's reactivity system use Proxy?

---

## Session 5: OOP — Composition vs Inheritance (30 min)

### The Problem with Inheritance

```javascript
// Inheritance creates rigid hierarchies
class Animal {
  eat() { return "eating"; }
}

class Dog extends Animal {
  bark() { return "woof!"; }
}

class RobotDog extends Dog {
  // Problem: RobotDog can eat()? That makes no sense!
  // But we can't remove it — it's inherited.
}
```

### The Diamond Problem
```
        Animal
       /      \
    Flying    Swimming
       \      /
        Duck     ← Which version of breathe() does Duck get?

JavaScript doesn't allow multiple inheritance, so this is avoided.
But composition solves it cleanly.
```

### Composition: "Has-a" Instead of "Is-a"

```javascript
// Behaviors as independent functions
const canEat = (state) => ({
  eat: () => `${state.name} is eating`
});

const canBark = (state) => ({
  bark: () => `${state.name} says woof!`
});

const canCharge = (state) => ({
  charge: () => `${state.name} is charging`
});

// Compose only what you need
const createDog = (name) => {
  const state = { name };
  return { ...canEat(state), ...canBark(state) };
};

const createRobotDog = (name) => {
  const state = { name };
  return { ...canBark(state), ...canCharge(state) };
  // No eat()! RobotDog only barks and charges.
};

const rex = createDog("Rex");
rex.eat();  // "Rex is eating"
rex.bark(); // "Rex says woof!"

const robo = createRobotDog("Robo");
robo.bark();   // "Robo says woof!"
robo.charge(); // "Robo is charging"
// robo.eat(); // undefined — exactly what we want!
```

### When to Use Each

| Use Inheritance | Use Composition |
|----------------|----------------|
| Clear "is-a" relationship (Car is a Vehicle) | Mix-and-match behaviors |
| Shared state AND behavior | Only shared behavior |
| Small, stable hierarchy | Evolving, flexible design |
| Framework requires it | Most real-world cases |

### Real-World Example: React
```javascript
// React REMOVED class components with inheritance in favor of composition
// Old (inheritance): class MyComponent extends React.Component
// New (composition): function MyComponent() { useState(), useEffect() }
// Hooks ARE composition — you compose behavior into your component.
```

### Interview Answer (30 seconds)
> "Composition is preferred over inheritance because it's more flexible. Inheritance creates tight coupling and rigid hierarchies — if you need a class that shares behaviors from two different parents, you're stuck (no multiple inheritance in most languages). With composition, you assemble objects from independent, reusable pieces. The rule of thumb: use inheritance for 'is-a' relationships with stable hierarchies, use composition for 'has-a' or when you need flexibility."

---

## Session 6: Revision (30 min)

### Spaced Repetition — What to Revise Today

| Revise From | What | How |
|-------------|------|-----|
| Day 7 (4 days ago) | SOLID: LSP, ISP, DIP | Explain each with one example |
| Day 7 (4 days ago) | Subarray Sum = K pattern | Trace through example: [1,1,1], k=2 |
| Day 1 (10 days — FULL review) | Big O analysis rules | State 5 rules for analyzing complexity |
| Day 1 (10 days) | STL basics: vector, map, set | When to use each? Time complexity of each? |
| Day 1 (10 days) | Two Sum solution | Re-solve mentally in < 2 min |

### Flashcard Creation (10 new today)
1. Stack LIFO — push/pop/peek operations
2. Valid Parentheses — stack matching approach
3. Min Stack — auxiliary stack technique
4. Monotonic stack — when to use, template
5. Next Greater Element — stack + hashmap approach
6. Daily Temperatures — monotonic stack with indices
7. Queue FIFO — enqueue/dequeue
8. Stack using Queues — rotation trick
9. Queue using Stacks — amortized two-stack transfer
10. Proxy vs Object.defineProperty — comparison

---

## Day 11 Checklist

| Task | Status |
|------|--------|
| Implement Stack (array + linked list) | [ ] |
| Solve: Valid Parentheses (LC #20) | [ ] |
| Solve: Min Stack (LC #155) | [ ] |
| Solve: Next Greater Element I (LC #496) | [ ] |
| Solve: Daily Temperatures (LC #739) | [ ] |
| Implement Queue (array-based) | [ ] |
| Solve: Stack using Queues (LC #225) | [ ] |
| Solve: Queue using Stacks (LC #232) | [ ] |
| JS: Implement a validation Proxy | [ ] |
| JS: Use Reflect inside Proxy traps | [ ] |
| OOP: Code composition example | [ ] |
| Revision: Day 7 + Day 1 topics | [ ] |
| Create 10 new flashcards | [ ] |
| Update mistake notebook | [ ] |

---

### Week 2 Tracker

| Day | Plan | Status |
|-----|------|--------|
| Day 8 | Strings + Singleton + GC | ✅ Done |
| Day 9 | Strings + LL Intro + Currying + Observer | ✅ Done |
| Day 10 | LL Deep (6 problems) + Iterators/Generators + Factory | ✅ Done |
| **Day 11** | **Stacks & Queues (6 problems) + Proxy + Composition** | 🔄 Today |
| Day 12 | Recursion & Backtracking | Upcoming |
| Day 13 | Binary Search + Catch-up | Upcoming |
| Day 14 | Week 2 Review + Timed Test | Upcoming |

### By End of Day 11 You Should Be Able To:
1. Implement stack and queue from scratch (array and linked list based)
2. Solve bracket matching problems using a stack
3. Design a Min Stack with O(1) getMin
4. Explain and use the monotonic stack pattern for "next greater element" problems
5. Implement stack using queues and vice versa (know the trade-offs)
6. Create a Proxy with get/set traps for validation
7. Explain Reflect API and when to use it
8. Articulate why composition > inheritance with a concrete example
9. Have **35 cumulative DSA problems** solved

---

> **You're on track! 💪** No backlogs, all Day 10 problems done. Today you're picking up a brand-new data structure — stacks and queues are more intuitive than linked lists, and you'll find the pattern recognition from arrays carries over. The monotonic stack is a game-changer pattern that shows up in a LOT of interviews. Let's go!
