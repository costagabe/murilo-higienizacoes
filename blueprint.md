# Blueprint do Projeto: Murilo Higienizações

## Visão Geral do Projeto

O projeto é um site de marketing de página única para a empresa de limpeza de sofás "Murilo Higienizações". O objetivo é criar um site visualmente atraente e informativo que incentive os visitantes a solicitar um orçamento via WhatsApp.

## Estrutura do Projeto

```
src
├── assets
│   ├── fundo-principal.png
│   └── logo.svg
├── components
│   ├── layout
│   │   ├── TheHeader.vue
│   │   └── TheFooter.vue
│   ├── sections
│   │   ├── HeroSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── GallerySection.vue
│   │   ├── TestimonialsSection.vue
│   │   └── ContactSection.vue
│   └── ui
│       └── ActionButton.vue
├── App.vue
├── main.ts
└── style.css
```

## Design e Funcionalidades

### Paleta de Cores

- **Primária:** `#1A374D` (Azul Escuro)
- **Secundária:** `#406882` (Azul mais claro para efeitos de hover)
- **Fundo:** `#FFFFFF` (Branco)
- **Texto:** `#343a40` (Cinza Escuro)
- **Texto sobre Fundo Escuro:** `#FFFFFF` (Branco)

### Tipografia

- **Fonte:** Poppins

### Componentes e Seções

- **Cabeçalho (`TheHeader.vue`):**
    - Cabeçalho fixo com logo e botão "Solicite um Orçamento".
    - Sombra suave para um visual moderno.

- **Seção Hero (`HeroSection.vue`):**
    - Utiliza a imagem `fundo-principal.png` como plano de fundo em tela cheia.
    - Aplica uma sobreposição escura sobre a imagem para garantir a legibilidade do texto.
    - Texto e ícones de benefícios em branco para contrastar com o fundo.
    - Layout centralizado focado no texto e no botão de chamada para ação.

- **Seção de Galeria (`GallerySection.vue`):**
    - Título "Resultados que Falam por Si".
    - Grade de imagens "antes e depois" em um layout 2x3 (2 colunas por 3 linhas) em desktops e 1 coluna em dispositivos móveis.
    - As imagens têm uma borda arredondada na cor primária.

- **Rodapé (`TheFooter.vue`):**
    - Informações de direitos autorais.
    - Fundo com a cor primária e texto em branco.

- **Componentes da Interface (`ActionButton.vue`):**
    - Botão reutilizável com variantes primária e secundária.
    - Possui uma sombra sutil que muda no hover.

## Última Solicitação (Concluída)

O usuário solicitou o uso da imagem `fundo-principal.png` como plano de fundo da `HeroSection`. A alteração foi implementada, incluindo uma sobreposição escura para legibilidade do texto e a remoção da imagem de primeiro plano anterior.