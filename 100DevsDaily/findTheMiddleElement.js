//when provided with a triplet, returns the index of the numerical element that lies between the other two elements
function gimme (triplet) {
    let ans=triplet.map(e=>e).sort((a,b)=>a-b)
    return triplet.indexOf(+ans[1])
}

console.log(gimme([2, 3, 1]), 0)
console.log(gimme([5, 10, 14]), 1)