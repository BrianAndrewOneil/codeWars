//https://www.codewars.com/kata/567610d21541a88876000024/train/javascript
//Given: 
//  Angle===arc/raduis
//  arc===angle*radius
//  radius===angle/arc
//Write a function thetaFormula:
//  When given two of the values and "?" returns the number value of the missing one.
//  When given all three values returns a boolean value verifying if the statement is true or false.
//  When given one or no values as arguments or invalid arguments returns null.

function thetaFormula(radius, arc, angle){
    let input=[radius,arc,angle]
    let ans=0
    if(input.indexOf('?')!==input.lastIndexOf('?')||input.includes(undefined)) return null
    if(!input.includes('?')) {
        if(input.filter(e=>typeof e==='number').length!=3) return null
        return angle===arc/radius
    }
    if(radius==='?') ans=arc/angle
    if(arc==='?') ans=angle*radius
    if(angle==='?') ans=arc/radius
    if(Math.floor(ans)!==ans||Math.ceil(ans)!==ans) return +ans.toFixed(3)
    return ans
}

console.log(thetaFormula( 3, 1), null)
console.log(thetaFormula( "?", "?", "?"), null)
console.log(thetaFormula( 92, 6, "?"), 0.065)
console.log(thetaFormula( 26, "?", 4), 104)
console.log(thetaFormula("?", 40, 10), 4)
console.log(thetaFormula( 8, "?", 7), 56)
console.log(thetaFormula( -4, 4, -4), false)
console.log(thetaFormula( 1, 10, 10), true)
console.log(thetaFormula( -2, 20, -10), true)
console.log(thetaFormula( -2, 20, '3'), null)