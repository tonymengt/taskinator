var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var creatTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = ("task-item");
    listItemEl.textContent = "this is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}
buttonEl.addEventListener("click", creatTaskHandler);


// var taskItemEl = document.createElement("li");
// taskItemEl.textContent = "hello";
// tasksToDoEl.appendChild(taskItemEl);
// taskItemEl;