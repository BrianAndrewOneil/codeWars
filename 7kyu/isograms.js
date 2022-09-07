//Implement a function that determines whether a string that contains only letters is an isogram. 
function isIsogram(str){
    return !/(.).*\1/.test(str.toLowerCase())
  }
