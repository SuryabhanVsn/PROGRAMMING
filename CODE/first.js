//Arithmetic operators
/* let a = 5;
let b = 2;

console.log("a =",a, "b =",b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); */



//Unary Operator
/* let a = 5;
let b = 2;

console.log("a =",a, "b =",b);
a++; //Post Operators
b--; //Pre Operators
console.log("a = ", a);
console.log("b = ", b); */


//Assignment Operators
/* let a = 5;
let b = 2;

console.log("a =",a, "b =",b);
a+=4; // a = a + 4;
console.log("a = ", a); */

//Comparison Operators
/* let a = 5;
let b = 2;
let c = 5;
let d = "2"
let e = 6;

console.log("a =",a, "b =",b);
console.log("5 == 2", a == b); //False
console.log("5 == 5", a == c); //True
console.log("5 != 2", a != b); //True
console.log("num !== str", b !== d); //True
console.log("num === str", b === d); //False
console.log("5 > 2", a > b); //True
console.log("2 < 5", b < a); //True
console.log("5 >= 6", a >= e); //False
console.log("6 >= 5", e >= a); //True */

//Logical Operators
/* let a = 6;
let b = 5;
let c = 4;
let d = 7;
let e = 2;

console.log("a =",a, ",", "b =",b, ",", "c =",4, ",", "d =",7, ",", "e =",6);
let con1 = a > c; //True
let con2 = a == 6; //True
let con3 = c > a; //False
console.log("con1 && con2 = ", con1 && con2); //True
console.log("con1 || con3 = ", con1 || con3); //True PIPE(||)
console.log("!(a < b)= ", !(a<b)); //True  */

//Conditional Statements
/* let age = 18;
let mode = "light"; 
let color;
let a = 5;
let fruit = "blue"; */

/* if(age >= 18){
    console.log("You can vote");
}

if(age < 18){
    console.log("You cannot vote");
} */

/* if(mode === "dark"){
    color = "black";
}else{
    color = "white";
}

console.log(color); */

/* if(a % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
} */


//Syntax -> Rules

/* if(fruit === "Apple") {
    color = "Red"; 
} else if(fruit === "Orange") {
    color = "orange"; 
} else {
    console.log("Not a fruit");
}

console.log(color);
 */


//Ternary Operators

/* let age = 25;
// age >= 18 ? console.log("adult") : console.log("not adult");
let result = age >= 18 ? "adult" : "not adult"; 
console.log(result);
 */

// Question -> 1

/* let num = prompt("Enter a number");
if(num % 5 === 0){
    console.log(num ,"is Multiple of five");
} else {
    console.log(num ," is Not multiple of five");
} */

// Question -> 2
let marks = prompt("Enter your grade(0-10)");
let grade;

if(marks >= 80 && marks <= 100) {
    grade = "A"
} else if(marks >= 70 && marks <= 89) {
    grade = "B"
} else if(marks >= 60 && marks <= 69) {
    grade = "C"
} else if(marks >= 50 && marks <= 59) {
    grade = "D"
} else if(marks >= 0 && marks <= 49) {
    grade = "F"
} else {
    console.log("Please enters marks between '0' to '100' ");
}

console.log("Your grade according to marks is ", grade);




