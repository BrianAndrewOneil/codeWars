//Take an integer as input and return the number of bits that are equal to "1" 
//in the binary representation of that number. 
let countBits = n => n.toString(2).split('').filter(e=>e=='1').length