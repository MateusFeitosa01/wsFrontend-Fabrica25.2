# Pokémon GO Fan Site

Um site interativo de fãs de Pokémon, desenvolvido com **Next.js** e React, que permite navegar e visualizar informações detalhadas sobre os primeiros 50 Pokémon da API oficial da PokéAPI.

---

## Funcionalidades

- Lista os 50 primeiros Pokémon da PokéAPI com seus nomes, imagens e IDs.
- Pesquisa de Pokémon pelo nome (em tempo real, sem necessidade de submit).
- Layout alternativo para a grade de cards (toggle de visualização).
- Página de detalhes de cada Pokémon:
  - Nome, ID, imagem oficial, tipo(s), peso e experiência base.
- Botão de favoritar Pokémon em cada card.
- Design responsivo para desktops, tablets e dispositivos móveis.
- Layout limpo e moderno.

---
## Deploy do projeto

- A aplicação está disponível em: https://ws-frontend-fabrica25-2.vercel.app/

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)  
- [React](https://reactjs.org/)  
- CSS moderno com **Flexbox** e **Grid**   
- PokéAPI: `https://pokeapi.co/api/v2/pokemon`

---

## Estrutura do Projeto

/wsfrontend.fabrica25.2
│
├─ /app
│ │ 
│ ├─ /detalhes
│ │ └─ page.jsx (DetalhesPokemons)
│ └─ page.jsx (Home)
│
├─ /componentes
│ ├─ /cabecalho
│ │ └─ header.jsx
│ ├─ /cards
│ │ └─ cards.jsx (PokemonCard)
│ ├─ /rodape
│ │ └─ footer.jsx
│ ├─ /botaoMudarGrid
│ │ └─ mudaGrid.jsx
│ └─ /barraDePesquisa
│ └─ barraDePesquisa.jsx
│
├─ globals.css
└─ outras folhas de estilo CSS para cada componente

---

## Como Rodar o Projeto

### Pré-requisitos
- Node.js v18 ou superior  
- npm instalado  

### Passos
1. Clone o repositório:
```bash
git clone https://github.com/MateusFeitosa01/wsFrontend-Fabrica25.2.git
Entre na pasta do projeto:



cd wsfrontend.fabrica25.2
Instale as dependências:



npm install

Rode o servidor de desenvolvimento:


npm run dev

Abra o navegador em:



http://localhost:3000
Uso
Use a barra de pesquisa no header para filtrar Pokémon pelo nome.

Clique no botão Alternar Layout para mudar a visualização da grade.

Clique em qualquer card para ver os detalhes do Pokémon selecionado.

Use o botão de estrela no card para marcar como favorito.

Responsividade
O site é responsivo e ajusta automaticamente os cards e páginas para:

Desktop (3 cards por linha)

Tablets (2 cards por linha)

Mobile (1 card por linha, layout simplificado)

Autor
Mateus Moreira y Moreira Feitosa

LinkedIn: www.linkedin.com/in/mateusmoreiraymoreirafeitosa

Email: moreiramateusjp@gmail.com

Licença
Projeto pessoal desenvolvido para aprendizado e prática de React e Next.js.
Não possui licença comercial.
