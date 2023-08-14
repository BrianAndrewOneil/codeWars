//Given a sequence of numbers, find the largest pair sum in the sequence.

const largestPairSum = n => n.sort( (a,b) => b-a ).filter( (c,i,a) => i===0 || i===1 ).reduce( (acc,c)=>acc+c,0 )

console.log(largestPairSum([10,14,2,23,19]), 42);
console.log(largestPairSum([-100,-29,-24,-19,19]), 0);
console.log(largestPairSum([1,2,3,4,6,-1,2]), 10);
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18);