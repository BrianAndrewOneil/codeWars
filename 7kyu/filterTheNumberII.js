//Given a string, return only the numerals as a number
let filterString = value=>value.split('').filter(e=>e>=0&&e<=9).join('')

console.log(filterString('we34rer78&uhY65'), 347865)
console.log(filterString('wertfGf4'), 4)