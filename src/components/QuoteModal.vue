<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">&times;</button>
      <h2>Solicite um Orçamento</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="phone">Telefone</label>
          <input type="tel" id="phone" v-model="form.phone" required />
        </div>
        <div class="form-group">
          <label for="service">Tipo de Serviço</label>
          <select id="service" v-model="form.service" required>
            <option disabled value="">Selecione um serviço</option>
            <option>Higienização de Sofá</option>
            <option>Limpeza de Carpete</option>
            <option>Higienização de Colchão</option>
            <option>Outro</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Mensagem</label>
          <textarea id="message" v-model="form.message" rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar Solicitação</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close']);

const form = ref({
  name: '',
  phone: '',
  service: '',
  message: '',
});

const handleSubmit = () => {
  // Aqui você pode adicionar a lógica para enviar os dados do formulário
  console.log('Dados do formulário:', form.value);
  alert('Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.');
  emit('close'); // Fecha o modal após o envio
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: var(--surface-color);
  padding: 2.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

h2 {
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-color-darker);
  cursor: pointer;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color-darker);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--text-color-darker);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  box-sizing: border-box; /* Garante tamanho consistente */
}

.btn-primary {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
}
</style>
