
# Blueprint: Murilo Higienizações Landing Page

## 1. Visão Geral

Este projeto é uma landing page moderna de página única para a "Murilo Higienizações", uma empresa especializada em higienização de sofás e estofados. O objetivo principal é criar uma presença online profissional e confiável para atrair clientes e gerar leads. A principal característica é um esquema de cores dinâmico que permite ao administrador do site personalizar facilmente as cores primárias e secundárias da marca sem tocar no código.

## 2. Esboço e Recursos do Projeto

### Design e Estética
*   **Tema Escuro:** O site agora usa um tema escuro por padrão para uma aparência moderna e confortável aos olhos.
*   **Paleta de Cores:** Um esquema de cores dinâmico e personalizável sobre o tema escuro. As cores padrão iniciais são um azul profissional (primário) e um verde-azulado vibrante (secundário), que transmitem limpeza e confiança.
*   **Tipografia:** A fonte "Poppins" é usada por sua aparência limpa, moderna e de alta legibilidade.
*   **Layout:** Um layout de página única responsivo que se adapta perfeitamente a vários tamanhos de tela.
*   **Iconografia:** Uso de ícones SVG para apoiar visualmente as descrições dos serviços e informações importantes.
*   **Imagens:** Imagens de placeholder são usadas para a seção principal e outros elementos visuais.

### Recursos
*   **Link Direto para WhatsApp:** Os botões de chamada para ação ("Solicite um Orçamento" e "Obtenha uma Estimativa Gratuita") redirecionam o usuário diretamente para uma conversa no WhatsApp, facilitando o contato imediato.
*   **Personalização Dinâmica de Cores:** Dois campos de seleção de cores são fornecidos em um painel de configurações para permitir alterações em tempo real nas cores primárias e secundárias do site.
*   **Estrutura de Componente Único:** A aplicação é construída dentro de um único componente Vue (`App.vue`) para simplicidade.
*   **Gerenciamento de Estado:** A Composition API do Vue (`ref`) é usada para gerenciar o estado reativo das cores dinâmicas.

## 3. Plano Atual

O plano atual é substituir a funcionalidade do modal de orçamento por um link direto para o WhatsApp, simplificando o processo de contato para o cliente.

1.  **Atualizar `blueprint.md`:** Documentar a mudança do modal para o link do WhatsApp.
2.  **Remover Componente do Modal:** Excluir o arquivo `src/components/QuoteModal.vue` e o diretório `src/components`.
3.  **Atualizar `App.vue`:**
    *   Alterar os links dos botões para o URL do WhatsApp.
    *   Remover todo o código relacionado à lógica do modal (estado, funções, importação e o componente no template).
