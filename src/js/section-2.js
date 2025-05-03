function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const resultDiv = document.getElementById('guess-result');
    const secretNumber = Math.floor(Math.random() * 10) + 1;

    if (userGuess === secretNumber) {
      resultDiv.style.color = "green";
      resultDiv.innerHTML = `Вітаю, ви вгадали число! (${secretNumber})`;
    } else {
      resultDiv.style.color = "red";
      resultDiv.innerHTML = `Ні, комп’ютер загадав ${secretNumber}`;
    }
  }