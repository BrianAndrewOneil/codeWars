//Given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

let alphabetPosition=text=>text.toLowerCase().split('').map(e=>e.charCodeAt(0)-96).filter(e=>e>0&&e<27).join(' ')
