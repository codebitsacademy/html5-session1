// Select the element of interest by its id attribute
let btn; // Variable declaration

btn = document.getElementById("btn");

btn.addEventListener("click", greetUser);

function greetUser() {
    alert("Hi, you're welcome to my website!");
}



