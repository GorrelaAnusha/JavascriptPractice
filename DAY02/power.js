const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter base value: ", (base) => {
  r1.question("Enter exponent value: ", (exponent) => {

    base = Number(base);
    exponent = Number(exponent);

    let result = 1;

    for (let i = 1; i <= exponent; i++) {
      result = result * base;
    }

    console.log(`Result: ${result}`);
    r1.close();
  });
});
