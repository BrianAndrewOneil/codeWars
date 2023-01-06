//Given a string showing either flat road (_) or bumps (n). 
//You are able to reach home safely by encountering 15 bumps or less.

let bump=n=>n.split('').filter(e=>e=='n').length<=15

console.log(bump('___________________nnnnnn_nnnnnnnnnnnnnnnnnnnn'))
console.log(bump('___________________nnnnnn_nn'))