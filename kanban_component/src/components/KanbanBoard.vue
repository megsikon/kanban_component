<template>
  <v-scroll>
    <v-container>
      <v-alert v-if="error" closable @click:close="error=false" text="You must enter a unique name" type="error"></v-alert>
      <AddTaskButton @add-task="addNewTask" />
      <v-row>
        <KanbanColumn
          v-for="status in columnStatuses"
          :key="status"
          :status="status"
          :tasks="getTasksByStatus(status)"
          @move-task="moveTask"
          @delete-task="deleteTask"
          class="ma-2 pa-2"
        />
      </v-row>
    </v-container>
  </v-scroll>
</template>

<script setup lang="ts">
import KanbanColumn from './KanbanColumn.vue';
import AddTaskButton from './AddTaskButton.vue';
import useTaskManagement from './utils/TaskManagement';
import useColumnManagement from './utils/ColumnManagement';

const { tasks, addNewTask, deleteTask, moveTask, getTasksByStatus } = useTaskManagement();
const { columnStatuses, handleColumnSubmitted, error } = useColumnManagement();
</script>
