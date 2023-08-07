//Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. 
//The sequence ends once an element that has already been in the sequence appears again.
//Given the first element a0, find the length of the sequence.
//https://www.codewars.com/kata/5886d65e427c27afeb0000c1/train/javascript

function squareDigitsSequence(a0) {
    let arr = [a0]
    while (arr) {
        let next = arr[arr.length-1].toString().split('').reduce( (acc,c)=>acc+c*c,0 )
        if (arr.includes(next)) return arr.length+1
        else (arr.push(next))
    } 
}

console.log( squareDigitsSequence(16) , 9)
console.log( squareDigitsSequence(103) , 4)
console.log( squareDigitsSequence(1) , 2)