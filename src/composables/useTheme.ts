import { ref, computed } from 'vue';

export function useTheme() {
  const primaryColor = ref('#007BFF');
  const secondaryColor = ref('#00C6FF');

  const appStyle = computed(() => ({
    '--primary-color': primaryColor.value,
    '--secondary-color': secondaryColor.value,
  }));

  return {
    primaryColor,
    secondaryColor,
    appStyle,
  };
}
