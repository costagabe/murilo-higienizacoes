<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <h1>Higienização de Sofá Profissional em São Paulo</h1>
        <p>Seu sofá limpo e novo em poucas horas, com o melhor preço da região. Elimine sujeiras, manchas, ácaros e bactérias.</p>
        
        <ul class="benefits-list">
          <li>✅ Remove Manchas e Sujeira Pesada</li>
          <li>✅ Elimina Ácaros, Fungos e Bactérias</li>
          <li>✅ Deixa um Cheiro Agradável de Limpeza</li>
          <li>✅ Seguro para Crianças e Animais de Estimação</li>
        </ul>

        <ActionButton :href="whatsappLink" type="primary">
          Solicite um Orçamento Grátis
        </ActionButton>
      </div>
      <div class="hero-image">
        <img src="https://i.imgur.com/8LwJCQ2.png" alt="Sofá limpo e higienizado">
      </div>
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
  background-color: var(--background-color);
  padding: 4rem 0;
  text-align: left;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1.2;
}

.hero p {
  font-size: 1.1rem;
  margin: 1.5rem 0;
  color: var(--text-color-darker);
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.hero-image {
  flex: 1;
  max-width: 500px;
}

.hero-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

/* Responsive */
@media (max-width: 900px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }

  .benefits-list {
    display: inline-block;
    text-align: left;
  }
}
</style>
