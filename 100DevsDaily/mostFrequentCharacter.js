//Given a string of characters, return the character that appears the most often.

function maxCharacter(str){
    const map={}
    let maxChar=''
    for(const letter of str){
        if (map[letter]){
            map[letter]++
        }else{
            map[letter]=1
        }
    }
    let maxVal=0
    let maxLetter =''
    for (const letter in map){
        if (map[letter]>maxVal){
            maxVal=map[letter]
            maxLetter='?'
        }
    }
    return maxLetter
}

console.log(maxCharacter("Hello World!"), "l")