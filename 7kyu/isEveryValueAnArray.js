//Is every value of the given array an array?

const arrCheck = arr => arr.filter(v=>Array.isArray(v)===true).length===arr.length ? true : false

console.log(arrCheck([]), true);
console.log(arrCheck([['string']]), true);
console.log(arrCheck([[],{}]), false);
console.log(arrCheck([[1],[2],[3]]), true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);