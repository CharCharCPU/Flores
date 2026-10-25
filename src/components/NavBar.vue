<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isProgramsOpen = ref(false)
const togglePrograms = () => {
  isProgramsOpen.value = !isProgramsOpen.value
}
</script>

<template>
  <nav class="css-navbar">
    <div class="nav-container">
      <!-- Logo placeholder (replace with actual logo) -->
      <div class="nav-logo"></div>

      <ul class="nav-links">
        <li><RouterLink to="/" active-class="active">Home</RouterLink></li>
        <li><RouterLink to="/about" active-class="active">About Us</RouterLink></li>

        <!-- Academic Programs dropdown -->
        <li class="dropdown" @mouseenter="isProgramsOpen = true" @mouseleave="isProgramsOpen = false">
          <button class="dropdown-toggle" @click="togglePrograms">
            Academic Programs
            <span class="arrow">▼</span>
          </button>
          <ul v-if="isProgramsOpen" class="dropdown-menu">
            <li><RouterLink to="/programs/bsit" active-class="active">BS Information Technology</RouterLink></li>
            <li><RouterLink to="/programs/bscs" active-class="active">BS Computer Science</RouterLink></li>
            <li><RouterLink to="/programs/bsdmia" active-class="active">BS Digital Media & Interactive Arts</RouterLink></li>
            <li><RouterLink to="/programs/blis" active-class="active">BS Library & Information Science</RouterLink></li>
          </ul>
        </li>

        <li><RouterLink to="/faculty" active-class="active">Faculty and Staff</RouterLink></li>
        <li><RouterLink to="/news" active-class="active">Event Calendar</RouterLink></li>
        <li><RouterLink to="/contact" active-class="active">Contact Us</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.css-navbar {
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo {
  width: 40px;
  height: 40px;
  background-color: var(--main);
  border-radius: 8px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 24px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--ink);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--main);
}

.nav-links a.active {
  color: var(--main);
  font-weight: 600;
}

/* Dropdown */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  background: none;
  border: none;
  font: inherit;
  color: var(--ink);
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
}

.dropdown-toggle:hover {
  color: var(--main);
}

.arrow {
  font-size: 0.7rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 8px 0;
  min-width: 260px;
  z-index: 200;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  display: block;
  padding: 10px 16px;
  color: var(--ink);
  text-decoration: none;
  transition: background 0.2s;
}

.dropdown-menu a:hover {
  background: var(--main-soft);
  color: var(--sub-dark);
}

.dropdown-menu a.active {
  background: var(--main-soft);
  color: var(--sub-dark);
  font-weight: 600;
}
</style>