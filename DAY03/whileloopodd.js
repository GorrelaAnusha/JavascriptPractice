const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,   
    output: process.stdout, 
}); 
r1.question("Enter a number: ", (n) => {
    n = Number(n);
    let i = 1;  
    while (i <= n) {
        if (i % 2 !== 0) { 
            console.log(i);
        }
        i++;
    }
    r1.close();
});