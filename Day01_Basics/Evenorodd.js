const r1=require("readline-sync");
let num=r1.question("Enter a number:");
num = Number(num);
if(num%2===0){
    console.log(num + " is even");
}
else{
    console.log(num + " is odd");
}
r1.close();