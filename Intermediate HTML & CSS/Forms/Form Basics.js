const fname = document.querySelector("#first_name")
const lname = document.querySelector("#last_name")

const greet_button = document.querySelector(".greet_butt")
const output = document.querySelector(".greetings")

greet_button.addEventListener('click', (event)=>
{
    output.innerText = `hello ${fname.value} ${lname.value}`;
})