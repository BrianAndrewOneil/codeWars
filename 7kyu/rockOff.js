//receive two arrays, containing first the score of Alice's band and then those of Bob's. 
//find their total score by comparing them in a single line. 

function solve(a, b, scoreA=0, scoreB=0) {
    a.forEach((num,i,a)=>num>b[i] ? scoreA+=1 : num<b[i] ? scoreB+=1 : 0)
    let response = (scoreA===scoreB? 'that looks like a "draw"! Rock on!' : scoreA>scoreB? 'Alice made "Kurt" proud!' : 'Bob made "Jeff" proud!')
    return (`${scoreA}, ${scoreB}: ${response}`)
}

console.log(solve([47, 7, 2], [47, 7, 2]),'0, 0: that looks like a "draw"! Rock on!')
console.log(solve([47, 67, 22], [26, 47, 12]),'3, 0: Alice made "Kurt" proud!')
console.log(solve([25, 50, 22], [34, 49, 50]),'1, 2: Bob made "Jeff" proud!')
