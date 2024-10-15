//Function to use to decrease the repetation , resuable block of code.

/* function sum(n1, n2 = 5 ){
    let  n1 = 10, n2 = 15;
    let sum = n1 + n2;
    console.log(sum);
    return n1 + n2;
}
*/

/*
let sum = function(n1 , n2 = 5){
    return n1 + n2;
}
    */
/*
const sum = function(n1 , n2 = 5){
    return n1 + n2;
}
 */

const sum = (n1 , n2 = 5) => n1 + n2
/* {   arrow function
    return n1 + n2;
} */

let r1 = sum(123 , 789);
let r2 = sum(1237 , r1);
// let r3 = sum(1237, r2);
let r3 = sum(r2);


console.log(r3);
