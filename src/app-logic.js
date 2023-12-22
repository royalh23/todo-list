import Project from "./project";

const App = (function() {
  const projects = [];

  function initializeApp() {
    const defaultProject = new Project("Default Project");  
    defaultProject.selected = true;
    localStorage.setItem(defaultProject.name, JSON.stringify(defaultProject));
    projects.push(defaultProject);
  }

  function createProject(input) {
    const newProject = new Project(input.value);
    localStorage.setItem(input.value, JSON.stringify(newProject));
    projects.push(newProject);
  }

  function removeProject(index) {
    localStorage.removeItem(projects[index].name);
    projects.splice(index, 1);
  }

  return {projects, initializeApp, createProject, removeProject};
})();

export default App;