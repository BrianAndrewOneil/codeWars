function movie(card, ticket, perc) {
    // John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A. The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that 
    //ceil(price of System B) < price of System A.
    let discountTicPrice = ticket
    let ticketPrice = 0
    let cardOption = card
    let answer = 0
    while (ticketPrice<=Math.ceil(cardOption)){
      discountTicPrice*=perc
      cardOption+=(discountTicPrice)
      ticketPrice+=ticket
      answer+=1
    }
    return answer
};
