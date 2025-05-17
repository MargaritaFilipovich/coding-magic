function convertTime() {
      const seconds = parseInt(document.getElementById("secondsInput").value, 10);
      if (isNaN(seconds) || seconds < 0) {
        document.getElementById("result-sec").innerText = "Некоректне число.";
        return;
      }

      const days = Math.floor(seconds / (24 * 3600));
      const hours = Math.floor((seconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secunds = seconds % 60;

      document.getElementById("result-sec").innerText =
        `${days} дн. ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secunds).padStart(2, '0')}`;
    }

    document.querySelector('.convertBtn').addEventListener('click', convertTime);