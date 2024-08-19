<template>
  <v-container draggable="true" @dragstart="dragStart($event)">
    <v-card class="pa-1 ma-1" variant="outlined">
      <v-row no-gutters align-content="end">
        <v-col>
          <v-text-field
            min-width="200px"
            v-model="task.title"
            clearable
            label="Task title"
            variant="underlined"
          />
        </v-col>
        <v-col cols="1">
          <DeleteTaskButton @delete-task="deleteTask(task.id)" />
        </v-col>
      </v-row>
      <v-row>
        <v-autocomplete
          chips
          label="Assigned"
          v-model="task.assigned"
          :items="['Adam', 'Bob', 'Eve', 'Magnus']"
          multiple
          variant="outlined"
        />
      </v-row>
      <v-textarea
        flat
        v-model="task.description"
        clearable
        label="Describe your task"
      />
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import DeleteTaskButton from './DeleteTaskButton.vue';

const props = defineProps({
  task: Object,
});

const emit = defineEmits(['delete-task']);

const deleteTask = () => {
  emit('delete-task', props.task.id);
};

const dragStart = (event: DragEvent) => {
  event.dataTransfer?.setData('text/plain', props.task.id.toString());
};
</script>
