import Project from "./project";

const App = (function() {
  const projects = [];

  function initializeProjects() {
    const defaultProject = new Project("Default Project");  
    projects.push(defaultProject);
  }

  return {projects, initializeProjects};
})();

export default App;