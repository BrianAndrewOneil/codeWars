function positiveSum(arr) {
    const filter = arr.filter(number => number>0)
    return filter.reduce((acc,c)=>acc+c,0)
  }