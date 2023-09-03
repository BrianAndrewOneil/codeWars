//Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
function drawStairs(n, ans='') {
    for(let i=0;i<n-1;i++){
        ans+=(' '.repeat(i)+'I\n')
    }
    ans+=(' '.repeat(n-1)+'I')
    return ans
}

console.log(drawStairs(3))
console.log(drawStairs(5))
console.log(drawStairs(1))
console.log("I\n I\n  I")