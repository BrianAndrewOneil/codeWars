//Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

 function ransomNote(phrase, magazine){
    const map={}
    phrase=phrase.split(' ')
    magazine=magazine.replaceAll('.','').replaceAll(',','').toLowerCase().split(' ')
    for (word of magazine){
        map[word] = map[word]+1 || 1
    }
    //console.log(map)
    for (word of phrase){
        if (!map[word] || map[word]==0) return false
        else map[word]-=1
    }
    return true
 }

 console.log(ransomNote("sit ad est sint", magazine), true)
 console.log(ransomNote("sit ad est love", magazine), false)
 console.log(ransomNote("sit ad est sint in in", magazine), true)
 console.log(ransomNote("sit ad est sint in in in in", magazine), false)