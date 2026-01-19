
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
*   **Personalização Dinâmica de Cores:** Dois campos de seleção de cores são fornecidos em um painel de configurações para permitir alterações em tempo real nas cores primárias e secundárias do site.
*   **Estrutura Baseada em Componentes (em um único arquivo):** A aplicação é construída dentro de um único componente Vue (`App.vue`) dividido em seções lógicas:
    *   **Cabeçalho:** Contém o logotipo da empresa e um botão de chamada para ação principal.
    *   **Seção Principal:** Apresenta um título atraente, um breve texto descritivo e um botão proeminente "Solicite um Orçamento".
    *   **Seção de Serviços:** Lista os principais serviços oferecidos (por exemplo, Higienização de Sofás, Limpeza de Carpetes) com breves descrições.
    *   **Seção "Como Funciona":** Um guia visual de 3 passos explicando a jornada do cliente.
    *   **Seção de Depoimentos:** Exibe o feedback dos clientes para construir prova social.
    *   **Rodapé:** Inclui informações de contato e links.
*   **Gerenciamento de Estado:** A Composition API do Vue (`ref`) é usada para gerenciar o estado reativo das cores dinâmicas.

## 3. Plano Atual

O plano atual é refatorar o estilo da aplicação para usar um tema escuro, melhorando a estética e o conforto visual.

1.  **Atualizar `blueprint.md`:** Adicionar uma nota sobre a implementação de um tema escuro.
2.  **Atualizar `src/style.css`:** Introduzir variáveis de CSS para uma paleta de cores escuras.
3.  **Atualizar `App.vue`:** Modificar os estilos para usar as novas variáveis de CSS.
