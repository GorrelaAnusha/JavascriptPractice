const readline=require('readline');
const r1=readline.createInterface( {
 input: process.stdin,
  output: process.stdout,
    });

r1.question("Enter the range ", (n1)=>{
    n1=Number(n1);
    let a=0;
    let b=1;
    console.log(a);
    console.log(b);
    for(let i=2;i<=n1;i++)
    {
    let c=a+b;
    console.log(c+" ");
    a=b;
    b=c;
    }
    r1.close();


})