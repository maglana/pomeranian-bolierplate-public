export function isPrime (x) {
    if (!Number.isInteger(x)) {
      return 'zła wartość';
    }

    let licznikPodzielnosci = 0;

    for (let i = 1; i <= x; i++) {
      if (x % i === 0) {
        licznikPodzielnosci++;
      }
    }

    return licznikPodzielnosci === 2;}