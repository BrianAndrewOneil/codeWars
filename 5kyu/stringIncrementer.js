//If the string already ends with a number, the number should be incremented by 1.
//If the string does not end with a number. the number 1 should be appended to the new string.
function isNumber(c) {
    return c >= '0' && c <= '9';
}

function incrementString (strng) {
    if (!isNumber(strng[strng.length-1])) return (strng+'1')
    let numlength=0
    for (let i=strng.length-1;i>=0;i--){
        if (!isNumber(strng[i])) break
        numlength++
    }
    let endNum = +strng.slice(-numlength)+1
    end = endNum.toString().padStart(numlength, '0')
    return (strng.slice(0,(strng.length-numlength))+end)
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foobar999"), "foobar1000");
console.log(incrementString("foobar00999"), "foobar01000");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar1"), "foobar2");
console.log(incrementString("1"), "2");
console.log(incrementString("009"), "010");
console.log(incrementString("fo99obar99"), "fo99obar100");