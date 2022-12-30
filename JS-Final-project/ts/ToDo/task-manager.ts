import { Task } from "./task.js";

export class TaskManager {
  //props
  tasks: Task[] = [];
  //methods:
  //add
  addTask(task: Task) {
    this.tasks.push(task);
  }
  //remove
  removeTask(timestamp: string) {
    //find the task by timestamp
    let index = this.tasks.findIndex((t) => t.timeStamp === timestamp);
    this.tasks.splice(index, 1);
  }
  //update
  updateTask(task: Task) {
    let index = this.tasks.findIndex((t) => t.timeStamp === task.timeStamp);
    this.tasks.splice(index, 1, task);
  }
  //complited
  complitedTask(task: Task) {
    let index = this.tasks.findIndex((t) => t.timeStamp === task.timeStamp);
    task.description = "Complited! " + task.description;
    this.tasks.splice(index, 1, task);
  }
}

export let tm = new TaskManager();
