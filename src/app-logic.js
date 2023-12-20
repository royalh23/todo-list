import Project from "./project";

const App = (function() {
  const projects = [];

  function updateLocalStorage(projectName, project) {
    localStorage.setItem(projectName, project);
  }

  function initializeApp() {
    const defaultProject = new Project("Default Project");  
    updateLocalStorage("Default Project", JSON.stringify(defaultProject));
    defaultProject.selected = true;
    projects.push(defaultProject);
  }

  function createProject(input) {
    const newProject = new Project(input.value);
    updateLocalStorage(input.value, JSON.stringify(newProject));
    projects.push(newProject);
  }

  function removeProject(index) {
    localStorage.removeItem(projects[index].name);
    projects.splice(index, 1);
  }

  return {projects, initializeApp, createProject, removeProject};
})();

export default App;