import Project from "./project";

const App = (function() {
  const projects = [];

  function initializeApp() {
    const defaultProject = new Project("Default Project");  
    defaultProject.selected = true;
    projects.push(defaultProject);
  }

  function createProject(input) {
    const newProject = new Project(input.value);
    projects.push(newProject);
  }

  function removeProject(index) {
    projects.splice(index, 1);
  }

  return {projects, initializeApp, createProject, removeProject};
})();

export default App;