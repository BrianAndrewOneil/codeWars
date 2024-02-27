//Given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.
//Determine if the cat can catch the mouse from its current position. The cat can jump at most (j) characters, and cannot jump over the dog.
//https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf/train/javascript

function catMouse(x, j){
    if (!(x.includes('D')&&x.includes('C')&&x.includes('m'))) return "boring without all three"
    let cIndex = x.indexOf('C')
    let dIndex = x.indexOf('D')
    let mIndex = x.indexOf('m')
    if ( (dIndex<cIndex&&dIndex>mIndex) || (dIndex>cIndex&&dIndex<mIndex) ) return "Escaped!"
    if (Math.abs(cIndex-mIndex)-j>0) return "Escaped!"
    return "Caught!"
}

console.log(catMouse('..D.....Cm', 13), "Caught!");
console.log(catMouse('............C.............D..m...', 8), "Escaped!");
console.log(catMouse('............C.D..m...', 8), "Escaped!");
console.log(catMouse('............C.D..m...', 8), "Escaped!");
console.log(catMouse('...m....D....C.......', 10), "Protected!");
console.log(catMouse('m.C...', 5), "boring without all three");