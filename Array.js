// Arrays - Javascript
// What is an array 
// :Array is a collection of items 
// : Array can hold multiple values
// :Most used data structure
// :In build support in almost all programming language
// ishaka ka kya matlab hai Agar hume ek se jyada chizo ko rakhne ke liye Array ka Ishatemal karte hai
// Array example - string
// 1 name: "Ashish"
let myName = "Abhiram";
console.log(myName);

// 50 names:
// "Ashish", "Ram", "Shyam"...
// Array of string 
let myNamesArray = ["Alok","Ayush","Ayu"];
console.log(myNamesArray);

// Array example - numbers
// 1 Math Score:90 number
// 50 Math Scores:
// 90,45,56,67
// Array of number
// Practical example of array
let mathScore = 90;
console.log(mathScore);

let mathScores = [90,45,56,67];
console.log(mathScores);

// Array example -object
// 1 student: {name:"Abhishek", Class:"20",age:"30"}
// object
// 100 students:
// Array of object
// Practical Example

let firststudent = {name:"Abhishek",class:"20",age:"30"};
console.log(firststudent);

let students = [{name:"Alok",city:"Kashi",country:"India"},{name:"Ankita",city:"Ballia",village:"Bhojpur"},];
console.log(students);


// How to create/initialize an array
// 1. Using Square Brackets:[]
// 2. Using the Array Constructor: new Array()
// 3. Using Array Fill
// 4. Using Array .of
// 5. Using Array .from
// 6. Sparse Array: Array with empty Slots
// 7. Using Spread Operator(...)

let arrayConstructor1 = new Array();
arrayConstructor1[0] = 2;
arrayConstructor1[1] = 3;
console.log(arrayConstructor1);

let arrayConstructor2 = new Array("Ram", "Shyam");
console.log(arrayConstructor2);

let filledArray = new Array(10).fill(0);
console.log(filledArray);

let ofArray = Array.of("of","Ram","Shyam");
console.log(ofArray);

let fromArray = Array.from("Namaste");
console.log(fromArray);

let sparseArray = [5, ,  , 9];
console.log(sparseArray);
sparseArray[1] = 18;
console.log(sparseArray);

let ofArrayPlus = ["plus",...ofArray];
console.log(ofArrayPlus);

// Array type
// Array in JS can keep different data types in one array 
// Arrays in JS are dynamic - example
// Arrays in typescript can be made strongly typed
let dynamicArray = [12,"Aahan",{name:"aahan"}];
console.log(dynamicArray);

// How to access array elements
// Indexes in array start from zero
// Using Bracket Notation[]
// Using Destructuring Assignment
console.log(dynamicArray[0]);

let fruits = ["mango","banana","apple"];
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
console.log(fruit1,fruit2,fruit3);

let [fruit11,fruit22,fruit33] = fruits;
console.log (fruit11,fruit22,fruit33);