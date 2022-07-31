//Takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value.
function twoSum(numbers, target) {
    for(let i=0;i<=numbers.length;i++){
      for(let n=i+1;n<=numbers.length;n++){
        if(numbers[i]+numbers[n]==target){
          return[i,n]    
        }
      }
    }
  }