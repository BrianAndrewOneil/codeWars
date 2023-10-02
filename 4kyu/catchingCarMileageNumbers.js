//Display 0 if mileage not interesting, 1 if interesting mileage coming w/in 2 miles, or 2 if interesting mileage now
//Interesting numbers have 3 or more digits and:
//  *Any digit followed by all zeros: 100, 90000
//  *Every digit is the same number: 1111
//  *The digits are sequential, incementing†: 1234
//  *The digits are sequential, decrementing‡: 4321
//  *The digits are a palindrome: 1221 or 73837
//  *The digits match one of the values in the awesomePhrases array

function isInteresting(number, awesomePhrases) {
    let ans = 0
    function isIncrementing (arr){
        for(let i=0;i<arr.length-1;i++){
            if ((+arr[i]+1!=+arr[i+1]) && !(arr[i]==9&&arr[i+1]==0)) return false
        }
        return true
    }

    function isDecrementing (arr){
        for(let i=0;i<arr.length-1;i++){
            if (+arr[i]-1!=+arr[i+1]) return false
        }
        return true
    }

    function isPalindrome(x) {
        const ans=x.toString().split('').reverse().join('')
        return (x===+ans)
    }

    function numCheck (num){
        if (num>=100 && num.toString().slice(1).split('').filter(n=>n!=0).length==0){
            console.log('num is one digit then all zeros')
            return true
        }else if (num>=100 && !(num.toString().split('').map((n,i,a)=>n===a[0]?'yes':'no').includes('no'))){
            console.log('all nums the same')
            return true
        }else if (num>=100 && isIncrementing(num.toString().split(''))){
            console.log('incrementing')
            return true
        }else if (num>=100 && isDecrementing(num.toString().split(''))){
            console.log('decrementing')
            return true
        }else if (num>=100 && isPalindrome(num)){
            console.log('palindrome')
            return true
        }else if (num>=0 && awesomePhrases.includes(num)){
            console.log('awesome phrase')
            return true
        }
    }

    if (numCheck(number)) return 2
    else if (numCheck(number+1)) return 1
    else if (numCheck(number+2)) return 1
    else return 0
}

// console.log(isInteresting(3, [1337, 256]),     0);
// console.log(isInteresting(1336, [1337, 256]),  1);
// console.log(isInteresting(1337, [1337, 256]),  2);
// console.log(isInteresting(11208, [1337, 256]), 0);
// console.log(isInteresting(11209, [1337, 256]), 1);
// console.log(isInteresting(11211, [1337, 256]), 2);
// console.log(isInteresting(10000000, [1337, 256]), 2);
// console.log(isInteresting(9999997, [1337, 256]), 2);
// console.log(isInteresting(1234567, [1337, 256]), 2);
// console.log(isInteresting(7654321, [1337, 256]), 2);
// console.log(isInteresting(123319, []), 1)
console.log(isInteresting(67890, []), 2);