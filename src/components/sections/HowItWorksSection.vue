<template>
  <section class="how-it-works">
    <div class="container">
      <h2 style="color: white">Como o Serviço Funciona</h2>
      <div class="steps">
        <div class="step">
          <span>1</span>
          <h3>Solicite um Orçamento</h3>
          <p>
            Envie fotos do seu estofado pelo WhatsApp e receba um orçamento
            justo e rápido.
          </p>
        </div>
        <div class="step">
          <span>2</span>
          <h3>Agende o Melhor Horário</h3>
          <p>
            Escolha o dia e a hora que ficam melhores para você. Eu vou até a
            sua casa.
          </p>
        </div>
        <div class="step">
          <span>3</span>
          <h3>Sofá Novo</h3>
          <p>
            Aproveite seu estofado limpo, cheiroso e livre de bactérias em
            poucas horas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.how-it-works {
  padding: 4rem 0;
  background: var(--primary-color);
}

.how-it-works h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--text-color); /* Título em cinza escuro para consistência */
}

.steps {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
}

.step {
  background: var(--surface-color);
  border: 1px solid #e9ecef; /* Adiciona uma borda sutil */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06); /* Sombra mais suave */
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  flex: 1;
  min-width: 250px;
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Sombra um pouco mais forte no hover */
}

.step span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: #fff;
  font-size: 1.8rem;
  margin: 0 auto 1.5rem;
  font-weight: 700;
}

.step h3 {
  color: var(--text-color);
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.step p {
  color: var(--text-color-darker);
  line-height: 1.6;
}
</style>
