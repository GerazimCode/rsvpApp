// access the form and input elements

let form = document.getElementById("registrar");
let input = document.querySelector("input");
let ul = document.getElementById("invitedList");

// add a submit eventlistener to the form
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    // adding text to the list items
    let text = input.value;
    input.value = '';
    let li = document.createElement("li");
    li.textContent = text;

    // add a checkbox below the person's name to check when they have confirmed their arrival
    let label = document.createElement("label");
    label.textContent = "Confirmed";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.appendChild(checkbox);
    li.appendChild(label);

    // add a romove button to each list item
    let button = document.createElement("button");
    button.textContent = "Remove";
    li.appendChild(button);

    // append the li to the UL
    ul.appendChild(li);

})

// add eventListener to the checkbox itself
ul.addEventListener("change", (event) => {
    let checkbox = event.target;
    let checked = checkbox.checked;
    let listItem = checkbox.parentNode.parentNode; //this will access the list element as a grand parent of checkbox.

    if (checked){
        listItem.className = "responded";
    }else{
        listItem.className = "";
    }

})