import "./style.css";
import ProjectIcon from "./svg-icons/project-icon.svg";
import Plus from "./svg-icons/plus.svg"; 
import App from "./app-logic";

(() => {
  // Create a helper for setting attributes
  function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(attr => {
      el.setAttribute(attr, attrs[attr]);
    });
  }

  function loadProject(e) {
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
  
    // Set project elements' content
    projectIcon.src = ProjectIcon;
    projectIcon.alt = "Project Icon";
    projectName.textContent = project.name;
  
    // Add project elements' classes and dataset
    projectNode.classList.add("app-item");
    projectNode.dataset.index = `${index}`;
  
    // Append project elements accordingly
    projectNode.append(projectIcon, projectName);
    projects.appendChild(projectNode);

    // Add event listener to each project node
    projectNode.addEventListener("click", loadProject);
  }

  function displayTask(task) {
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
      "id": "task"
    });
    taskTitle.setAttribute("for", "task");
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
  }

  function displayProjects() {
    App.projects.forEach((project, index) => displayProject(project, index));
  }

  function displayTasks(project) {
    project.toDos.forEach(task => displayTask(task));
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

  function createToDoForm() {
    main.removeChild(addTask);

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
    const priorityData = ["low", "medium", "urgent"];
    const buttons = document.createElement("div");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    // Set text content
    titleLabel.textContent = "Title:";
    descriptionLabel.textContent = "Description:";
    dueDateLabel.textContent = "Due date:";
    priorityLabel.textContent = "Priority:";
    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel";
    priorityData.forEach(data => {
      const option = document.createElement("option");
      option.textContent = data;
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
    });

    descriptionLabel.setAttribute("for", "dscrp");
    setAttributes(descriptionInput, {
      "name": "dscrp",
      "id": "dscrp",
      "placeholder": "Buy bread, etc.",
      "rows": "5",
    });

    dueDateLabel.setAttribute("for", "due-date");
    setAttributes(dueDateInput, {
      "type": "date",
      "name": "due-date",
      "id": "due-date",
    });

    priorityLabel.setAttribute("for", "priority");
    setAttributes(prioritySelect, {
      "name": "priority",
      "id": "priority",
    });

    cancelBtn.setAttribute("type", "button");

    title.classList.add("task-title");
    description.classList.add("dscrp");
    dueDate.classList.add("due-date");
    priority.classList.add("priority");
    buttons.classList.add("form-buttons");
    addBtn.classList.add("add-btn");
    cancelBtn.classList.add("cancel-btn");

    // Append elements
    title.append(titleLabel, titleInput);
    description.append(descriptionLabel, descriptionInput);
    dueDate.append(dueDateLabel, dueDateInput);
    priority.append(priorityLabel, prioritySelect);
    buttons.append(addBtn, cancelBtn);
    todoForm.append(title, description, dueDate, priority, buttons);
    main.append(todoForm);

    // Add event listeners
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const formData = new FormData(todoForm);
      addNewTask(formData);
    });
    cancelBtn.addEventListener("click", removeTaskForm);
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
    removeTaskForm();
  }

  function removeInput() {
    sidebar.removeChild(sidebar.lastChild);
    sidebar.append(addProject);
  }

  function removeTaskForm() {
    main.removeChild(main.lastChild);
    main.append(addTask);
  }

  // Create elements
  const content = document.getElementById("content");
  const header = document.createElement("div");
  const sidebar = document.createElement("div");
  const main = document.createElement("div");

  const projectsTitle = document.createElement("div");
  const projects = document.createElement("div");
  const addProject = document.createElement("div");
  const addProjectIcon = new Image();
  addProjectIcon.src = Plus;
  addProjectIcon.alt = "Add Project Icon";
  const addProjectText = document.createElement("div");

  const tasksHeader = document.createElement("div");
  const tasks = document.createElement("div");
  const addTask = document.createElement("div");
  const addTaskIcon = new Image();
  addTaskIcon.src = Plus;
  addTaskIcon.alt = "Add Task icon";
  const addTaskText = document.createElement("div");

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
  content.append(header, sidebar, main);

  // Initialize projects
  App.initializeProjects();

  // Display projects
  displayProjects();

  // Display "add project" button
  sidebar.append(addProject);

  // Display toDosHeader, toDos, and addToDo
  main.append(tasksHeader, tasks, addTask);

  // Add event listeners to addProject and addTask elements to collect input
  // from them and create projects and todos correspondingly
  addProject.addEventListener("click", createProjectInput);
  addTask.addEventListener("click", createToDoForm);
})();