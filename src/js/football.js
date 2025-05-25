const ball = document.getElementById("ball");
let posX = 20;
let posY = 135;

document.addEventListener("keydown", function (e) {
  const step = 10;
  if (e.key === "ArrowRight") posX += step;
  else if (e.key === "ArrowLeft") posX -= step;
  else if (e.key === "ArrowUp") posY -= step;
  else if (e.key === "ArrowDown") posY += step;

  // Ограничения
  posX = Math.max(0, Math.min(550, posX));
  posY = Math.max(0, Math.min(250, posY));

  ball.style.left = posX + "px";
  ball.style.top = posY + "px";

  // Проверка на гол
  if (posX > 530 && posY > 100 && posY < 200) {
    alert("Гол!");
    posX = 20;
    posY = 135;
  }
});