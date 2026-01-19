<template>
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
</template>

<script setup>
</script>

<style scoped>
.testimonials {
  padding: 4rem 0;
}

.testimonials h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.testimonial {
  background: var(--surface-color);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.6);
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
</style>
