//Decipher the coded input. For each word:
//-the second and the last letter is switched (e.g. Hello becomes Holle)
//-the first letter is replaced by its character code (e.g. H becomes 72)
function decipherThis(str) {
    str=str.split(' ')
    let ans=[]
    for(var w of str){    
      w=w.split('')
      var a
      if (isNaN(w[2])){
        a=String.fromCharCode(w[0].concat(w[1]))
        w.splice(0,2)
        }
      else {
        a=String.fromCharCode(w[0].concat(w[1]).concat(w[2]))
        w.splice(0,3)
        }
      w.unshift(a)
      let s = w[1]
      let l = w[w.length-1]
      w[1]=l
      w[w.length-1]=s
      ans.push(w.join(''))
      }
    return ans.join(' ')
  }
