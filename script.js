// --- 1. Referências do HTML ---
const balanceSpan = document.getElementById("balance");
const betSpan = document.getElementById("current-bet");
const reels = [
  document.getElementById("reel1"),
  document.getElementById("reel2"),
  document.getElementById("reel3"),
];
const message = document.getElementById("message");
const spinButton = document.getElementById("spin-button");
const autoButton = document.getElementById("auto-button");
const betDownButton = document.getElementById("bet-down");
const betUpButton = document.getElementById("bet-up");

// --- 2. Dados do Jogo ---
const symbols = [
  { name: "CHERRY", glyph: "🍒", weight: 24, payout: 4 },
  { name: "LEMON", glyph: "🍋", weight: 22, payout: 4 },
  { name: "ORANGE", glyph: "🍊", weight: 18, payout: 5 },
  { name: "BELL", glyph: "🔔", weight: 10, payout: 10 },
  { name: "DIAMOND", glyph: "💎", weight: 1, payout: 80 },
];

// Peso total calculado uma única vez
const totalWeight = symbols.reduce((sum, s) => sum + s.weight, 0);

let input = Number(prompt("Digite o valor do seu saldo inicial:"));
let balance = isNaN(input) || input < 0 ? 1000 : input;
let currentBet = 5;

// --- 3. Funções Auxiliares ---
function getRandomSymbol() {
  let random = Math.random() * totalWeight;
  for (const symbol of symbols) {
    if (random < symbol.weight) return symbol;
    random -= symbol.weight;
  }
}

function setMessage(text, color = "white") {
  message.textContent = text;
  message.style.color = color;
}

function updateUI() {
  balanceSpan.textContent = balance;
  betSpan.textContent = currentBet;

  const hasBalance = balance >= currentBet;
  spinButton.disabled = !hasBalance;
  autoButton.disabled = balance <= 0;
}

// --- 4. Função para alterar a aposta ---
function changeBet(amount) {
  const newBet = currentBet + amount * 5;
  if (newBet >= 5 && newBet <= balance) {
    currentBet = newBet;
    updateUI();
    setMessage("Aposta alterada. Gire os rolos!");
  } else {
    setMessage("Valor de aposta inválido!", "red");
  }
}

betDownButton.addEventListener("click", () => changeBet(-1));
betUpButton.addEventListener("click", () => changeBet(1));

// --- 5. Função Principal: Girar ---
function spin() {
  if (balance < currentBet) {
    setMessage("Saldo insuficiente! Reduza a aposta.", "red");
    return;
  }

  // Cobra a aposta
  balance -= currentBet;

  // Animação de giro
  reels.forEach((reel) => reel.classList.add("spinning"));

  setTimeout(() => {
    // Sorteia os 3 símbolos
    const results = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];

    // Mostra os símbolos e remove a animação
    reels.forEach((reel, i) => {
      reel.textContent = results[i].glyph;
      reel.classList.remove("spinning");
    });

    // Verifica vitória
    if (
      results[0].name === results[1].name &&
      results[1].name === results[2].name
    ) {
      const winnings = currentBet * results[0].payout;
      balance += winnings;
      setMessage(`GANHOU! Prémio: R$ ${winnings} 🎉`, "#4CAF50");
    } else {
      setMessage("Nada dessa vez. Tente novamente! 🍀");
    }

    // Game Over
    if (balance <= 0) {
      setMessage("GAME OVER! Sem saldo. Recarregue a página.", "#ff4444");
      stopAuto();
    }

    updateUI();
  }, 600);
}

spinButton.addEventListener("click", spin);

// --- 6. Gerar a Tabela de Prémios ---
const payoutList = document.getElementById("payout-list");
symbols.forEach((symbol) => {
  const li = document.createElement("li");
  li.textContent = `${symbol.glyph} ${symbol.name} -> ${symbol.payout}x`;
  payoutList.appendChild(li);
});

// --- 7. Lógica do Modo Automático ---
let autoSpinInterval;
let isAutoPlaying = false;

function stopAuto() {
  clearInterval(autoSpinInterval);
  isAutoPlaying = false;
  autoButton.textContent = "AUTO";
}

autoButton.addEventListener("click", () => {
  if (isAutoPlaying) {
    stopAuto();
    setMessage("Modo automático parado.");
  } else {
    isAutoPlaying = true;
    autoButton.textContent = "PARAR AUTO";
    setMessage("Modo automático ativado!");

    autoSpinInterval = setInterval(() => {
      if (balance >= currentBet) {
        spin();
      } else {
        stopAuto();
        setMessage("Saldo insuficiente. Auto parado.", "red");
      }
    }, 2000);
  }
});

// Inicializa UI
updateUI();
if (balance <= 0) setMessage("Saldo insuficiente!", "red");
