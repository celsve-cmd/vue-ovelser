<script setup lang="ts">
defineProps<{ 
  total: number; 
  done: number }>()
</script>

<template>
  <p>{{ total }} oppgaver, {{ done }} ferdig</p>
</template>