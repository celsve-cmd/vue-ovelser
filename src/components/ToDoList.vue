<script setup lang="ts">
import { ref } from 'vue'

type Task = {
  id: number
  text: string
  done: boolean
}

const tasks = ref<Task[]>([
  { id: 1, text: 'Kjøpe kaffe', done: false },
  { id: 2, text: 'Skrive tirsdagens kode', done: true },
])
const newTask = ref('')
const filter = ref('')
let nesteId = 3

function addTask() {
  const text = newTask.value.trim()
  if (!text) return

  tasks.value.push({ id: nesteId++, text, done: false })
  newTask.value = ''
  /*3c. Endre addTask slik at den bruker tasks.value.unshift(...) i stedet for push. 
  Legg til en ny oppgave. 
  Hvor havnet notatet ditt?
  
  -- Notatet havnet øverst i listen, fordi unshift legger til elementer i starten av arrayet, 
  -- mens push legger til elementer på slutten.
  */
}

function toggleTask(task: Task) {
  task.done = !task.done
}

function removeTask(id: number) {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}

</script>

<template>
  <section class="todo">
    <h2>Oppgaver</h2>

    <form @submit.prevent="addTask">
      <input v-model.trim="newTask" placeholder="Skriv en oppgave..." />
      <button type="submit">Legg til</button>
    </form>

    <input v-model.trim="filter" placeholder="Søk i oppgaver..." />
    
    <!--4b. Prøv v-model.lazy på et felt og se når verdien oppdateres.
    
    --Oppdaterer verdien når man trykker enter eller forlater feltet, i stedet for på hver tastetrykk.-->

    <p v-if="tasks.length === 0">Ingen oppgaver ennå.</p>
    <ul v-else>
      <li v-for="task in tasks.filter((t) => t.text.toLowerCase().includes(filter.toLowerCase()))" :key="task.id" :class="{ done: task.done }">
        <input type="checkbox" :checked="task.done" @change="toggleTask(task)" />
        <span>{{ task.text }}</span>
        <input placeholder="notat" />
        <button @click="removeTask(task.id)">Slett</button>
      </li>
    </ul>

    <p>{{ tasks.length }} oppgaver, {{tasks.filter((t) => t.done).length}} ferdig</p>
    <p v-if="tasks.length === 0">Ingen oppgaver ennå.</p>
    <p v-else-if="tasks.length === 1">Én oppgave</p>
    <p v-else>{{ tasks.length }} oppgaver</p>

    <p v-show="tasks.length > 0">{{tasks.filter((t) => t.done).length}} ferdig</p>

    <!--2a. Legg til en linje under lista: {{ tasks.length }} oppgaver, {{tasks.filter((t) => t.done).length}} ferdig.

    2b. Bytt den ut med en v-if / v-else-if / v-else-kjede: «Ingen oppgaver» / «Én oppgave» / «N oppgaver».

    2c. Prøv v-show i stedet for v-if på den ene. Se i DevTools hva som er forskjellen i DOM-en.-->

  </section>
</template>

<style scoped>
.todo {
  max-width: 460px;
}

.done span {
  text-decoration: line-through;
  color: #888;
}

li {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>