//Given a string of words, return an array of the words sorted alphabetically by the final character in each.
function last(x){
    return x
    .split(' ')
    .sort((a,b)=>(a[a.length-1].charCodeAt(0))-(b[b.length-1].charCodeAt(0)))
  }