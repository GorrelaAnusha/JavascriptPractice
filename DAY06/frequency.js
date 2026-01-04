let word="programming";
let freq={};
for(let i of word){
   // freq[i]=(freq[i]||0)+1;
   if(freq[i]){
    freq[i]++;
    }
    else{
        freq[i]=1;
    }
}
console.log(freq);