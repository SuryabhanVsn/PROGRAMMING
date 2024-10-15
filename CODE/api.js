// API -> Application Programming Interface

const URL = "https://cat-fact.herokUapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


/* let promise = fetch(URL);
console.log(promise); */

const getfacts = async () => {
    console.log("Getting data....");
    let response =  await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    factPara.innerText = data[2].text; 
}; 

/* function getfacts (){
    fetch(URL).then((response)=> {
      return response.json();
    })
    .then((data) =>{
        console.log(data);
    factPara.innerText = data[2].text; 
    });
}; */

btn.addEventListener("click", getfacts);
 
