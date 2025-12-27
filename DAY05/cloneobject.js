const original = { x: 10, y: 20 }; 
// Using spread operator 
 const clone1 = { ...original };
// Using Object.assign 
const clone2 = Object.assign({}, original); 
console.log(clone1); 
console.log(clone2);