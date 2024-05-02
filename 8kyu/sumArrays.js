//Given an array of nums, return the sum of the nums

const sum = (nums) => nums.reduce((acc,c)=>(acc+c),0)

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);