import "./style.css";
import ProjectIcon from "./svg-icons/project-icon.svg";
import PlusIcon from "./svg-icons/plus.svg"; 
import BlackRemoveIcon from "./svg-icons/black-remove.svg";
import RedRemoveIcon from "./svg-icons/red-remove.svg";
import App from "./app-logic";

(() => {
  // Create a helper for setting attributes
  function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(attr => {
      el.setAttribute(attr, attrs[attr]);
    });
  }

  function loadProject(e) {
    if (!addTask.hasChildNodes()) addTask.append(addTaskIcon, addTaskText);
    const clickedProject = App.projects[e.currentTarget.dataset.index];
    App.projects.forEach(project => project.selected = false);
    clickedProject.selected = true;
    tasksHeader.textContent = clickedProject.name;
    tasks.textContent = "";
    displayTasks(clickedProject);
  }

  function displayProject(project, index) {
    // Create project elements
    const projectNode = document.createElement("div");
    const projectIcon = new Image();
    const projectName = document.createElement("div");
    const removeIcon = new Image();
  
    // Set project elements' content
    projectIcon.src = ProjectIcon;
    projectIcon.alt = "Project Icon";
    projectName.textContent = project.name;
    removeIcon.src = BlackRemoveIcon;
    removeIcon.alt = "Remove Icon";
  
    // Add project elements' classes and dataset
    projectNode.classList.add("project-item");
    projectNode.dataset.index = `${index}`;
  
    // Append project elements accordingly
    projectNode.append(projectIcon, projectName, removeIcon);
    projects.appendChild(projectNode);

    // Add event listener to each project node and removeIcon
    projectNode.addEventListener("click", loadProject);

    removeIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      removeProject(project, index);
    });

    projectNode.addEventListener("mouseover", () => {
      removeIcon.style.visibility = "visible";
    });
    
    projectNode.addEventListener("mouseout", () => {
      removeIcon.style.visibility = "hidden";
    });

    // Make removeIcon red when it's on hover
    removeIcon.addEventListener("mouseover", () => removeIcon.src = RedRemoveIcon);
    removeIcon.addEventListener("mouseout", () => removeIcon.src = BlackRemoveIcon);
  }

  function removeProject(project, index) {
    // Remove project's main page contents if it was selected
    if (project.selected) {
      tasksHeader.textContent = "";
      tasks.textContent = "";
      addTask.textContent = "";
    }

    App.removeProject(index);
    projects.textContent = "";
    displayProjects();
  }

  function displayTask(task, index) {
    // Create elements
    const taskNode = document.createElement("div");
    const checkBox = document.createElement("input");
    const taskTitle = document.createElement("label");
    const taskDueDate = document.createElement("div");
    const taskPriority = document.createElement("div");
    const removeBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    // Set attributes and text content
    setAttributes(checkBox, {
      "name": "task",
      "type": "checkbox",
      "id": `task-${index}`,
    });
    taskTitle.setAttribute("for", `task-${index}`);
    taskTitle.textContent = task.title;
    taskDueDate.textContent = task.dueDate;
    taskPriority.textContent = task.priority;
    removeBtn.textContent = "Remove";
    editBtn.textContent = "Edit";

    // Set classes
    removeBtn.classList.add("remove-btn");
    editBtn.classList.add("edit-btn");

    // Append elements
    taskNode.append(checkBox, taskTitle, taskDueDate, taskPriority, removeBtn, editBtn);
    tasks.append(taskNode);

    // Add event listeners to buttons 
    removeBtn.addEventListener("click", () => {
      removeTask(index);
    });
    editBtn.addEventListener("click", () => {
      editTask(task);
    });
  }

  function editTask(task) {
    editDialog.textContent = "";
    createToDoForm(editDialog, "save", task,
                                       task.title,
                                       task.description,
                                       task.dueDate,
                                       task.priority);
    showDialog(editDialog);
  }

  function removeTask(index) {
    // Set a flag for the selected project
    let selected;

    // Remove task from selected project
    App.projects.forEach(project => {
      if (project.selected) {
        project.removeToDo(index);
        selected = project;
      }
    });
    tasks.textContent = "";
    displayTasks(selected);
  }

  function displayProjects() {
    App.projects.forEach((project, index) => displayProject(project, index));
  }

  function displayTasks(project) {
    project.toDos.forEach((task, index)=> displayTask(task, index));
  }

  function addNewProject(input) {
    App.createProject(input);
    projects.textContent = "";
    displayProjects();
    removeInput();
  }

  function createProjectInput() {
    sidebar.removeChild(addProject);

    // Create elements
    const projectInput = document.createElement("div");
    const projectInputField = document.createElement("input");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    //Add classes
    projectInput.classList.add("add-project-input");
    projectInputField.classList.add("add-project-input-field");
    addBtn.classList.add("add-btn");
    cancelBtn.classList.add("cancel-btn");

    // Set text content
    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel";

    // Append elements
    projectInput.append(projectInputField, addBtn, cancelBtn);
    sidebar.append(projectInput);

    // Add event listeners to buttons
    addBtn.addEventListener("click", () => {
      addNewProject(projectInputField);
    });
    cancelBtn.addEventListener("click", removeInput);
  }

  function createToDoForm(dialog, btnName, task = null,
                                           titleValue = "",
                                           dscrpValue = "",
                                           dueDateValue = "",
                                           priorityValue = "") {
    // Create elements
    const todoForm = document.createElement("form");
    const title = document.createElement("div");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const description = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("textarea");
    const dueDate = document.createElement("div");
    const dueDateLabel = document.createElement("label");
    const dueDateInput = document.createElement("input");
    const priority = document.createElement("div");
    const priorityLabel = document.createElement("label");
    const prioritySelect = document.createElement("select");
    const priorityData = ["--Please select task's priority--", "low", "medium", "urgent"];
    const buttons = document.createElement("div");
    const cancelBtn = document.createElement("button");

    // Set text content
    titleLabel.textContent = "Title*:";
    descriptionLabel.textContent = "Description*:";
    dueDateLabel.textContent = "Due date*:";
    priorityLabel.textContent = "Priority*:";
    cancelBtn.textContent = "Cancel";
    priorityData.forEach((data, index) => {
      const option = document.createElement("option");
      option.textContent = data;
      if (index === 0) option.value = "";
      prioritySelect.append(option);
    });

    // Set attributes
    todoForm.id = "todo-form";
    titleLabel.setAttribute("for", "title");
    setAttributes(titleInput, {
      "type": "text",
      "name": "title",
      "id": "title",
      "placeholder": "Grocery",
      "required": "",
      "value": `${titleValue}`,
    });

    descriptionLabel.setAttribute("for", "dscrp");
    setAttributes(descriptionInput, {
      "name": "dscrp",
      "id": "dscrp",
      "placeholder": "Buy bread, etc.",
      "rows": "5",
      "required": "",
    });
    descriptionInput.value = dscrpValue;

    dueDateLabel.setAttribute("for", "due-date");
    setAttributes(dueDateInput, {
      "type": "date",
      "name": "due-date",
      "id": "due-date",
      "required": "",
      "value": `${dueDateValue}`,
    });

    priorityLabel.setAttribute("for", "priority");
    setAttributes(prioritySelect, {
      "name": "priority",
      "id": "priority",
      "required": "",
    });
    prioritySelect.value = priorityValue;

    cancelBtn.setAttribute("type", "button");

    title.classList.add("task-title");
    description.classList.add("dscrp");
    dueDate.classList.add("due-date");
    priority.classList.add("priority");
    buttons.classList.add("form-buttons");
    cancelBtn.classList.add("cancel-btn");

    // Append elements
    title.append(titleLabel, titleInput);
    description.append(descriptionLabel, descriptionInput);
    dueDate.append(dueDateLabel, dueDateInput);
    priority.append(priorityLabel, prioritySelect);
    buttons.append(cancelBtn);
    todoForm.append(title, description, dueDate, priority, buttons);
    dialog.append(todoForm);

    // Create button depending on btnName
    if (btnName === "add") {
      // Create addBtn
      const addBtn = document.createElement("button");
      addBtn.textContent = "Add";
      addBtn.classList.add("add-btn");
      buttons.insertBefore(addBtn, cancelBtn);

      // Add event listener to addBtn
      addBtn.addEventListener("click", (e) => {
        if (todoForm.checkValidity()) {
          e.preventDefault();
          const formData = new FormData(todoForm);
          addNewTask(formData);
          todoForm.reset();
          dialog.close();
        }
     });
    } else {
      // Create saveBtn
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.classList.add("save-btn");
      buttons.insertBefore(saveBtn, cancelBtn);

      // Add event listener to saveBtn
      saveBtn.addEventListener("click", (e) => {
        if (todoForm.checkValidity()) {
          let selected;
          e.preventDefault();
          const formData = new FormData(todoForm);
          task.editTodo(formData);
          todoForm.reset();
          dialog.close();
          tasks.textContent = "";
          App.projects.forEach(project => {
            if (project.selected) {
              selected = project
            }
          });
          displayTasks(selected);
        }
      })
    }

    cancelBtn.addEventListener("click", () => {
      todoForm.reset();
      closeDialog(dialog);
    });
  }

  function addNewTask(formData) {
    // Set a flag for the selected project
    let selected;

    // Add the task to the selected project only
    App.projects.forEach(project => {
      if (project.selected) {
        project.createToDo(formData);
        selected = project;
      }
    });
    tasks.textContent = "";
    displayTasks(selected);
  }

  function removeInput() {
    sidebar.removeChild(sidebar.lastChild);
    sidebar.append(addProject);
  }

  function closeDialog(dialog) {
    dialog.close();
  }

  function showDialog(dialog) {
    dialog.showModal();
  }

  // Create elements
  const content = document.getElementById("content");
  const addDialog = document.createElement("dialog");
  const editDialog = document.createElement("dialog")
  const header = document.createElement("div");
  const sidebar = document.createElement("div");
  const main = document.createElement("div");

  const projectsTitle = document.createElement("div");
  const projects = document.createElement("div");
  const addProject = document.createElement("div");
  const addProjectIcon = new Image();
  addProjectIcon.src = PlusIcon;
  addProjectIcon.alt = "Add Project Icon";
  const addProjectText = document.createElement("div");

  const tasksHeader = document.createElement("div");
  const tasks = document.createElement("div");
  const addTask = document.createElement("div");
  const addTaskIcon = new Image();
  addTaskIcon.src = PlusIcon;
  addTaskIcon.alt = "Add Task icon";
  const addTaskText = document.createElement("div");

  // Create ToDo form and append it to dialog
  createToDoForm(addDialog, "add");

  // Add classes
  header.classList.add("header");
  sidebar.classList.add("sidebar");
  main.classList.add("main");

  projectsTitle.classList.add("title");
  projects.classList.add("projects");
  addProject.classList.add("app-item");

  tasksHeader.classList.add("title");
  tasks.classList.add("tasks");
  addTask.classList.add("app-item");

  // Fill elements
  header.textContent = "ToDo List";
  projectsTitle.textContent = "Projects";
  addProjectText.textContent = "Add Project";
  addTaskText.textContent = "Add Task";
  tasksHeader.textContent = "Default Project";

  // Append elements
  addProject.append(addProjectIcon, addProjectText);
  addTask.append(addTaskIcon, addTaskText);
  sidebar.append(projectsTitle, projects);
  content.append(addDialog, editDialog, header, sidebar, main);

  // Initialize the app
  App.initializeApp();

  // Display projects
  displayProjects();

  // Display "add project" button
  sidebar.append(addProject);

  // Display toDosHeader, toDos, and addToDo
  main.append(tasksHeader, tasks, addTask);

  // Add event listeners to addProject and addTask elements to collect input
  // from them and create projects and todos correspondingly
  addProject.addEventListener("click", createProjectInput);
  addTask.addEventListener("click", () => showDialog(addDialog));
})();