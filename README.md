# 🎰 Jogo de Caça-Níquel Web

Um simulador de máquina de caça-níquel (slot machine) interativo e estilizado, desenvolvido inteiramente com as tecnologias base da Web. Este projeto recria a experiência clássica de um casino, incluindo um sistema de saldo, apostas e probabilidades baseadas em "pesos" para tornar o jogo realista.

## 🚀 Funcionalidades

- **Sistema de Economia:** O jogador começa com um saldo inicial e pode ajustar o valor da aposta (mínimo de R$ 10).
- **Sorteio com Probabilidades (Pesos):** Os símbolos não têm a mesma probabilidade de sair. Símbolos que pagam mais (como o Diamante 💎) são mais raros de aparecer do que símbolos comuns (como a Cereja 🍒).
- **Modo Automático (AUTO):** Um botão que permite que a máquina gire sozinha a cada 2 segundos, parando automaticamente se o saldo for insuficiente.
- **Tabela de Prémios Dinâmica:** A tabela que mostra os multiplicadores de cada símbolo é gerada automaticamente pelo JavaScript com base nos dados do jogo.
- **Interface Dark Mode:** Um design moderno e responsivo, adaptado para caber perfeitamente no ecrã (sem barras de rolagem), usando CSS Flexbox e Grid.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do jogo (painel, botões, visor).
- **CSS3:** Estilização visual (modo escuro, layout responsivo, posicionamento absoluto e transições suaves).
- **JavaScript (Vanilla):** Lógica principal do jogo, manipulação do DOM (atualização da tela em tempo real) e eventos de clique.

## 📂 Estrutura dos Ficheiros

O projeto é composto por três ficheiros principais:

- `index.html`: O esqueleto da página web.
- `style.css`: As regras visuais e de design.
- `script.js`: O "cérebro" do jogo, contendo as listas de símbolos, lógica de sorteio e gestão do saldo.

## 🎲 Como funciona a lógica de sorteio?

O jogo utiliza um sistema de pesos no JavaScript para determinar o resultado de cada rolo.
Em vez de um sorteio aleatório simples, o programa soma o "peso" de todos os símbolos e gera um número aleatório com base nesse total. Isso garante que a matemática do jogo seja justa e programável, imitando o comportamento das máquinas reais.

## 💻 Como executar o projeto

1. Transfere ou clona este repositório para o teu computador.
2. Abre a pasta do projeto.
3. Dá um duplo clique no ficheiro `index.html` para abri-lo no teu navegador web padrão (Chrome, Edge, Firefox, etc.).
4. Ajusta a tua aposta, clica em "GIRAR 🎰" e diverte-te!

## 👩‍💻 Autoria

Desenvolvido por **Maria Beatriz Berten de Moraes**.
