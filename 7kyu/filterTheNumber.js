//Given a string, return only the numerals as a number
let filterString = value=> +value.split('').filter(e=>e>=0&&e<=9).join('')