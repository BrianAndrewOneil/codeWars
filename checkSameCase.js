function sameCase(a, b){
    let test = ( (a.toUpperCase() != a.toLowerCase()) && (b.toUpperCase() != b.toLowerCase()) )
    if (test==false){
      return(-1)
    }else{
      let isAUpperCase = (a.charCodeAt() >= 65 && a.charCodeAt() <= 90)
      let isBUpperCase = (b.charCodeAt() >= 65 && b.charCodeAt() <= 90)
      if(isAUpperCase===isBUpperCase){
        return 1
      }else{
        return 0
      }
    }
  }