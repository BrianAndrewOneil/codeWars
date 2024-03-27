//A number can be valid in the following ways:
//In the UK mobile numbers begin with '07' followed by 9 other digits, e.g. '07454876120'.
//Sometimes the number is preceded by the country code, the prefix '+44', which replaces the '0' in ‘07’, e.g. '+447454876120'.
//Sometimes you will find numbers with dashes in-between digits or on either side, e.g. '+44--745---487-6120' or '-074-54-87-61-20-'

function validateNumber(str){
    let ans = str.replaceAll('-','') 
    if (! ((ans.slice(0,4)=='+447' && ans.length==13 ) || (ans.slice(0,2)=='07' && ans.length==11))) return 'Plenty more fish in the sea'
    return 'In with a chance'
} 

console.log(validateNumber('07454876120'), 'In with a chance')
console.log(validateNumber('0754876120'), 'Plenty more fish in the sea', 'Number too short')
console.log(validateNumber('0745-487-61-20'), 'In with a chance')
console.log(validateNumber('+447535514555'), 'In with a chance')