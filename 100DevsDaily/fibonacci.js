//Given n, return that value of the fib series. Use only for loops, nothing fancy, no recursion etc.
function fibonacci(n){
    let ans=[0,1]
    for(let i=2;i<=n;i++){
        ans.push(ans[i-2]+ans[i-1])
    }
    return ans[n]
} 

console.log(fibonacci(1), 1)
console.log(fibonacci(4), 3)
console.log(fibonacci(8), 21)


//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
