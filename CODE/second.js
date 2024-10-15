//calculate sum from 1 to 5
let sum = 0;

//For-Loop
/* for(let i = 1; i <= 5; i++){
    sum = sum + i;
} */

// While-Loop
/* let i = 1;
while(i <= 5){
    console.log("i = ", i);
    i++;
} */

//Do-While Loop
/* let i = 1;
do {
    console.log("i = ", i);
    i++;
} while(i <= 10); */

//For-Of Loop
/* let str = "SANDHYA"
let size = 0;

for(let i of str){
    console.log("Val = ", i);
    size++;
}

console.log("String size = ", size); */

//For-in Loop

/* let student = {
    Name : "Sandhya Thakur",
    Age : 21,
    College : "Kathmandu Medical College",
    cGpa : 7.5,
    isPass : true,
}

for(let key in student){
    console.log( key, " = ",student[key]);
} */

// Question -> 1 
/* for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log("i = ", i);
    }
} */

//Question -> 2
/* let gameNum = 18; 
let userNum = prompt("Guess the number");

while (userNum != gameNum){
    userNum = prompt("You gussed wrong number. Guess the number again");
}
console.log("Congratulations, you guessed it right");
 */

//Strings

/* let str = "ApnaCollege";
console.log(str[8]); */

/* let obj = {
    items : "Pen",
    price : 10,
}

let output = `The price of ${obj.items} is ${obj.price} rupees`;
console.log(output); */

//Template Literals
/* let specialString = `This is a template literal ${1+2+3}.`;
console.log(specialString);  */

// console.log("Sandhya\nThakur")

 /* let str1 = "Sandhya";
let str2 = "Thakur"; 
 console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim()); 
console.log(str1.slice(2,4));
console.log(str1.concat(str2));
console.log(str1.replace("n","S"));
console.log(str1.replaceAll("n","S")); //Replaces all A in the str
console.log(str1.charAt(4)) */


//Question -> 1

let fullName = prompt("Enter your Fullname");
let userName = "@" + fullName + fullName.length; 
// let userName = `@${fullName}${fullName.length}`
console.log(userName);



