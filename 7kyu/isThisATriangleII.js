//Accept 3 integer values. Return true if a triangle can be built 
//with the sides of given length and false in any other case.
function isTriangle(a,b,c){
    let set=[a,b,c]
    set=set.sort((a,b)=>a-b)
    return (set[0]+set[1])>set[2]
}

console.log(isTriangle(1,2,3), false)
console.log(isTriangle(3,6,8), true)
console.log(isTriangle(3,6,5), true)