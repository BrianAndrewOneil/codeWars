//Given a string of words, return the length of the shortest word(s).
let findShort = str => str.split(' ').map(word=>word.length).sort((a,b)=>b-a).pop()