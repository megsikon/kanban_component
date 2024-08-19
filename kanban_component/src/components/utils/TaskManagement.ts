import { ref } from 'vue';

const tasks = ref([
  { id: 1, title: 'Styling', status: 'To Do', assigned: [], description: '' },
  { id: 2, title: 'Functionality', status: 'In Progress', assigned: ['Magnus'], description: '' },
  { id: 3, title: 'Setup', status: 'Done', assigned: [], description: '' },
]);

const addNewTask = (taskName: string) => {
  const newTask = {
    id: Date.now(),
    title: taskName,
    status: 'New',
    assigned: [],
    description: '',
  };
  tasks.value.push(newTask);
};

const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

const moveTask = (taskId: number, newStatus: string) => {
  const task = tasks.value.find((task) => task.id === taskId);
  if (task) {
    task.status = newStatus;
  }
};

const getTasksByStatus = (status: string) => {
  return tasks.value.filter((task) => task.status === status);
};

export default function useTaskManagement() {
  return {
    tasks,
    addNewTask,
    deleteTask,
    moveTask,
    getTasksByStatus,
  };
}
