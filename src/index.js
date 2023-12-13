import "./style.css";
import ProjectIcon from "./svg-icons/project-icon.svg";
import Plus from "./svg-icons/plus.svg"; 
import App from "./app-logic";

(() => {
  function displayProject(project) {
    // Create project elements
    const projectNode = document.createElement("div");
    const projectIcon = new Image();
    const projectName = document.createElement("div");
  
    // Set project elements' content
    projectIcon.src = ProjectIcon;
    projectIcon.alt = "Project Icon";
    projectName.textContent = project.name;
  
    // Add project elements' classes
    projectNode.classList.add("app-item");
  
    // Append project elements accordingly
    projectNode.append(projectIcon, projectName);
    projects.appendChild(projectNode);
  }

  function displayProjects() {
    App.projects.forEach(project => displayProject(project));
  }

  function addNewProject(input) {
    App.createProject(input);
    projects.textContent = "";
    displayProjects();
    removeInput();
  }

  function createAddProjectInput() {
    sidebar.removeChild(addProject);

    // Create elements
    const addProjectInput = document.createElement("div");
    const addProjectInputField = document.createElement("input");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    //Add classes
    addProjectInput.classList.add("add-project-input");
    addProjectInputField.classList.add("add-project-input-field");
    addBtn.classList.add("add-btn");
    cancelBtn.classList.add("cancel-btn");

    // Set text content
    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel";

    // Append elements
    addProjectInput.append(addProjectInputField, addBtn, cancelBtn);
    sidebar.append(addProjectInput);

    // Add event listeners to buttons
    addBtn.addEventListener("click", () => {
      addNewProject(addProjectInputField);
    });
    cancelBtn.addEventListener("click", removeInput);
  }

  function removeInput() {
    sidebar.removeChild(sidebar.lastChild);
    sidebar.append(addProject);
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

  addTask.classList.add("app-item");
  tasksHeader.classList.add("title");

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
  addTask.append(addTaskIcon, addTaskText);
  main.append(tasksHeader, tasks, addTask);

  // Add event listeners to addProject and addTask elements
  addProject.addEventListener("click", createAddProjectInput);
  addTask.addEventListener("click", () => alert("Clicked!"));
})();