//Given an array of numbers, return a number that is the sum of:
//1. The product of all the non-negative numbers
//2. The sum of all the negative numbers

const mathEngine = arr => {
    if (arr === null) return 0
    let negs = arr.filter(x => x<0 ).reduce((acc,c) => acc+c,0)
    let pos = arr.filter(x => x>0 ).reduce((acc,c) => acc*c,1)
    return (pos+negs)
}

console.log(mathEngine([1, 2, 3, -4, -5]), -3)
console.log(mathEngine(null), 0)