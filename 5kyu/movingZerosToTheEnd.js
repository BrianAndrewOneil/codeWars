//Takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) { 
    let arr2=arr.filter(e=>e===0)
    return arr.filter(e=>e!==0).concat(arr2)
  }
