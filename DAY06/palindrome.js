let word="AMMA";
let rev=word.split("").reverse().join("");
if(word==rev){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome");
}