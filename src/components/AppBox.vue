<script setup lang="ts"></script>

<template>
  <div class="box"><slot /></div>
</template>

<style scoped>
.box {
  border: 2px solid #333;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f8f8f8;
}
</style>