
# Blueprint: Murilo Higienizações Landing Page

## 1. Visão Geral

Este projeto é uma landing page moderna de página única para a "Murilo Higienizações". O objetivo é criar uma presença online profissional, atrair clientes e gerar leads. A arquitetura do projeto segue os princípios SOLID e de componentização atômica para garantir que o código seja escalável, manutenível e organizado.

## 2. Esboço e Recursos do Projeto

### Arquitetura (Princípios SOLID)

Seguindo o **Princípio da Responsabilidade Única (SRP)**, a aplicação foi refatorada a partir de um único componente monolítico (`App.vue`) para uma estrutura de componentes especializados и de responsabilidade única.

*   **`src/composables`**: Armazena a lógica de negócio reutilizável (o "cérebro").
    *   `useTheme.ts`: Gerencia o estado das cores primárias/secundárias e o estilo dinâmico da aplicação.
    *   `useWhatsApp.ts`: Constrói a URL do WhatsApp com uma mensagem dinâmica baseada no horário.
*   **`src/components`**: Contém os componentes Vue, organizados por função.
    *   **`ui`**: Componentes de UI atômicos e reutilizáveis.
        *   `ActionButton.vue`: Um botão de ação genérico.
    *   **`layout`**: Componentes estruturais da página.
        *   `TheHeader.vue`: O cabeçalho da aplicação.
        *   `TheFooter.vue`: O rodapé da aplicação, contendo os seletores de cor.
    *   **`sections`**: Componentes que representam as principais seções da landing page.
        *   `HeroSection.vue`
        *   `ServicesSection.vue`
        *   `HowItWorksSection.vue`
        *   `TestimonialsSection.vue`
*   **`App.vue`**: Atua como o componente "orquestrador". Sua única responsabilidade é importar os *composables* para gerenciar o estado e montar os componentes de seção e layout, passando os dados necessários via props.

### Recursos
*   **Link Direto para WhatsApp:** Botões de CTA que geram uma mensagem personalizada para o WhatsApp com base na hora do dia.
*   **Personalização Dinâmica de Cores:** Seletores de cores no rodapé que alteram o tema do site em tempo real.

## 3. Plano Atual

O plano atual é refatorar a aplicação para seguir os princípios SOLID e de componentização atômica, quebrando o `App.vue` em componentes menores e mais focados.

1.  **Atualizar `blueprint.md`:** Documentar a nova arquitetura baseada em componentes.
2.  **Criar Estrutura de Diretórios:** Criar as pastas `composables`, `components/ui`, `components/layout` e `components/sections`.
3.  **Extrair Lógica para Composables:** Criar `useTheme.ts` e `useWhatsApp.ts`.
4.  **Criar Componentes:** Criar todos os componentes `.vue` conforme a arquitetura descrita acima.
5.  **Refatorar `App.vue`:** Simplificar o `App.vue` para ser um orquestrador de componentes.
