let btn1 = document.querySelector("#btn1");
let currMode = "light";

btn1.addEventListener("click", function(){
    console.log("you are trying to change mode");
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
})

/* btn1.onclick = () => {
    console.log("BTN was clicked");
    let a = 24;
    a++;
    console.log(a);
}; */

/* btn1.addEventListener("click", function(evt){

    console.log("button is clicked")
    console.log(evt);
    console.log(evt.type);
})

let div = document.querySelector("div");
 */
/* div.onmouseover = () =>{
    console.log("choyo choyo")
}
 */
