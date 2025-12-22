//swap with third variable
let a=5;
let b=10;
console.log("Before swapping a="+ a + " b=" + b);   
let temp;
temp=a;
a=b;
b=temp;
console.log("After swapping a="+ a + " b=" + b);    

//swap without third variable
let x=15;
let y=20;
console.log("Before swapping x="+ x + " y=" + y);   
x=x+y;
y=x-y;
x=x-y;
console.log("After swapping x="+ x + " y=" + y);