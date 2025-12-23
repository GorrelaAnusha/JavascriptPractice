/*LCM is the smallest number that is divisible by both numbers.
Numbers: 12 and 18
Multiples of 12 → 12, 24, 36, …
Multiples of 18 → 18, 36, …
LCM = 36*/

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter first number: ", (a) => {
  r1.question("Enter second number: ", (b) => {

    a = Number(a);
    b = Number(b);

    let x = a;
    let y = b;

  
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }

    let hcf = x;
    
    let lcm = (a * b) / hcf;

    console.log("LCM is:", lcm);
    r1.close();
  });
});
