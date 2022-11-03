//Given a string or an array, return a list of items without any elements with the same value next to each other and preserving the original order of elements.
function uniqueInOrder(iterable){
    if (typeof iterable==='string') iterable=iterable.split('')
    return iterable.filter((e,i,a)=>e!=a[i+1])
}

console.log(uniqueInOrder('AaAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))