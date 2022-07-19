// var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var creatTaskHandler = function (event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = ("task-item");
    listItemEl.textContent = "this is a new task.";
    tasksToDoEl.appendChild(listItemEl);

}
formEl.addEventListener("click", creatTaskHandler);
// buttonEl.addEventListener("click", creatTaskHandler);


// var taskItemEl = document.createElement("li");
// taskItemEl.textContent = "hello";
// tasksToDoEl.appendChild(taskItemEl);
// taskItemEl;