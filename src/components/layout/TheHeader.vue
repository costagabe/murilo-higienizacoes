<template>
  <header class="header">
    <div class="container">
      <img
        style="width: 150px; height: 150px"
        src="../../assets/logo.png"
        alt="Logo da Murilo Higienizações"
        class="logo"
      />
      <ActionButton :href="whatsappLink">
        <svg
          class="whatsapp-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20.52 3.48C18.36 1.32 15.48 0 12.24 0 5.82 0 .576 5.25.576 11.66c0 2.05.54 4.05 1.56 5.82L.64 23.04l6.21-1.63c1.71.92 3.65 1.41 5.59 1.41 6.42 0 11.66-5.24 11.66-11.66 0-3.12-1.22-6.06-3.44-8.28zm-8.28 17.86c-1.75 0-3.46-.46-4.97-1.33l-.36-.21-3.71.97.99-3.61-.23-.37c-1.02-1.62-1.56-3.49-1.56-5.38 0-5.34 4.34-9.68 9.68-9.68 2.58 0 5.01 1.01 6.84 2.84 1.83 1.83 2.84 4.26 2.84 6.84 0 5.34-4.34 9.68-9.68 9.68zm5.3-7.24c-.29-.15-1.73-.85-1.99-.95-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.33.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.56-.87-2.14-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.17 2.98.14.19 2.03 3.1 4.92 4.34.69.3 1.23.48 1.64.61.69.22 1.32.19 1.81.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"
          />
        </svg>
        Solicite um Orçamento
      </ActionButton>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";
import ActionButton from "../ui/ActionButton.vue";

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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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

.whatsapp-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
}
</style>
