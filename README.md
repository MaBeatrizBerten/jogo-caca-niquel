# 🎰 Jogo de Caça-Níquel Web

Um simulador interativo de máquina de caça-níquel (slot machine), desenvolvido inteiramente com as tecnologias base da Web. Este projeto recria a experiência clássica de cassino, incluindo um sistema de saldo, apostas e probabilidades baseadas em "pesos" para tornar o jogo mais realista.

## 🚀 Funcionalidades

- **Sistema de Economia:** O jogador começa com um saldo inicial e pode ajustar o valor da aposta (mínimo de R$ 10).
- **Sorteio com Probabilidades (Pesos):** Os símbolos não têm a mesma probabilidade de aparecer. Símbolos que pagam mais (como o Diamante 💎) são mais raros do que símbolos comuns (como a Cereja 🍒).
- **Modo Automático (AUTO):** Um botão que permite que a máquina gire automaticamente a cada 2 segundos, parando sozinho se o saldo for insuficiente.
- **Tabela de Prêmios Dinâmica:** A tabela que mostra os multiplicadores de cada símbolo é gerada automaticamente pelo JavaScript com base nos dados do jogo.
- **Interface Dark Mode:** Design moderno e responsivo, adaptado para caber perfeitamente na tela (sem barras de rolagem), utilizando CSS Flexbox e Grid.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do jogo (painel, botões e visor).
- **CSS3:** Estilização visual (modo escuro, layout responsivo, posicionamento e transições suaves).
- **JavaScript (Vanilla):** Lógica principal do jogo, manipulação do DOM (atualização da tela em tempo real) e eventos de clique.

## 📂 Estrutura dos Arquivos

O projeto é composto por três arquivos principais:

- `index.html`: Estrutura da página web.
- `style.css`: Regras de estilo e design.
- `script.js`: O "cérebro" do jogo, contendo a lista de símbolos, lógica de sorteio e gerenciamento do saldo.

## 🎲 Como funciona a lógica de sorteio?

O jogo utiliza um sistema de pesos no JavaScript para determinar o resultado de cada giro.

Em vez de um sorteio totalmente aleatório, o programa soma o "peso" de todos os símbolos e gera um número aleatório com base nesse total. Isso garante que a matemática do jogo seja controlada e configurável, simulando o comportamento de máquinas reais.

## 💻 Como executar o projeto

1. Baixe ou clone este repositório para o seu computador.
2. Abra a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão (Chrome, Edge, Firefox etc.).
4. Ajuste sua aposta, clique em "GIRAR 🎰" e divirta-se!

## 🌐 Acesse o projeto online

🔗 https://jogo-caca-niquel.vercel.app/

## 👩‍💻 Autoria

Desenvolvido por **Maria Beatriz Berten de Moraes**.
