//You will be given an Array(a), starting position (i) and number of portion to return (n). 
//Your task is to return n portion of the array (a) starting from position (i). 
//If i is negative, start counting from the end of the array and work backwards.
function portion(a,i,n){
    if (i>0 && i+n<=a.length-1){
        return a.slice(i,(i+n))
    }else if (i<0)
        return a.slice(i,)
}

console.log(portion([1,2,3,4],1,2),[2,3])
console.log(portion([1,2,3,4],-1,2),[2,3])
console.log(portion([1],1,5),-1)