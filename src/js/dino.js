 const game = document.getElementById("game");
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");

    let isRunning = false;
    let gameInterval = null;

    document.addEventListener("keydown", function (e) {
      if (e.key.toLowerCase() === "w") {
        if (!isRunning) {
          startGame();
        } else {
          jump();
        }
      }
    });

    function startGame() {
      game.classList.remove("hidden");
      cactus.style.right = "-20px";
      cactus.style.animation = "moveCactus 2s linear infinite";
      isRunning = true;

      gameInterval = setInterval(() => {
        const dinoBottom = parseInt(getComputedStyle(dino).bottom);
        const cactusRight = parseInt(getComputedStyle(cactus).right);
        const cactusLeft = 800 - cactusRight;

        if (cactusLeft > 50 && cactusLeft < 90 && dinoBottom < 40) {
          resetGame();
        }
      }, 10);
    }

    function resetGame() {
      clearInterval(gameInterval);
      cactus.style.animation = "none";
      cactus.style.right = "-20px";
      game.classList.add("hidden");
      isRunning = false;
    }

    function jump() {
      if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(() => dino.classList.remove("jump"), 500);
      }
    }