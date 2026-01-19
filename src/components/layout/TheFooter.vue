<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Murilo Higienizações. Todos os direitos reservados.</p>
      <div class="color-picker">
        <label for="primaryColor">Cor Primária:</label>
        <input type="color" :value="primaryColor" @input="$emit('update:primaryColor', $event.target.value)" id="primaryColor" />
      </div>
      <div class="color-picker">
        <label for="secondaryColor">Cor Secundária:</label>
        <input type="color" :value="secondaryColor" @input="$emit('update:secondaryColor', $event.target.value)" id="secondaryColor" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  primaryColor: String,
  secondaryColor: String,
});

defineEmits(['update:primaryColor', 'update:secondaryColor']);
</script>

<style scoped>
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
