//Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. 
//We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

function solve(s) {
    let ans = s.replaceAll('a','0').replaceAll('e','0').replaceAll('i','0').replaceAll('o','0').replaceAll('u','0').split('0')
    let score = 0
    for (let word of ans){
        const value = word.split('').reduce((acc,l)=>(l.charCodeAt()-96)+acc,0)
        if (value>score) score = value
    }
    return score
};



console.log(solve("zodiac"),26);
console.log(solve("chruschtschov"),80);
console.log(solve("khrushchev"),38);
console.log(solve("strength"),57);
console.log(solve("catchphrase"),73);
console.log(solve("twelfthstreet"),103);
console.log(solve("mischtschenkoana"),80);
console.log(solve("az"),26);