const grid = document.getElementById('grid');
const lastDrawn = document.getElementById('lastDrawn');
let drawnNumbers = [];

// Genera i numeri della griglia
for (let i = 1; i <= 90; i++) {
  const numberElement = document.createElement('div');
  numberElement.classList.add('number');
  numberElement.textContent = i;
  numberElement.id = `number-${i}`;
  grid.appendChild(numberElement);
}

function drawNumber() {
  if (drawnNumbers.length >= 90) return endGame();

  let number;
  do {
    number = Math.floor(Math.random() * 90) + 1;
  } while (drawnNumbers.includes(number));

  drawnNumbers.push(number);
  document.getElementById(`number-${number}`).classList.add('drawn');
  lastDrawn.textContent = number;
}

function endGame() {
  alert('Il tabellone è stato ripristinato!');
  drawnNumbers = [];
  lastDrawn.textContent = '-';
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(number => number.classList.remove('drawn'));
}