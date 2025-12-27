const book = { title: "Gita", author: "Vyasa", year: "Ancient" };

for (let key in book) {
  console.log(key + " : " + book[key]);
 
}//same as above 
for(let value in book){
    console.log(book[value]);
}
