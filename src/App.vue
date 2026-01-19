<script setup>
import { useWhatsApp } from './composables/useWhatsApp';

import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ServicesSection from './components/sections/ServicesSection.vue';
import HowItWorksSection from './components/sections/HowItWorksSection.vue';
import GallerySection from './components/sections/GallerySection.vue';
import TestimonialsSection from './components/sections/TestimonialsSection.vue';
import FAQSection from './components/sections/FAQSection.vue';

const { whatsappLink } = useWhatsApp();

</script>

<template>
  <div id="app-container">
    <TheHeader :whatsapp-link="whatsappLink" />

    <main>
      <HeroSection :whatsapp-link="whatsappLink" />
      <ServicesSection />
      <HowItWorksSection />
      <GallerySection /> 
      <TestimonialsSection />
      <FAQSection />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
/* Estilos específicos para App.vue, se necessário */
</style>
