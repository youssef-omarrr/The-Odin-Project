class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}



module.exports = Person; // Exporting the Person class
// This allows other files to import and use the Person class