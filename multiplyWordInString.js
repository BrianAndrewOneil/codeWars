//Given a string of words, a location, and a number. Return the word in the location, repeated an
//amount of times equal to the number. Return a string with the words separated by hyphens.
function modifyMultiply (str,loc,num) {
    str=str.split(' ')
    let ans=[]
    while(ans.length<num)ans.push(str[loc])
    return ans.join('-')
} 