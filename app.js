angular
  .module('to-do', [])
  .controller("ToDoController", ToDoController);

  function ToDoController() {
    this.tasks = ['Walk the cat', 'Eat second breakfast', 'Watch Rocky cutscenes on Youtube since to tired to workout'];

    this.createTask = () => {
      this.tasks.push(this.taskName);
      this.taskName = "";
    };

    this.deleteTask = (index) => {
      this.tasks.splice(index, 1);

    }
  }
