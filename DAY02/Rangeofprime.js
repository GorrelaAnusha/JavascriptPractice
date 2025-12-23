//Print all prime numbers between two numbers
const readline=require("readline");
const r1=readline.createInterface({
input:process.stdin,
output:process.stdout,

    });
   r1.question("Enter the first number",(f)=>{
    f=Number(f);

    r1.question("Enter the second number", (l)=>{
        l=Number(l);

        function isPrime(num) { 
            if (num < 2) 
            return false; // 0 and 1 are not prime 
        for (let i = 2; i <= Math.sqrt(num); i++) 
            { 
            if (num % i === 0) 
            return false; 
        } 
        return true; 
    } 
    console.log(`Prime numbers between ${f} and ${l}:`); 
    
    for (let n = f; n <= l; n++)  { 
        if (isPrime(n))  { 
            console.log(n);
             } 
            }
        
        r1.close();
        
    })

   }) 