//Given a string, return the error rate of the printer as a string representing a rational whose numerator is the number of errors
//and the denominator the length of the control string. An "error" is any letter after "m." Don't reduce this fraction to a simpler expression.
function printerError(s) {
    let denominator=s.length
    let numerator=s.split('').filter(e=>e.charCodeAt(0)>109).join('').length
    return(numerator.toString()+'/'+denominator.toString())
}

console.log(printerError('aaabbbbhaijjjm'), '0/14')
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"), '8/22')
console.log("a".charCodeAt(0))
console.log("m".charCodeAt(0))