//Calculate how many times a number can be divided by a given number.

const divisions = (n, divisor) => {
    ans = 0
    while (n>=divisor){
        n=Math.floor(n/divisor)
        ans++
    }
    return ans
  };

console.log(divisions(6, 2), 2);
console.log(divisions(100, 2), 6);
console.log(divisions(2450, 5), 4);
console.log(divisions(9999, 3), 8);
console.log(divisions(2, 3), 0);
console.log(divisions(5, 5), 1);