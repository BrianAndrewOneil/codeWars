//The Hamming Distance is a measure of similarity between two strings of equal length. 
//Complete the function so that it returns the number of positions where the input strings do not match. 

// function hamming(a,b) {
// 	let ans=0
//     a.split('').forEach((e,i)=>e===b[i]?e:ans++)
//     return ans
// }

let hamming=(a,b)=>a.split('').filter((e,i)=>e!==b[i]).length

console.log(hamming("I like turtles","I like turkeys"),3);
console.log(hamming("Hello World","Hello World"),0);
console.log(hamming("hello world","hello tokyo"),4);
console.log(hamming("a man a plan a canal","a man a plan sobanal"),3);
console.log(hamming("hamming and cheese","Hamming and Cheese"),2);
console.log(hamming("espresso","Expresso"),2);
console.log(hamming("old father, old artificer","of my soul the uncreated "),24)