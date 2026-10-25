<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
#app {
  font-family: var(--font-body);
  color: var(--ink);
  background-color: var(--paper);
  min-height: 100vh;
}
</style>
