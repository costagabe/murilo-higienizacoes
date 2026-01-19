<template>
  <section class="services">
    <div class="container">
      <h2>Meus Serviços Especializados</h2>
      <div class="service-grid">
        <div class="service-card">
          <img src="https://i.imgur.com/w1z7x6H.png" alt="Higienização de Sofás" />
          <h3>Higienização de Sofás</h3>
          <p>Remoção completa de sujeiras, manchas e odores, renovando seu sofá com segurança.</p>
        </div>
        <div class="service-card">
          <img src="https://i.imgur.com/gSnnJ3y.png" alt="Limpeza de Cadeiras e Poltronas" />
          <h3>Limpeza de Cadeiras e Poltronas</h3>
          <p>Cuidado especializado para cadeiras de jantar, poltronas e estofados de todos os tipos.</p>
        </div>
        <div class="service-card">
          <img src="https://i.imgur.com/2Q3gNAy.png" alt="Higienização de Colchões" />
          <h3>Higienização de Colchões</h3>
          <p>Sono mais saudável com a eliminação de ácaros e bactérias do seu colchão.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.services {
  padding: 4rem 0;
  background-color: #f8f9fa; /* Fundo cinza claro para destacar a seção */
}

.services h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--text-color);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--surface-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* Sombra mais suave */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12); /* Sombra um pouco mais forte no hover */
}

.service-card img {
  height: 80px; /* Altura fixa para os ícones */
  width: auto;
  margin-bottom: 1.5rem;
}

.service-card h3 {
    color: var(--primary-color);
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
}

.service-card p {
    color: var(--text-color-darker);
    line-height: 1.6;
}
</style>
