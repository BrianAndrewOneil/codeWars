//Accept 3 integer values. Return true if a triangle can be built 
//with the sides of given length and false in any other case.
function isTriangle(a,b,c)
{
   let ans = []
   ans.push(a,b,c)
   ans.sort((a,b)=>a-b)
   return ans[0]+ans[1]>ans[2]
}