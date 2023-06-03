//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
//Return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
//Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
function diamond(n){
    if (n<=0||n%2==0) return null
    let space = Math.floor(n/2), star = 1
    let ans = []
    while (space>=0){
        ans.push(`${' '.repeat(space)}${'*'.repeat(star)}\n`)
        space--
        star+=2
    }
    let ans2 = ans.slice(0,ans.length-1).reverse()
    return (ans.concat(ans2).join(''))
}

console.log(diamond(1),"*\n")
console.log(diamond(3), " *\n***\n *\n")
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
console.log(diamond(0), "null")