import ToDo from "./todo";

class Project {
  constructor(name, index, toDos = [], selected = false) {
    this.name = name;
    this.index = index;
    this.toDos = toDos;
    this.selected = selected;
  }

  #updateLocalStorage() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  createToDo(formData) {
    const newToDo = new ToDo(formData.get("title"),
                             formData.get("dscrp"),
                             formData.get("due-date"),
                             formData.get("priority"));
    this.toDos.push(newToDo);
    this.#updateLocalStorage();
  }

  editToDo(index, formData) {
    this.toDos[index].title = formData.get("title");
    this.toDos[index].description = formData.get("dscrp");
    this.toDos[index].dueDate = formData.get("due-date");
    this.toDos[index].priority = formData.get("priority");
    this.#updateLocalStorage();
  }

  removeToDo(index) {
    this.toDos.splice(index, 1);
    this.#updateLocalStorage();
  }
}

export default Project;