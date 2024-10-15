/* const students = {
    name : "Suryabhan",
    faculty : "BCA",
    isPass : true,
    rollNo : 21,
    printMarks () {
        console.log(78); //student.faculty
    }
};

const marks = {
    marks : "Good Marks"
}

marks.__proto__ = students;   */        
// console.log(students);


//CLASSES

/* class car {
    constructor(brand) {
        console.log("Creating new object");
        this.brandName = brand;
    }
    start() {
        console.log("starts");
    }

    stop() {
        console.log("stops");
    }
};

let fortuner = new car("TOYOTA"); */

//INHERITANCE

/* class parent {
    hello () {
        console.log("Hello");
    };
};

class child extends parent {

}

let obj = new child(); */

/* class person {
    constructor (work) {
        this.work = work;
    }
    eat () {
        console.log("EAT");
    };

    sleep () {
        console.log("SLEEP");
    };
};

class developer extends person {
    develop () {
        console.log("DEVELOPS, MAINTAINANCE")
    };
};

let suryabhanObj = new developer("Do Nothing!"); */


// Super Constructor
/* 
class person {
    constructor (name) {
        this.name = name;
    }
    eat () {
        console.log("EAT");
    };
};

class Engineer extends person {
    constructor (name) {
        super(name); // to invoke parent class constructor
    }
    develop () {
        super.eat();
        console.log("DEVELOPS, MAINTAINANCE")
    };
};

let engObj = new Engineer("Suryabhan"); */

// let's Practice
// let DATA = "Secret";

/* class user {
    constructor (name , email) {
        this.name = name;
        this.email = email;
    }
     viewData() {
        console.log("Viewing Data")
     };
};


class Admin extends user {
    constructor (name , email){
        super(name,email);
    }
    editData () {
        DATA = "Some new Value";
    }
}

let stu1 = new user("Suryabhan" , "suryabhanvsn.21@gmail.com");
let stu2 = new user();

let admin1 = new Admin("admin" , "admin.college@gmail.com"); */

/* function hello(){
    console.log("Helllo");
};
setTimeout(hello, 2000);  

function sum(a, b) {
    console.log(a + b);
};

function calculator(a, b, sumCallback){
    sumCallback(a, b);
};

calculator(1 , 2 ,sum); */

/* function getData(dataId, /* getNextData ) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            {
            console.log("Data", dataId); 
            resolve("Sucess");
           /*  if(getNextData){
                getNextData();
            }; 
            }, 3000);
    });
};  */

// promise chain
/* getData(1).then((res) => {
    return getData(2);
   /*  console.log(res);
    getData(2).then(() =>{
    console.log(res);
    }) */
/* }) .then((res) => {
    console.log(res);
}); */


/* getData(1, () =>{
    getData(2, () =>{
        getData(3);
    });
}); */

//promises


/* const getPromise =() => {
   return new Promise((resolve, reject) => {
        console.log("I am a promise.");
        // resolve(123);
        reject("Network error")
    });
}

let promise = getPromise();
promise.then((res) => {
    console.log("promise fullfilled", res);
});

promise.catch((err) => {
    console.log("REJECTED", err);
}); */

/* 
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout (() =>
            {
            console.log("Data", dataId);
            resolve("Sucess"); 
            if(getNextData){
                getNextData();
            };
            }, 5000);
    })
}; */
/* 
function asyncFunc1(){
    return new Promise((resolve, reject) =>{
        setTimeout (() =>
            {
            console.log("Data");
            resolve("Sucess"); 
            }, 5000);
    });
};

function asyncFunc2(){
    return new Promise((resolve, reject) =>{
        setTimeout (() =>
            {
            console.log("Data");
            resolve("Sucess"); 
            }, 3000);
    });
};

console.log("Fetching data 1....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("Fetching data 2.....");
let p2 = asyncFunc2();
p1.then((res) => {
})
}) */


/* function api () {
    return new Promise((resolve,reject) =>{
    setTimeout(() => { 
            console.log("Weather data");
            resolve(200);
        },3000);
    });
};

async function getData() {
  await api();  
  await api();  
}; */

//async-await
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            {
            console.log("Data", dataId); 
            resolve("Sucess");
            }, 3000);
    }); 
}; 

async function getAllData() {
    console.log("Fetching data 1....");
    await getData(1);
    console.log("Fetching data 2....");
    await getData(2);
    console.log("Fetching data 3....");+
    await getData(3);
}


(async function () {
    console.log("Fetching data 1....");
    await getData(1);
    console.log("Fetching data 2....");
    await getData(2);
    console.log("Fetching data 3....");+
    await getData(3);
})();