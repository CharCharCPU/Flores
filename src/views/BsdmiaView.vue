<!-- src/views/BsdmiaView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { fetchProgramDetails } from '@/backend'
import PageHero from '@/components/PageHero.vue'

const program = ref(null)
const loading = ref(true)

onMounted(async () => {
  program.value = await fetchProgramDetails('bsdmia')
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="loading-screen">Loading…</div>

  <div v-else class="program-page">
    <PageHero :title="program.title" :subtitle="program.description" />

    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <h2>Program Educational Objectives</h2>
          <p>What you will achieve as a graduate of the BSDMIA program.</p>
        </div>
        <div class="grid-2">
          <div v-for="(objective, index) in program.objectives" :key="index" class="card">
            <div class="card-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <p class="card-desc">{{ objective }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Outcomes & Rationale (Split Layout) -->
    <section class="section-padding bg-darker">
      <div class="container split-layout">
        <!-- Outcomes -->
        <div class="outcomes-list">
          <h2 class="section-title">Program Outcomes</h2>
          <ul class="styled-list">
            <li v-for="(outcome, index) in program.outcomes" :key="index">
              <span class="list-icon">✓</span>
              {{ outcome }}
            </li>
          </ul>
        </div>

        <!-- Rationale -->
        <div class="rationale-content">
          <h2 class="section-title">Curriculum Rationale</h2>
          <p>{{ program.rationale }}</p>
        </div>
      </div>
    </section>

    <!-- Careers & Industries -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <h2>Career Opportunities</h2>
          <p>Graduates can pursue careers in various creative and technology-driven industries.</p>
        </div>

        <div class="careers-layout">
          <div class="career-roles">
            <h3 class="sub-title">Job Roles</h3>
            <div class="tags">
              <span v-for="role in program.careers" :key="role" class="tag">{{ role }}</span>
            </div>
          </div>

          <div class="career-industries">
            <h3 class="sub-title">Industries</h3>
            <ul class="industry-list">
              <li v-for="industry in program.industries" :key="industry">{{ industry }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Organization -->
    <section class="section-padding bg-darker">
      <div class="container">
        <div class="org-card">
          <div class="org-content">
            <h2 class="section-title">Student Organization</h2>
            <h3 class="org-name">{{ program.organization.name }}</h3>
            <p class="org-desc">{{ program.organization.description }}</p>
          </div>
          <div class="org-graphic">
            <!-- Decorative element -->
            <div class="glow"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.program-page {
  background-color: #0a1f1e; /* Dark Teal */
  color: #ffffff;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-padding {
  padding: 6rem 0;
}

.bg-darker {
  background-color: #071514;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.section-header p {
  color: #a0aab2;
  font-size: 1.1rem;
  line-height: 1.6;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.card {
  background: #0a1f1e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 163, 17, 0.4);
}

.card-number {
  font-size: 2rem;
  font-weight: 900;
  color: #fca311; /* Gold */
  line-height: 1;
}

.card-desc {
  color: #a0aab2;
  line-height: 1.6;
  margin: 0;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.styled-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.styled-list li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #a0aab2;
  line-height: 1.6;
}

.list-icon {
  color: #fca311;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6;
}

.rationale-content p {
  color: #a0aab2;
  line-height: 1.8;
  font-size: 1.05rem;
}

.careers-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
}

.sub-title {
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  background: rgba(252, 163, 17, 0.1);
  color: #fca311;
  border: 1px solid rgba(252, 163, 17, 0.3);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  transition:
    background 0.2s,
    transform 0.2s;
}

.tag:hover {
  background: rgba(252, 163, 17, 0.2);
  transform: scale(1.05);
}

.industry-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.industry-list li {
  color: #a0aab2;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.industry-list li:last-child {
  border-bottom: none;
}

/* Organization Card */
.org-card {
  background: linear-gradient(135deg, #0a1f1e, #071514);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 4rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  position: relative;
  overflow: hidden;
}

.org-content {
  position: relative;
  z-index: 2;
  flex: 2;
}

.org-name {
  font-size: 1.5rem;
  color: #fca311;
  margin-bottom: 1rem;
}

.org-desc {
  color: #a0aab2;
  line-height: 1.8;
  font-size: 1.05rem;
  margin: 0;
}

.org-graphic {
  position: relative;
  flex: 1;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glow {
  width: 200px;
  height: 200px;
  background: #fca311;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
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

@media (max-width: 992px) {
  .split-layout,
  .careers-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .org-card {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  .org-graphic {
    display: none;
  }
  .section-header h2 {
    font-size: 2rem;
  }
}
</style>
