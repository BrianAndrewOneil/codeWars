function find_average(array) {
    if (array.length===0){
    return 0;
    }else{
      let sum=0
      for (i=0;i<array.length;i++){
      sum+=array[i]
      }
      return sum/array.length
    }
  }
