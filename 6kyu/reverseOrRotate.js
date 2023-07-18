//Cut a string into chunks of size sz (ignore the last chunk if its size is less than sz).
//If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
//otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

function revrot(str, sz) {
    if (str===""||sz===0) return ""
    let ans = str.match(new RegExp('.{1,' + sz + '}', 'g')).filter(n=>n.length===sz)
    return ans
    
}

console.log(revrot("123456987654", 6), "234561876549")
console.log(revrot("123456987653", 6), "234561356789")
console.log(revrot("66443875", 4), "44668753")
console.log(revrot("66443875", 8), "64438756")
console.log(revrot("664438769", 8), "67834466")
console.log(revrot("123456779", 8), "23456771")
console.log(revrot("", 8), "")
console.log(revrot("123456779", 0), "") 
console.log(revrot("563000655734469485", 4), "0365065073456944")