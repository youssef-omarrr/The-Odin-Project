// Declared just like C
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// To string return al elements in the array as a string seperated by commas
fruits.toString();
// Result -> Banana,Orange,Apple,Mango
console.log("\n~using toString()");
console.log(fruits.toString());

const cars = [1, 4, 3, 2, 40, 6];
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

console.log("\n~using .length, sort()");
console.log(cars.length);
console.log(cars.sort());

console.log("\n~Looping through array");
// Using .foreach() to loop through our array
const array = [1, 2, 3, 4, 5];

console.log("Using function()");
array.forEach(function(element, index) {
  console.log(`Element at index ${index}: ${element}`);
});

// Or we can use the arrow version
console.log("Using =>");
array.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
  });

// Using .push to add elements
console.log("\n~Adding elements to an array");
fruits.push("Lemon");
console.log(fruits);

// Reversing a string in one step
const str = "Hello, World!";
const reversedStr = str.split('').reverse().join('');

/*
split(''): Splits the string into an array of characters.
reverse(): Reverses the array.
join(''): Joins the array elements back into a string.
 */