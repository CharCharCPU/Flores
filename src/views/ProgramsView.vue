<script setup>
import { ref, onMounted } from 'vue'
import { fetchAllPrograms } from '@/backend'
import PageHero from '@/components/PageHero.vue'

const programs = ref([])
const loading = ref(true)

onMounted(async () => {
  programs.value = await fetchAllPrograms()
  loading.value = false
})
</script>

<template>
  <div class="programs-page-container">
    <div class="programs-content">
      <h1 class="page-title">Academic Programs</h1>
      <div class="programs-grid">
        <RouterLink to="/programs/bscs" class="program-card">
          <div class="logo-container">
            <img src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/CSS_PNG-1536x1536.png" alt="Computer Science Logo" />
          </div>
          <div class="text-container">
            <h2>Computer<br>Science</h2>
            <p>
              The Computer Science (CS) Program is designed for students who wants to study computing in depth, focusing on the software, the hardware...
            </p>
          </div>
        </RouterLink>

        //IT(Not Clickable for now)
        <div class="program-card disabled">
          <div class="logo-container">
            <img src="https://via.placeholder.com/150/ffffff/d4af37?text=IT+Logo" alt="IT Logo" />
          </div>
          <div class="text-container">
            <h2>Information<br>Technology</h2>
            <p>
              The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems...
            </p>
          </div>
        </div>

        //IS??ari pa ni??(Not Clickable for now)
        <div class="program-card disabled">
          <div class="logo-container">
            <img src="https://via.placeholder.com/150/ffffff/800000?text=IS+Logo" alt="IS Logo" />
          </div>
          <div class="text-container">
            <h2>Information<br>Systems</h2>
            <p>
              The Bachelor of Science in Information System integrates strong business background with advanced training in applying information technology...
            </p>
          </div>
        </div>

        //DMIA(Not Clickable for now)
        <div class="program-card disabled">
          <div class="logo-container">
            <img src="https://via.placeholder.com/150/ffffff/d4af37?text=DMIA+Logo" alt="DMIA Logo" />
          </div>
          <div class="text-container">
            <h2>Digital Media<br>and Interactive Arts</h2>
            <p>
              The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies...
            </p>
          </div>
        </div>

        //BLIS(Not Clickable for now)
        <div class="program-card disabled">
          <div class="logo-container">
            <img src="https://via.placeholder.com/150/ffffff/0056b3?text=BLIS+Logo" alt="BLIS Logo" />
          </div>
          <div class="text-container">
            <h2>Library<br>Information<br>Science</h2>
            <p>
              The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development...
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.programs-page-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f4f6f9;
  padding-top: 100px; 
  padding-bottom: 5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.programs-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  text-align: center;
  color: #333;
  margin-bottom: 3rem;
  font-family: 'Georgia', serif;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  align-items: start;
}

.program-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none; 
  background-color: transparent;
  transition: transform 0.3s ease;
}

.logo-container {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.logo-container img {
  max-height: 100%;
  max-width: 120px;
  object-fit: contain;
}

.text-container {
  background-color: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); 
  height: 100%; 
  width: 100%;
}

.text-container h2 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 500;
}

.text-container p {
  font-size: 0.85rem;
  color: #777;
  line-height: 1.5;
}

.program-card:not(.disabled):hover {
  transform: translateY(-5px);
}

.program-card:not(.disabled):hover .text-container {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid #0056b3; 
}

.program-card.disabled {
  cursor: default;
  opacity: 0.9; 
}
</style>
