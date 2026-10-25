<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <section class="page-hero">
    <h1 class="page-hero-title">{{ title }}</h1>
    <p v-if="subtitle" class="page-hero-subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--main-soft) 0%, var(--paper) 100%);
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 0 0 20px 20px;
  margin-bottom: 2rem;
}

.page-hero-title {
  font-family: var(--font-head);
  color: var(--sub-dark);
  margin-bottom: 0.75rem;
}

.page-hero-subtitle {
  font-size: 1.15rem;
  color: var(--muted);
  max-width: 700px;
  margin: 0 auto;
}
</style>
