<template>
  <v-container>
    <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent="onSubmit">
        <v-text-field v-model="columnName" label="Column name"></v-text-field>
        <v-btn class="mt-2" type="submit" block>Add column</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
  <v-alert v-if="error" closable v-on:click:close="error=false" text="You must enter a name" type="error"></v-alert>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const columnName = ref('');

const emit = defineEmits(['columnSubmitted']);

const error = ref(false);

const onSubmit = () => {
  error.value = false;
  if(columnName.value != '') {
    //console.log(columnName.value);
    
    const columnData: string = columnName.value

    emit('columnSubmitted', columnData);

  } else {
    error.value = true;
    console.log("You must enter a name");
  }

  columnName.value = '';
};
</script>