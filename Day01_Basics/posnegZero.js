const readline=require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter a number:",num=>{
    num=Number(num);
    if(num>0){
        console.log(num + " is positive");
    }
    else if(num<0){
        console.log(num + " is negative");
    }
    else{
        console.log("The number is zero");
    }
    r1.close();
})
