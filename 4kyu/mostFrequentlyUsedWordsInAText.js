//Given a string of text, return an array of the top-3 most occurring words, in descending order of the number of occurrences.
//Ignore case and puntuation (e.g., "And"="and";"then,"="then"). 

function isLetter(c){
    return (c==="'" || c.toLowerCase() != c.toUpperCase() && c!=' ')
}

function topThreeWords(text) {
    text = text.split(' ').map(w=>w.toLowerCase())
    text = text.map(w=>w.split('').filter(char=>isLetter(char)).join(''))
    text = text.filter(w=>w!=''&&w!="'")
    const map = {}
    for (const word of text){
        map[word]=map[word]+1 || 1
    }
    return Object.keys(map).sort(function(a, b) {return -(map[a] - map[b])}).slice(0,3)
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])
console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."), 
["a", "of", "on"])