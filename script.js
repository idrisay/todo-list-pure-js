const todoName = document.getElementById("todo-name");
const addBtn = document.getElementById("add-new");
const updateBtn = document.getElementById("update-todo");
const todoList = document.getElementById("todo-list");
let checkTodo = {};

let todos = [
  { id: 0, todo: "learn js", completed: false },
  { id: 1, todo: "learn css", completed: false },
  { id: 2, todo: "learn html", completed: false },
];

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
    document.getElementById("error").classList.add("d-none");
  }
};

const showTodos = (tds) => {
  todoList.innerHTML = "";
  if (tds.length == 0) {
    todoList.innerHTML =
      '<p class="text-danger text-center">There is no todo.</p>';
  } else {
    tds.forEach((element) => {
      todoList.innerHTML +=
        '<div class="list-group-item list-group-item-action mb-0 d-flex justify-content-between">' +
        element.todo +
        "<div><i onclick='editTodo(" +
        element.id +
        ")' class='bi bi-pen px-2' style='cursor:pointer;'></i><i onclick='deleteTodo(" +
        element.id +
        ")' class='bi bi-trash px-2' style='cursor:pointer;'></i></div></div>";
    });
  }
};

window.onload = () => {
  showTodos(todos);
};

const deleteTodo = (id) => {
  const result = todos.filter((todo) => todo.id !== id);
  todos = result;
  showTodos(todos);
};

const editTodo = (id) => {
  const result = todos.filter((todo) => todo.id == id);
  checkTodo = result[0];
  todoName.value = checkTodo.todo;
  addBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
};

updateBtn.onclick = () => {
  todos.forEach((element) => {
    if (element.id == checkTodo.id) {
      element.todo = todoName.value;
    }
  });
  showTodos(todos);
  todoName.value = "";
  addBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");
};
