let word1='listen';
let word2='silent';
word1=word1.split("").sort().join("");
word2=word2.split("").sort().join("");
if(word1===word2){
    console.log("Anagrams");
}
else{
    console.log(" not an Anagrams");
}