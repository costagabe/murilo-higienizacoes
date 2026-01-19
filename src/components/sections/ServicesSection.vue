<template>
  <section class="services">
    <div class="container">
      <h2>Meus Serviços</h2>
      <div class="service-grid">
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Higienização de Sofás" />
          <h3>Higienização de Sofás</h3>
          <p>Limpeza profunda para todos os tipos de tecidos e sofás de couro.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Limpeza de Carpetes" />
          <h3>Limpeza de Carpetes</h3>
          <p>Técnicas avançadas para remover manchas e restaurar seus carpetes.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Higienização de Colchões" />
          <h3>Higienização de Colchões</h3>
          <p>Higienização e limpeza profunda para um sono mais saudável.</p>
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
}

.services h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--surface-color);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.6);
}

.service-card img {
  margin-bottom: 1.5rem;
  border-radius: 50%;
  border: 3px solid var(--primary-color);
}
</style>
