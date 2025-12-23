//check prime number
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a value: ", (n1) => {
    n1 = Number(n1);

    if (n1 === 0 || n1 === 1) {
        console.log("Not a Prime");
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n1); i++) {
            if (n1 % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("Prime");
        } else {
            console.log("Not a Prime");
        }
    }

    r1.close();
});


