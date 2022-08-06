//Return masked string. Change all but the last four characters into '#'.
let maskify=cc=>cc.split('').map(((e,i)=>i<(cc.length-4)?e="#":e=e)).join('')