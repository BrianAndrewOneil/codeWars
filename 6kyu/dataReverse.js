//Return a stream of 8-bit data reversed. Reverse the order of the 8-bit segments, not the segments themselves.
function dataReverse(data) {
    let ans=[]
    while(data.length>0){
      let newarr=[]
      for(let i=1;i<=8;i++){
        newarr.push(data.shift())  
      }ans.push(newarr)
    }
    return ans.reverse().flatMap(e=>e)
  }