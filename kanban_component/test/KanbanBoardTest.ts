export { tasks, addNewTask, deleteTask, moveTask}

var tasks = ([
  { id: 1, title: 'Styling', status: 'To Do', description: '' },
  { id: 2, title: 'Functionality', status: 'In Progress', description: '' },
  { id: 3, title: 'Setup', status: 'Done', description: '' },
]);

const addNewTask = (taskName: string) => {
  const newTask = {
    id: Date.now(),
    title: taskName,
    status: 'New',
    description: '',
  };
  tasks.push(newTask);
};

const deleteTask = (id: number) => {
  tasks = tasks.filter((task) => task.id != id);
};

const moveTask = (taskId: number, newStatus: string) => {
  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    task.status = newStatus;
  }
};