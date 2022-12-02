//Given a string of characters as input, write a function that returns it with the characters reversed. Do not use the reverse method.
function reverseString(str){
    //return str.split('').reverse().join('')
    let reverseString=''
    for(let char of str){
        reverseString=char+reverseString
    }
    return reverseString
}

console.log(reverseString('albert'), 'trebla')