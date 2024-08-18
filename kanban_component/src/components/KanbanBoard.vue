<template>
  <v-scroll>
    <v-container >
      <v-alert v-if="error" closable v-on:click:close="error=false" text="You must enter a unique name" type="error"></v-alert>
      <AddTaskButton @add-task="addNewTask"/>
      <v-row>
        <KanbanColumn
          v-for="status in columnStatuses"
          :key="status"
          :status="status"
          :tasks="tasks.filter((task: any) => task.status === status)"
          @move-task="moveTask"
          @delete-task="deleteTask"
          class="ma-2 pa-2">
        </KanbanColumn>
      </v-row>
    </v-container>
  </v-scroll>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import KanbanColumn from './KanbanColumn.vue';
import AddTaskButton from './AddTaskButton.vue';
//import AddColumn from './AddColumn.vue';

const tasks = ref([
  { id: 1, title: 'Styling', status: 'To Do', assigned: [], description: '' },
  { id: 2, title: 'Functionality', status: 'In Progress', assigned: ['Magnus'], description: '' },
  { id: 3, title: 'Setup', status: 'Done', assigned: [], description: '' },
]);

const columnStatuses = ref(['New', 'To Do', 'In Progress', 'Done']);

const error = ref(false);

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
  tasks.value = tasks.value.filter((task) => task.id != id);
};

const moveTask = (taskId: number, newStatus: string) => {
  const task = tasks.value.find((task) => task.id === taskId);
  if (task) {
    task.status = newStatus;
  }
};

// Add the following on line 4: <AddColumn @columnSubmitted="handleColumnSubmitted"/>
// Add column
const handleColumnSubmitted = (columnData: string) => {
  error.value = false;
  for (let i = 0; i < columnStatuses.value.length; i++) {
    if (columnStatuses.value[i].toUpperCase() == columnData.toUpperCase()) {
      error.value = true;
      console.log('you must choose another name')
      return;
    }
  }
  columnStatuses.value.push(columnData)
};
</script>