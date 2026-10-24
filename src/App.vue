<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from './router'
</script>

<template>
  <div id="app">
    
    <nav class="ccs-navbar">
      <div class="nav-container">
        
        <div class="nav-logo"></div>

        <ul class="nav-links">

          <li><RouterLink to="/" active-class="active" >Home</RouterLink></li>
          
          <li><RouterLink to="/about" active-class="active">About Us</RouterLink></li>
          
          <li><RouterLink to="/programs" active-class="active">Academic Programs</RouterLink></li>
          
          <li><RouterLink to="/faculty" active-class="active">Faculty and Staff</RouterLink></li>
          
          <li><RouterLink to="/news" active-class="active">Event Calendar</RouterLink></li>
          
          <li><RouterLink to="/contact" active-class="active">Contact Us</RouterLink></li>
        </ul>
      </div>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>

  </div>
</template>

<style>

{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.ccs-navbar {
  width: 100%;
  background-color: rgba(25, 35, 50, 0.85); 
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
}

.nav-logo {
  flex: 1; 
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #d4af37; 
}

.nav-links a.active {
  color: #f1c40f;
}

.main-content {
  flex-grow: 1;
}

@media (max-width: 900px) {
  .ccs-navbar {
    padding: 1rem;
    position: relative; 
    background-color: #192332;
  }

  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
