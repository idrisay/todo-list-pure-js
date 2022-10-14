const todoName = document.getElementById("todo-name");
const addBtn = document.getElementById("add-new");
const todoList = document.getElementById("todo-list");

let todos = [{ id: 0, todo: "learn js", completed: false }];

addBtn.onclick = () => {
  //   let newTodo = todoName.value;
  if (todoName.value == "") {
    document.getElementById("error").classList.remove("d-none");
  } else {
    let newTodoId = new Date().getTime();
    let newTodo = { id: newTodoId, todo: todoName.value, completed: false };
    todos = [...todos, newTodo];
    showTodos(todos);
    todoName.value = "";
    console.log(todos);
    document.getElementById("error").classList.add("d-none");
  }
};

const showTodos = (tds) => {
  todoList.innerHTML = "";
  tds.forEach((element) => {
    todoList.innerHTML +=
      '<p class="list-group-item list-group-item-action mb-0 d-flex justify-content-between">' +
      element.todo +
      "<i onclick='deleteTodo(" + element.id + ")' class='bi bi-trash' style='cursor:pointer'></i></p>";
  });
};

window.onload = () => {
  showTodos(todos);
};

const deleteTodo = (id) => {
    const result = todos.filter(todo => todo.id !== id);
    todos = result
    showTodos(todos)
}
