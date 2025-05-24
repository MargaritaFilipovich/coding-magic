const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 15,
  speedX: 0,
  speedY: 0
};

const goal = {
  x: canvas.width - 40,
  y: canvas.height / 2 - 60,
  width: 40,
  height: 160
};

function drawGoal() {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(goal.x, goal.y, goal.width, goal.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speedX = 0;
  ball.speedY = 0;
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGoal();
  drawBall();

  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Столкновение с границами поля
  if(ball.x - ball.radius < 0) {
    ball.speedX = 0;
    ball.x = ball.radius;
  }
  if(ball.y - ball.radius < 0) {
    ball.speedY = 0;
    ball.y = ball.radius;
  }
  if(ball.y + ball.radius > canvas.height) {
    ball.speedY = 0;
    ball.y = canvas.height - ball.radius;
  }

  // Проверка гола
  if(
    ball.x + ball.radius > goal.x &&
    ball.y > goal.y &&
    ball.y < goal.y + goal.height
  ) {
    score++;
    document.getElementById('score').textContent = score;
    resetBall();
  }

  requestAnimationFrame(update);
}

document.addEventListener('keydown', e => {
  const speed = 7;
  switch(e.key) {
    case 'ArrowUp':
      ball.speedY = -speed;
      ball.speedX = 0;
      break;
    case 'ArrowDown':
      ball.speedY = speed;
      ball.speedX = 0;
      break;
    case 'ArrowLeft':
      ball.speedX = -speed;
      ball.speedY = 0;
      break;
    case 'ArrowRight':
      ball.speedX = speed;
      ball.speedY = 0;
      break;
  }
});

resetBall();
update();