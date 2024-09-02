// variables constants and comments
// variables - var, let and const
// var -> Re-declare and Re-assign
var n; // declaration
var name = "Akshat"; // intialisation
var name = "Kumar";
console.log(name);

// let -> Re-assign
let lastname = "Gupta";
lastname = "sharma";
let fullname;
console.log(fullname);
console.log(lastname);

// const -> NO-re-assign and re-declare
const PI = 3.14;
// PI = 12;
console.log(PI);
// const > let > var

// Data Types in Js
// there are 7 data types in js
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Object
// 7. Symbol

// Number
let num1 = 10.5;
let num2 = 20;
console.log(num1 + num2);
// ( ) bracket
// **,* exponentiation operator
// %, / modulus operator (left to right)
// +,- operators

let result = 4 * 3 + 50 * 2 - 10;
console.log(result);

// STRING
// string concatination
let firstName = "Mohit"; // 10
let lastName = "Jain"; // 20
let marks = 100; // "100"
console.log(firstName, lastName);

console.log(firstName + " " + lastName + +marks);

// string template literals
let name1 = "Akshat";
let age = 20;
console.log(`${name1} is ${age} years old`);

// trim method
let table = "       Wood        ";
console.log(`${name1} have ${table.trim()} table`); // akshat have wood table
// akshar have          wood         table

// IndexOf
let str = "Hello, World!";
let hobby = "Cricket,FootBall,Javelin,Swimming,swimming";
console.log(str.indexOf("swimming")); // 7

// Slice
let district = "Trivandrum";
console.log(district);
console.log(district.slice(3, 6));
console.log(district);

// split method
console.log(hobby.split(","));

// Array Object
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object

let qna = null;
let qna1 = "raj";
console.log(typeof qna); // null
console.log(typeof qna1); // string

let q = null;
q = 1;
console.log(q);

// Array Javascript : store multiple data-type in a single list []

let School = ["JPS", "PSM", "DAV", "GBSS", "KVS"];
// array methods
// 5) IndexOf : find the index of the Element in the Array
// 1) Push : add new Element from the last
let school = School.push("AIS");
console.log(school);
console.log(School);

// 2) Pop : remove the last Element from the Array
let school1 = School.pop();
console.log(school1);
console.log(School);

// Splice
const fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
console.log(fruits);

// At position 2, add "Lemon" and "Kiwi":
let f = fruits.splice(1, 2);
console.log(fruits);
console.log(f);

// 3) Shift : remove the first Element from the Array
let Schools = ["JPS", "PSM", "DAV", "GBSS", "KVS"];
let school2 = Schools.shift();
console.log(school2);
console.log(Schools);

// 4) Unshift : add new Element from the first of the Array
let Schools1 = ["JPS", "PSM", "DAV", "GBSS", "KVS"];
let school3 = Schools1.unshift("DPS");
console.log(Schools1);

// Loops
// DRY : dont repeat yourself
// For Loop
// initialisation : let = 1
// condition : i <= 10
// increment/decrement : i++ , i--

for (let i = 1; i <= 10; i++) {
  console.log("Hello Akshat", i);
}

for (let j = 0; j < fruits.length; j++) {
  console.log(fruits[j]);
}

// While Loop
// initialisation : let = 1
// condition : i <= 10
// increment/decrement : i++ , i--

let g = 1;
while (g <= 10) {
  console.log("Hello Akshat", g);
  g++;
}

// Conditional Rendering
// if else statement
// ternary operator

let family = [
  "Akshat Gupta",
  "paddu vansh",
  "Raj",
  "Monjulika",
  "Sagar Kumar",
  "Kashish",
];
for (let h = 0; h < family.length; h++) {
  if (family[h] === "Monjulika") {
    console.log("Aadha Gupta");
  } else {
    console.log(family[h]);
  }
}

let maxnum = [12, 34, 67, 112, 90, 23, -5];
// let m = maxnum.sort((a,b)=>b-a)
// console.log(m[0]);

let max = 0;
let min = 0;
for (let i = 0; i < maxnum.length; i++) {
  if (maxnum[i] > max) {
    max = maxnum[i];
  } else if (maxnum[i] < min) {
    min = maxnum[i];
  }
}
console.log(max);
console.log(min);

// switch Case
let weekDays = "sunday";
switch (weekDays) {
  case "monday":
    console.log("Morning, its monday");
    break;
  case "tuesday":
    console.log("Morning, its Tuesday");
    break;
  default:
    console.log("its not a working day");
}
let sign = prompt("What's your age..?");
// 18 -> 1000
// 30 -> 3500
// 44 -> 44000
// 50 -> 200000

// ----------------------------------------- FUNCTION ---------------------------------
// funtion : function is a block of code where i want the use of function just the call the function
// function is a reusable code

// 1) Function Declaration (normal function)
greeting("Akshat");
function greeting(name) {
  console.log(`Hello my Name is ${name}`);
}

// 2) Arrow Function
// const addtion = () => {}