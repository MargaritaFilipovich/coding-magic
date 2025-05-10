function findMax() {
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    const n3 = Number(document.getElementById('num3').value);
    const max = Math.max(n1, n2, n3);
    document.getElementById('result').innerText = `Найбільше число, яке ви ввели - ${max}`;
  }

  document.getElementById('button-num').addEventListener('click', findMax);
