const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const tasks = document.querySelector("#tasks");


const totalTask = document.getElementById("total");
const doneTask = document.getElementById("done"); 



let totalTaskNumber = 0;
let doneTaskNumber = 0;

totalTask.innerText = totalTaskNumber;
doneTask.innerText = doneTaskNumber;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    totalTaskNumber += 1;

    totalTask.innerText = totalTaskNumber;

    const task = input.value;

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const content = document.createElement("div");
    content.classList.add("content");

    taskElement.appendChild(content);

    const inputElement = document.createElement("input");
    inputElement.classList.add("text");
    inputElement.type = "text";
    inputElement.value = task;
    inputElement.setAttribute("readonly", "readonly");

    content.appendChild(inputElement);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerText = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";

    const done = document.createElement("button");
    done.classList.add("done_button");
    done.innerText = "Done";

    actions.appendChild(done);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);

    taskElement.appendChild(actions);
    tasks.appendChild(taskElement);

    input.value = "";



    done.addEventListener("click", (e) =>{
        if (done.innerText.toLowerCase() == "done"){
            done.innerText = "Undone";
            doneTaskNumber += 1;
            doneTask.innerText = doneTaskNumber;
        }else{
            done.innerText = "Done";
            doneTaskNumber -= 1;
            doneTask.innerHTML = doneTaskNumber;
        }
    });

    edit.addEventListener("click", (e) => {
        if (edit.innerText.toLowerCase() == "edit"){
            edit.innerText = "Save";
            inputElement.removeAttribute("readonly");
            inputElement.focus();
        } else {
            edit.innerText = "Edit";
            inputElement.setAttribute("readonly", "readonly");
        }
    });

    deleteButton.addEventListener("click", (e) => {
        tasks.removeChild(taskElement);
        totalTaskNumber -= 1;
        totalTask.innerText = totalTaskNumber;
        if(done.innerText.toLowerCase() == "undone"){
            doneTaskNumber -= 1;
            doneTask.innerHTML = doneTaskNumber;
        }
    });



});



