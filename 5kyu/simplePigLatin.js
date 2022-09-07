//Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
//Leave punctuation marks untouched.
let pigIt=(str)=>str.split(' ').map(e=>e=="."||e=="!"||e=="?"?e=e:(e+e[0]+'ay')).map(e=>e=="."||e=="!"||e=="?"?e=e:e.slice(1)).join(' ')
