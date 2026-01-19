
# Blueprint: CleanCo Landing Page

## 1. Visão Geral

Este projeto é uma landing page moderna de página única para a "CleanCo", uma empresa fictícia especializada em higienização de sofás e estofados. O objetivo principal é criar uma presença online profissional e confiável para atrair clientes e gerar leads. A principal característica é um esquema de cores dinâmico que permite ao administrador do site personalizar facilmente as cores primárias e secundárias da marca sem tocar no código.

## 2. Esboço e Recursos do Projeto

### Design e Estética
*   **Tema Escuro:** O site agora usa um tema escuro por padrão para uma aparência moderna e confortável aos olhos.
*   **Paleta de Cores:** Um esquema de cores dinâmico e personalizável sobre o tema escuro. As cores padrão iniciais são um azul profissional (primário) e um verde-azulado vibrante (secundário), que transmitem limpeza e confiança.
*   **Tipografia:** A fonte "Poppins" é usada por sua aparência limpa, moderna e de alta legibilidade.
*   **Layout:** Um layout de página única responsivo que se adapta perfeitamente a vários tamanhos de tela.
*   **Iconografia:** Uso de ícones SVG para apoiar visualmente as descrições dos serviços e informações importantes.
*   **Imagens:** Imagens de placeholder são usadas para a seção principal e outros elementos visuais.

### Recursos
*   **Modal de Solicitação de Orçamento:** Um formulário modal que é aberto ao clicar nos botões "Solicite um Orçamento". O formulário inclui campos para nome, telefone, tipo de serviço e uma mensagem.
*   **Personalização Dinâmica de Cores:** Dois campos de seleção de cores são fornecidos em um painel de configurações para permitir alterações em tempo real nas cores primárias e secundárias do site.
*   **Estrutura Baseada em Componentes:** A aplicação é dividida em componentes reutilizáveis:
    *   `App.vue`: O componente principal que orquestra a página.
    *   `QuoteModal.vue`: O componente que contém o formulário de orçamento.
*   **Gerenciamento de Estado:** A Composition API do Vue (`ref`) é usada para gerenciar o estado reativo das cores dinâmicas e a visibilidade do modal.

## 3. Plano Atual

O plano atual é criar e integrar um modal de solicitação de orçamento.

1.  **Atualizar `blueprint.md`:** Documentar a nova funcionalidade.
2.  **Criar `src/components/QuoteModal.vue`:** Construir o componente do formulário modal.
3.  **Atualizar `App.vue`:** Integrar e controlar a exibição do modal.
