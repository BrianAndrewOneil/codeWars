//Score the dice game "greed", where 5 dice are thrown. Scoring rules are:
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

function score( dice ) {
    let score = 0
    const map = {}
    const scoreThrees = { '1': 1000, '2': 200, '3': 300, '4': 400, '5': 500, '6': 600 }
    for (const num of dice){
        map[num]=map[num]+1 || 1
    }
    for (const num in map){
        if (map[num]>2){
            let numThree = Math.floor(map[num]/3)
            console.log(`number of triplets for ${num} is: ${numThree} and score is ${scoreThrees[num]}`)
            score = score + numThree*scoreThrees[num]
            map[num] = map[num]-numThree*3
        }
    }
    if(map[1]) score=(score + map['1']*100)
    if(map[5]) score=(score + map['5']*50)
    return score
}

console.log( score( [2, 3, 4, 6, 2] ), "Should be 0 :-(" );
console.log( score( [4, 4, 4, 3, 3] ), "Should be 400" );
console.log( score( [2, 4, 4, 5, 4] ), "Should be 450" );