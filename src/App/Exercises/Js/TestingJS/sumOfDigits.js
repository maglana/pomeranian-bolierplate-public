export function sumOfDigits(n) {
    if (n < 0) {
      n = Math.abs(n);
    }
  
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
  
    return sum;
  }
  
  