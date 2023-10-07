//Given two arrays, combine them into one. If array 1 already has an element that exists in array 2, don't duplicate it.

function combine (arr1,arr2){
    let ans=arr1
    arr2.forEach(n=>arr1.includes(n)?n:ans.push(n))
    return ans
}

//or, if asked to create one array with no duplicates at all
function combine2(arr1,arr2){
    const comboSet = new Set([...arr1, ...arr2])
    return [...comboSet]
}

console.log(combine([1,2],[3,4]), [1,2,3,4])
console.log(combine([1,2,3],[3,4]), [1,2,3,4])
console.log(combine2([1,1,2,3],[3,4]), [1,2,3,4])