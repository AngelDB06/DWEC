const grid = document.getElementById('grid');
const timerDisplay = document.getElementById('timer');

// Symbols for the cards (5 pairs)
const symbols = ['🐶', '🐱', '🐭', '🐹', '🐰'];
let cards = [...symbols, ...symbols]; // Duplicate to create pairs
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchesFound = 0;
let time = 0;
let timerInterval;
let gameStarted = false;

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Start timer
function startTimer() {
    if (!gameStarted) {
        gameStarted = true;
        timerInterval = setInterval(() => {
            time++;
            timerDisplay.textContent = formatTime(time);
        }, 1000);
    }
}

// Stop timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Create board
function createBoard() {
    shuffle(cards);
    grid.innerHTML = '';
    cards.forEach(symbol => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.symbol = symbol;

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back">${symbol}</div>
            </div>
        `;

        cardElement.addEventListener('click', flipCard);
        grid.appendChild(cardElement);
    });
}

// Flip card logic
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    startTimer();

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

// Check for match
function checkForMatch() {
    let isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;

    isMatch ? disableCards() : unflipCards();
}

// Disable matched cards
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
    matchesFound++;

    if (matchesFound === symbols.length) {
        stopTimer();
        setTimeout(() => alert(`You won in ${formatTime(time)}!`), 500);
    }
}

// Unflip cards if no match
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1000);
}

// Reset board state
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Initialize
createBoard();
