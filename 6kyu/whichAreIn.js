//Given two arrays of strings, return a sorted array r in lexicographical 
//order of the strings of a1 which are substrings of strings of a2.
function inArray(array1,array2){
    ans = []
    array2=array2.join(' ')
      for (var word of array1){
        if(array2.includes(word)) ans.push(word)
      }
    return ans.sort()
  }
