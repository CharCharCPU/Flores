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

    <!-- HISTORY SECTION -->
    <section class="section-padding">
      <div class="container">
        <div class="history-layout">
          <div class="history-title">
            <h2>Our History</h2>
            <div class="gold-line"></div>
          </div>
          <div class="history-content">
            <p v-for="(paragraph, index) in about.history" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- VISION, MISSION, QUALITY POLICY -->
    <section class="section-padding bg-darker">
      <div class="container">
        <div class="section-header">
          <h2>Vision, Mission & Quality Policy</h2>
          <p>The guiding principles that shape our academic community.</p>
        </div>

        <div class="grid-3">
          <!-- Vision -->
          <div class="card">
            <div class="card-icon">👁️</div>
            <h3 class="card-title">Our Vision</h3>
            <p class="card-desc">{{ about.vision }}</p>
          </div>

          <!-- Mission -->
          <div class="card">
            <div class="card-icon">🎯</div>
            <h3 class="card-title">Our Mission</h3>
            <p class="card-desc">{{ about.mission }}</p>
          </div>

          <!-- Quality Policy -->
          <div class="card">
            <div class="card-icon">⭐</div>
            <h3 class="card-title">Quality Policy</h3>
            <p class="card-desc">{{ about.qualityPolicy }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DEAN'S MESSAGE -->
    <section class="section-padding">
      <div class="container">
        <div class="dean-card">
          <div class="quote-mark">“</div>
          <h2 class="dean-title">Message of the Dean</h2>
          <div class="dean-text">
            <p v-for="(paragraph, index) in about.deanMessage.paragraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>
          <div class="dean-signature">
            <strong>{{ about.deanMessage.signature }}</strong
            ><br />
            {{ about.deanMessage.role }}
          </div>
        </div>
      </div>
    </section>

    <!-- LINKAGES -->
    <section class="section-padding bg-darker">
      <div class="container">
        <div class="section-header">
          <h2>Linkages & Partners</h2>
          <p>Building bridges between the academe and the industry.</p>
        </div>

        <div class="linkages-grid">
          <div v-for="(linkage, index) in about.linkages" :key="index" class="linkage-card">
            <h3>{{ linkage.title }}</h3>
            <p>{{ linkage.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
