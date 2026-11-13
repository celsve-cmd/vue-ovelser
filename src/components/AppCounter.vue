<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const step = ref(1)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}
</script>

<template>
  <h2>Teller</h2>
  <div class="counter">
    <p>Teller: {{ count }}</p>
    <input type="number" v-model.number="step" />
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="reset">Nullstill</button>
  </div>
</template>

<style scoped>
.counter {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  max-width: 260px;
}
</style>