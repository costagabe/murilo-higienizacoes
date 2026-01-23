<template>
  <a
    :href="href"
    :class="['btn', `btn-${type}`]"
    target="_blank"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "primary", // can be 'primary' or 'secondary'
  },
});

function handleClick() {
  gtag_report_conversion(props.href);
}
</script>

<style scoped>
.btn {
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(26, 55, 77, 0.25);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  box-shadow: 0 6px 20px rgba(26, 55, 77, 0.3);
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
  box-shadow: 0 6px 20px rgba(64, 104, 130, 0.3);
}
</style>
