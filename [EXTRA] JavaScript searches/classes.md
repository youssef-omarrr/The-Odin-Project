## Summary

JavaScript classes provide a syntactic sugar over the existing prototype-based inheritance, offering a more familiar and concise way to create objects and handle inheritance. Introduced in ECMAScript 2015, classes support constructors, instance and static methods, public and private fields, and inheritance through the `extends` keyword.&#x20;

---

## 1. Class Declaration and Expression

* **Class Declaration**: Defines a class with a given name.

  ```javascript
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  ```

* **Class Expression**: Defines a class as part of an expression, which can be anonymous or named.

  ```javascript
  const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  ```

  Note: Class expressions can be named, but the name is only accessible within the class body.&#x20;

---

## 2. Constructor Method

* The `constructor` method is a special method for creating and initializing an object created with a class.

  ```javascript
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  ```

  Each class can have only one constructor method. Attempting to write more than one will result in a SyntaxError.&#x20;

---

## 3. Instance Methods

* Methods defined within the class body are added to the prototype and are shared among all instances.

  ```javascript
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  ```

  Instance methods are not enumerable.&#x20;

---

## 4. Static Methods and Fields

* **Static Methods**: Defined using the `static` keyword, they are called **on the class itself**, not instances.

  ```javascript
  class MathHelper {
    static add(a, b) {
      return a + b;
    }
  }

  let x = MathHelper(2,3)

  MathHelper.add(2, 3); // 5
  x.add(2, 3);          // undefined
  ```

* **Static Fields**: Also defined with the `static` keyword.

  ```javascript
  class MyClass {
    static staticField = 'static value';
  }

  let x = MyClass
  console.log(MyClass.staticField); // 'static value'
  console.log(x.staticField); // undefined
  ```

  Static methods and fields are not accessible on instances of the class.&#x20;

---

## 5. Public and Private Fields

* **Public Fields**: Declared directly within the class body.

  ```javascript
  class Rectangle {
    height = 0;
    width;
  }
  ```

* **Private Fields**: Declared using a `#` prefix and are only accessible within the class body.

  ```javascript
  class Rectangle {
    #height = 0;
    #width;

    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }

    getArea() {
      return this.#height * this.#width;
    }
  }
  ```

  Private fields cannot be accessed or modified outside of the class body.&#x20;

---

## 6. Inheritance with `extends` and `super`

* Classes can extend other classes using the `extends` keyword.

  ```javascript
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  const d = new Dog('Mitzie');
  d.speak(); // Mitzie barks.
  ```

* The `super` keyword is used to call the constructor and methods of the parent class.

  ```javascript
  class Dog extends Animal {
    constructor(name) {
      super(name); // calls the parent constructor
    }
  }
  ```

  Subclasses must call `super()` before using `this` in their constructors.&#x20;

---

## 7. Accessors: Getters and Setters

* Getters and setters can be defined to control access to properties.

  ```javascript
  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    set name(newName) {
      this._name = newName;
    }
  }

  const person = new Person('Alice');
  console.log(person.name); // Alice
  person.name = 'Bob';
  console.log(person.name); // Bob
  ```

  Accessors are defined within the class body and can be used to encapsulate the internal representation of a property.&#x20;

---

## 8. Class Hoisting and Scope

* Class declarations are not hoisted, meaning they must be defined before they are used.

  ```javascript
  const p = new Rectangle(); // ReferenceError
  class Rectangle {}
  ```

* Classes are block-scoped, similar to variables declared with `let` and `const`.&#x20;

---

## 9. Strict Mode

* The body of a class is executed in strict mode, which means that certain actions (like assigning to undeclared variables) will throw errors.&#x20;

---

## 10. Summary of Key Points

* Classes provide a clearer and more concise syntax for creating objects and handling inheritance.
* They support constructors, instance methods, static methods and fields, public and private fields, and inheritance.
* Private fields and methods are declared with a `#` prefix and are truly private.
* Classes are not hoisted and are block-scoped.
* The class body is executed in strict mode.

---

These notes should serve as a quick reference for understanding and using classes in JavaScript. For more detailed information and examples, refer to the MDN documentation on [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
