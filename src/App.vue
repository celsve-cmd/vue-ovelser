<script setup lang="ts">
import AppBox from './components/AppBox.vue';
import AppCounter from './components/AppCounter.vue'
import ToDoList from './components/ToDoList.vue'
</script>

<template>
  <main>
    <h1>Vue-øvelser</h1>
    <AppCard title="Øvelse 1: Teller">
      <p>Dette er en teller som kan økes og reduseres.</p>
      <AppCounter />

    </AppCard>
    <AppCard title="Øvelse 2: To-do-liste">
      <ToDoList />
    </AppCard>

    <AppCard title="Øvelse 3: AppBox">
      <p>Hei fra slotten</p>
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
    </AppCard>

  </main>
</template>