//Subtracts one list from another and return the result.
//Remove all values from list a, which are present in list b keeping their order.
let arrayDiff = (a,b) => a.filter(num=>!(b.includes(num)))

//or the following, which is more efficient, linear time
function arrayDiff(a,b){
    if(a.length===0||b.length===0) return a
    let newSet = new Set(b)
    return a.filter(n=>!newSet.has(n))
}