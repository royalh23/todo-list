import ProjectIcon from "./svg-icons/project-icon.svg";

function displayProject(project, projects) {
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
  projectNode.classList.add("selected");

  // Append project elements accordingly
  projectNode.append(projectIcon, projectName);
  projects.appendChild(projectNode);
}

export default displayProject;