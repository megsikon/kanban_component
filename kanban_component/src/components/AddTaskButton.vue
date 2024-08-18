<template>
  <v-btn >
    Add New Task
    <v-overlay activator="parent" location-strategy="connected" scroll-strategy="close" location="end bottom" origin="auto">
      <v-card >
        <h2 class="ma-2">Add New Task</h2>
        <v-text-field v-model="taskName" type="text" placeholder="Task Name" @keyup.enter="addTask"/>
        <v-btn @click="addTask" block>Add</v-btn>
      </v-card>
    </v-overlay>
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['add-task']);

const taskName = ref('');

const addTask = () => {
  if (taskName.value.trim()) {
    emit('add-task', taskName.value);
    taskName.value = '';
  }
};
</script>