angular
  .module('todo', [])
  .controller('TodoController', TodoController);

function TodoController() {
  this.tasks = [];
  this.createTask = () => {
    this.tasks.push(this.newTask);
    this.newTask='';
  };
  this.deleteTask = (index) => {
    this.tasks.splice(index, 1);
  }
}
