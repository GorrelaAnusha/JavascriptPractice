//Menu-driven program using switch
const readline=require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,

});
console.log("1.BIRYANI-250");
console.log("2.Dosa-50");
console.log("3.Burger-30");
console.log("4.Pizza-120");
console.log("5.Donut-20");
r1.question("Enter the recipe number ",(n1)=>{
    n1=Number(n1);
r1.question("Enter the quantity  ",(q)=>{
    q=Number(q);
  let total=0;
  switch(n1){
    case 1:
        total=250*q;
        console.log("Biryani");
        break;
      case 2:
        total=50*q;
        console.log("Biryani");
        break;
        case 3:
        total=30*q;
        console.log("Biryani");
        break;
        case 4:
        total=120*q;
        console.log("Biryani");
        break;
        case 5:
        total=20*q;
        console.log("Biryani"); 
        break;
        default:
            console.log("Invalid choice");
            break;

  }
  console.log(`quantity:${q}`);
  console.log(`total:${total}`);
    
   r1.close(); 

});
});
