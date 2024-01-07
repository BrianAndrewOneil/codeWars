//Decode, letters are one down. Return "Input is not a string" if input isn't a string.
//https://www.codewars.com/kata/56419475931903e9d1000087/train/javascript

function oneDown(str) {
    if (typeof(str)!='string') return "Input is not a string"
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let answer = []
    str=str.split(' ').map((word,i,a) => {
        let newWord = (word.split('').map((letter) => letter==="A" ? letter=letters.length : letter=letters.indexOf(letter)))
        newWord = newWord.map(letter => letters.charAt(letter-1)).join('')
        answer.push(newWord)
    })
    return answer.join(' ')
}

console.log(oneDown("IfmmpA"), "Helloz");
console.log(oneDown("Uif usjdl up uijt lbub jt tjnqmf"), "The trick to this kata is simple");
console.log(oneDown(45), "Input is not a string");
