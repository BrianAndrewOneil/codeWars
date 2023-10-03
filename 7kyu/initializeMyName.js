//Given a name, return the name with any middle name converted to an initial only
function initializeNames(name){
    return name.split(' ').length<=2 ?
    name
    :
    name.split(' ').map((w,i,a) => i==0||i==a.length-1 ? w : w[0]+'.').join(' ')
}

console.log(initializeNames('Jack Ryan'), 'Jack Ryan','');
console.log(initializeNames('Lois Mary Lane'), 'Lois M. Lane','');
console.log(initializeNames('Dimitri'), 'Dimitri','');
console.log(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis','');