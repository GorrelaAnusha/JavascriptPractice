/*Use switch case for calculator (+, -, *, /)
Menu-driven program using switch
Check leap year
Grade calculation using if–else
Find smallest of N numbers*/


const readline=require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,

});
r1.question("Enter the operation  ",(n1)=>{
r1.question("Enter the firstvalue  ",(a)=>{
r1.question("Enter the secondvalue  ",(b)=>{
    a=Number(a);
    b=Number(b);
    switch(n1){
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break;
        case "*":
            console.log(a*b);  
            break;
        case "/":
        console.log(a/b);  
            break;

    }
    r1.close();
})
})
})