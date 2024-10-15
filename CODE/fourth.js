/* function myFunction() {
    console.log("Welcome to Apna College");
    console.log("I am learning Javascript");
}

myFunction();

function msgFunction(msg) { //Parameters -> Inputs
    console.log(msg);
}

msgFunction("I love Sandhya"); //Argument */

//Function -> 2 Numbers , Sum

/* function sum(x , y) {
    // console.log(x + y);
    s = x + y;
    return s;
}

let result = sum(24,1);
console.log(result); */

//Multilication Function
/* const arrowmul = (a , b) => {
    m = a * b;
    return m
} */

/* let result = mul(2 , 3);
console.log(result); */

// Let's Pratice

/* function vowels(letters){
    // return letters;
    console.log(letters);
}

vowels("a,e,i,o,u"); */

/* function vowels(letters){
     return letters;
}

let result = vowels("a,e,i,o,u");
console.log(result); */

/* function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
} */
/* 
const countVow = (str) => {
    let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
} */


// For-each

// let arr = [1,2,3,4,5];
/* arr.forEach(function printVal(val){ //Value at each index
    console.log(val);
}); */

// Higher order function/method is a function/method which uses other function for parameter or return.

/* arr.forEach (sqr => { 
    console.log(sqr * sqr);
}); */

//Map Method

/* let arr = [1,2,3,4,5];

let newArr = arr.map((val) =>{
    return val * 2;
    // console.log(val);
});

console.log(newArr) */
/* 
let calcsquare = (arr) => {
    console.log(arr * arr);
}; */

/* For-each is used when we have to do some sort of normal calculations or to print values whereas we use map to create new arrar using value */


//Filter Method
/* let arr = [1,2,3,4,5];

let evenArr = arr.filter((val) =>{
    return val % 2 === 0;
    // console.log(val);
});

console.log(evenArr); */

//Reduce Method
/* let arr = [1,2,3,4,5];
const output = arr.reduce((res , curr) => {
    return res + curr;
})
console.log(output); */

// Return the maximum Number

// let arr = [1,2,3,4,5];
// const output = arr.reduce((res , curr) => {
//     return res > curr ? res : curr;
// })
// console.log(output);

// let's Pratice

/* let marks = [45,92,98,78,99,102];
let marksA = marks.filter((val) => {
    return val > 90;
});

console.log(marksA); */

let n = prompt("enter a number");
let arr = [];

for(let i=1; i<=n; i++){
    arr[i - 1] = i;
};

//Sum of all the numbers in an array
/* const output = arr.reduce((pre , curr) => {
    return pre + curr;
}); */

//Product of all the numbers in an array
const output = arr.reduce((pre , curr) => {
    return pre * curr;
});
console.log(output);