//For a given string s find the character with longest consecutive repetition and return: [c,l]
function longestRepetition(s) {
    if (s.length==0) return ["",0]
    s=s.split('')//.sort((a,b)=>a-b)
    let [char, ansLength, ansMax, charMax]= [s[0],1,0,'']
    s.forEach((e,i,a)=>{
        if (e===a[i+1]) {
            ansLength++
            char=e
        }
        else{         
            if (ansLength>ansMax){
                ansMax=ansLength
                charMax=char   
            }
            ansLength=1
        }
    })
    return [charMax,ansMax]   
}
//https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript
console.log(longestRepetition("aaaabb"),["a",4] )
console.log(longestRepetition("cbdeuuu900"), ["u",3])
console.log(longestRepetition("bbbaaabaaaa"), ["a",4])
console.log(longestRepetition("ba"), ["b",1])