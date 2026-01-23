<template>
  <section class="testimonials">
    <div class="container">
      <h2>O Que Os Clientes Dizem</h2>
      <div class="testimonial-grid">
        <div class="testimonial">
          <p>
            "Meu sofá parece novo! O trabalho foi profissional e rápido.
            Altamente recomendado!"
          </p>
          <span>- Cíntia A.</span>
        </div>
        <div class="testimonial">
          <p>
            "Serviço excelente. Ele removeu uma mancha de café que eu achava que
            era permanente."
          </p>
          <span>- Airton S.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.testimonials {
  padding: 4rem 0;
  background-color: var(--primary-color);
}

.testimonials h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: white;
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
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
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
