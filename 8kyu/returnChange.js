//Return change using as few bills as possible. You have unlimited supplies of 10s, 5s, and 2s
function reduce(n){
    const ans = {
        'ten': 0,
        'five': 0,
        'two': 0
    }
    if (n===1||n===3) return null
    if (n>20){
        //find whole number of 10s, and add one back if remainder is 1 or 3
        let tens=Math.floor(n/10), remainder=n%10
        if (remainder===1||remainder===3){
            remainder+=10
            tens-=1
        }
        ans.ten=tens
        n=remainder
    }
    while (n>0){
        //then, loop through and add more 10s, 5s, & 2s as allowed
        if (n>=10&&(n%10==0||n%10==5||n%10==2||n%5==0||n%5==2||n%2==0)){
            ans.ten++
            n=n-10
        }else if (n>=5&&(n%5==0||n%5==2)){
            ans.five++
            n=n-5
        }else{
            ans.two++
            n=n-2
        }
    }
    return ans
}

console.log(reduce(3),3)
console.log(reduce(46),46)
console.log(reduce(47),47)
console.log(reduce(98),98)
console.log(reduce(6735),6735)
console.log(reduce(9999999999999999999999999999999999999999999999999999999999999),'huge n')