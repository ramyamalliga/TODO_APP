let inputField = document.getElementById('taskInput'); 
let addTaskBtn = document.getElementById('addTaskBtn'); 
let taskList = document.getElementById('taskList'); 

function addTask() {
    console.log(inputField.value);
    let inputValue = inputField.value.trim();
    if (inputValue !== "") {
        let listItem = document.createElement("li"); 
        listItem.textContent = inputValue; 

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        
        });
    
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem); 
        inputField.value = ""; 
    }
}





