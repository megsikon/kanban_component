<template>
  <v-footer height="60px">
    <v-row no-gutters>
      <v-col cols="2">
        <v-btn @click="toggleTheme">toggle theme</v-btn>
      </v-col>
      <v-col cols="2">
        <h1>Kanban Board</h1>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>