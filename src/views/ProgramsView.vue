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
  <div v-if="loading" class="loading-screen">Loading…</div>

  <div v-else class="programs-page">
    <PageHero
      title="Academic Programs"
      subtitle="Discover the pathways we offer. Explore how practical work and academic study connect to prepare you for the future."
    />

    <section class="section-padding">
      <div class="container">
        <div class="grid-3">
          <div v-for="program in programs" :key="program.id" class="card">
            <div class="card-tag">{{ program.category }}</div>
            <h3 class="card-title">{{ program.title }}</h3>
            <p class="card-desc">{{ program.description }}</p>
            <RouterLink :to="program.link" class="card-link">Explore program →</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
  .programs-page {
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

  /* Grid & Cards (Wiser Style) */
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
      box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
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
