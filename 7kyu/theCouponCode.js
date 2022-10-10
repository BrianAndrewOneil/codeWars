//Is this coupon valid? Codes must match and must not be expired.
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return Date.parse(expirationDate)>=Date.parse(currentDate)&& enteredCode===correctCode
}