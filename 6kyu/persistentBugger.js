//Take a positive parameter num and return its multiplicative persistence, 
//which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
    let pvalue=0
    while ( num>=10 ){
     pvalue+=1
     num=(num.toString().split('').reduce((acc,c)=>acc*c,1))
    }
    return pvalue
 }
