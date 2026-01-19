<template>
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
</template>

<script setup>
</script>

<style scoped>
.how-it-works {
  padding: 4rem 0;
}

.how-it-works h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

.how-it-works .steps {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
}

.step {
  background: var(--surface-color);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
  min-width: 250px;
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.6);
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
</style>
