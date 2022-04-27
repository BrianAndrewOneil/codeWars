let countSheeps = arrayOfSheep => {
    let count = 0
    arrayOfSheep.forEach(sheep => {if (sheep===true){count+=1}} )
    return count
  }