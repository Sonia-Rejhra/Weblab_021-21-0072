
        const btn = document.getElementById("btn");
        btn.style.backgroundColor = "violet";
        
    
    function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field after adding task
}
    btn.onclick = addTask;

    