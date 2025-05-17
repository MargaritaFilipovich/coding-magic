
document.getElementById("yearForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const year = parseInt(document.getElementById("sum").value);
    const result = document.getElementById("result");

    if (isNaN(year)) {
      result.style.display = "block";
      result.style.color = "orange";
      result.textContent = "Будь ласка, введіть коректний рік!";
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    result.style.display = "block";
    if (isLeap) {
      result.style.color = "green";
      result.textContent = `${year}р. — Ви народилися у високосний рік!`;
    } else {
      result.style.color = "red";
      result.textContent = `${year}р. — Ви народилися не у високосний рік!`;
    }
  });
  