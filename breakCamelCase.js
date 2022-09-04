//Break up camel casing, using a space between words.
function solution(string){
    return string
    .split('')
    .map(e=>e===e.toUpperCase()?(' '+e):e)
    .join('')
  }