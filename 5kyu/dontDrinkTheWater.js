//Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. 
//(Lower density floats to the top) The width of the glass will not change from top to bottom. (Oil, Alcohol, Water, Honey)
function separateLiquids(glass) {
  let rawData=[]
  glass.forEach(array=>array.forEach(letter=>rawData.push(letter)))
  let sortedData=rawData.filter(l=>l=='O').concat(rawData.filter(l=>l=='A')).concat(rawData.filter(l=>l=='W')).concat(rawData.filter(l=>l=='H'))
  let ans=[]
  for(let i=0;i<glass.length;i++){
    ans[i]=[]
    for(let j=0;j<glass[0].length;j++){
      ans[i][j]=sortedData.shift()
    }
  }
  return ans
}