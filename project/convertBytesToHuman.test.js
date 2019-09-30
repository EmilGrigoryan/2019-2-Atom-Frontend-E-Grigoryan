/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */
import convertBytesToHuman from './convertBytesToHuman'

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(new Number(100))).toBe(false);
  expect(convertBytesToHuman("12345")).toBe(false);
  expect(convertBytesToHuman(-123)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(2134123)).toBe(2134123);
  expect(convertBytesToHuman(Infinity)).toBe(Infinity);
  expect(convertBytesToHuman(Number("12345"))).toBe(12345);
  expect(convertBytesToHuman(0xffa)).toBe(4090);
});

// другая группа проверок
