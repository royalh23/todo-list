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

  function removeProject(index) {
    projects.splice(index, 1);
  }

  return {projects, initializeProjects, createProject, removeProject};
})();

export default App;