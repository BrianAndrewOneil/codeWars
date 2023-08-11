//returns a string that spells the word using the NATO phonetic alphabet.

var nato = (function() {
    var letters =  {
      "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
      "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
      "G": "Golf",   "H": "Hotel",   "I": "India",
      "J": "Juliett","K": "Kilo",    "L": "Lima",
      "M": "Mike",   "N": "November","O": "Oscar",
      "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
      "S": "Sierra", "T": "Tango",   "U": "Uniform",
      "V": "Victor", "W": "Whiskey", "X": "X-ray",
      "Y": "Yankee", "Z": "Zulu"
    }
    
    return function(word) {
        ans = word.toUpperCase().split('').map(l=>letters[l]).join(' ')
        return ans
    }
})()

 
console.log(nato('hi'), "Hotel India")
console.log(nato('abc'), "Alpha Bravo Charlie")
console.log(nato('babble'), "Bravo Alpha Bravo Bravo Lima Echo")
console.log(nato('Banana'), "Bravo Alpha November Alpha November Alpha")