    let operation = '+';

    document.querySelectorAll('.operations_calc button').forEach(button => {
      button.addEventListener('click', () => {
        operation = button.getAttribute('data-op');
      });
    });

    document.getElementById('equals_calc').addEventListener('click', () => {
      const a = parseFloat(document.getElementById('number-calc1').value);
      const b = parseFloat(document.getElementById('number-calc2').value);
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

      document.getElementById('result_calc').value = result;
    });