//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.

const solution=(a, b)=>a.length>b.length ? b+a+b : a+b+a

console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');
console.log(solution('45', '1'), '1451');