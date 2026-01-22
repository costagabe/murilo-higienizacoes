<template>
  <section class="services">
    <div class="container">
      <h2>Meus Serviços Especializados</h2>
      <div class="service-grid">
        <div class="service-card service-card-1">
          <h3>Higienização de Sofás</h3>
          <p>
            Remoção completa de sujeiras, manchas e odores, renovando seu sofá
            com segurança.
          </p>
        </div>
        <div class="service-card service-card-2">
          <h3>Limpeza de Cadeiras e Poltronas</h3>
          <p>
            Cuidado especializado para cadeiras de jantar, poltronas e estofados
            de todos os tipos.
          </p>
        </div>
        <div class="service-card service-card-3">
          <h3>Higienização de Colchões</h3>
          <p>
            Sono mais saudável com a eliminação de ácaros e bactérias do seu
            colchão.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  z-index: 1;
}

.service-card h3,
.service-card p {
  position: relative;
  z-index: 2;
}

.service-card-1 {
  background-image: url("../../assets/servicos-especializados/1.png");
}

.service-card-2 {
  background-image: url("../../assets/servicos-especializados/2.png");
}

.service-card-3 {
  background-image: url("../../assets/servicos-especializados/3.png");
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.service-card img {
  height: 80px;
  width: auto;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.service-card p {
  color: white;
  line-height: 1.6;
}
</style>
