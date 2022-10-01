//Given a string, capitalize the letters that occupy even indexes and odd indexes separately.
function capitalize(s){
    ans=[]
    ans.push(s.split('').map((e,i)=>i%2==0?e=e.toUpperCase():e=e).join(''))
    ans.push(s.split('').map((e,i)=>i%2==0?e=e:e=e.toUpperCase()).join(''))
    return ans
  }