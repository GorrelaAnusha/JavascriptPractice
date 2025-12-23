//Reverse a number
const readline=require("readline");
const r1=readline.createInterface({
    input : process.stdin,
  output: process.stdout,
});
r1.question("Enter the number",n=>{
    n=Number(n);
   let rev=0;
  while(n>0)
{
    let d=n%10;
    rev=rev*10+d;
    n = Math.floor(n / 10);
}
console.log(rev);
r1.close();
})


/*let n = 1215;
let s = String(n);
let rev = s.split("").reverse().join("");
console.log(Number(rev)); // 5121*/
