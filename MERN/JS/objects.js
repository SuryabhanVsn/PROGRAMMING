/* let person = {
    name: 'Surya',
    age: 20,
    'address details': 'Gairigaun'
} */
/* console.log(person.name);
console.log(person['name']); */

// for_in

/* for(let k in person) {
    console.log(k, person[k]);
} */

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

/* function iterateObject() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };

    for (let key in exampleObj) {
        if (exampleObj.hasOwnProperty(key)) {
            value = exampleObj[key];
            console.log(key, value);
        }
    }
}
iterateObject(); */

let user = {
    name: 'Person A',
    age: 20,
    address: 'Location A'
}

let student = {
    // info: user, /* user:user */
    // user,
    ...user, /* spread operator */
    faculty: 'BCA',
    subjects: ['Node', 'NM', 'JS']
}

// De-Structuring

let {age, faculty, name, ...remaining} = student   /* ...remaining -> Rest Operator */

console.log(age);
console.log(faculty);
console.log(name);
console.log(remaining);
// console.log(student);
// console.log(student.user.name);
/* console.log(student['info']['name']);
console.log(student.info['name']); */

