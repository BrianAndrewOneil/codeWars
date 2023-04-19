//Return true if a portion of str1 characters can be rearranged to match str2, otherwise return false
function scramble(str1, str2) {
    str1=str1.split('')
    const map = {}
    for (const letter of str1){
        map[letter]=map[letter]+1 || 1
    }
    for (const letter of str2){
        if (map[letter]>=1){
            map[letter]=map[letter]-1
        }
        else return false
    }
    return true
}


console.log(scramble('rkqodlw','world'),true);
console.log(scramble('cedewaraaossoqqyt','codewars'),true);
console.log(scramble('katas','steak'),false);
console.log(scramble('scriptjavx','javascript'),false);
console.log(scramble('scriptingjava','javascript'),true);
console.log(scramble('scriptsjava','javascripts'),true);
console.log(scramble('javscripts','javascript'),false);
console.log(scramble('jscripts','javascript'),false);
console.log(scramble('aabbcamaomsccdd','commas'),true);
console.log(scramble('commas','commas'),true);
console.log(scramble('sammoc','commas'),true)