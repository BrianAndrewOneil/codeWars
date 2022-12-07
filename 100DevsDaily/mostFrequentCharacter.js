//Given a string of characters, return the character that appears the most often.

function maxCharacter(str){
    const map={}
    let maxChar=''
    for(const letter of str){
        map[letter]=true
    }
    for (const letter of str){
        //loop here, check count of each, if new winner then set maxChar = to that char
    }

}

console.log(maxCharacter("Hello World!"), "l")