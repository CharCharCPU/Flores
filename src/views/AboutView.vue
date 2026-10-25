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
  <div v-if="loading" class="loading">Loading…</div>
  <div v-else>
    <PageHero
      title="About The College"
      subtitle="Learn more about our mission, vision, and values."
    />
    <div class="about-content container">
      <section class="mission">
        <h2>Our Mission</h2>
        <p>{{ about.mission }}</p>
      </section>

      <section class="vision">
        <h2>Our Vision</h2>
        <p>{{ about.vision }}</p>
      </section>

      <section class="practices">
        <h2>Our Practices</h2>
        <ul>
          <li v-for="(practice, index) in about.practices" :key="index">{{ practice }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-content {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  color: var(--sub-dark);
  border-bottom: 3px solid var(--main);
  padding-bottom: 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

li {
  background: var(--white);
  padding: 1rem 1.5rem;
  border-left: 4px solid var(--highlight);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.loading {
  text-align: center;
  padding: 4rem;
  color: var(--muted);
}
</style>
