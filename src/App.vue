<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from './router'
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/about">About</router-link>
        <router-link to="/programs">Programs</router-link>
      </li>
      <li></li>
    </ul>
  </nav>

  <router-view />
</template>

<style scoped></style>
