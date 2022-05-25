//Return a new array consisting of elements which are multiple of their own index in input array
const multipleOfIndex=array=>( array.filter((num,index)=>num%index==0) )