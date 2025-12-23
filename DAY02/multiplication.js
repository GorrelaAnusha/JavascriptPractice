const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", (n) => {
     n=Number(n);
    
for(let i=1;i<=20;i++)
{
    console.log(`${n}*${i}= ${n*i}`);
}
r1.close();
});