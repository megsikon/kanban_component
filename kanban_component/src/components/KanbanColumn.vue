<template>
  <v-col>
    <v-card variant="outlined">
      <v-sheet @dragover.prevent @drop="drop($event)">
        <v-row class="ma-1 pa-1">
          <h2 class="font-bold mb-2 text-decoration-underline">{{ status }}</h2>
        </v-row>
        <v-row style="min-height: 525px; min-width: 275px;">
          <KanbanTask
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @delete-task="deleteTask(task.id)">
          </KanbanTask>
        </v-row>
      </v-sheet>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import KanbanTask from './KanbanTask.vue';

const props = defineProps({
  status: String,
  tasks: Array,
});

const emit = defineEmits(['move-task', 'delete-task']);

const deleteTask = (id: number) => {
  emit('delete-task', id);
};

const drop = (event: any) => {
  const taskId = event.dataTransfer.getData('text/plain');
  emit('move-task', parseInt(taskId, 10), props.status);
};
</script>