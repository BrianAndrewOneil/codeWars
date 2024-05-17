//given a String of one or more words. Your task is to check the length of each word and if it's less than 4, 
//you keep it unmodified otherwise you find out the first vowel which is coming after 3-rd character and 
//replace vowel and rest of word with a dot. 
//Finally, you should return the same string but shorten (only if the length of words is more then 3 characters).

var shortenSpeech = function (str) {	
    let vowels = ['a','e','i','o','u']
    str=str.split(' ')
    str=str.map(word=>{
        if (word.length>=4){
            for (i=3;i<word.length;i++) {
                if (vowels.includes(word[i].toLowerCase())) {
                    word = word.slice(0,i)+'.'
                    break
                }
            } 
        }
        return word
    })
    return str.join(' ')
}

console.log(shortenSpeech("Hello, do you want a coffee ? "), "Hell. do you want a coff. ? ");
console.log(shortenSpeech("Did you bring your computer ?"), "Did you bring your comp. ?");
console.log(shortenSpeech("I've just finished my first kata"),"I'v. just fin. my first kat.");