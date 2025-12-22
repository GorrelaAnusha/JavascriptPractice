const readline =require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Enter first number :", (n1)=>{
    n1=Number(n1);  

r1.question("Enter second number :",(n2)=>{
    n2=Number(n2);

console.log(n1+n2);
r1.close;
})
})


/*let a=3;
let b=4;
let sum=a+b;
console.log("addition of "+  a + " and  " + b + " numbers is :"+ sum);*/