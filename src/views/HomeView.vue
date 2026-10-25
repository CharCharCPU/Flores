<!-- src/views/HomeView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { fetchHomeContent } from '@/backend'

const content = ref(null)
const loading = ref(true)

onMounted(async () => {
  content.value = await fetchHomeContent()
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="loading-screen">Loading…</div>

  <div v-else class="home-hero">
    <!-- Background Image overlay -->
    <div class="bg-image"></div>

    <div class="hero-content container">
      <p class="hero-subtitle">{{ content.subtitle }}</p>

      <div class="core-practices">
        <h1 v-for="practice in content.corePractices" :key="practice" class="practice-word">
          {{ practice }}
        </h1>
      </div>

      <p class="hero-tagline">
        {{ content.tagline.part1 }}
        <span class="highlight">{{ content.tagline.highlight1 }}</span>
        {{ content.tagline.part2 }}
        <span class="highlight">{{ content.tagline.highlight2 }}</span>
        {{ content.tagline.part3 }}
      </p>

      <RouterLink :to="content.ctaLink" class="cta-button">
        {{ content.ctaText }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home-hero {
  position: relative;
  min-height: calc(100vh - 64px);
  background-color: --main-soft;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 4rem 0;
}

/* Background Image Setup */
.bg-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  background-image: url('@/assets/ccs-bg.jpg');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  /* Darkens the image slightly to ensure text pops */
  mask-image: linear-gradient(to left, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to left, black 50%, transparent 100%);
  z-index: 1;
}

/* Content Container */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* Typography */
.hero-subtitle {
  color: #a0aab2; /* Light gray */
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
}

.core-practices {
  margin-bottom: 2rem;
}

.practice-word {
  color: #ffffff;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 0.95;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Tagline */
.hero-tagline {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
}

.highlight {
  color: #fca311; /* Orange/Gold color from the image */
  font-weight: 700;
}

/* Call to Action Button */
.cta-button {
  display: inline-block;
  background-color: #fca311;
  color: #000000;
  padding: 1rem 2.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.cta-button:hover {
  background-color: #e5910b;
  transform: translateY(-2px);
}

/* Loading State */
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0d2b2a;
  color: #ffffff;
  font-size: 1.2rem;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .bg-image {
    width: 100%;
    opacity: 0.3; /* Fades image on smaller screens for readability */
    mask-image: none;
    -webkit-mask-image: none;
  }
}

@media (max-width: 768px) {
  .practice-word {
    font-size: 3rem;
  }
  .hero-tagline {
    font-size: 1.2rem;
  }
}
</style>
