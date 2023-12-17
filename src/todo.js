class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  editTodo(formData) {
    this.title = formData.get("title");
    this.description = formData.get("dscrp");
    this.dueDate = formData.get("due-date");
    this.priority = formData.get("priority");
  }
}

export default ToDo;