//Given an array of integers, return an array of the averages of each integer and his follower, if there is one.

const averages = (n) => n==null || n.length<2 ? [] : n.map( (c,i,a) => ((c+a[i-1])/2 ) ).slice(1,n.length)

console.log(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);