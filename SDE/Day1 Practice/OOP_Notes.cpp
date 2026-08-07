/*
 * ════════════════════════════════════════════════════════════
 *   OOP in C++ — Complete Notes with Examples
 *   Topics: Classes, Objects, Constructors, Destructors,
 *           Access Modifiers, Basic Inheritance
 * ════════════════════════════════════════════════════════════
 */

#include <iostream>
#include <string>
using namespace std;

/*
 * ════════════════════════════════════════════════════════════
 *  1. CLASSES & OBJECTS
 * ════════════════════════════════════════════════════════════
 *
 *  CLASS  = A blueprint/template that defines properties (data)
 *           and behaviors (functions) of something.
 *           Think of it as a "cookie cutter" — it defines the shape.
 *
 *  OBJECT = An actual instance created from the class.
 *           Think of it as the "cookie" made from the cutter.
 *
 *  Real-world analogy:
 *    Class  = "Car" (the concept — has color, speed, brand)
 *    Object = "My red Toyota" (a specific car that exists)
 */

// ──── Defining a Class ────
class Student {
    // Properties (also called: data members, attributes, fields)
    string name;
    int age;
    float gpa;

    // Behaviors (also called: member functions, methods)
    void study() {
        cout << name << " is studying!" << endl;
    }
};

// ──── Creating Objects ────
void demo_class_object() {
    cout << "═══ 1. CLASSES & OBJECTS ═══\n";

    // Student s1;          // This won't fully work yet because
    // s1.name = "Saroj";   // members are PRIVATE by default!
    // We'll fix this with access modifiers below.

    cout << "A class is a blueprint. An object is a real instance.\n";
    cout << "class Student { ... };  // Blueprint\n";
    cout << "Student s1;             // Object (instance)\n\n";
}


/*
 * ════════════════════════════════════════════════════════════
 *  2. ACCESS MODIFIERS — public, private, protected
 * ════════════════════════════════════════════════════════════
 *
 *  They control WHO can access the members of a class.
 *
 *  ┌─────────────┬──────────┬────────────┬──────────────────┐
 *  │  Modifier   │ In Class │ In Child   │ Outside (main)   │
 *  ├─────────────┼──────────┼────────────┼──────────────────┤
 *  │ public      │   ✅     │    ✅      │     ✅           │
 *  │ private     │   ✅     │    ❌      │     ❌           │
 *  │ protected   │   ✅     │    ✅      │     ❌           │
 *  └─────────────┴──────────┴────────────┴──────────────────┘
 *
 *  DEFAULT in class: private
 *  DEFAULT in struct: public
 *
 *  WHY use private? → ENCAPSULATION (data hiding)
 *    You don't want anyone to directly change your bank balance!
 *    They should go through deposit() and withdraw() methods.
 */

class BankAccount {
private:    // ❌ Cannot access from outside the class
    double balance;
    string accountNumber;

protected:  // ❌ Outside can't access, but ✅ child classes CAN
    string bankName;

public:     // ✅ Anyone can access
    string ownerName;

    // Public methods to safely access private data (getters/setters)
    void setBalance(double amt) {
        if (amt >= 0) {           // Validation! This is WHY we use private
            balance = amt;
        } else {
            cout << "❌ Balance can't be negative!\n";
        }
    }

    double getBalance() {
        return balance;
    }

    void deposit(double amt) {
        if (amt > 0) {
            balance += amt;
            cout << "✅ Deposited " << amt << ". New balance: " << balance << endl;
        }
    }

    void withdraw(double amt) {
        if (amt > 0 && amt <= balance) {
            balance -= amt;
            cout << "✅ Withdrew " << amt << ". New balance: " << balance << endl;
        } else {
            cout << "❌ Insufficient funds!\n";
        }
    }

    void display() {
        cout << "Owner: " << ownerName << ", Balance: Rs." << balance << endl;
    }
};

void demo_access_modifiers() {
    cout << "═══ 2. ACCESS MODIFIERS ═══\n";

    BankAccount acc;
    acc.ownerName = "Saroj";      // ✅ OK — public member

    // acc.balance = 10000;       // ❌ ERROR! balance is private
    // acc.bankName = "SBI";      // ❌ ERROR! bankName is protected

    acc.setBalance(10000);        // ✅ OK — using public method to set private data
    acc.display();
    acc.deposit(5000);
    acc.withdraw(3000);
    acc.setBalance(-500);         // Blocked by validation!
    cout << endl;
}


/*
 * ════════════════════════════════════════════════════════════
 *  3. CONSTRUCTORS
 * ════════════════════════════════════════════════════════════
 *
 *  A constructor is a SPECIAL function that runs AUTOMATICALLY
 *  when you create an object. Used to initialize values.
 *
 *  Rules:
 *    1. Same name as the class
 *    2. No return type (not even void)
 *    3. Called automatically — you don't call it manually
 *    4. Can be overloaded (multiple constructors)
 *
 *  Types:
 *    1. Default Constructor    — no parameters
 *    2. Parameterized Constructor — takes parameters
 *    3. Copy Constructor       — copies from another object
 */

class Car {
private:
    string brand;
    string color;
    int year;
    double price;

public:
    // ──── (a) Default Constructor ────
    // Called when: Car c1;
    Car() {
        brand = "Unknown";
        color = "White";
        year = 2024;
        price = 0;
        cout << "🔨 Default Constructor called! (no arguments)\n";
    }

    // ──── (b) Parameterized Constructor ────
    // Called when: Car c2("Toyota", "Red", 2025, 1500000);
    Car(string b, string c, int y, double p) {
        brand = b;
        color = c;
        year = y;
        price = p;
        cout << "🔨 Parameterized Constructor called! (" << brand << ")\n";
    }

    // ──── (c) Copy Constructor ────
    // Called when: Car c3 = c2;  or  Car c3(c2);
    Car(const Car &other) {
        brand = other.brand;
        color = other.color;
        year = other.year;
        price = other.price;
        cout << "🔨 Copy Constructor called! (copied " << brand << ")\n";
    }

    void display() {
        cout << "  " << year << " " << color << " " << brand
             << " — Rs." << price << endl;
    }

    // Getter for use in later examples
    string getBrand() { return brand; }
};

void demo_constructors() {
    cout << "═══ 3. CONSTRUCTORS ═══\n";

    Car c1;                                        // Default
    c1.display();

    Car c2("Toyota", "Red", 2025, 1500000);        // Parameterized
    c2.display();

    Car c3 = c2;                                   // Copy
    c3.display();

    cout << endl;
}


/*
 * ════════════════════════════════════════════════════════════
 *  4. DESTRUCTORS
 * ════════════════════════════════════════════════════════════
 *
 *  A destructor runs AUTOMATICALLY when an object is destroyed
 *  (goes out of scope or is deleted). Used for cleanup.
 *
 *  Rules:
 *    1. Same name as class, prefixed with ~ (tilde)
 *    2. No parameters, no return type
 *    3. Only ONE destructor per class (cannot overload)
 *    4. Called automatically — you rarely call it manually
 *
 *  WHY? → Free memory, close files, release resources.
 */

class FileHandler {
private:
    string filename;
    bool isOpen;

public:
    // Constructor — open the file
    FileHandler(string fname) {
        filename = fname;
        isOpen = true;
        cout << "📂 Constructor: Opened file '" << filename << "'\n";
    }

    void write(string data) {
        if (isOpen)
            cout << "  ✍️  Writing to '" << filename << "': " << data << endl;
    }

    // Destructor — cleanup when object is destroyed
    ~FileHandler() {
        if (isOpen) {
            isOpen = false;
            cout << "🗑️  Destructor: Closed file '" << filename << "' (cleanup done)\n";
        }
    }
};

void demo_destructors() {
    cout << "═══ 4. DESTRUCTORS ═══\n";

    {   // ← This creates a SCOPE
        FileHandler f1("notes.txt");
        f1.write("Hello World!");
        f1.write("OOP is fun!");

        FileHandler f2("data.csv");
        f2.write("1,2,3,4,5");

        cout << "--- About to leave scope, destructors will fire ---\n";
    }   // ← f1 and f2 are destroyed HERE (in reverse order!)

    cout << "Both files were automatically closed!\n\n";
}


/*
 * ════════════════════════════════════════════════════════════
 *  5. BASIC INHERITANCE
 * ════════════════════════════════════════════════════════════
 *
 *  Inheritance = Creating a NEW class from an EXISTING class.
 *  The new class (child) gets all features of the parent,
 *  and can add its own.
 *
 *  Parent class = Base class = Super class
 *  Child class  = Derived class = Sub class
 *
 *  Syntax: class Child : access_modifier Parent { ... };
 *
 *  WHY? → Code reuse! Don't repeat common features.
 *
 *  Real-world analogy:
 *    Animal (parent) → has name, age, eat(), sleep()
 *    Dog (child)     → inherits all of Animal + has bark()
 *    Cat (child)     → inherits all of Animal + has meow()
 *
 *  Inheritance Access Rules:
 *  ┌────────────────┬──────────────────────────────────────┐
 *  │ Inheritance    │ What happens to parent's members     │
 *  │ Type           │ in the child class?                  │
 *  ├────────────────┼──────────────────────────────────────┤
 *  │ public         │ public→public, protected→protected   │
 *  │ protected      │ public→protected, protected→protected│
 *  │ private        │ Everything becomes private            │
 *  └────────────────┴──────────────────────────────────────┘
 *  NOTE: Parent's PRIVATE members are NEVER accessible in child.
 *        (That's why we use protected — accessible in child but not outside)
 */

// ──── Parent (Base) Class ────
class Animal {
private:
    int id;              // Private — ONLY Animal can access this

protected:
    string species;      // Protected — Animal AND children can access

public:
    string name;
    int age;

    Animal() : id(0), species("Unknown"), name("No name"), age(0) {
        cout << "  🐾 Animal constructor\n";
    }

    Animal(string n, int a, string sp) : id(101), name(n), age(a), species(sp) {
        cout << "  🐾 Animal constructor (" << name << ")\n";
    }

    void eat() {
        cout << "  " << name << " is eating 🍖\n";
    }

    void sleep() {
        cout << "  " << name << " is sleeping 💤\n";
    }

    void display() {
        cout << "  Name: " << name << ", Age: " << age
             << ", Species: " << species << endl;
    }

    ~Animal() {
        cout << "  🐾 Animal destructor (" << name << ")\n";
    }
};

// ──── Child (Derived) Class: Dog ────
class Dog : public Animal {    // 'public' inheritance — most common
public:

    string breed;

    Dog(string n, int a, string b)
        : Animal(n, a, "Canine")    // Call parent constructor FIRST
    {
        breed = b;
        cout << "  🐶 Dog constructor (" << name << ")\n";
    }

    // Dog's OWN method (not in Animal)
    void bark() {
        cout << "  " << name << " says: WOOF WOOF! 🐕\n";
    }

    void fetch() {
        cout << "  " << name << " fetches the ball! 🎾\n";
    }

    void showDetails() {
        // name, age → accessible (public in parent, stays public)
        // species   → accessible (protected in parent, stays protected)
        // id        → ❌ NOT accessible (private in parent)

        cout << "  Dog: " << name << ", Breed: " << breed
             << ", Species: " << species << ", Age: " << age << endl;
    }

    ~Dog() {
        cout << "  🐶 Dog destructor (" << name << ")\n";
    }
};

// ──── Child (Derived) Class: Cat ────
class Cat : public Animal {
public:
    bool isIndoor;

    Cat(string n, int a, bool indoor)
        : Animal(n, a, "Feline")
    {
        isIndoor = indoor;
        cout << "  🐱 Cat constructor (" << name << ")\n";
    }

    void meow() {
        cout << "  " << name << " says: MEOW! 🐈\n";
    }

    void showDetails() {
        cout << "  Cat: " << name << ", Indoor: "
             << (isIndoor ? "Yes" : "No")
             << ", Species: " << species << endl;
    }

    ~Cat() {
        cout << "  🐱 Cat destructor (" << name << ")\n";
    }
};

void demo_inheritance() {
    cout << "═══ 5. BASIC INHERITANCE ═══\n";

    cout << "\n--- Creating a Dog ---\n";
    Dog d1("Bruno", 3, "German Shepherd");
    d1.showDetails();
    d1.eat();       // Inherited from Animal!
    d1.sleep();     // Inherited from Animal!
    d1.bark();      // Dog's own method
    d1.fetch();     // Dog's own method

    cout << "\n--- Creating a Cat ---\n";
    Cat c1("Whiskers", 2, true);
    c1.showDetails();
    c1.eat();       // Inherited from Animal!
    c1.meow();      // Cat's own method

    cout << "\n--- Constructor/Destructor Order ---\n";
    cout << "Construction: Parent FIRST, then Child\n";
    cout << "Destruction:  Child FIRST, then Parent (reverse!)\n";

    cout << "\n--- Objects going out of scope ---\n";
}


/*
 * ════════════════════════════════════════════════════════════
 *  6. PUTTING IT ALL TOGETHER — A Complete Example
 * ════════════════════════════════════════════════════════════
 */

class Employee {
private:
    double salary;

protected:
    string department;

public:
    string name;
    int empId;

    Employee(string n, int id, string dept, double sal)
        : name(n), empId(id), department(dept), salary(sal) {
        cout << "  👤 Employee created: " << name << endl;
    }

    double getSalary() { return salary; }
    void setSalary(double s) {
        if (s > 0) salary = s;
    }

    void showInfo() {
        cout << "  [" << empId << "] " << name
             << " | Dept: " << department
             << " | Salary: Rs." << salary << endl;
    }

    ~Employee() {
        cout << "  👤 Employee destroyed: " << name << endl;
    }
};

class Manager : public Employee {
private:
    int teamSize;

public:
    Manager(string n, int id, double sal, int team)
        : Employee(n, id, "Management", sal), teamSize(team) {
        cout << "  👔 Manager created: " << name << endl;
    }

    void showInfo() {
        Employee::showInfo();   // Call parent's method
        cout << "    → Team size: " << teamSize << " people\n";
    }

    ~Manager() {
        cout << "  👔 Manager destroyed: " << name << endl;
    }
};

class Developer : public Employee {
private:
    string language;

public:
    Developer(string n, int id, double sal, string lang)
        : Employee(n, id, "Engineering", sal), language(lang) {
        cout << "  💻 Developer created: " << name << endl;
    }

    void showInfo() {
        Employee::showInfo();
        cout << "    → Primary language: " << language << endl;
    }

    void code() {
        cout << "  " << name << " is coding in " << language << "! ⌨️\n";
    }

    ~Developer() {
        cout << "  💻 Developer destroyed: " << name << endl;
    }
};

void demo_complete() {
    cout << "\n═══ 6. COMPLETE EXAMPLE — Employee System ═══\n\n";

    Manager m("Rahul", 101, 120000, 8);
    m.showInfo();

    cout << endl;

    Developer d("Saroj", 102, 90000, "C++");
    d.showInfo();
    d.code();

    cout << "\n--- Destructors fire in reverse ---\n";
}


/*
 * ════════════════════════════════════════════════════════════
 *  QUICK REFERENCE SUMMARY
 * ════════════════════════════════════════════════════════════
 */
void printSummary() {
    cout << "╔════════════════════════════════════════════════════════════╗\n";
    cout << "║             OOP CONCEPTS — QUICK REFERENCE               ║\n";
    cout << "╠════════════════════════════════════════════════════════════╣\n";
    cout << "║ CLASS       = Blueprint/template for objects              ║\n";
    cout << "║ OBJECT      = Instance of a class (real thing)           ║\n";
    cout << "║ CONSTRUCTOR = Auto-called when object is CREATED         ║\n";
    cout << "║ DESTRUCTOR  = Auto-called when object is DESTROYED       ║\n";
    cout << "║ public      = Accessible everywhere                      ║\n";
    cout << "║ private     = Accessible only inside the class           ║\n";
    cout << "║ protected   = Inside class + child classes               ║\n";
    cout << "║ INHERITANCE = Child class gets parent's features         ║\n";
    cout << "╠════════════════════════════════════════════════════════════╣\n";
    cout << "║ Constructor order: Parent first → Child                  ║\n";
    cout << "║ Destructor order:  Child first → Parent (reverse!)       ║\n";
    cout << "╚════════════════════════════════════════════════════════════╝\n\n";
}


// ════════════════════════════════════════════════════════════
//  MAIN
// ════════════════════════════════════════════════════════════
int main() {
    printSummary();

    demo_class_object();
    demo_access_modifiers();
    demo_constructors();
    demo_destructors();
    demo_inheritance();
    demo_complete();

    return 0;
}
