function digitize(n) {
    //code here
    backwardsArray = []
    let text = n.toString()
    for (let i=0; i<text.length; i++){
      backwardsArray[(text.length-i-1)] = Number(text[i])
    }
    return backwardsArray
  }
