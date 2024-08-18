<template>
  <v-container draggable="true" @dragstart="dragStart($event, task)">
    <v-card class="pa-1 ma-1" variant="outlined">
      <v-row no-gutters align-content="end">
        <v-col >
          <v-text-field min-width="200px" v-model="task.title" clearable label="Task title" variant="underlined"></v-text-field>
        </v-col>
        <v-col cols="1">
          <DeleteTaskButton @delete-task="deleteTask"/>
        </v-col>
        <v-textarea flat v-model="task.description" clearable label="Describe your task"></v-textarea>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import DeleteTaskButton from './DeleteTaskButton.vue';

const props = defineProps({
  task: Object,
});

const emit = defineEmits(['delete-task']);

const deleteTask = (id: number) => {
  emit('delete-task', id);
};

const dragStart = (event: any, task: any) => {
  event.dataTransfer.setData('text/plain', task.id);
};
</script>