//Take a continuous string that can consist of any combination of words or characters and then convert the words 
//that make up this string into hexadecimal values that could then be read as colour values.

function wordsToHex(words) {
    let arr = words.split(' ').map(w=>w.slice(0,3))
    return arr
}

console.log(wordsToHex("Hello, my name is Gary and I like cheese."), ['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']);
console.log(wordsToHex("0123456789"), [ '#303132' ]);
console.log(wordsToHex("ThisIsOneLongSentenceThatConsistsOfWords"), [ '#546869' ]);
console.log(wordsToHex("Blah blah blah blaaaaaaaaaaaah"), [ '#426c61', '#626c61', '#626c61', '#626c61' ]);
console.log(wordsToHex("&&&&& $$$$$ ^^^^^ @@@@@ ()()()()("), [ '#262626', '#242424', '#5e5e5e', '#404040', '#282928' ]);
