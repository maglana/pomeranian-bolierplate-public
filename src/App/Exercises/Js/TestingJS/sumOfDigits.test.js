import { sumOfDigits } from "./sumOfDigits";

test('suma cyfr liczy 5b wynosi 5', ()=>{
    expect(sumOfDigits(5)).toBe(5);
})

test('suma cyfr liczy 123 wynosi 6', ()=>{
    expect(sumOfDigits(123)).toBe(6);
})

test('suma cyfr liczy 0 wynosi 0', ()=>{
    expect(sumOfDigits(0)).toBe(0);
})

test('suma cyfr liczy 12 wynosi 3', ()=>{
    expect(sumOfDigits(12)).toBe(3);
})