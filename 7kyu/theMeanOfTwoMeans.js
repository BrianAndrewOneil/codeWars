//takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between 
//the mean of the the first x elements of the array and the mean of the last y elements of the array.
//The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. 
//Otherwise the function should return -1.

function getMean(arr, x, y) {
    if (x<=1||y<=1||arr.length<x||arr.length<y) return -1
    let ans1 = arr.slice(0,x).reduce((acc,c)=>acc+c,0)/x
    let ans2 = arr.slice(-y).reduce((acc,c)=>acc+c,0)/y
    return (ans1+ans2)/2
}

console.log(getMean([1,3,2,4],2,3),2.5);
console.log(getMean([1,3,2],2,2),2.25);
console.log(getMean([1,3,2,4],1,2),-1);
console.log(getMean([1,3,2,4],2,8),-1);