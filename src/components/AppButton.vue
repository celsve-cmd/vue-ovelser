<script setup lang="ts">
defineProps<{
    signal: string
}>()
const emit = defineEmits<{
    [key: string]: []
}>()
</script>
<template>
    <button @click="emit(signal)">
        <slot></slot>
    </button>
</template>
<style scoped>
button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #42b983;
    color: white;
    cursor: pointer;
}
</style>