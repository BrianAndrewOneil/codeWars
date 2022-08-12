//Return hashtag slogan. It must start with a hashtag (#). All words must have their first letter capitalized.
//If the final result is longer than 140 chars it must return false. If the input or the result is an empty string it must return false.

function generateHashtag (str) {
    let ans= str.split(' ').filter(e=>e.trim()).map(e=>e=e[0].toUpperCase()+e.substring(1)).join('')
    return ans.length>0&&ans.length<140?`#${ans}`:false
  }