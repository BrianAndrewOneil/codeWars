//Return masked string. Change all but the last four characters into '#'.
let maskify=cc=>cc.split('').map((e,i,a)=>i<8?e='#':e).join('')

console.log(maskify('123456789012'), '########9012')