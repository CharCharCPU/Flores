<!-- src/views/BsdmiaView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { fetchProgramDetails } from '@/backend'

const program = ref(null)
const loading = ref(true)

onMounted(async () => {
  program.value = await fetchProgramDetails('bsdmia')
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="loading-screen">Loading…</div>

  <div v-else class="bsdmia-page-container">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="bg-shape">
        <div class="bg-shape shape-gold"></div>
        <div class="shape-dark-green"></div>
      </div>

      <div class="hero-content">
        <div class="hero-text">
          <h1>{{ program.hero.title }}</h1>
          <p>{{ program.hero.description }}</p>

          <div class="hero-buttons">
            <a href="#objectives" class="btn btn-outline">{{ program.hero.buttons.primary }}</a>
            <a href="#campus-life" class="btn btn-solid">{{ program.hero.buttons.secondary }}</a>
          </div>
        </div>

        <div class="hero-logo">
          <div class="logo-box">
            <img :src="program.hero.logo.image" alt="MIDAS Logo" />
          </div>
          <h3>{{ program.hero.logo.title }}</h3>
        </div>
      </div>
    </section>

    <!-- CONTENT WRAPPER -->
    <div class="content-wrapper">
      <!-- PROGRAM EDUCATIONAL OBJECTIVES -->
      <section id="objectives" class="section-block">
        <h2 class="section-title">Program Educational Objectives</h2>
        <ul class="custom-bullets">
          <li v-for="(objective, index) in program.objectives" :key="index">
            {{ objective }}
          </li>
        </ul>
      </section>

      <!-- PROGRAM OUTCOMES -->
      <section class="section-block">
        <h2 class="section-title">Program Outcomes</h2>
        <p class="ched-header">{{ program.outcomes.header }}</p>
        <p class="text-content" style="margin-bottom: 1rem">{{ program.outcomes.intro }}</p>
        <ul class="custom-bullets">
          <li v-for="(outcome, index) in program.outcomes.list" :key="index" v-html="outcome"></li>
        </ul>
      </section>

      <!-- CURRICULUM RATIONALE & DESCRIPTION -->
      <section class="section-block">
        <h2 class="section-title">Curriculum Rationale & Description</h2>
        <div class="text-content">
          <h3 class="sub-title">{{ program.rationale.title1 }}</h3>
          <p>{{ program.rationale.text1 }}</p>

          <h3 class="sub-title">{{ program.rationale.title2 }}</h3>
          <p>{{ program.rationale.text2 }}</p>
        </div>
      </section>

      <!-- STUDENT ORGANIZATION -->
      <section id="campus-life" class="section-block">
        <h2 class="section-title">Student Organization</h2>

        <div class="org-banner">
          <!-- The angled gold background -->
          <div class="org-gold-bg"></div>

          <div class="org-container">
            <!-- Left Side: Logo & Name -->
            <div class="org-left">
              <div class="org-logo-card">
                <img :src="program.hero.logo.image" alt="MIDAS Logo" />
              </div>
              <h3 class="org-title">{{ program.organization.name }}</h3>
            </div>

            <!-- Right Side: Description -->
            <div class="org-right">
              <p>{{ program.organization.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- GRADUATE OUTCOMES TABLE -->
      <section class="section-block">
        <h2 class="section-title">Graduate Outcomes</h2>
        <div class="table-responsive">
          <table class="outcomes-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Graduate Outcomes</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="outcome in program.graduateOutcomes" :key="outcome.code">
                <td>{{ outcome.code }}</td>
                <td>{{ outcome.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.bsdmia-page-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #ffffff;
  background-color: #0a1f1e;
  scroll-behavior: smooth;
}

.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0a1f1e;
  color: #ffffff;
  font-size: 1.2rem;
}

/* HERO SECTION */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #0a1f1e;
  padding: 80px 0;
}

.bg-shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.shape-gold {
  background-color: #fca311;
  clip-path: polygon(0 0, 100% 0, 30% 100%, 0 100%);
  z-index: 2;
}

.shape-dark-green {
  background-color: #071514;
  clip-path: polygon(100% 0, 100% 100%, 30% 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  gap: 2rem;
}

.hero-text {
  flex: 1;
  color: white;
  max-width: 600px;
  text-align: left;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-text p {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  color: #0a1f1e;
  font-weight: 500;
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-outline {
  background-color: transparent;
  color: #0a1f1e;
  border: 2px solid transparent;
}

.btn-outline:hover {
  border-color: #0a1f1e;
}

.btn-solid {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-solid:hover {
  background-color: #0a1f1e;
  color: #ffffff;
}

/* Hero Logo Section */
.hero-logo {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
}

.logo-box {
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.logo-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.hero-logo h3 {
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.1rem;
  max-width: 250px;
  line-height: 1.4;
}

/* --- STUDENT ORGANIZATION BANNER --- */
.org-banner {
  position: relative;
  width: 100%;
  background-color: #071514; /* Dark teal base */
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* The gold angled background */
.org-gold-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
  height: 100%;
  background-color: #fca311; /* Global Gold */
  /* Creates the diagonal cut on the right side */
  clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
  z-index: 1;
}

.org-container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 4rem;
}

/* Left Side Styles */
.org-left {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.org-logo-card {
  width: 220px;
  height: 220px;
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
}

.org-logo-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.org-title {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.4;
  margin: 0;
}

/* Right Side Styles */
.org-right {
  flex: 1;
  padding-left: 2rem;
}

.org-right p {
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
  text-align: justify;
}

/* CONTENT WRAPPER & SECTIONS */
.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #0a1f1e;
}

.section-block {
  margin-bottom: 4rem;
  scroll-margin-top: 80px;
}

.section-title {
  text-align: center;
  font-size: 1.8rem;
  color: #fca311;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sub-title {
  font-size: 1.2rem;
  color: #ffffff;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.text-content {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #a0aab2;
}

.text-content p {
  margin-bottom: 1rem;
  text-align: justify;
}

.ched-header {
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #ffffff;
  font-style: italic;
}

.custom-bullets {
  padding-left: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #a0aab2;
}

.custom-bullets > li {
  margin-bottom: 1rem;
}

/* TABLE SECTION */
.table-responsive {
  overflow-x: auto;
}

.outcomes-table {
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.outcomes-table th,
.outcomes-table td {
  padding: 1.2rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  line-height: 1.5;
  color: #a0aab2;
}

.outcomes-table th {
  background-color: rgba(255, 255, 255, 0.05);
  font-weight: 600;
  color: #ffffff;
  width: 15%;
}

.outcomes-table td:first-child {
  font-weight: bold;
  color: #fca311;
  width: 15%;
}

/* Mobile Responsiveness */
@media (max-width: 900px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    text-align: center;
    margin-bottom: 3rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .bg-shape,
  .shape-gold,
  .shape-dark-green {
    clip-path: none;
    height: 50%;
  }

  .shape-dark-green {
    top: 50%;
  }

  .outcomes-table th,
  .outcomes-table td {
    padding: 0.8rem;
  }

  /* Organization Banner Mobile */
  .org-gold-bg {
    width: 100%;
    height: 45%;
    clip-path: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .org-container {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 2rem;
  }

  .org-left { 
    flex: 1;
  }

  .org-title {
    color: #0a1f1e;
  }

  .org-right {
    padding-left: 0;
    text-align: center;
  }

  .org-right p {
    text-align: center;
  }
}
</style>
