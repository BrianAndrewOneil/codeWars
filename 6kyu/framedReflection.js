//Return the given text reversed and in a frame of "*"
function mirror(text){
    text=text.split(' ')
    const maxLength = text.reduce( (max,n)=>n.length>max?max=n.length:max,0 )
    let ans = '*'.repeat(maxLength+4)+'\n'
    for (word of text) {
        ans = ans+('* '+word.split('').reverse().join('')+' '.repeat(maxLength-word.length)+' *\n')
    }
    ans = ans+'*'.repeat(maxLength+4)
    return ans
}

console.log(mirror('Hello World'), '*********\n* olleH *\n* dlroW *\n*********');
console.log(mirror('Codewars'), '************\n* srawedoC *\n************'); 
console.log(mirror("ylnmho gbjrvdhd xve"), '************\n* ohmnly   *\n* dhdvrjbg *\n* evx      *\n************')