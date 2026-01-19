<script setup>
import { ref, computed } from 'vue';
import QuoteModal from './components/QuoteModal.vue';

const primaryColor = ref('#007BFF');
const secondaryColor = ref('#00C6FF');
const isModalOpen = ref(false);

const appStyle = computed(() => ({
  '--primary-color': primaryColor.value,
  '--secondary-color': secondaryColor.value,
}));

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div id="app-container" :style="appStyle">
    <header class="header">
      <div class="container">
        <img src="./assets/logo.svg" alt="Logo da Murilo Higienizações" class="logo" />
        <a href="javascript:void(0)" class="btn btn-primary" @click="openModal">Solicite um Orçamento</a>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container">
          <h1>Higienização Profissional de Sofás e Estofados</h1>
          <p>Damos vida nova aos seus móveis. Rápido, eficaz e acessível.</p>
          <a href="javascript:void(0)" class="btn btn-secondary" @click="openModal">Obtenha uma Estimativa Gratuita</a>
        </div>
      </section>

      <section class="services">
        <div class="container">
          <h2>Nossos Serviços</h2>
          <div class="service-grid">
            <div class="service-card">
              <img src="https://via.placeholder.com/100" alt="Higienização de Sofá" />
              <h3>Higienização de Sofá</h3>
              <p>Limpeza profunda para todos os tipos de tecidos e sofás de couro.</p>
            </div>
            <div class="service-card">
              <img src="https://via.placeholder.com/100" alt="Limpeza de Carpete" />
              <h3>Limpeza de Carpete</h3>
              <p>Técnicas avançadas para remover manchas e restaurar seus carpetes.</p>
            </div>
            <div class="service-card">
              <img src="https://via.placeholder.com/100" alt="Higienização de Colchão" />
              <h3>Higienização de Colchão</h3>
              <p>Higienização e limpeza profunda para um sono mais saudável.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="how-it-works">
        <div class="container">
          <h2>Como Funciona</h2>
          <div class="steps">
            <div class="step">
              <span>1</span>
              <h3>Agende Online</h3>
              <p>Selecione seu serviço e agende uma data que funcione para você.</p>
            </div>
            <div class="step">
              <span>2</span>
              <h3>Nós Limpamos</h3>
              <p>Nossos profissionais certificados chegam e realizam a limpeza.</p>
            </div>
            <div class="step">
              <span>3</span>
              <h3>Aproveite</h3>
              <p>Aproveite seus móveis frescos e limpos em poucas horas.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="container">
          <h2>O Que Nossos Clientes Dizem</h2>
          <div class="testimonial-grid">
            <div class="testimonial">
              <p>"Meu sofá parece novo! A equipe foi profissional e rápida. Altamente recomendado!"</p>
              <span>- Maria S.</span>
            </div>
            <div class="testimonial">
              <p>"Serviço excelente. Eles removeram uma mancha de café que eu achava que era permanente."</p>
              <span>- João D.</span>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Murilo Higienizações. Todos os direitos reservados.</p>
        <div class="color-picker">
          <label for="primaryColor">Cor Primária:</label>
          <input type="color" v-model="primaryColor" id="primaryColor" />
        </div>
        <div class="color-picker">
          <label for="secondaryColor">Cor Secundária:</label>
          <input type="color" v-model="secondaryColor" id="secondaryColor" />
        </div>
      </div>
    </footer>

    <QuoteModal v-if="isModalOpen" @close="closeModal" />
  </div>
</template>

<style scoped>
.header {
  background: var(--surface-color);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 40px;
}

.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://via.placeholder.com/1200x400);
  background-size: cover;
  background-position: center;
  color: white;
  padding: 5rem 0;
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

.btn {
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background-color: var(--primary-color);
  color: #fff;
  border: 2px solid var(--primary-color);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--primary-color);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: #fff;
  border: 2px solid var(--secondary-color);
}

.btn-secondary:hover {
  background-color: transparent;
  color: var(--secondary-color);
  transform: translateY(-2px);
}

.services, .how-it-works, .testimonials {
  padding: 4rem 0;
}

.services h2, .how-it-works h2, .testimonials h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

.service-grid, .testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card, .testimonial, .step {
  background: var(--surface-color);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover, .testimonial:hover, .step:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.6);
}

.service-card img {
  margin-bottom: 1.5rem;
  border-radius: 50%;
  border: 3px solid var(--primary-color);
}

.how-it-works .steps {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
}

.step span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-color);
  color: #fff;
  font-size: 2rem;
  margin: 0 auto 1rem;
  font-weight: 700;
}

.testimonial p {
  font-style: italic;
  color: var(--text-color-darker);
}

.testimonial span {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
  color: var(--primary-color);
}

.footer {
  background: var(--surface-color);
  color: var(--text-color-darker);
  padding: 2rem 0;
  text-align: center;
  margin-top: 2rem;
}

.footer .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.color-picker {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.color-picker label {
    color: var(--text-color);
}

.color-picker input {
  border: 1px solid var(--text-color-darker);
  background-color: var(--surface-color);
  padding: 0.2rem;
  border-radius: 4px;
}
</style>
