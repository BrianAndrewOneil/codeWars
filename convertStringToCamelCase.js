//Convert dash/underscore delimited words into camel casing. The first word within the output 
//should be capitalized only if the original word was capitalized
function toCamelCase(str){
    let delimiter=''
    str.includes('-')?delimiter='-':delimiter='_'
    str=str.split(delimiter)
    let ans = []
    for(var word of str){
      word=(word.charAt(0).toUpperCase()+word.slice(1))
      ans.push(word)
    }
    ans[0]=str[0]
    return ans.join('')
  }