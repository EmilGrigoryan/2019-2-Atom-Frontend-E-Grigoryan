/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

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
