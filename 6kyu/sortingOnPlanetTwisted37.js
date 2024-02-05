//On planet 3-7, the values of 3 and 7 are reversed.
//Create a method that can sort an array the way it would be sorted on Twisted-3-7.

function sortTwisted37(array) {
    let ans = array.map (i=>+(i.toString().replaceAll('3','seven').replaceAll('7','three').replaceAll('three','3').replaceAll('seven','7')))
    ans = ans.sort( (a,b) => a-b)
    ans = ans.map (i=>+(i.toString().replaceAll('3','seven').replaceAll('7','three').replaceAll('three','3').replaceAll('seven','7')))
    return ans
}

console.log(sortTwisted37([1,2,3,4,5,6,7,8,9]), [1,2,7,4,5,6,3,8,9]);
console.log(sortTwisted37([12,13,14]), [12,14,13]);
console.log(sortTwisted37([9,2,4,7,3]), [2,7,4,3,9]);