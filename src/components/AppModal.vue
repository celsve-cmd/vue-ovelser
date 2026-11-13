<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <div class="overlay">
    <div class="modal">
      <slot />
      <button @click="emit('close')">Lukk</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  min-width: 300px;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
button { margin-top: 1rem; }
</style>