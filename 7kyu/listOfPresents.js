function howManyGifts(maxBudget, gifts){
    // The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.
    gifts.sort((a, b) => a - b)
    let numGifts = 0
    let giftSum = 0
    while (giftSum+gifts[numGifts]<=maxBudget){
      giftSum+=gifts[numGifts]
      numGifts+=1
    }
    return numGifts
  }
