//Given n, take the sum of the digits of n. If that value has more than one digit, 
//continue reducing in this way until a single-digit number is produced.
function digital_root(n) {
    let sum=n.toString().split('').map(Number).reduce((acc,c)=>acc+c)
    while(sum>9){
      sum=sum.toString().split('').map(Number).reduce((acc,c)=>acc+c)
    }
    return sum
  }