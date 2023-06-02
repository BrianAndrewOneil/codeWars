//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
//Return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
//Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
function diamond(n){
    if (n<=0||n%2==0) return null
    let space = Math.floor(n/2), star = 1 //Math.ceil(n/2)
    console.log(star)
    let ans = []
    while (space>=0){
        ans.push(`${' '.repeat(space)}${'*'.repeat(star)}`)
        space--
        star+=2
    }
    return ans
}

console.log(diamond(1), "*\n")
console.log(diamond(3), " *\n***\n *\n")
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
console.log(diamond(0), "null")