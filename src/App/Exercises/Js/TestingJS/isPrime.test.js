import {isPrime} from './isPrime';

test('5 powinno być liczbą pierwszą', () => {
    expect(isPrime(5)).toBe(true);
})