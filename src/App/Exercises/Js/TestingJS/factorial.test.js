import {factorial} from './factorial';



test('Silnia z 0 powinna wynosić 1', () => {
  expect(factorial(0)).toBe(1);
});


test('Silnia z 1 powinna wynosić 1', () => {
  expect(factorial(1)).toBe(1);
});
