<template>
  <section class="hero">
    <div class="container">
      <h1>Higienização Profissional de Sofás e Estofados</h1>
      <p>Dou vida nova aos seus móveis. Rápido, eficaz e acessível.</p>
      <ActionButton :href="whatsappLink" type="secondary">
        Obtenha uma Estimativa Gratuita
      </ActionButton>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import ActionButton from '../ui/ActionButton.vue';

defineProps({
  whatsappLink: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://via.placeholder.com/1200x400);
  background-size: cover;
  background-position: center;
  color: white;
  padding: 10rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: var(--text-color-darker);
}
</style>
