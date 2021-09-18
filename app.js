// access the form and input elements

let form = document.getElementById("registrar");
let input = document.querySelector("input");

// add a submit eventlistener to the form
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    // adding text to the list items
    let text = input.value;
    input.value = '';
    let ul = document.getElementById("invitedList");
    let li = document.createElement("li");
    li.textContent = text;
    // append the li to the UL
    ul.appendChild(li);

})