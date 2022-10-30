//Given an array of integers, find the maximum product obtained from multiplying 2 adjacent numbers in the array.
function adjacentElementsProduct(array) {
    let product=array[0]*array[1]
    array.forEach((e,i,a)=>a[i]*a[i+1]>product?product=a[i]*a[i+1]:e)
    return product
  }


console.log(adjacentElementsProduct([4, 12, 3, 1, 5]))