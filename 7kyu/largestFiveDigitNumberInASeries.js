//Return the greatest sequence of five consecutive digits found within the number given. 

function solution(digits){
    let ans=+digits.toString().slice(0,5)
    for (let n=0;n<digits.toString().length;n++){
        if (+digits.toString().slice(n,n+5)>ans) ans = +digits.toString().slice(n,n+5)
    }
    return ans
}

console.log(solution(1234567890), 67890)