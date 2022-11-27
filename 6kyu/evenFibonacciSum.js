//Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed
function fibonacci(max) {
    if(max===0||max===1) return 0
    let fibSeries=[0,1]
    let newNum=1
    for (i=2;newNum<max;i++){
        newNum=fibSeries[i-2]+fibSeries[i-1]
        if (newNum<max) fibSeries.push(newNum)
    }
    return fibSeries.filter(e=>e%2==0).reduce((acc,c)=>acc+c)
}
console.log(fibonacci(10))
console.log(fibonacci(2147483647), 1485607536)
console.log(fibonacci(1000000000), 350704366)