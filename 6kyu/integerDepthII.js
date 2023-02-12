//The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple. 
//Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.

function computeDepth(n){
    let ansSet = new Set(), count=0
    while(ansSet.size<10){
        count++
        let x = count*n
        for(const number of [...x.toString()]){
            ansSet.add(number)
        }
    }
    return count
}

console.log(computeDepth(1),10)
console.log(computeDepth(42),9)