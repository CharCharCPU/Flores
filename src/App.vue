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

<style>
#app {
  font-family: var(--font-body);
  color: var(--ink);
  background-color: var(--paper);
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  background-color: #0a1f1e;
}
</style>
