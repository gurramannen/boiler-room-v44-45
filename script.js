
// Add task 

// event listener for add new task button
const newTaskForm = document.getElementById("newTaskForm");
const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", function(event) {
    event.preventDefault;
    addNewTask();

});


// add and append new tasks
function addNewTask(){
    const taskList = document.getElementById("activeTasks");
    let newTask = document.createElement("li");

    //TODO checkbox mark as complete

    //TODO button to remove

    let removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.addEventListener("click", function () {
        
        newTask.remove();
        //TODO if it´s empty



// Function add add tasks //!(REBECCA)

//let taskIdCounter = 1;

function addTask(){
    let title = prompt("Ange uppgiftens titel:"); // let in stead of const to enable future edit function
    let description = prompt("Ange uppgiftens beskrivning:");
    // skapa objektet
    let newTask = {
        taskId: listOfTasks.length + 1,
        title: title,
        description: description,
        isComplete: false
    }
    
    // pusha objekt in i arrayen
    
    listOfTasks.push(newTask);
    console.log("Uppgift tillagd:", newTask);
    alert(`Uppgift skapad\nTask nr: ${newTask.taskId}\nTitel: ${newTask.title}\nBeskrivning: ${newTask.description}`);

};

// Function to complete tasks //!"3" (THOMAS)
// ?En funktion som söker upp en specifik uppgift genom dess id (ex. använd .find()), och ändrar dess isComplete-värde till true.

function markTaskAsComplete(){    

    if (listOfTasks.length === 0) {
        alert("Det finns inga tasks att markera");
    }
    else{
    
    let taskIdInput = parseInt(prompt("Välj taskID som du vill markera som klar."), 10);
    let task = listOfTasks.find(task => task.taskId === taskIdInput);
    
    if (task) {
        task.isComplete = true;
        console.log("Uppgiften är markerad som klar.");
    } else {
        console.log("TaskID hittades inte.");
    }
}};




// Function to remove tasks (GUSTAV)
let deletedTasks = []; //! denna finns inte ännu
function deleteTask(){
    if (listOfTasks.length === 0) {
        alert("Det finns inga tasks att ta bort")
    }
    else {
    
        let taskId = prompt("Välj taskID som du vill ta bort");
        let index = listOfTasks.findIndex(task => task.taskId == taskId);
        if (index !== -1) {
            listOfTasks.splice(index, 1);
        // deletedTasks = listOfTasks.splice(index, 1);
            alert("Uppgift borttagen!");
            console.log("uppgift borttagen" + deletedTasks);
            updateTaskIds(); // Uppdatera taskId:n efter borttagning
        } else {
            alert("Ingen uppgift med det angivna ID:t hittades.");
            console.log("inget giltligt ID hittades")
        }
    }
};

// Function to show all tasks (BEJAMIN)
function showAllTasks(){
    if (listOfTasks.length === 0) {
        console.log("Det finns inga tasks");
        
    } else {
        listOfTasks.forEach(task => {
            console.log(`ID: ${task.taskId}, Titel: ${task.title}, Beskrivning: ${task.description}, Klar? ${task.isComplete}`);
        });
    }
};

function updateTaskIds() {
    listOfTasks.forEach((task, index) => {
        task.taskId = index + 1; // Sätt taskId baserat på dess nuvarande index
    });
    
    //TODO text for new task
    newTask.innerText = document.getElementById("newTaskInput").value;
    
    
};

taskList.appendChild(newTask); //append li to taskList ul
newTask.appendChild(removeButton);

// Mark task as complete



// Remove task


