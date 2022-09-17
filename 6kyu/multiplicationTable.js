//Create NxN multiplication table, of size provided in parameter.
function multiplicationTable (n){
    let arr = Array.from(Array(n), () => new Array(n))
    arr.forEach((a,i)=>{
      for(let j=0;j<arr.length;j++){
        arr[i][j]=(i+1)*(j+1)
      }
    })
    return arr
  }