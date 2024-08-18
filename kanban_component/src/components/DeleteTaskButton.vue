<template>
  <v-btn icon="mdi-delete-circle" variant="plain" @click="deleteTask"></v-btn>
</template>

<script setup lang="ts">

const emit = defineEmits(['delete-task']);

const deleteTask = (id: number) => {
  emit('delete-task', id);
};
</script>