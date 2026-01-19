<template>
  <section class="faq">
    <div class="container">
      <h2>Dúvidas Frequentes</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3>Quanto tempo dura a limpeza?</h3>
          <p>A limpeza de um sofá de tamanho padrão geralmente leva de 1 a 2 horas para ser concluída, dependendo do nível de sujeira.</p>
        </div>
        <div class="faq-item">
          <h3>O produto de limpeza é seguro para crianças e animais?</h3>
          <p>Sim, utilizo apenas produtos biodegradáveis e atóxicos que são 100% seguros para toda a família, incluindo seus pets.</p>
        </div>
        <div class="faq-item">
          <h3>Preciso preparar algo antes da limpeza?</h3>
          <p>Recomendo apenas que o espaço ao redor do estofado esteja livre para facilitar o acesso e a ventilação do local.</p>
        </div>
         <div class="faq-item">
          <h3>Qual o tempo de secagem após a limpeza?</h3>
          <p>O tempo de secagem pode variar de 4 a 8 horas, dependendo da ventilação do ambiente e da umidade do ar.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica de script necessária.
</script>

<style scoped>
.faq {
  padding: 4rem 0;
}

.faq h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: var(--surface-color);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 1.5rem;
  border-left: 5px solid var(--primary-color);
}

.faq-item h3 {
  margin: 0 0 0.8rem 0;
  color: var(--text-color);
  font-size: 1.2rem;
}

.faq-item p {
  margin: 0;
  color: var(--text-color-darker);
  line-height: 1.6;
}
</style>
