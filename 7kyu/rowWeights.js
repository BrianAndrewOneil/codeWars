//Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, 
//where the first one is the total weight of team 1, and the second one is the total weight of team 2.
function rowWeights(array){
    let evens=0
    let odds=0
    array.forEach((n,i)=>(i+1)%2==0?odds+=n:evens+=n)
    return [evens,odds]
  }