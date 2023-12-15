import ToDo from "./todo";

class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
    this.selected = false;
  }

  createToDo(formData) {
    const newToDo = new ToDo(formData.get("title"),
                             formData.get("dscrp"),
                             formData.get("due-date"),
                             formData.get("priority"));
    this.toDos.push(newToDo);
  }
}

export default Project;