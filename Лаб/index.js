let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // массив цифр от 9 до 0
let result = 200; // результат, который нужно получить
let expressions = []; // массив строк с выражениями

// перебираем все возможные комбинации
for (let i = 0; i < Math.pow(3, numbers.length - 1); i++) {
  let current = i;
  let sum = numbers[0];
  let exp = numbers[0].toString();

  // формируем выражение
  for (let j = 0; j < numbers.length - 1; j++) {
    let op = current % 3;
    current = Math.floor(current / 3);
    if (op === 0) {
      sum = sum * 10 + numbers[j + 1];
      exp += numbers[j + 1];
    } else if (op === 1) {
      sum += numbers[j + 1];
      exp += "+" + numbers[j + 1];
    } else {
      sum -= numbers[j + 1];
      exp += "-" + numbers[j + 1];
    }
  }

  // проверяем, если сумма равна результату, то добавляем выражение в массив
  if (sum === result) {
    expressions.push(exp + "=" + result);
  }
}

// выводим все найденные выражения
console.log(expressions);
