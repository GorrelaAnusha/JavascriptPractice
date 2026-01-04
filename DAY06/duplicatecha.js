let word="programming";
let duplicates="";
for(let i of word){
    if(word.indexOf(i)!==word.lastIndexOf(i) && !duplicates.includes(i)){
        duplicates+=i+" ";
    }
}
console.log(duplicates);
