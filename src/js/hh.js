const buttons = document.querySelectorAll('.cart-button');
const computerButton = document.querySelector('.selectvar');
const resultText = document.querySelector('.round-result');
const computerScoreEl = document.getElementById('computer-score');
const playerScoreEl = document.getElementById('player-score');

let playerChoice = null;
let playerScore = 0;
let computerScore = 0;

// вибір гравця
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => {
            b.classList.remove('active');
            b.classList.remove('computer');
        });
        btn.classList.add('active');
        playerChoice = index;
    });
});

// вибір комп’ютера
computerButton.addEventListener('click', () => {
    if (playerChoice === null) {
        resultText.textContent = "Спочатку виберіть свій варіант!";
        resultText.className = "round-result draw";
        return;
    }

    buttons.forEach(b => b.classList.remove('computer'));
    const computerChoice = Math.floor(Math.random() * 3);
    buttons[computerChoice].classList.add('computer');

    // визначаємо результат
    if (playerChoice === computerChoice) {
        resultText.textContent = "Нічия!";
        resultText.className = "round-result draw";
    } else if (
        (playerChoice === 0 && computerChoice === 1) || // камінь > ножиці
        (playerChoice === 1 && computerChoice === 2) || // ножиці > папір
        (playerChoice === 2 && computerChoice === 0)    // папір > камінь
    ) {
        resultText.textContent = "Ви виграли раунд!";
        resultText.className = "round-result win";
        playerScore++;
    } else {
        resultText.textContent = "Комп’ютер виграв раунд!";
        resultText.className = "round-result lose";
        computerScore++;
    }

    computerScoreEl.textContent = `Комп’ютер - ${computerScore}`;
    playerScoreEl.textContent = `Ви - ${playerScore}`;
});