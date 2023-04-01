const todoNames = document.querySelector("#todoName");
const todoDescription = document.querySelector("#todoDescription");
const addTodoButton = document.querySelector("#btn");
const todoDataContainer = document.querySelector("#todoDataContainer");
const doneTodoDataContainer = document.querySelector("#doneTodoDataContainer");
// sending the post request to the crud crud server
const addTodo = () => {
  const todoNamesValue = todoNames.value;
  const todoDescriptionValue = todoDescription.value;
  const obj = { todoNamesValue, todoDescriptionValue, isTodoDone: false };
  const sendPostRequest = async () => {
    const response = await axios.post(
      "https://crudcrud.com/api/5250dde7ce3543a38887c21ca27b96b6/todoList",
      obj
    );
  };
  sendPostRequest();
  alert("Your Todo Data Has Been Added Successfully");
};
// fetching the todo Data from crud crud
window.addEventListener("DOMContentLoaded", async () => {
  const getTodosData = await axios.get(
    "https://crudcrud.com/api/5250dde7ce3543a38887c21ca27b96b6/todoList"
  );
  const getTodosDatainStringFormat = getTodosData.data;
  showUsersOnScreen(getTodosDatainStringFormat);
});
// fucntion for showing the todo data on screen
const showUsersOnScreen = (todoList) => {
  for (let i = 0; i < todoList.length; i++) {
    const unorderedList = document.createElement("ul");
    const list = document.createElement("li");
    const eidtButton = document.createElement("button");
    eidtButton.innerText = "OK";
    list.innerHTML = `${todoList[i].todoNamesValue}--> ${todoList[i].todoDescriptionValue}--> ${todoList[i].isTodoDone}`;
    list.appendChild(eidtButton);
    unorderedList.appendChild(list);
    todoDataContainer.style.backgroundColor = "violet";
    doneTodoDataContainer.style.backgroundColor = "green";
    if (todoList[i].isTodoDone) {
      doneTodoDataContainer.appendChild(unorderedList);
    } else {
      todoDataContainer.appendChild(unorderedList);
    }
    eidtButton.addEventListener("click", () => {
      handleEdit(todoList[i]);
    });
  }
};
const handleEdit = (details) => {
  updateTodo(details);
  alert("data edited successfully");
};

const updateTodo = async (details) => {
  const postData = await axios.put(
    `https://crudcrud.com/api/5250dde7ce3543a38887c21ca27b96b6/todoList/${details._id}`,
    {
      todoNamesValue: details.todoNamesValue,
      todoDescriptionValue: details.todoDescriptionValue,
      isTodoDone: true,
    }
  );
  return postData;
};
