//Given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

const eliminateUnsetBits = n => parseInt((n.split('').filter(d=>d==='1').join('')),2) || 0

console.log(eliminateUnsetBits("11010101010101"), 255);
console.log(eliminateUnsetBits("111"), 7);
console.log(eliminateUnsetBits("1000000"), 1);
console.log(eliminateUnsetBits("000"), 0);
console.log(eliminateUnsetBits("111111111100011111100111111000111011000"), 134217727);

