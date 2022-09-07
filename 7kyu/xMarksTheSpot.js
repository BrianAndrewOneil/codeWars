//Given a two dimensional array, return the co-ordinates of 'x'. If no, or more than one, 'x' return [].
const xMarksTheSpot = (input) => {  
    let numX=0
    let xVar=0
    let yVar=0
    let aCount=-1
    input.forEach( a=> {
      aCount+=1
      if (a.includes('x')){
        xVar=aCount
        yVar=a.indexOf('x')
        numX+=(a.filter(x => x=='x').length)
       }
     })
     if (numX==1){
      return [xVar,yVar]
     }else{
     return []
     }
  }
