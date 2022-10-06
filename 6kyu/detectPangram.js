//Check if the input string contains every single letter of the alphabet at least once.  
function isPangram(string){
    var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    string=string.toLowerCase().split('')
    let ans=true
    letters.forEach(l=>string.findIndex((element) => element == l)==-1?ans=false:l=l )
    return ans
}