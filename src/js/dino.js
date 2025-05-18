const canvas = document.getElementById("dino-game");
const ctx = canvas.getContext("2d");

// Динозавр
const dino = {
  x: 50,
  y: 110,
  width: 30,
  height: 30,
  velocityY: 0,
  gravity: 1.5,
  jumping: false,
};

// Кактус
let cactus = {
  x: 600,
  y: 120,
  width: 20,
  height: 30,
  speed: 6,
};

// Очки
let score = 0;
let gameOver = false;

function drawDino() {
  ctx.fillStyle = "green";
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function drawCactus() {
  ctx.fillStyle = "brown";
  ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);
}

function drawScore() {
  ctx.fillStyle = "black";
  ctx.font = "20px sans-serif";
  ctx.fillText("Очки: " + score, 10, 20);
}

function update() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Гравітація
  if (dino.jumping) {
    dino.velocityY += dino.gravity;
    dino.y += dino.velocityY;

    if (dino.y >= 110) {
      dino.y = 110;
      dino.jumping = false;
      dino.velocityY = 0;
    }
  }

  // Рух кактуса
  cactus.x -= cactus.speed;

  if (cactus.x + cactus.width < 0) {
    cactus.x = canvas.width + Math.random() * 300;
    score++;
  }

  // Перевірка зіткнення
  if (
    dino.x < cactus.x + cactus.width &&
    dino.x + dino.width > cactus.x &&
    dino.y < cactus.y + cactus.height
  ) {
    gameOver = true;
    alert("Гру завершено! Твої очки: " + score);
    location.reload();
  }

  drawDino();
  drawCactus();
  drawScore();

  requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !dino.jumping) {
    dino.jumping = true;
    dino.velocityY = -20;
  }
});

update();