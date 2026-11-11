<script setup lang="ts">
import { ref } from 'vue'
import TodoForm from './ToDoForm.vue'
import TodoItem from './ToDoItem.vue'
import TodoStats from './ToDoStats.vue'
import type { Task } from '../types'

const tasks = ref<Task[]>([
  { id: 1, text: 'Kjøpe kaffe', done: false },
  { id: 2, text: 'Skrive tirsdagens kode', done: true },
])
const newTask = ref('')
let nesteId = 3

function addTask() {
  const text = newTask.value.trim()
  if (!text) return

  tasks.value.push({ id: nesteId++, text, done: false })
  newTask.value = ''
}

function toggleTask(id: number) {
  const task = tasks.value.find((t) => t.id === id)
  if (task) task.done = !task.done
}

function removeTask(id: number) {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}
</script>

<template>
  <section class="todo">
    <h2>Oppgaver</h2>

    <TodoForm v-model="newTask" @add="addTask" />

    <p v-if="tasks.length === 0">Ingen oppgaver ennå.</p>
    <ul v-else v-for="task in tasks" :key="task.id">
        <TodoItem 
        :task="task" @toggle="toggleTask" @remove="removeTask" 
        />
    </ul>

    <TodoStats :total="tasks.length" :done="tasks.filter((t) => t.done).length" />
  </section>
</template>

<style scoped>
.todo {
  max-width: 400px;
  margin: 0 auto;
}
ul {
  list-style: none;
  padding: 0;
}
</style>