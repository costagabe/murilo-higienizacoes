# Blueprint: Murilo Higienizações Landing Page

## 1. Visão Geral

Este projeto é uma landing page moderna de página única para a "Murilo Higienizações". O objetivo é criar uma presença online profissional, atrair clientes e gerar leads. A arquitetura do projeto segue os princípios SOLID e de componentização atômica para garantir que o código seja escalável, manutenível e organizado.

## 2. Esboço e Recursos do Projeto

### Arquitetura

*   **`src/composables`**: Lógica de negócio reutilizável.
    *   `useWhatsApp.ts`: Constrói a URL do WhatsApp com uma mensagem dinâmica.
*   **`src/components`**: Componentes Vue, organizados por função.
    *   **`ui`**: Componentes atômicos (ex: `ActionButton.vue`).
    *   **`layout`**: Componentes estruturais (Header, Footer).
    *   **`sections`**: Seções principais da landing page (`Hero`, `Services`, etc.).

### Identidade Visual e Tom de Voz

*   **Tom:** Pessoal e direto (primeira pessoa do singular).
*   **Paleta de Cores:** Inspirada no site `sofanovodenovo.com.br`, usando verde como cor primária, branco para o fundo e cinza-escuro para textos, transmitindo limpeza e profissionalismo.

## 3. Plano de Refatoração Atual

**Inspirado em: `https://sofanovodenovo.com.br/`**

1.  **Atualizar Estilos Globais (`style.css`):**
    *   Substituir a paleta de cores atual pelas novas cores primárias (verde), de superfície (branco) e de texto (cinza-escuro).

2.  **Refatorar `HeroSection.vue`:**
    *   Adicionar uma lista de benefícios com ícones (Ex: ✅ Elimina ácaros, ✅ Remove manchas) para aumentar o impacto da proposta de valor.

3.  **Criar Nova Seção `GallerySection.vue`:**
    *   Implementar uma galeria de "Antes e Depois" para fornecer prova social e visual do resultado do trabalho.

4.  **Criar Nova Seção `FAQSection.vue`:**
    *   Desenvolver uma seção de Perguntas Frequentes para responder às principais dúvidas dos clientes e quebrar objeções de venda.

5.  **Simplificar `TheFooter.vue`:**
    *   Remover a funcionalidade de seleção de tema para focar em uma identidade de marca única e forte.

6.  **Integrar Novas Seções no `App.vue`:**
    *   Adicionar `GallerySection` e `FAQSection` ao layout principal da aplicação.
