<script setup lang="ts">
import type { Task } from '../types'

defineProps<{
    task: Task
}>()
const emit = defineEmits<{
    toggle: [id: number]
    remove: [id: number]
}>()
</script>

<template>
  <div class="item">
    <input type="checkbox" :checked="task.done" @change="emit('toggle', task.id)" />
    <span :class="{ done: task.done }">{{ task.text }}</span>
    <button @click="emit('remove', task.id)">Slett</button>
  </div>
</template>



<style scoped>
.item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.done {
  text-decoration: line-through;
  color: #888;
}
</style>