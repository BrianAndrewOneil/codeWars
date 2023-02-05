//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
//Input will always be valid, i.e. no negative integers.

function countSheep(n){
    let ans=""
    let i=1
    while(i<=n){
        ans+=`${i} sheep...`
        i++
    }
    return ans
}

console.log(countSheep(7))