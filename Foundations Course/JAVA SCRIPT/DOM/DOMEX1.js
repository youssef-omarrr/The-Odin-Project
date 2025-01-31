console.log("Hello World!");

const container = document.querySelector("#container");

const para = document.createElement("p");
para.classList.add("para1");
para.textContent= "Hey I’m red!";
para.style.color = "red";
container.appendChild(para);

const head3 = document.createElement("h3");
head3.classList.add("head3");
head3.textContent = "I’m a blue h3!";
head3.style.color = "blue";
container.appendChild(head3);

const div = document.createElement("div");
div.classList.add("border");
div.style.cssText = "background-color: pink; border: 2px solid black; height: auto;";
container.appendChild(div);

const head1 = document.createElement("h1");
head1.classList.add("head1");
head1.textContent = "I’m in a div";
div.appendChild(head1);

const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "ME TOO!";
div.insertBefore(para2, head1);

// Call back function
const btn = document.querySelector("#butt");
btn.addEventListener("click", function(e){
    e.target.style.background = "blue";
} );

const btns = document.querySelectorAll("button");
btns.forEach( (button) =>{
    button.addEventListener("click", ()=>
    {
        alert(button.id);
    });
});