import Project from "./project";

const App = (function() {
  const projects = [];

  function initializeProjects() {
    const defaultProject = new Project("Default Project");  
    defaultProject.selected = true;
    projects.push(defaultProject);
  }

  function createProject(input) {
    const newProject = new Project(input.value);
    projects.push(newProject);
  }

  return {projects, initializeProjects, createProject};
})();

export default App;