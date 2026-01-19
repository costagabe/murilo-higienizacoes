<template>
  <header class="header">
    <div class="container">
      <img src="../../assets/logo.svg" alt="Logo da Murilo Higienizações" class="logo" />
      <ActionButton :href="whatsappLink">
        Solicite um Orçamento
      </ActionButton>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';
import ActionButton from '../ui/ActionButton.vue';

defineProps({
  whatsappLink: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.header {
  background: var(--surface-color);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 40px;
}
</style>
