const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the number: ", (n1) => {

  let count = n1.trim().length;
  console.log(count);
  r1.close();
});