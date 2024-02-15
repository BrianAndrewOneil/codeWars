//Identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of 
//four octets, with values between 0 and 255, inclusive. Leading zeros are considered invalid.
//https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
    if (str.includes('\n')) return false
    let test = str.split('.')
    if (test.length!=4) return false
    for (let num in test){
        //num between 0 and 255
        if (num<0 || num>255) return false
        //no leading 0s
        if (num[0]=0 && num.length!=1) return false
        //no leading or trailing spaces
    }
    return true
}

// console.log(isValidIP("0.0.0.0"        ),  true);
// console.log(isValidIP("12.255.56.1"    ),  true);
// console.log(isValidIP("137.255.156.100"),  true);
// console.log(isValidIP(''               ), false);
// console.log(isValidIP('abc.def.ghi.jkl'), false);
// console.log(isValidIP('123.456.789.0'  ), false);
// console.log(isValidIP('12.34.56'       ), false);
// console.log(isValidIP('01.02.03.04'    ), false);
// console.log(isValidIP('256.1.2.3'      ), false);
// console.log(isValidIP('1.2.3.4.5'      ), false);
// console.log(isValidIP('123,45,67,89'   ), false);
// console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
// console.log(isValidIP(' 1.2.3.4'       ), false);
// console.log(isValidIP('1.2.3.4 '       ), false);
console.log(isValidIP('12.34.56.-7'    ), false);
console.log(isValidIP('1.2.3.4\n'      ), false);
console.log(isValidIP('\n1.2.3.4'      ), false);