export class TaskManager {
    //props
    tasks = [];
    //methods:
    //add
    addTask(task) {
        this.tasks.push(task);
    }
    //remove
    removeTask(timestamp) {
        //find the task by timestamp
        let index = this.tasks.findIndex((t) => t.timeStamp === timestamp);
        this.tasks.splice(index, 1);
    }
    //update
    updateTask(task) {
        let index = this.tasks.findIndex((t) => t.timeStamp === task.timeStamp);
        this.tasks.splice(index, 1, task);
    }
    //complited
    complitedTask(task) {
        let index = this.tasks.findIndex((t) => t.timeStamp === task.timeStamp);
        task.description = "Complited! " + task.description;
        this.tasks.splice(index, 1, task);
    }
}
export let tm = new TaskManager();
