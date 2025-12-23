const readline=require("readline");
const r1=readline.createInterface({
    input : process.stdin,
  output: process.stdout,
});
r1.question("Enter the number",n=>{
    n=Number(n);
    let original=n;
   let rev=0;
  while(n>0)
{
    let d=n%10;
    rev=rev*10+d;
    n = Math.floor(n / 10);
}
console.log(rev);

if(rev===original)
{
    console.log("Palindrome number");
}
else{
    console.log("Not a Palindrome number");
}
r1.close();
})