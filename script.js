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

