export default function expressionCalculator(str) {
  // Передалаем в ОПЗ

  var arr = [];
  var Out = '';

  function Prioritet(a) {
    switch (a) {
      case '^':
        return 4;
      case '%':
        return 3;
      case '*':
        return 3;
      case '/':
        return 3;
      case '+':
        return 2;
      case '-':
        return 2;
      case '(':
        return 1;
    }
    return 0;
  }

  for (var i = 0; i < str.length; i++) {

    if (str[i] === ' ') continue;

    if (str[i] === '(') {

      arr.push('(');
      continue;
    }

    if (str[i] === ')') {

      if (arr.length === 0) {
        throw new Error('ExpressionError: Brackets must be paired');
      }

      while (arr[arr.length - 1] !== '(') {

        // если уже достали ласт элемент, а открывающей скобки нету
        if (arr.length === 1) throw new Error('ExpressionError: Brackets must be paired');

        Out += arr.pop();
      }
      arr.pop(); // достаем открывающую скобку
      continue;
    }

    if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/' || str[i] === '%' || str[i] === '^') {

      while (arr.length !== 0 && (Prioritet(arr[arr.length - 1]) >= Prioritet(str[i]))) {
        Out += arr.pop() + ' ';
      }

      arr.push(str[i]);
      continue;
    }

    if (str[i] === 's' && str[i + 1] === 'i' && str[i + 2] === 'n') {
      j = i + 2;
      let number = '';

      while (j < str.length) {
        if (str[j + 1] === '.' || (str[j + 1] !== undefined && str[j + 1] !== ' ' && str[j + 1] >= 0)) {
          number += str[j + 1];
          j++;
        } else {
          i = j;
          number = Math.sin(Math.PI / (180 / number)).toFixed(2) + ' ';
          break;
        }
      }
      Out += number;
      continue;
    }

    if (str[i] === 't') {
      j = i + 1;
      let number = '';

      while (j < str.length) {
        if (str[j + 1] === '.' || (str[j + 1] !== undefined && str[j + 1] !== ' ' && str[j + 1] >= 0)) {
          number += str[j + 1];
          j++;
        } else {
          i = j;
          number = Math.tan(Math.PI / (180 / number)).toFixed(2) + ' ';
          break;
        }
      }
      Out += number;
      continue;
    }

    if (str[i] === 'c' && str[i + 1] === 'o' && str[i + 2] === 's') {
      j = i + 2;
      let number = '';

      while (j < str.length) {
        if (str[j + 1] === '.' || (str[j + 1] !== undefined && str[j + 1] !== ' ' && str[j + 1] >= 0)) {
          number += str[j + 1];
          j++;
        } else {
          i = j;
          number = Math.cos(Math.PI / (180 / number)).toFixed(2) + ' ';
          break;
        }
      }
      Out += number;
      continue;
    }

    if (str[i] === 'c' && str[i + 1] === 't' && str[i + 2] === 'g') {
      j = i + 2;
      let number = '';

      while (j < str.length) {
        if (str[j + 1] === '.' || (str[j + 1] !== undefined && str[j + 1] !== ' ' && str[j + 1] >= 0)) {
          number += str[j + 1];
          j++;
        } else {
          i = j;
          number = (1 / Math.tan(Math.PI / (180 / number))).toFixed(2) + ' ';
          break;
        }
      }
      Out += number;
      continue;
    }

    if (str[i] === 'l') {
      j = i + 1;
      let number = '';

      while (j < str.length) {
        if (str[j + 1] === '.' || (str[j + 1] !== undefined && str[j + 1] !== ' ' && str[j + 1] >= 0)) {
          number += str[j + 1];
          j++;
        } else {
          i = j;
          number = Math.log(number).toFixed(2) + ' ';
          break;
        }
      }
      Out += number;
      continue;
    }

    if (str[i] === 's' && str[i+1] === 'q' && str[i+2] === 'r' && str[i+3] === 't') {
      j = i + 3;
      let number = '';

      while (j < str.length) {
        if (str[j + 1] === '.' || (str[j + 1] !== undefined && str[j + 1] !== ' ' && str[j + 1] >= 0) || (str[j + 1] === '-')) {
          number += str[j + 1];
          j++;
        } else {
          i = j;
          if (number[0] === '-') {
            return 'Error: square root from negative number';
          }
          number = Math.sqrt(number).toFixed(2) + ' ';
          break;
        }
      }
      Out += number;
      continue;
    }

    let number = str[i];
    let j = i;

    while (j < str.length) {
      if (str[j + 1] === '.' || (str[j + 1] !== undefined && str[j + 1] !== ' ' && str[j + 1] >= 0)) {
        number += str[j + 1];
        j++;
      } else {
        if (str[j + 1] === '!') {
          let num = +number;
          let res = 1;

          while (num > 1 ) {
            res *= num;
            num--;
          }

          j++;
          i = j;
          number = res + ' ';
        } else {
          i = j;
          number += ' ';
        }
        break;
      }
    }

    Out += number;
    continue;
  }
  // Достаем оставшиеся знаки из стека
  while (arr.length !== 0) {
    if (arr[arr.length - 1] === '(')
      throw new Error('ExpressionError: Brackets must be paired');
    Out += arr.pop();
  }

  var n2, n1;
  let result = 0;

  for (let i = 0; i < Out.length; i++) {

    if (Out[i] === ' ') continue;

    if (Out[i] >= 0 || (Out[i] === '-' && Out[i+1] >= 0 && Out[i+1] !== ' ')) { // Проверка на число
      let number = Out[i];
      let j = i;

      while (j < Out.length) {
        if (Out[j + 1] === '.' || (Out[j + 1] >= 0 && Out[j + 1] !== ' ')) {
          number += Out[j + 1];
          j++;
        } else {
          i = j;
          number = +number;
          break;
        }
      }

      arr.push(number);
    } else {
      n2 = arr.pop();
      n1 = arr.pop();

      if (n1 === undefined) {
        result -= n2;
      } else {
        try {
          switch (Out[i]) {
            case '+':
              result = n1 + n2;
              break;
            case '-':
              result = n1 - n2;
              break;
            case '*':
              result = n1 * n2;
              break;
            case '/':
              if (n2 === 0) throw new Error('TypeError: Division by zero.');
              result = n1 / n2;
              break;
            case '%':
              result = n1 - Math.floor(n1 / n2) * n2;
              break;
            case '^':
              result = Math.pow(n1, n2);
              break;
            default:
              console.log('Error!');
          }
        } catch (err) {
          return err;
        }
      }
      // Вовзращаем результат в стек
      arr.push(result);
    }
  }
  return arr[0];
}