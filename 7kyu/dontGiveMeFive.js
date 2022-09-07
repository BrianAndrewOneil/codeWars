function dontGiveMeFive(start, end)
{
  let arr = []
  for (start; start<=end; start++){
    if(!start.toString().includes('5')){
      arr.push(start)
      }
  }
  return arr.length
}
