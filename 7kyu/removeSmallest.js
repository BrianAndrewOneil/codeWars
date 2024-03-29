function removeSmallest(numbers) {
    //Given an array of integers, remove the smallest value. Do not mutate the original array/list
    //If there are multiple elements with the same value, remove the one with a lower index. 
    //If you get an empty array/list, return an empty array/list. 
    //Don't change the order of the elements that are left.
    if (numbers.length==0){
      return numbers
    }
    const lowest = numbers.reduce((a, b) => Math.min(a, b))
    let returnArr = numbers.slice()
    const removed = returnArr.splice((returnArr.indexOf(lowest)),1)
    return returnArr
  }
