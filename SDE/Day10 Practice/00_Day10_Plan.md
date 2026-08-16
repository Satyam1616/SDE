# Day 10: Linked Lists Deep + JS Iterators & Generators + Factory Pattern

> **Date:** Day 10 of SDE-1 Prep | **Week 2, Day 3**
> **Cumulative DSA Target:** 29 problems by end of day
> **Theme:** Master linked list manipulation patterns + JS iteration protocol + Factory design pattern

---

## Today's Schedule at a Glance

| Time | Activity | Details |
|------|----------|---------|
| 1.5h | **DSA: Linked Lists (Part 1)** | Solve: Reverse Linked List, Linked List Cycle, Merge Two Sorted Lists, Middle of Linked List |
| 1h | **DSA: Linked Lists (Part 2)** | Solve: Remove Nth Node From End, Intersection of Two Linked Lists |
| 1h | **JS: Iterators & Generators** | `Symbol.iterator`, `for...of`, generator functions with `yield`, `function*`, lazy evaluation |
| 30m | **OOP: Factory Pattern** | Simple factory vs factory method. When to use over constructors. Implement in JS. |
| 30m | **Revision** | Re-solve 3 problems without hints (Two Sum, Move Zeroes, Valid Anagram) + flashcard review |

**Total Study Time:** ~4.5 hours

---

## Session 1: DSA - Linked Lists Part 1 (1.5 hours)

### Problems to Solve

| # | Problem | LeetCode | Difficulty | Pattern | Time Limit |
|---|---------|----------|------------|---------|------------|
| 24 | Reverse Linked List | [LC #206](https://leetcode.com/problems/reverse-linked-list/) | Easy | Linked List Reversal | 15 min |
| 25 | Linked List Cycle | [LC #141](https://leetcode.com/problems/linked-list-cycle/) | Easy | Fast & Slow Pointer (Floyd's) | 15 min |
| 26 | Merge Two Sorted Lists | [LC #21](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | Merge Two Lists | 15 min |
| 27 | Middle of Linked List | [LC #876](https://leetcode.com/problems/middle-of-the-linked-list/) | Easy | Fast & Slow Pointer | 10 min |

### Key Patterns to Internalize

#### Pattern 19: Linked List Reversal
```
When: Need to reverse order of nodes
Template:
  prev = NULL
  curr = head
  while curr:
      next = curr->next
      curr->next = prev
      prev = curr
      curr = next
  return prev
```

#### Pattern 20: Fast & Slow Pointer (Floyd's Tortoise & Hare)
```
When: Cycle detection, find middle, find kth from end
Template:
  slow = head, fast = head
  while fast && fast->next:
      slow = slow->next
      fast = fast->next->next
  // slow is at middle (or meeting point for cycle)
```

#### Pattern 21: Merge Two Sorted Lists
```
When: Combining two sorted structures
Template:
  Use dummy node as sentinel
  Compare heads of both lists
  Attach smaller node to result
  Move that list's pointer forward
  Attach remaining list at end
```

### How to Approach Each Problem

**Reverse Linked List (#206):**
- Iterative: 3 pointers (prev, curr, next). Draw the pointer changes!
- Recursive: Think of it as "reverse the rest, then fix the current node"
- Common mistake: Forgetting to set `curr->next = prev` before moving

**Linked List Cycle (#141):**
- Floyd's Algorithm: slow moves 1 step, fast moves 2 steps
- If they meet -> cycle exists
- Why it works: Fast pointer gains 1 step per iteration, must eventually catch slow in cycle
- Common mistake: Not checking `fast != NULL && fast->next != NULL`

**Merge Two Sorted Lists (#21):**
- Use a dummy head node to simplify edge cases
- Compare current nodes of both lists, attach smaller
- Don't forget to attach the remaining non-empty list at the end

**Middle of Linked List (#876):**
- Fast & slow pointer: when fast reaches end, slow is at middle
- For even length: this gives the second middle node

---

## Session 2: DSA - Linked Lists Part 2 (1 hour)

### Problems to Solve

| # | Problem | LeetCode | Difficulty | Pattern | Time Limit |
|---|---------|----------|------------|---------|------------|
| 28 | Remove Nth Node From End | [LC #19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | Two Pointer (Gap) | 20 min |
| 29 | Intersection of Two Linked Lists | [LC #160](https://leetcode.com/problems/intersection-of-two-linked-lists/) | Easy | Two Pointer (Length Diff) | 20 min |

### How to Approach

**Remove Nth Node From End (#19):**
- Two-pointer gap technique: advance `fast` pointer by `n` steps first
- Then move both `fast` and `slow` together
- When `fast` reaches end, `slow` is just before the node to remove
- Use dummy node to handle edge case: removing the head itself

**Intersection of Two Linked Lists (#160):**
- **Method 1:** Calculate lengths, advance the longer list by the difference, then walk together
- **Method 2 (Elegant):** Two pointers - when pointer A reaches end, redirect to headB; when B reaches end, redirect to headA. They meet at intersection or both become NULL.
- Why Method 2 works: Both pointers traverse `lenA + lenB` total nodes

---

## Session 3: JS - Iterators & Generators (1 hour)

### Concepts to Master

#### 1. Iterable Protocol & `Symbol.iterator` (15 min)
```javascript
// An object is iterable if it implements Symbol.iterator
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

// Works with spread, destructuring, Array.from
console.log([...range]); // [1, 2, 3, 4, 5]
```

**Key points:**
- `for...of` calls `[Symbol.iterator]()` under the hood
- Must return an object with a `next()` method
- `next()` returns `{ value, done }`

#### 2. Generator Functions with `yield` (20 min)
```javascript
// Generators simplify iterators dramatically
function* rangeGenerator(from, to) {
  for (let i = from; i <= to; i++) {
    yield i; // pauses execution here, returns value
  }
}

const gen = rangeGenerator(1, 5);
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
// ...after yielding 5:
// { value: undefined, done: true }

// Generators ARE iterables
for (const n of rangeGenerator(1, 5)) {
  console.log(n); // 1, 2, 3, 4, 5
}
```

**Infinite sequences (lazy evaluation):**
```javascript
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Take first 10 fibonacci numbers
const fib = fibonacci();
const first10 = [];
for (let i = 0; i < 10; i++) {
  first10.push(fib.next().value);
}
console.log(first10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

#### 3. `yield*` - Delegating to another generator (10 min)
```javascript
function* innerGen() {
  yield 'a';
  yield 'b';
}

function* outerGen() {
  yield 1;
  yield* innerGen(); // delegates to innerGen
  yield 2;
}

console.log([...outerGen()]); // [1, 'a', 'b', 2]
```

#### 4. Two-way Communication with Generators (15 min)
```javascript
function* conversation() {
  const name = yield "What is your name?";
  const age = yield `Hello ${name}! How old are you?`;
  return `${name} is ${age} years old.`;
}

const conv = conversation();
console.log(conv.next());        // { value: "What is your name?", done: false }
console.log(conv.next("Alice")); // { value: "Hello Alice!...", done: false }
console.log(conv.next(25));      // { value: "Alice is 25 years old.", done: true }
```

### Interview Questions to Practice
1. What is the difference between an iterator and an iterable?
2. How does `for...of` work under the hood?
3. What are generators useful for? (lazy evaluation, infinite sequences, async flow control)
4. Can you make a custom object iterable?
5. What is `yield*` used for?

---

## Session 4: OOP - Factory Pattern (30 min)

### What is Factory Pattern?
Creates objects **without specifying the exact class**. Encapsulates creation logic.

### Simple Factory (JS Implementation)
```javascript
class Car {
  constructor() { this.type = 'Car'; this.doors = 4; }
}
class Truck {
  constructor() { this.type = 'Truck'; this.doors = 2; }
}
class Motorcycle {
  constructor() { this.type = 'Motorcycle'; this.doors = 0; }
}

// Factory encapsulates creation logic
class VehicleFactory {
  static create(type) {
    switch (type) {
      case 'car': return new Car();
      case 'truck': return new Truck();
      case 'motorcycle': return new Motorcycle();
      default: throw new Error(`Unknown vehicle type: ${type}`);
    }
  }
}

// Client code is clean - doesn't know about concrete classes
const vehicle = VehicleFactory.create('car');
console.log(vehicle.type); // 'Car'
```

### When to Use Factory vs Constructor

| Use Constructor | Use Factory |
|----------------|-------------|
| Single, known type | Multiple types, decided at runtime |
| Simple creation | Complex creation logic |
| No variations needed | Different configurations |

### Interview Answer (30 seconds)
> "Factory pattern encapsulates object creation behind a common interface. Instead of the client using `new` directly, it asks the factory. This enables loose coupling - the client doesn't need to know about concrete classes, making it easy to add new types without modifying client code. Common example: a notification system where you create Email, SMS, or Push notifications through a factory based on user preference."

---

## Session 5: Revision (30 min)

### Spaced Repetition - What to Revise Today

| Revise From | What | How |
|-------------|------|-----|
| Day 6 (4 days ago) | OOP 4 Pillars definitions | Explain each aloud in 30 seconds |
| Day 6 (4 days ago) | Boyer-Moore Voting (Majority Element) | Re-read your solution, trace through example |
| Day 8 (2 days ago) | Sliding window for strings pattern | Explain when to shrink/expand window |
| Day 8 (2 days ago) | Singleton pattern | Explain implementation + drawbacks |

### Re-solve Without Hints (pick 3)
- [ ] Two Sum (LC #1) - should take < 5 min now
- [ ] Move Zeroes (LC #283) - two pointer swap
- [ ] Valid Anagram (LC #242) - frequency map

### Flashcard Review
Review your existing 30+ flashcards. Create 10 new ones today:
1. Linked list reversal template
2. Floyd's cycle detection - why fast/slow meet
3. Fast & slow pointer - find middle
4. Two pointer gap - remove nth from end
5. Merge sorted lists - dummy node trick
6. `Symbol.iterator` - what it returns
7. Generator `yield` - what it pauses
8. `yield*` - delegation
9. Factory pattern - when to use
10. Factory vs Constructor - comparison

---

## Day 10 Checklist

| Task | Status |
|------|--------|
| Solve: Reverse Linked List (LC #206) | [ ] |
| Solve: Linked List Cycle (LC #141) | [ ] |
| Solve: Merge Two Sorted Lists (LC #21) | [ ] |
| Solve: Middle of Linked List (LC #876) | [ ] |
| Solve: Remove Nth Node From End (LC #19) | [ ] |
| Solve: Intersection of Two Linked Lists (LC #160) | [ ] |
| Implement custom iterable with `Symbol.iterator` | [ ] |
| Write a generator function (fibonacci or range) | [ ] |
| Understand `yield*` delegation | [ ] |
| Implement Factory Pattern in JS | [ ] |
| Re-solve 3 old problems without hints | [ ] |
| Create 10 new flashcards | [ ] |
| Update mistake notebook | [ ] |

### By End of Day 10 You Should Be Able To:
1. Reverse a linked list (both iterative and recursive)
2. Detect a cycle using Floyd's algorithm and explain WHY it works
3. Explain slow/fast pointer technique for finding middle
4. Remove nth node from end using the gap technique
5. Find intersection of two linked lists
6. Make any object iterable using `Symbol.iterator`
7. Write and use generator functions with `yield`
8. Explain Factory pattern and when to use it vs constructors
9. Have 29 cumulative DSA problems solved

---

> **Progress Check:** After Day 10, you're 3 days into Week 2. You've covered Arrays (16 problems), Strings (7 problems), and now Linked Lists (6 problems) = **29 total**. Tomorrow: Stacks & Queues!
