//Convert a string into title case, excluding an optional list of "minor words."
function titleCase(title, minorWords) {
  let ans=title.toLowerCase().split(' ').map(w=>w=w.charAt(0).toUpperCase()+(w.slice(1,(w.length))))
  if(minorWords) minorWords=minorWords.toLowerCase().split(' ')
  if(minorWords) ans=ans.map(w=>minorWords.includes(w.toLowerCase())?w=w.toLowerCase(): w=w )
  ans[0]=ans[0].charAt(0).toUpperCase()+(ans[0].slice(1,(ans[0].length)))
  return ans.join(' ')
}
