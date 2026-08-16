# 🔗 Prototypes & Prototype Chain

> **Time: 1 hour** | The backbone of JavaScript's object system

---

## What is a Prototype?

Every JavaScript object has a hidden internal link to another object called its **prototype**. When you access a property that doesn't exist on the object, JavaScript looks **up the prototype chain** until it finds it (or reaches `null`).

```
myObj  →  myObj.__proto__  →  Object.prototype  →  null
```

Think of it like **inheritance in real life**: if you don't know something, you ask your parent. If they don't know, they ask *their* parent.

---

## 1. `__proto__` vs `prototype`

This is the **most confusing part** — let's clear it up:

| Term | What it is | Who has it |
|------|-----------|------------|
| `__proto__` | The actual link to parent object | **Every object** |
| `.prototype` | A property that holds the prototype for future instances | **Only functions/classes** |

```js
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hi, I'm ${this.name}`;
};

const saroj = new Person("Saroj");

// saroj.__proto__ === Person.prototype  ✅ TRUE!
// Person.__proto__ === Function.prototype  ✅ TRUE!
// Person.prototype.__proto__ === Object.prototype  ✅ TRUE!
```

### The Chain Visualized

```
saroj (instance)
  │
  ├── name: "Saroj"           (own property)
  │
  └── __proto__ ──→ Person.prototype
                      │
                      ├── greet: function()   (shared method)
                      │
                      └── __proto__ ──→ Object.prototype
                                          │
                                          ├── toString()
                                          ├── hasOwnProperty()
                                          │
                                          └── __proto__ ──→ null  (end of chain)
```

---

## 2. Property Lookup (How JS Finds Properties)

When you do `saroj.greet()`, JavaScript:

1. Looks on `saroj` itself → ❌ no `greet` here
2. Looks on `saroj.__proto__` (= `Person.prototype`) → ✅ found `greet`!
3. If not found, continues up to `Object.prototype`
4. If still not found → `undefined`

```js
// Own property
console.log(saroj.name);          // "Saroj" (found on saroj itself)

// Inherited from Person.prototype
console.log(saroj.greet());       // "Hi, I'm Saroj"

// Inherited from Object.prototype
console.log(saroj.toString());    // "[object Object]"

// Not found anywhere
console.log(saroj.fly);           // undefined
```

### Check if property is OWN or INHERITED

```js
saroj.hasOwnProperty('name');     // true  (own)
saroj.hasOwnProperty('greet');    // false (inherited)
```

---

## 3. `Object.create()` — Create Object with Specific Prototype

```js
const animal = {
    type: "Animal",
    speak() {
        return `${this.name} is a ${this.type}`;
    }
};

// Create dog with animal as its prototype
const dog = Object.create(animal);
dog.name = "Rex";
dog.type = "Dog";

console.log(dog.speak());  // "Rex is a Dog"
// speak() is found on animal (the prototype)

// Verify the chain
console.log(Object.getPrototypeOf(dog) === animal);  // true
```

### `Object.create(null)` — No Prototype!

```js
const bare = Object.create(null);
bare.key = "value";

console.log(bare.toString);  // undefined! (no Object.prototype)
// Useful for creating pure dictionary objects (no inherited methods)
```

---

## 4. ES6 Classes = Syntactic Sugar Over Prototypes

Classes look different but work **exactly the same** under the hood:

### Constructor Function (Old Way)

```js
function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;
}

Car.prototype.drive = function() {
    return `${this.brand} going ${this.speed}km/h`;
};

// Inheritance
function ElectricCar(brand, speed, battery) {
    Car.call(this, brand, speed);  // super()
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function() {
    return `Charging ${this.battery}kWh battery`;
};
```

### ES6 Class (New Way — Same Thing!)

```js
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    
    drive() {
        return `${this.brand} going ${this.speed}km/h`;
    }
}

class ElectricCar extends Car {
    constructor(brand, speed, battery) {
        super(brand, speed);  // = Car.call(this, brand, speed)
        this.battery = battery;
    }
    
    charge() {
        return `Charging ${this.battery}kWh battery`;
    }
}

const tesla = new ElectricCar("Tesla", 200, 100);
console.log(tesla.drive());    // "Tesla going 200km/h"  (inherited)
console.log(tesla.charge());   // "Charging 100kWh battery"  (own)
```

### Proof that class = prototype sugar

```js
console.log(typeof Car);  // "function" — classes ARE functions!
console.log(tesla.__proto__ === ElectricCar.prototype);  // true
console.log(ElectricCar.prototype.__proto__ === Car.prototype);  // true
```

---

## 5. Key Methods to Know

| Method | What it does |
|--------|-------------|
| `Object.create(proto)` | Creates object with `proto` as prototype |
| `Object.getPrototypeOf(obj)` | Returns `obj.__proto__` (preferred over `__proto__`) |
| `Object.setPrototypeOf(obj, proto)` | Sets prototype (don't use — slow!) |
| `obj.hasOwnProperty(key)` | Is `key` directly on `obj` (not inherited)? |
| `key in obj` | Is `key` on `obj` OR anywhere in chain? |
| `obj instanceof Constructor` | Is `Constructor.prototype` in `obj`'s chain? |

---

## 🧠 Interview Prediction Exercises

### Exercise 1: What prints?

```js
function Foo() {}
Foo.prototype.x = 10;

const a = new Foo();
const b = new Foo();

a.x = 20;

console.log(a.x);  // ???
console.log(b.x);  // ???
```

<details>
<summary>Click for Answer</summary>

- `a.x` → **20** (own property shadows prototype)
- `b.x` → **10** (inherited from Foo.prototype)

Setting `a.x = 20` creates an **own property** on `a`. It does NOT modify the prototype. So `b` still sees the prototype's `x`.

</details>

### Exercise 2: What prints?

```js
function Animal() {}
Animal.prototype.legs = 4;

const cat = new Animal();
console.log(cat.legs);           // ???

Animal.prototype.legs = 0;
console.log(cat.legs);           // ???

Animal.prototype = { legs: 8 };
console.log(cat.legs);           // ???
```

<details>
<summary>Click for Answer</summary>

- First: **4** (inherited)
- Second: **0** (prototype was mutated, cat still points to same object)
- Third: **0** (prototype was REPLACED, but cat still points to the OLD prototype object!)

Replacing `.prototype` doesn't affect existing instances — they keep their old `__proto__` link.

</details>

### Exercise 3: What prints?

```js
console.log([] instanceof Array);    // ???
console.log([] instanceof Object);   // ???
console.log({} instanceof Array);    // ???
```

<details>
<summary>Click for Answer</summary>

- `[] instanceof Array` → **true** (`Array.prototype` is in chain)
- `[] instanceof Object` → **true** (`Object.prototype` is also in chain)
- `{} instanceof Array` → **false** (`Array.prototype` is NOT in `{}`'s chain)

</details>

---

## 📝 Interview Answer

> **Q: "What is the prototype chain in JavaScript?"**
>
> "Every object in JavaScript has an internal link to another object called its prototype. When you access a property, JavaScript first checks the object itself, then walks up the prototype chain until it finds the property or reaches null. This is how JavaScript implements inheritance. ES6 classes are syntactic sugar over this prototype-based system — under the hood, they work the same way using constructor functions and `.prototype`."
