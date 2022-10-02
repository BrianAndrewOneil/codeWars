//Remove all duplicate words from a string, leaving only single (first) words entries.
function removeDuplicateWords (s) {
    let ans=[]
    s=s.split(' ').filter(w=>ans.includes(w)?w=w:ans.push(w))
    return ans.join(' ')
  }