/*HCF (also called GCD) is the largest number that divides two numbers exactly.
HCF of 12 and 18
Factors of 12 → 1, 2, 3, 4, 6, 12
Factors of 18 → 1, 2, 3, 6, 9, 18
HCF = 6*/


const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter first number: ", (a) => {
  r1.question("Enter second number: ", (b) => {

    a = Number(a);
    b = Number(b);

    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    console.log("HCF is:", a);
    r1.close();
  });
});
