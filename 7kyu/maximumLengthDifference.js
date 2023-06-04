//Given two arrays of strings. Let x be any string in the first array and y be any string in the second array.
//Find max(abs(length(x) − length(y))). If a1 and/or a2 are empty return -1

function mxdiflg(a1, a2) {
    if (a1.length===0||a2.length===0) return -1
    let max1 = a1.sort((a,b)=>b.length-a.length)[0].length - a2.sort((a,b)=>a.length-b.length)[0].length
    let max2 = a2.sort((a,b)=>b.length-a.length)[0].length - a1.sort((a,b)=>a.length-b.length)[0].length
    return (max1>max2 ? max1 : max2)
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13)