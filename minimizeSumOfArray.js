function minSum(arr) {
    // Given an array of integers, find the minimum sum which is obtained from summing each Two integers product
    let sortArr = arr.sort((a,b)=>a-b)
    let sum = 0
    for (let i=0;i<sortArr.length/2;i++){
      sum += sortArr[i]*sortArr[sortArr.length-(i+1)]
    }
    return sum
  }