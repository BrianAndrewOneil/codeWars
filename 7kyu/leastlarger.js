//Given an array of numbers and an index, return either the index of the smallest number 
//that is larger than the element at the given index, or -1 if there is no such index.
function leastLarger(a,i) {  
    let value = a[i]
    let x = a.filter(e=>e>value).sort((a,b)=>a-b)
    return a.findIndex(e=>e==x[0])
  }
