function squareOrSquareRoot(arrayIn) {
    return arrayIn.map(element => {
      if (Number.isInteger(Math.sqrt(element))){
        return(Math.sqrt(element))
      }else{
          return(element*element)
        }
    })
  }