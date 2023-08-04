//How many bottles of duty free whiskey would you have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday? Round down.
const dutyFree = (normPrice, discount, hol) => Math.floor(hol/(discount/100*normPrice))

console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);