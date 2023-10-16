//Price of car rental: Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
//Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
function rentalCarCost(d,discount=0) {
    if (d>=7) discount=50
    else if (d>3) discount=20
    return (d*40-discount)
}

console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);  
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(8), 270);
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);    