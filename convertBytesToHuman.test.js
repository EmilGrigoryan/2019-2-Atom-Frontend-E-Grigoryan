/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
// import convertBytesToHuman from './convertBytesToHuman'
import convertBytesToHuman from './convertBytesToHuman'

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(new Number(100))).toBe(false);
  expect(convertBytesToHuman("12345")).toBe(false);
  expect(convertBytesToHuman(-123)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123123123)).toBe("117.42 Mb");
  expect(convertBytesToHuman(Number("1024"))).toBe("1.00 Kb");
  expect(convertBytesToHuman(0xffa)).toBe("3.99 Kb");
  expect(convertBytesToHuman(1125899906842624)).toBe("1.00 Pb");
  expect(convertBytesToHuman(0)).toBe(0);
  
});



// другая группа проверок
