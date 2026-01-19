<template>
  <a :href="href" :class="['btn', `btn-${type}`]" target="_blank">
    <slot />
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  href: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'primary', // can be 'primary' or 'secondary'
  },
});
</script>

<style scoped>
.btn {
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: inline-block;
}

.btn-primary {
  background-color: var(--primary-color);
  color: #fff;
  border: 2px solid var(--primary-color);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--primary-color);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: #fff;
  border: 2px solid var(--secondary-color);
}

.btn-secondary:hover {
  background-color: transparent;
  color: var(--secondary-color);
  transform: translateY(-2px);
}
</style>
