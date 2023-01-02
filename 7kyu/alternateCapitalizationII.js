//Given a string, capitalize the letters that occupy even indexes and odd indexes separately.
let capitalize=s=>s.split('').map((e,i,a)=>(i+1)%2===0?e=e.toLowerCase():e=e.toUpperCase()).join('')

console.log(capitalize('makeitalternate'))
console.log(capitalize('anothertry'))