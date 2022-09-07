function sumOfDifferences(arr) {
    //sum the differences between consecutive pairs in the array in descending order. For example: [2, 1, 10] -> 9. First sort to [10,2,1] then Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
      let returnArr = arr.sort((a, b) => b-a)
      let sum=0
      if (returnArr<=1){
        return sum
      }
      for (let i=0;i<(returnArr.length-1);i++){
        sum+=returnArr[i]-returnArr[i+1]
      }
      return sum
    }
