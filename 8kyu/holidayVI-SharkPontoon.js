const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    if(dolphin){
      sharkSpeed/=2
    }
    return ( ((sharkSpeed/sharkDistance) > (youSpeed/pontoonDistance)) ? 'Shark Bait!' : 'Alive!')
  }
