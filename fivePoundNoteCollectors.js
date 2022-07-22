//Subtract your salary from your bills, how many 5 pound notes will you have left?
function getNewNotes(salary,bills){
    let ans = Math.floor( (salary-(bills.reduce((acc,c)=>acc+c,0)))/5 )
    if (ans > 0){
      return ans
    } else{
      return 0
    }
  }