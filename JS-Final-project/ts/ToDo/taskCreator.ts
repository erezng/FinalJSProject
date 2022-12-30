import {
  tododesc,
  tasks,
  btntodo,
  click,
  div,
  rowstr,
  button,
  btn,
  deleteIcon,
  successIcon,
  btnDanger,
  inputstr,
  editIcon,
  btnSuccess,
  btnWarn,
  col,
  desc,
} from "./../conststring.js";
import { Task } from "./task.js";
import { TaskManager, tm } from "./task-manager.js";

const tasksDiv = document.getElementById(tasks) as HTMLDivElement;
const todoDescription = document.getElementById(tododesc) as HTMLInputElement;
const btnAddTodo = document.getElementById(btntodo) as HTMLButtonElement;
//add task
btnAddTodo.addEventListener(click, () => {
  let text = todoDescription.value;
  let task = new Task(text);
  //add to task-array
  tm.addTask(task);
  //ass to html
  addTaskToHTML(task);
});
function addTaskToHTML(task: Task) {
  let row = document.createElement(div);
  row.classList.add("task", rowstr, "bg-primary");
  row.id = task.timeStamp;
  let input = document.createElement(inputstr);
  input.classList.add("col-10");
  input.placeholder = desc;
  input.disabled = true;
  input.value = task.description;

  input.addEventListener(inputstr, () => {
    task.description = input.value;
    tm.updateTask(task);
  });

  let btnEdit = document.createElement(button);
  btnEdit.classList.add(btn, btnWarn, col, "text-light");
  btnEdit.innerHTML = editIcon;
  btnEdit.addEventListener(click, () => {
    input.disabled = !input.disabled;
  });

  let btnDelete = document.createElement(button);
  btnDelete.classList.add(btn, btnDanger, col);
  btnDelete.innerHTML = deleteIcon;
  btnDelete.addEventListener(click, () => {
    tm.removeTask(task.timeStamp);
    deleteTaskFromHTML(task);
  });

  let btnDone = document.createElement(button);
  btnDone.classList.add(btn, btnSuccess, col);
  btnDone.innerHTML = successIcon;
  btnDone.addEventListener(click, () => {
    tm.complitedTask(task);
    row.classList.toggle(btnSuccess);
  });

  row.appendChild(input);
  row.appendChild(btnEdit);
  row.appendChild(btnDelete);
  row.appendChild(btnDone);

  tasksDiv.appendChild(row);
}
function deleteTaskFromHTML(task: Task) {
  document.getElementById(task.timeStamp)?.remove();
}
