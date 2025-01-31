// selects the #container div
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);



// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
display = controls.previousElementSibling;


// // Query selectors
element.querySelector(selector);
// returns a reference to the first match of selector.
element.querySelectorAll(selectors);
// returns a “NodeList” containing references to all of the matches of the selectors.

// a NodeList IS NOT an array, it acts like one but is not one.
// If problems arise, convert the NodeList into an array. You can do this with "Array.from()"

// Element creation
const div = document.createElement("div");

// This function does NOT put your new element into the DOM - it creates it in memory.
//  This is so that you can manipulate the element before placing it on the page.

// You can place the element into the DOM with one of the following methods.

// //Append elements
parentNode.appendChild(childNode);
// appends childNode as the last child of parentNode.
parentNode.insertBefore(newNode, referenceNode);
// inserts newNode into parentNode before referenceNode.

// // Remove elements
parentNode.removeChild(child);
// removes child from parentNode on the DOM and returns a reference to child.


// Altering elements
div.style.color = "blue";
div.style.cssText = "color: blue; background: white";
div.setAttribute("style", "color: blue; background: white;");

// Dealing with kebab case
// equivalent to: div.style.background - color
div.style.background - color;
// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;
// bracket notation with kebab-case: also works
div.style["background-color"];
// bracket notation with camelCase: also works
div.style["backgroundColor"];


// Editing attributes
// if id exists, update it to 'THEMOON', else create an id with value "THEMOON"
div.setAttribute("id", "THEMOON");
// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");
// removes specified attribute
div.removeAttribute("id");


// Working with classes
// adds class "new" to your new div
div.classList.add("new");
// removes "new" class from div
div.classList.remove("new");
// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");
// It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS.


// Adding text content
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

// Adding HTML content
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

// !!!Note that using textContent is preferred over innerHTML for adding text, 
// as innerHTML should be used sparingly to avoid potential security risks.




// RECAP of steps

// <!-- your HTML file: -->
// <body>
//   <h1>THE TITLE OF YOUR WEBPAGE</h1>
//   <div id="container2"></div>
// </body>

const container2 = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// In the JavaScript file, 
// 1) we get a reference to the container div that already exists in our HTML. 
// 2) Then we create a new div and store it in the variable content. 
// 3) We add a class and some text to the content div.
// 4) finally append that div to container. 

// After the JavaScript code is run, our DOM tree will look like this:
// <!-- The DOM -->
// <body>
//   <h1>THE TITLE OF YOUR WEBPAGE</h1>
//   <div id="container">
//     <div class="content">This is the glorious text-content!</div>
//   </div>
// </body>

// !!!!Keep in mind that the JavaScript does not alter your HTML, 
// but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.


// EVENTS
// Method 1 (at HTML file)
<button onclick="alert('Hello World')">Click Me</button>;

// Method 2
// <!-- the HTML file -->
<button id="btn">Click Me</button>;

// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
// => is just "return"

// Method 3
// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
});


// METHOD 2 and 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);

// The e parameter in that callback function contains an object that references the event itself. 
btn.addEventListener("click", function (e) {
    console.log(e);
});


<div id="container">
    <button id="one">Click Me</button>
    <button id="two">Click Me</button>
    <button id="three">Click Me</button>
</div>;


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});




// Objects (they are just structs/dicts) (called by refernce like pointers)
let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

// get property values of the object:
alert(user.name); // John
alert(user.age); // 30

// To remove a property, we can use the delete operator:
delete user.age;

user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};

// set (USE SQUARE BRACKETS)
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];


// Computed properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"


// Property existence test, “in” operator
let user = {};
alert(user.noSuchProperty === undefined); // true means "no such property"

let user = { name: "John", age: 30 };
alert("age" in user); // true, user.age exists
alert("blabla" in user); // false, user.blabla doesn't exist

// for in
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    alert(key);  // name, age, isAdmin
    // values for the keys
    alert(user[key]); // John, 30, true
}


// Map
function addOne(num) {
    return num + 1;
}
const arr = [1, 2, 3, 4, 5];
//  Instead of making a for loop and iterating over the above array, 
// we could use our map array method instead, which automatically iterates over an array for us.
const mappedArr = arr.map(addOne);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

// The filter method
// filter is somewhat similar to map. 
// It still iterates through the array and applies the callback function on every item. 
// However, instead of transforming the values in the array, it returns the original values of the array,
// but only IF the callback function returns true. 

// Let’s say we had a function, isOdd that returns either true if a number is odd or false if it isn’t.
function isOdd(num) {
    return num % 2 !== 0;
}
const arr2 = [1, 2, 3, 4, 5];
const oddNums = arr2.filter(isOdd);
console.log(oddNums); // Outputs [1, 3, 5];
console.log(arr2); // Outputs [1, 2, 3, 4, 5], original array is not affected

// The reduce method
const arr3 = [1, 2, 3, 4, 5];

const productOfAllNums = arr3.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
// Pass in a callback function, which is (total, currentItem) => total * currentItem.
// Initialize total to 1 in the second argument.

console.log(productOfAllNums); // Outputs 120;
console.log(arr3); // Outputs [1, 2, 3, 4, 5]

// So what .reduce() will do, is it will once again go through every element
//  in arr and apply the callback function to it. It then changes total,
// without actually changing the array itself. After it’s done, it returns total.


function sumOfTripledEvens(array) {
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((acc, curr) => acc + curr);
}



