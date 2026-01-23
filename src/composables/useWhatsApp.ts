import { computed } from 'vue';

export function useWhatsApp() {
  const whatsappLink = computed(() => {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
      greeting = "Bom dia";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Boa tarde";
    } else {
      greeting = "Boa noite";
    }

    const message = `Olá, Murilo, ${greeting}! Encontrei seu site e gostaria de solicitar um orçamento. Podemos conversar?`;
    const encodedMessage = encodeURIComponent(message);
    
    return `https://api.whatsapp.com/send?phone=5511965843237&text=${encodedMessage}`;
  });

  return {
    whatsappLink,
  };
}
