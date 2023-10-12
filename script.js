document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTaskToList(taskText);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete")) {
        const listItem = event.target.parentElement;
        removeTaskFromList(listItem);
      } else if (event.target.classList.contains("edit")) {
        const listItem = event.target.parentElement;
        editTask(listItem);
      }
    });
  
    function addTaskToList(text) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${text}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;
      taskList.appendChild(listItem);
    }
  
    function removeTaskFromList(listItem) {
      taskList.removeChild(listItem);
    }
  
    function editTask(listItem) {
      const taskText = listItem.querySelector("span").textContent;
      const newText = prompt("Edit task:", taskText);
      if (newText !== null) {
        listItem.querySelector("span").textContent = newText;
      }
    }
  });
  