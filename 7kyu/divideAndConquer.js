//Given a mixed array of number and string representations of integers, 
//add up the non-string integers and subtract the total of the string integers.

function divCon(x){
    let add = x.filter(num=>Number.isInteger(num)).reduce((acc,c)=>acc+c,0)
    let minus = x.filter(num=>!Number.isInteger(num)).map(num=>+num).reduce((acc,c)=>acc+c,0)
    return (add-minus)
}

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 