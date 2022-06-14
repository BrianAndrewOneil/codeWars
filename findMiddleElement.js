function gimme (triplet) {
    //when provided with a triplet, returns the index of the numerical element that lies between the other two elements
    const original = triplet.map(x=>x)
    triplet.sort((a,b)=>a-b)
    return original.indexOf(triplet[1])
  }