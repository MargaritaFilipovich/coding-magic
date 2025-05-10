    let operation = '+';

    document.querySelectorAll('.operations button').forEach(button => {
      button.addEventListener('click', () => {
        operation = button.getAttribute('data-op');
      });
    });

    document.getElementById('equals').addEventListener('click', () => {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      let result = '';

      if (isNaN(a) || isNaN(b)) {
        result = 'Помилка';
      } else if (operation === '/' && b === 0) {
        result = 'Ділення на нуль неможливе';
      } else {
        switch (operation) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '*': result = a * b; break;
          case '/': result = a / b; break;
          default: result = 'Невірна операція';
        }
      }

      document.getElementById('result').value = result;
    });