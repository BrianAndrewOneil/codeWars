//Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the 
//odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
//If the string S is an empty value or the integer N is not positive, return the first argument without changes.
function encrypt(text, n) {
    if (text==null||text.length==0||n<0) return text
    while (n>0){
        const odds=[], evens=[]
        text.split('').forEach((c,i,a) => i%2==0? evens.push(c) : odds.push(c))
        text=odds.join('')+evens.join('')
        n--
    }
    return text
}

function decrypt(text, n) {
    if (text==null||text.length==0||n<0) return text
    while (n>0){
        const odds=text.slice(0,text.length/2), evens=text.slice(text.length/2)
        text=text.split('').map((c,i,a) => i%2==0? evens[i/2] : odds[(i-1)/2]).join('')
        n--
    }
    return text
}

   
// console.log(encrypt("This is a test!", 0), "This is a test!");
// console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
// console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
// console.log(encrypt("This is a test!", 3), " Tah itse sits!");
// console.log(encrypt("This is a test!", 4), "This is a test!");
// console.log(encrypt("This is a test!", -1), "This is a test!");
// console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

// console.log(decrypt("This is a test!", 0), "This is a test!");
// console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
// console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
// console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
// console.log(decrypt("This is a test!", 4), "This is a test!");
// console.log(decrypt("This is a test!", -1), "This is a test!");
// console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
console.log(decrypt(null, 0), null);

