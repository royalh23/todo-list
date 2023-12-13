import "./style.css";
import Plus from "./svg-icons/plus.svg"; 
import App from "./app-logic";
import displayProject from "./display-project";

(() => {
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
  App.projects.forEach(project => displayProject(project, projects));

  // Display "add project" button
  sidebar.append(addProject);

  // Display toDosHeader, toDos, and addToDo
  addTask.append(addTaskIcon, addTaskText);
  main.append(tasksHeader, tasks, addTask);
})();