const readline=require("readline");
const r1=readline.createInterface({
    input : process.stdin,  
    output : process.stdout,
}); 
r1.question("Enter a number: ", n => {
    n = Number(n);
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }   
    r1.close();
});