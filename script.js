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
  if (tds.length == 0) {
    todoList.innerHTML =
      '<p class="text-danger text-center">There is no todo.</p>';
  } else {
    tds.forEach((element) => {
      todoList.innerHTML +=
        '<div class="list-group-item list-group-item-action mb-0 d-flex justify-content-between">' +
        element.todo +
        "<div><i onclick='deleteTodo(" +
        element.id +
        ")' class='bi bi-trash p-4' style='cursor:pointer;'></i><i class='bi bi-pen'></i></div></div>";
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
