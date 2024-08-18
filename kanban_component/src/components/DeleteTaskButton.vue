<template>
  <v-btn size="15px" @click="deleteTask"><v-icon size="x-large" icon="mdi-delete-circle"></v-icon></v-btn>
</template>

<script setup lang="ts">

const emit = defineEmits(['delete-task']);

const deleteTask = (id: number) => {
  emit('delete-task', id);
};
</script>