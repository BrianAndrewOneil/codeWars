//Determine if The sum of its digits powered with their respective positions is equal to the number itself.

// function disariumNumber(n){
//     const num = Array.from(String(n), Number)
//     return (num.reduce((acc,c,i)=>acc+Math.pow(c,(i+1)),0)===n ? "Disarium !!" : "Not !!")
// }

const disariumNumber = n => (Array.from(String(n), Number)).reduce((acc,c,i)=>acc+Math.pow(c,(i+1)),0)===n ? "Disarium !!" : "Not !!"

console.log(disariumNumber(89),"Disarium !!");
console.log(disariumNumber(564),"Not !!");
console.log(disariumNumber(1024),"Not !!");
console.log(disariumNumber(135),"Disarium !!");
console.log(disariumNumber(136586),"Not !!");