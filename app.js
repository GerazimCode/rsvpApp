// access the form and input elements

let form = document.getElementById("registrar");
let input = document.querySelector("input");
let ul = document.getElementById("invitedList");


// creates the li for program
function createLI(text){
    let li = document.createElement("li");
    li.textContent = text;

    // add a checkbox below the person's name to check when they have confirmed their arrival
    let label = document.createElement("label");
    label.textContent = "Confirmed";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.appendChild(checkbox);
    li.appendChild(label);

    // create an edit button to the list item
    let editButton = document.createElement("button");
    editButton.textContent = "edit";
    li.appendChild(editButton);

    // add a romove button to each list item
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    li.appendChild(removeButton);

    return li;
}

// add a submit eventlistener to the form
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    // adding text to the list items
    let text = input.value;
    input.value = '';

    // calls the createLI function
    let li = createLI(text)

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

// the eventListeneer that will remove the name
ul.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON"){
        let li = e.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
})