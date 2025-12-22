const readline=require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("Enter first number :",(n1)=>{
    n1=Number(n1);
    r1.question("Enter second number :",(n2)=>{
        n2=Number(n2);
        r1.question("Enter third number :",(n3)=>{
            n3=Number(n3);
            if(n1>n2 && n1>n3){
                console.log(n1 + " is largest number");
            }
            else if(n2>n1 && n2>n3){
                console.log(n2 + " is largest number");
            }
            else{
                console.log(n3 + " is largest number");
            }
            r1.close();
        });
    });
});