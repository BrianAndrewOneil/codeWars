//Return true if the directions will take you exactly 10 minutes and return
//you to your starting location.
function isValidWalk(walk) {
    let ns=walk.filter(e=>e=='n').length==walk.filter(e=>e=='s').length
    let ew=walk.filter(e=>e=='e').length==walk.filter(e=>e=='w').length
    return ns&&ew&&walk.length==10
  }
