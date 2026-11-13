<script setup lang="ts">
import { ref } from 'vue'
import TodoForm from './ToDoForm.vue'
import TodoItem from './ToDoItem.vue'
import TodoStats from './ToDoStats.vue'
import AppModal from './AppModal.vue'
import type { Task } from '../types'

const tasks = ref<Task[]>([
    { id: 1, text: 'Kjøpe kaffe', done: false },
    { id: 2, text: 'Skrive tirsdagens kode', done: true },
    { id: 3, text: 'Markere en oppgave som ferdig', done: false },
    { id: 4, text: 'Slette en oppgave', done: false }
])
const newTask = ref('')
const isDeleteOpen = ref(false)
const taskToDelete = ref<number | null>(null)
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
function editTask(id: number) {
    const task = tasks.value.find((t) => t.id === id)
    if (task) {
        const newText = prompt('Rediger oppgaven:', task.text)
        if (newText !== null) {
            task.text = newText.trim()
        }
    }
}

function askDelete(id: number) {
  taskToDelete.value = id
  isDeleteOpen.value = true
}
function confirmDelete() {
  if (taskToDelete.value !== null) removeTask(taskToDelete.value)
  isDeleteOpen.value = false
}
</script>

<template>

    <section class="todo">
        <h2>Oppgaver</h2>

        <TodoForm v-model="newTask" @add="addTask" />

        <p v-if="tasks.length === 0">Ingen oppgaver ennå.</p>
        <ul v-else>
            <li v-for="task in tasks" :key="task.id">
                <TodoItem :task="task" @toggle="toggleTask" @remove="askDelete" @edit="editTask" />
            </li>
        </ul>

        <TodoStats :total="tasks.length" :done="tasks.filter((t) => t.done).length" />
        <AppModal v-if="isDeleteOpen" @close="isDeleteOpen = false">
            <h2>Er du sikker?</h2>
            <p>Oppgaven slettes permanent.</p>
            <button @click="confirmDelete">Ja, slett</button>
        </AppModal>
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

li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
</style>