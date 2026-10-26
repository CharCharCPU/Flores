<!-- src/views/AboutView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { fetchAboutContent } from '@/backend'
import PageHero from '@/components/PageHero.vue'

const about = ref(null)
const loading = ref(true)

onMounted(async () => {
  about.value = await fetchAboutContent()
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="loading-screen">Loading…</div>

  <div v-else class="about-page">
    <PageHero
      title="News and Events"
      subtitle="Discover our latest news, upcoming events, and important announcements."
    />

<div class="card-container">

  <div class="card">
    <img class="card-img" src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/12/12072021-Outreach-MOA-1370x550.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Community Engagement MOA Signing Ceremony</h4>
      <p class="card-text">Memorandum of Agreement signing between Central Philippine University (CPU) College...</p>
      <br>
      <a href=" " class="button">See More</a>
    </div>
  </div>
  <br>

  <div class="card">
    <img class="card-img" src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-New-Librarians-843x550.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Congratulations to our New Librarians!</h4>
      <p class="card-text">Congratulations to our New Librarians!  60% CPU passing percentage (1st...</p>
      <br>
      <a href=" " class="button">See More</a>
    </div>
  </div>
  <br>

  <div class="card">
    <img class="card-img" src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-Kation-1080x550.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Kation Technologies hires CCS graduates</h4>
      <p class="card-text">Congratulations to our New Librarians!  60% CPU passing percentage (1st...</p>
      <br>
      <a href=" " class="button">See More</a>
    </div>
  </div>
  <br>
</div>

</div>




  

</template>

<style scoped>

.card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: top;
  display: block;
  border-radius: 2px;
}

.card-container {
  margin: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
  align-items: stretch;
  justify-content: center;
}

.card {
  width:300px;
  background-color: #0a1f1e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.button {
  background-color: #ffb835;
  color: #000000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 100px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.about-page {
  background-color: #0a1f1e;
  color: #ffffff;
  min-height: 100vh;
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

.history-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.history-title {
  position: sticky;
  top: 100px;
}

.history-title h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.gold-line {
  width: 60px;
  height: 4px;
  background-color: #fca311;
  border-radius: 2px;
}

.history-content p {
  color: #a0aab2;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.card {
  background: #0a1f1e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2.5rem;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 163, 17, 0.4);
  box-shadow: 0 10px 30px -10px rgba(252, 163, 17, 0.1);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fca311;
}

.card-desc {
  color: #a0aab2;
  line-height: 1.7;
  font-size: 1rem;
}

.dean-card {
  background: linear-gradient(135deg, #0a1f1e, #071514);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 4rem;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.quote-mark {
  position: absolute;
  top: 10px;
  left: 30px;
  font-size: 8rem;
  color: rgba(252, 163, 17, 0.2);
  font-family: Georgia, serif;
  line-height: 1;
}

.dean-title {
  font-size: 2rem;
  font-weight: 700;
  color: #fca311;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.dean-text p {
  color: #a0aab2;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.dean-signature {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1.1rem;
  position: relative;
  z-index: 1;
}

.dean-signature strong {
  color: #fca311;
  font-size: 1.2rem;
}

.linkages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.linkage-card {
  background: rgba(255, 255, 255, 0.02);
  border-left: 4px solid #fca311;
  padding: 2rem;
  border-radius: 0 12px 12px 0;
  transition: background 0.3s ease;
}

.linkage-card:hover {
  background: rgba(255, 255, 255, 0.05);
}

.linkage-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.linkage-card p {
  color: #a0aab2;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 992px) {
  .history-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .history-title {
    position: static;
  }
}

@media (max-width: 768px) {
  .dean-card {
    padding: 2.5rem;
  }
  .quote-mark {
    font-size: 6rem;
    top: -10px;
    left: 20px;
  }
  .section-header h2 {
    font-size: 2rem;
  }
  .history-title h2 {
    font-size: 2rem;
  }
}
</style>
