<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <h1>Higienização de Sofá Profissional em São Paulo</h1>
        <p>Seu sofá limpo e novo em poucas horas, com o melhor preço da região. Elimine sujeiras, manchas, ácaros e bactérias.</p>
        
        <ul class="benefits-list">
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon"><path d="M20 6L9 17L4 12" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Remove Manchas e Sujeira Pesada</span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon"><path d="M20 6L9 17L4 12" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Elimina Ácaros, Fungos e Bactérias</span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon"><path d="M20 6L9 17L4 12" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Deixa um Cheiro Agradável de Limpeza</span>
          </li>
           <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon"><path d="M20 6L9 17L4 12" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Seguro para Crianças e Animais de Estimação</span>
          </li>
        </ul>

        <ActionButton :href="whatsappLink" type="primary">
          Solicite um Orçamento Grátis
        </ActionButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import ActionButton from '../ui/ActionButton.vue';
import backgroundUrl from '@/assets/fundo-principal.png';

defineProps({
  whatsappLink: {
    type: String,
    required: true,
  },
});

const bgImage = `url(${backgroundUrl})`;
</script>

<style scoped>
.hero {
  background-image: v-bind(bgImage);
  background-size: cover;
  background-position: center;
  padding: 6rem 0;
  text-align: center;
  position: relative;
  color: #fff;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-text {
  max-width: 700px;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
}

.hero p {
  font-size: 1.2rem;
  margin: 1.5rem 0;
  font-weight: 400;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 2rem auto;
  display: inline-block;
  text-align: left;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.check-icon {
  stroke: #fff;
}

/* Responsive */
@media (max-width: 900px) {
  .hero {
    padding: 4rem 0;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
}
</style>