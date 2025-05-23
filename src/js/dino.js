const game = document.getElementById('game');
const dino = document.getElementById('dino');
const scoreDisplay = document.getElementById('score');

let isJumping = false;
let score = 0;
let gameOver = false;

// Прыжок динозавра
function jump() {
  if (isJumping) return;
  isJumping = true;
  let position = 30; // bottom px

  // Вверх
  const upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      // Вниз
      const downInterval = setInterval(() => {
        if (position <= 30) {
          clearInterval(downInterval);
          isJumping = false;
        }
        position -= 10;
        dino.style.bottom = position + 'px';
      }, 20);
    } else {
      position += 10;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

// Создаем препятствия
function createObstacle() {
  if (gameOver) return;

  const obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  obstacle.style.left = '800px';
  game.appendChild(obstacle);

  let obstaclePos = 800;
  const obstacleSpeed = 6;

  const moveObstacle = setInterval(() => {
    if (gameOver) {
      clearInterval(moveObstacle);
      if (obstacle.parentElement) {
        obstacle.parentElement.removeChild(obstacle);
      }
      return;
    }

    obstaclePos -= obstacleSpeed;
    obstacle.style.left = obstaclePos + 'px';

    // Проверка столкновения
    const dinoRect = dino.getBoundingClientRect();
    const obsRect = obstacle.getBoundingClientRect();

    if (
      obsRect.left < dinoRect.right &&
      obsRect.right > dinoRect.left &&
      obsRect.bottom > dinoRect.top &&
      obsRect.top < dinoRect.bottom
    ) {
      gameOver = true;
      alert('Game Over! Очки: ' + score);
      location.reload();
    }

    // Увеличение очков, когда препятствие пройдено
    if (obstaclePos < 0) {
      clearInterval(moveObstacle);
      if (obstacle.parentElement) {
        obstacle.parentElement.removeChild(obstacle);
      }
      score++;
      scoreDisplay.textContent = 'Очки: ' + score;
    }
  }, 20);

  // Следующее препятствие через рандомный интервал
  setTimeout(createObstacle, 1500 + Math.random() * 2000);
}

// Запуск игры
document.addEventListener('keydown', e => {
  if ((e.code === 'Space' || e.code === 'ArrowUp') && !gameOver) {
    jump();
  }
});

createObstacle();