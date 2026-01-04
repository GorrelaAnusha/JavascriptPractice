let word="helloworld";
let consonantcount=0;
let vowelcount=0;
for(let i=0;i<word.length;i++){
     if(word.charAt(i)=='a'||word.charAt(i)=='e'||word.charAt(i)=='i'||word.charAt(i)=='o'||word.charAt(i)=='u'||
     word.charAt(i)=='A'||word.charAt(i)=='E'||word.charAt(i)=='I'||word.charAt(i)=='O'||word.charAt(i)=='U' )
     {
        vowelcount++;
     }
     else{
        consonantcount++;
   }

}
console.log(vowelcount);
console.log(consonantcount);