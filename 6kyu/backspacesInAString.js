//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
//Given a string with n number of #, return the processed string.
function cleanString(s) {
    let ans=[]
    s.split('').forEach(l=>{
      if(l!='#') ans.push(l)
      if(l=='#'&&ans.length>0) ans.pop()
    })
    return ans.join('')
  }
