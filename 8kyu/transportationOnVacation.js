//Price of car rental: Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
//Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
function rentalCarCost(d,discount=0) {
    if (d>=7) discount=50
    else if (d>3) discount=20
    return (d*40-discount)
}

const rentalCarCost1 = d => d>=7 ? d*40-50 : d>=3 ? d*40-20 : d*40


console.log(rentalCarCost1(1), 40);
console.log(rentalCarCost1(2), 80);  
console.log(rentalCarCost1(3), 100);
console.log(rentalCarCost1(4), 140);
console.log(rentalCarCost1(5), 180);
console.log(rentalCarCost1(6), 220);
console.log(rentalCarCost1(7), 230);
console.log(rentalCarCost1(8), 270);
console.log(rentalCarCost1(9), 310);
console.log(rentalCarCost1(10), 350);    