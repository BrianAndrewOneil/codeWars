const findNeedle = arr =>{
    const isNeedle=element=>element=='needle'
    return('found the needle at position '+arr.findIndex(isNeedle))
  }
