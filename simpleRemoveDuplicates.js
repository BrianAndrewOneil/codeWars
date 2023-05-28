//Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
function solve(arr) {
    let answer = arr.filter( (c,i,a)=>i===arr.lastIndexOf(c))
    return answer;
  }

console.log(solve([3,4,4,3,6,3]),[4,6,3]);
console.log(solve([1,2,1,2,1,2,3]),[1,2,3]);
console.log(solve([1,2,3,4]),[1,2,3,4]);
console.log(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
console.log(solve([1,2,1,2,1,1,3]),[2,1,3]);