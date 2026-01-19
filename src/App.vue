<script setup>
import { useTheme } from './composables/useTheme';
import { useWhatsApp } from './composables/useWhatsApp';

import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ServicesSection from './components/sections/ServicesSection.vue';
import HowItWorksSection from './components/sections/HowItWorksSection.vue';
import TestimonialsSection from './components/sections/TestimonialsSection.vue';

const { primaryColor, secondaryColor, appStyle } = useTheme();
const { whatsappLink } = useWhatsApp();

</script>

<template>
  <div id="app-container" :style="appStyle">
    <TheHeader :whatsapp-link="whatsappLink" />

    <main>
      <HeroSection :whatsapp-link="whatsappLink" />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </main>

    <TheFooter
      v-model:primaryColor="primaryColor"
      v-model:secondaryColor="secondaryColor"
    />
  </div>
</template>

<style scoped>
/* Os estilos globais permanecem aqui, enquanto os estilos dos componentes foram movidos */
#app-container {
  /* As variáveis de cor são injetadas aqui pelo :style="appStyle" */
}

main {
  /* Estilos para o container principal, se necessário */
}
</style>
