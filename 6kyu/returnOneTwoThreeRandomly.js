//Using ONLY a funtion that returns 1 or 2 randomly, use it to create a 
//funtion that returns 1,2, or 3 randomly.
function one_two_three() {
    let flag=true
    while(flag){
      let ans1=one_two()
      let ans2=one_two()
      if (ans1==1&&ans2==1) return 1
      else if (ans1==1&&ans2==2) return 2
      else if (ans1==2&&ans2==2) return 3
    }
  }