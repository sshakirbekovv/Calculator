//Factorial
export const factorial: any = (num: number) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

//Square
export const square: any = (num: number) => {
  return num * num;
};

//Square root
export const squareRoot: any = (n: number) => {
  let avg = (a: number, b: number) => (a + b) / 2,
    c = 5,
    b;
  for (let i = 0; i < 20; i++) {
    b = n / c;
    c = avg(b, c);
  }
  return c;
};

//Exponent
export const exponent: any = (base: number, exponent: any) => {
  return base ** exponent;
};
