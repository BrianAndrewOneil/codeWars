//A perfect square has all digits even (64, 400, 484,...)
//Give the numbers of this sequence that are in the range [a,b] 

function evenDigitSquares(a, b) {
    var ans = [], current = 1
    while(current*current<=b){
        if( (current*current).toString().split('').filter(n=>n%2!=0).length===0 ){
            if(current*current>=a && current*current<=b) ans.push(current*current)
        }
        current++
    }
    return ans
}

console.log(evenDigitSquares(100, 1000), [400, 484]);
console.log(evenDigitSquares(1000, 4000), []);
console.log(evenDigitSquares(10000, 40000), [26244, 28224, 40000])