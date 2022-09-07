function isVow(a){
    //Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u). If they are, change the array value to a string of that vowel.
      const ans = a.map (num => {
        if(num==97){
        return "a"
        }else if(num==101){
        return "e"
        }else if(num==105){
        return "i"
        }else if(num==111){
        return "o"
        }else if(num==117){
        return "u"
        }
        else{
        return num
        }
      })
      return ans
    }
