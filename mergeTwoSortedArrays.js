function mergeArrays(arr1, arr2) {
    resultArray=arr1.concat(arr2)
    resultArray.sort(function(a, b) {
      return a - b;
    })
    return resultArray.filter((element, index) => 
           resultArray.indexOf(element) === index)
  }