//The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple. 
//Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.

function computeDepth(n){
    let arr=[], count=1
    while(arr.length<10){
        let x = count*n
        x=x.toString().split('')
        for(const number of x){
            if (!arr.includes(number)){
                arr.push(number)
            }
        }count++
    }
    return count-1
}

console.log(computeDepth(1),10)
console.log(computeDepth(42),9)