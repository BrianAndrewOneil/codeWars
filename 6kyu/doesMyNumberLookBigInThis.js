//A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
//each raised to the power of the number of digits in a given base.
function narcissistic(number) {
    numberT=number.toString().split('')
    const nLength=numberT.length
    numberT=numberT.map(e=>Math.pow(Number(e),nLength))
    return numberT.reduce((acc,c)=>acc+c)==number
  }

  console.log(narcissistic( 7 ), true, "7 is narcissistic" )
  console.log(narcissistic( 371 ), true, "371 is narcissistic" )