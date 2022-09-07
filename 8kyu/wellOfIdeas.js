function well(arr) {
    let good = 0
    arr.forEach(element=>{
      if(element=='good'){good+=1}
      })
    if(good>2){
      return('I smell a series!')
    }else if(good==0){
    return('Fail!')
    }else{
    return ('Publish!')
    }
  }
