const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", (n1) => {

  let count = n1.trim().length;
  n1 = Number(n1);
  let original = n1;  
  let sum = 0;

  while (n1 > 0) {
  let digit = n1 % 10;
  sum += digit ** count;
  n1 = Math.floor(n1 / 10);
}

  if (sum === original) {
    console.log(original + " is an Armstrong number");
  } else {
    console.log(original + " is NOT an Armstrong number");
  }

  r1.close();
});
