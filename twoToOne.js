//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    let arr1= s1.split('').concat(s2.split('')).sort()
    let answer = arr1[0]
    for (let i=1; i<arr1.length; i++){
      if (arr1[i]!=arr1[i-1]){
        answer+=arr1[i]
       }
    }
    return answer
  }