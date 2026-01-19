<template>
  <section class="gallery">
    <div class="container">
      <h2>Resultados que Falam por Si</h2>
      <p class="subtitle">Veja a transformação que podemos fazer no seu estofado.</p>
      
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="https://placehold.co/600x400/1A374D/FFFFFF?text=Antes" alt="Sofá antes da limpeza">
          <div class="overlay">Antes</div>
        </div>
        <div class="gallery-item">
          <img src="https://placehold.co/600x400/FFFFFF/1A374D?text=Depois" alt="Sofá depois da limpeza">
          <div class="overlay">Depois</div>
        </div>
        <div class="gallery-item">
          <img src="https://placehold.co/600x400/1A374D/FFFFFF?text=Antes" alt="Poltrona antes da limpeza">
          <div class="overlay">Antes</div>
        </div>
        <div class="gallery-item">
          <img src="https://placehold.co/600x400/FFFFFF/1A374D?text=Depois" alt="Poltrona depois da limpeza">
          <div class="overlay">Depois</div>
        </div>
        <div class="gallery-item">
          <img src="https://placehold.co/600x400/1A374D/FFFFFF?text=Antes" alt="Cadeira antes da limpeza">
          <div class="overlay">Antes</div>
        </div>
        <div class="gallery-item">
          <img src="https://placehold.co/600x400/FFFFFF/1A374D?text=Depois" alt="Cadeira depois da limpeza">
          <div class="overlay">Depois</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica de script necessária para este componente estático.
</script>

<style scoped>
.gallery {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.gallery h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

.subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-color-darker);
  margin-bottom: 3rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 4px solid var(--primary-color);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(26, 55, 77, 0.6);
  color: white;
  text-align: center;
  padding: 0.5rem 0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
