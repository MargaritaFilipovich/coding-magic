const canvas = document.getElementById("dino-game");
const ctx = canvas.getContext("2d");

let dino = { x: 50, y: 100, vy: 0, gravity: 2, jump: -25, onGround: true };

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && dino.onGround) {
    dino.vy = dino.jump;
    dino.onGround = false;
  }
});

function updateDino() {
  dino.y += dino.vy;
  dino.vy += dino.gravity;

  if (dino.y >= 100) {
    dino.y = 100;
    dino.vy = 0;
    dino.onGround = true;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(dino.x, dino.y, 30, 30);
  requestAnimationFrame(updateDino);
}

updateDino();