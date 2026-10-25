<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ccsLogo from '@/assets/ccs-logo.png'

const isProgramsOpen = ref(false)
const togglePrograms = () => {
  isProgramsOpen.value = !isProgramsOpen.value
}
</script>

<template>
  <nav class="css-navbar">
    <div class="nav-container">
      <!-- Logo -->
      <RouterLink to="/" class="nav-logo-link">
        <img :src="ccsLogo" alt="CCS Logo" class="nav-logo-img" />
      </RouterLink>

      <ul class="nav-links">
        <li><RouterLink to="/" active-class="active">Home</RouterLink></li>
        <li><RouterLink to="/about" active-class="active">About Us</RouterLink></li>

        <!-- Academic Programs dropdown -->
        <li
          class="dropdown"
          @mouseenter="isProgramsOpen = true"
          @mouseleave="isProgramsOpen = false"
        >
          <button class="dropdown-toggle" @click="togglePrograms">
            Academic Programs
            <span class="arrow">▼</span>
          </button>
          <ul v-if="isProgramsOpen" class="dropdown-menu">
            <li><RouterLink to="/programs" active-class="active">All Programs</RouterLink></li>
            <li class="divider"></li>
            <li>
              <RouterLink to="/programs/information-technology" active-class="active"
                >BS Information Technology</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/programs/computer-science" active-class="active"
                >BS Computer Science</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/programs/digital-media-and-interactive-arts" active-class="active"
                >BS Digital Media & Interactive Arts</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/programs/library-and-information-science" active-class="active"
                >BS Library & Information Science</RouterLink
              >
            </li>
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
  background-color: #0a1f1e; /* Dark Teal */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 72px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo-link {
  display: flex;
  align-items: center;
}

.nav-logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 28px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #fca311; /* Gold */
}

.nav-links a.active {
  color: #fca311;
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
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
}

.dropdown-toggle:hover {
  color: #fca311;
}

.arrow {
  font-size: 0.6rem;
  color: #fca311;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #0a1f1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  list-style: none;
  margin: 0;
  padding: 8px 0;
  min-width: 280px;
  z-index: 200;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  display: block;
  padding: 12px 20px;
  color: #ffffff;
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s;
}

.dropdown-menu a:hover {
  background: rgba(252, 163, 17, 0.1);
  color: #fca311;
}

.dropdown-menu a.active {
  color: #fca311;
  font-weight: 600;
}

.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 8px 0;
}
</style>
