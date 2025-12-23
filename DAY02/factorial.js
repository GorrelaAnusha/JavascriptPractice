//Find factorial of a number
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a number: ", (n1) => {
    n1 = Number(n1);
    let fact = 1;
    for (let i = 1; i <= n1; i++) {
        fact = fact * i;
    }
    console.log(`Factorial of ${n1} is ${fact}`);
    r1.close();  // Close the readline interface
});
