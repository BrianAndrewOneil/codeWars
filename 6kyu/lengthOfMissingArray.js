//Given an array of array, the length-values of the arrays are consecutive. 
//But one is missing, return the length of the missing array.

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays==null || arrayOfArrays.length==0) return 0
    let ans = []
    for (a of arrayOfArrays){
        if (a==null || a.length==0) return 0
        ans.push(a.length)
    }
    return ans.sort((a,b)=>a-b).filter( (c,i,a) => c+1!=a[i+1])[0]+1
}

console.log(getLengthOfMissingArray([ ] ), 0);
console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);