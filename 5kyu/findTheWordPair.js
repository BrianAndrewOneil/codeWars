//Given an array of words and a target compound word, your objective is to find the two words which combine into the target word, 
//returning both words in the order they appear in the array, and their respective indices in the order they combine to form the target word.

const arr1 = ['super','bow','bowl','tar','get','book','let', 'let'],
      arr2 = ['bow','crystal','organic','ally','rain','line'],
      arr3 = ['top','main','tree','ally','fin','line'],
      arr4 = ['bel', 'bed', 'low', 'grab', 'be', 'knight']

function compoundMatch(words, target) {
    const uniqueWords = [...new Set(words)];
    const firstOptions=[], lastOptions=[], ans=[]
    uniqueWords.forEach( (word,i,arr) =>{
        if (word[0]===target[0] && word===target.slice(0,word.length)) firstOptions.push(word)
        if (word[word.length-1]===target[target.length-1] && word===target.slice(-word.length)) lastOptions.push(word)
    })
    for (fWord of firstOptions){
        for (lWord of lastOptions){
            if (fWord+lWord===target){
                words.indexOf(fWord)<words.indexOf(lWord) ?
                ans.push(fWord,lWord,[words.indexOf(fWord),words.indexOf(lWord)])
                :
                ans.push(lWord,fWord,[words.indexOf(fWord),words.indexOf(lWord)])
                return ans
            }
        }
    }
    return null
}

console.log(compoundMatch(arr1, 'superbowl'), ['super','bowl', [0,2]])
console.log(compoundMatch(arr2, 'crystalline'), ['crystal','line', [1,5]])
console.log(compoundMatch(arr2, 'rainbow'), ['bow','rain', [4,0]])
console.log(compoundMatch(arr2, 'organically'), ['organic','ally', [2,3]])
console.log(compoundMatch(arr3, 'mainline'), ['main','line', [1,5]])
console.log(compoundMatch(arr3, 'treetop'), ['top','tree', [2,0]])
console.log(compoundMatch(arr3, 'finally'), ['ally','fin', [4,3]])
console.log(compoundMatch(arr3, 'treefinally'), null)
console.log(compoundMatch(arr4, 'below'), ['low','be', [4,2]])
console.log(compoundMatch(arr4, 'bellow'), ['bel','low',[0,2]])
console.log(compoundMatch(arr4, 'beknight'), ['be','knight',[4,5]])