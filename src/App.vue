<script setup lang="ts">
import AppBox from './components/AppBox.vue';
import AppCounter from './components/AppCounter.vue'
import ToDoList from './components/ToDoList.vue'
</script>

<template>
  <main>
    <h1>Vue-øvelser</h1>
    <AppCounter />
    <ToDoList />
    <AppBox>
      <p>Dette er en AppBox.</p>
    </AppBox>
    <AppBox>
      <p>Dette er også en AppBox fra samme komponent, med annet innhold!</p>
      <ul>
        <p>Liste over ting og tang:</p>
        <p>1. Tingeling</p>
        <p>2. Rørtang</p>
        <p>3. Blæretang</p>
      </ul>
    </AppBox>
  </main>
</template>