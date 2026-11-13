<script setup lang="ts">
defineProps<{ 
  total: number; 
  done: number }>()
</script>

<template>
  <p v-if="total === 0">Ingen oppgaver</p>
  <p v-else-if="total === 1">Én oppgave, {{ done }} ferdig</p>
  <p v-else>{{ total }} oppgaver, {{ done }} ferdig</p>
</template>