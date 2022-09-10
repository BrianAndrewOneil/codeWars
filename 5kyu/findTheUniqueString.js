//Given an array of at least 3 strings, find the one that does not contain similar letters.
function findUniq(arr) {
  let ans = ''
  let flag = false
  let first = false
  while (arr.length>1){
  	ans=arr.shift()
		ans.toLowerCase().split('').forEach(l=>arr[0].toLowerCase().includes(l)?l=l:flag=true)
    if(flag==true&&arr.length==2) return arr[0]
    if(flag==true&&arr.length>1) {
    	ans.toLowerCase().split('').forEach(l=>arr[2].toLowerCase().includes(l)?l=l:first=true)
      if(first) return ans
      return arr.shift()
    }
  }return arr[0]
}
