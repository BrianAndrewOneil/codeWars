//given a string that may have mixed uppercase and lowercase letters, 
//convert that string to either lowercase only or uppercase only (make as few changes as possible)
function solve(s){
    let count=s.split('').filter(l=>l.toLowerCase()===l).length
    return (count >= s.length/2 ? s.toLowerCase() : s.toUpperCase())
}

console.log(solve("code"),"code");
console.log(solve("CODe"),"CODE");
console.log(solve("COde"),"code");
console.log(solve("Code"),"code");