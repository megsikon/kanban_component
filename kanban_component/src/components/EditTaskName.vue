<template>
  <v-btn @click="editTaskName">Edit name</v-btn>
</template>

<script setup lang="ts">
const emit = defineEmits(['edit-task-name']);

const editTaskName = (id: number) => {
  emit('edit-task-name', id);
};
</script>
