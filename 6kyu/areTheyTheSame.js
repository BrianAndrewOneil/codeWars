//Given 2 arrays, ensure array2 items are all squares of array1 items
function comp(array1, array2){
    if(array1==null||array2==null) return false
    array1=array1.sort((a,b)=>a-b)
    array2=array2.sort((a,b)=>a-b)
    let ans=true
    array1.forEach((e,i,a)=>e*e===array2[i]?e:ans=false)
    return ans
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1,a2))