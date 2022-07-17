function accum(s) {
    s=s.toLowerCase()
    let ans = ''
    for(let i=0; i<s.length; i++){
      if(i==0){
        ans+=s[i].toUpperCase()
      }else{
      ans+='-'+s[i].toUpperCase()+s[i].repeat(i)
      }
    }
    return ans
  }