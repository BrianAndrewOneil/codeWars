//Return masked string. Change all but the last four characters into '#'.

const maskify = cc => "########"+cc.slice(-4)

console.log(maskify('123456789012'), '########9012')