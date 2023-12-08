import "./style.css";

(() => {
  // Create elements
  const content = document.getElementById("content");
  const header = document.createElement("div");
  const sidebar = document.createElement("div");
  const main = document.createElement("div");
  const projectsTitle = document.createElement("div");

  // Add classes
  header.classList.add("header");
  sidebar.classList.add("sidebar");
  main.classList.add("main");
  projectsTitle.classList.add("projects-title");

  // Fill elements
  header.textContent = "ToDo List";
  projectsTitle.textContent = "Projects";

  // Append elements
  content.append(header, sidebar, main);
  sidebar.append(projectsTitle);
})();