const readline=require("readline");
const r1=readline.createInterface({
    input : process.stdin,
  output: process.stdout,
});
r1.question("Enter the number",n=>{
    n=Number(n);
   let sum=0;
  while(n>0)
{
    let d=n%10;
    sum=sum+d;
    n = Math.floor(n / 10);
}
console.log(sum);

r1.close();
})