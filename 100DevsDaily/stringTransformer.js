//Given a string, return a new string that has transformed based on the input:
//1. Change case of every character, ie. lower case to upper case, upper case to lower case.
//2. Reverse the order of words from the input.

function stringTransformer(str) {
    return str.split('').map(l=>l==l.toLowerCase()?l.toUpperCase():l.toLowerCase()).join('').split(' ').reverse().join(' ')
  }