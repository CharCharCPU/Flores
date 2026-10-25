<script setup>
import { ref, onMounted } from 'vue'
import { fetchHomeContent } from '@/backend'
import PageHero from '@/components/PageHero.vue'

const content = ref(null)
const loading = ref(true)

onMounted(async () => {
  content.value = await fetchHomeContent()
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="loading-screen">Loading…</div>

  <div v-else class="home-wrapper">
    
    <section class="hero-split">
      <div class="hero-text">
        <span class="badge">CCS Core Practices</span>
        <h1 class="hero-title">
          <span v-for="(practice, index) in content.corePractices" :key="index" class="practice-line">
            {{ practice }}
          </span>
        </h1>
        <p class="hero-subtitle">{{ content.subtitle }}</p>
        <div class="hero-tagline">
          {{ content.tagline.part1 }} <span class="highlight">{{ content.tagline.highlight1 }}</span> {{ content.tagline.part2 }} <span class="highlight">{{ content.tagline.highlight2 }}</span> {{ content.tagline.part3 }}
        </div>
        <RouterLink :to="content.ctaLink" class="cta-btn">
          {{ content.ctaText }}
        </RouterLink>
      </div>
      <div class="hero-image">
        
        <div class="glow"></div>
      </div>
    </section>

    
    <section class="section-padding bg-darker">
      <div class="container">
        <div class="section-header">
          <h2>Popular Programs</h2>
          <p>Choose a question you want to explore. These sample pathways show how practical work and academic study can connect.</p>
        </div>
        <div class="grid-3">
          <div v-for="program in content.programs" :key="program.id" class="card">
            <div class="card-tag">{{ program.category }}</div>
            <h3 class="card-title">{{ program.title }}</h3>
            <p class="card-desc">{{ program.description }}</p>
            <RouterLink :to="program.link" class="card-link">Explore program →</RouterLink>
          </div>
        </div>
      </div>
    </section>

    
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <h2>Learning in Practice</h2>
          <p>Start with an idea, work through a challenge and learn to explain the choices you make.</p>
        </div>
        <div class="grid-2">
          <div v-for="path in content.pathways" :key="path.title" class="pathway-card">
            <h3>{{ path.title }}</h3>
            <p>{{ path.description }}</p>
            <a href="#" class="card-link">Explore the pathway →</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

.home-wrapper {
  background-color: #0a1f1e;
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


h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.section-header p {
  color: #a0aab2;
  font-size: 1.1rem;
  line-height: 1.6;
}

.hero-split {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 72px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 20px;
  gap: 4rem;
}

.hero-text {
  flex: 1;
}

.badge {
  display: inline-block;
  background: rgba(252, 163, 17, 0.1);
  color: #fca311;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}

.practice-line {
  display: block;
}

.hero-subtitle {
  color: #a0aab2;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 90%;
}

.hero-tagline {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
}

.highlight {
  color: #fca311;
  font-weight: 700;
}

.cta-btn {
  display: inline-block;
  background-color: #fca311;
  color: #0a1f1e;
  padding: 1rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: transform 0.2s, background 0.2s;
}

.cta-btn:hover {
  background-color: #ffb703;
  transform: translateY(-2px);
}

.hero-image {
  flex: 1;
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glow {
  width: 400px;
  height: 400px;
  background: #fca311;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.15;
}


.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.bg-darker .card {
  background: #071514;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  border-color: rgba(252, 163, 17, 0.3);
}

.card-tag {
  color: #fca311;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.card-desc {
  color: #a0aab2;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.card-link {
  color: #fca311;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.2s;
}

.card-link:hover {
  gap: 8px;
}

.pathway-card {
  padding: 2rem;
  border-left: 3px solid #fca311;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0 8px 8px 0;
}

.pathway-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.pathway-card p {
  color: #a0aab2;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}


@media (max-width: 992px) {
  .hero-split {
    flex-direction: column;
    text-align: center;
    padding-top: 4rem;
  }
  .hero-subtitle {
    margin: 0 auto 2rem;
  }
  .hero-image {
    display: none;
  }
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 3rem;
  }
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
</style>