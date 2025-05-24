document.addEventListener("DOMContentLoaded", function () {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const num3 = document.getElementById("num3");
  const resultDiv = document.getElementById("max-result");

  num1.addEventListener("input", () => {
    if (num1.value) {
      setTimeout(() => {
        validateField(num2);
        setTimeout(() => {
          validateField(num3);
        }, 100);
      }, 0);
    }
    checkAndShowMax();
  });

  [num2, num3].forEach(input => {
    input.addEventListener("input", () => {
      input.setCustomValidity("");
      checkAndShowMax();
    });
  });

  num1.addEventListener("input", checkAndShowMax);

  function checkAndShowMax() {
    if (num1.value && num2.value && num3.value) {
      const max = Math.max(+num1.value, +num2.value, +num3.value);
      resultDiv.textContent = `Найбільше число яке ви ввели: ${max}`;
    } else {
      resultDiv.textContent = "";
    }
  }
});