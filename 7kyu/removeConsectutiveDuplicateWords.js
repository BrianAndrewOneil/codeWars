//remove all consecutive duplicate words from a string, leaving only first words entries.
const removeConsecutiveDuplicates = s => s.split(' ').filter((w,i,a)=>w!==a[i+1]).join(' ')

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), 'alpha beta gamma delta alpha beta gamma delta')