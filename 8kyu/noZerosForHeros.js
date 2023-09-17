//Remove the "0"s from the end of any given number. Internal "0" are okay.
function noBoringZeros(n) {
    while (n%10===0 && n!=0) n=n/10
    return n
}

console.log(noBoringZeros(34), 34)
console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)