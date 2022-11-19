//Given an integer n > 1, return an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest.
function divisors(integer) {
  let ans=[]
  for(let i=2;i<integer;i++){
    if (integer%i===0) ans.push(i)
  }
  if (ans.length===0) return`${integer} is prime`
  else return ans
};

console.log(divisors(15), [3, 5])
console.log(divisors(12), [2, 3, 4, 6])
console.log(divisors(13), "13 is prime")