//Check leap year
const readline=require("readline");
const r1=readline.createInterface({
     input:process.stdin,
    output:process.stdout,
})
r1.question("Enter the year ",(year)=>{
    year=Number(year);
    if(year%400===0 )
    {
        console.log("leap year");
    }
    else if(year%4===0 && year%100!==0)
    {
        console.log("leap year");
    }
    else{
        console.log("Not a leap year");
    }
    r1.close();
    
});

