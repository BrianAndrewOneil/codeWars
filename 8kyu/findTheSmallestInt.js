//Given an array of integers return the smallest.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return(args.sort((a,b)=>a-b)[0])
    }
  }