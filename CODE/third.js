//Arrays
/* let marks = [25 , 45 , 68 , 78];
console.log(marks);
console.log(marks.length); // Property(.length) -> Gives some values
// Method -> Does some sort of work */

//Looping over an array(For-Loop)
// let heroes = ["Salman" , "Sharukh" , "Vijay" , "Vicky" , "Shahid" , "Allu"];

/* for(let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
} */


//For-Of Loop

/* for (let hero of heroes) {
    console.log(hero);
} */

//For-In Loop

/* for (let key in heroes){
    console.log(heroes[key]);
} */

// Question -> One

/* let marks = [85,97,44,37,76,60];
let sum = 0; */

// For-Loop
/* for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
} */

//For-Of Loop
/* for (let val of marks) {
    sum = sum + val;
}

let avg = sum / marks.length;
console.log(`Average marks of class is ${avg}`); */

// Question -> Two

// let items = [250 , 645 , 300 , 900 , 50];
// let i = 0;

// For loop
/* for (let i = 0; i < items.length; i++) {
    console.log(`price of item ${[i]} = ${items[i]}`);
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log(`price of item ${[i]} after offer = ${items[i]}`);
} */

// For-Of Loop
/* for (let val of items) {
    console.log(`price of item ${[i]} is ${items[i]}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`price of item ${[i]} after offer is ${items[i]}`); 
    i++;
} */

// PUSH() -> Add to end

/* let heroes = ["Salman" , "Sharukh" , "Vijay" , "Allu", "Tom" , "Rajni"];
console.log(heroes); */
/* heroes.push("Tom" , "Rajni")
console.log(heroes);

//POP() -> Deletes from last and return 
heroes.pop();
console.log(heroes);
console.log(heroes.toString()); //Doesn't changes within array
console.log(heroes); */

//Slice
// console.log(heroes.slice(1,3));

//Splice
/* heroes.splice(1,2,"Hritik");
console.log(heroes);
 */

// Let's Pratice

let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];

// 1. Remove the first company form the Array
/* companies.shift();
console.log(companies); */

// 2. Remove uber and ola in its place 
/* companies.splice(2,2,"Ola");
console.log(companies); */

// 3. Add Amazon at the end
companies.push("Amazon");
console.log(companies);









