<script setup lang="ts">
const model = defineModel<string>({ default: '' })
const emit = defineEmits<{ add: [] }>()
</script>

<template>
  <form @submit.prevent="emit('add')">
    <input v-model="model" placeholder="Skriv en oppgave..." />
    <button type="submit">Legg til</button>
  </form>
</template>