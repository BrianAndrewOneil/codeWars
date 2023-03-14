//Given any int, return the next multiple of 5
function roundToNext5(n){
    while(n%5!==0) n++
    return n
}

console.log(roundToNext5(0), 0)
console.log(roundToNext5(2), 5)
console.log(roundToNext5(3), 5)
console.log(roundToNext5(12), 15)
console.log(roundToNext5(21), 25)
console.log(roundToNext5(30), 30)
console.log(roundToNext5(-2), 0)
console.log(roundToNext5(-5), -5)