//Scoring specifications:
//10+: 0pts
//5-10 inclusive: 5pts
//less than 5: 10pts
//If all radii are less than 5, award 100 BONUS POINTS!
//https://www.codewars.com/kata/525dfedb5b62f6954d000006/train/javascript

function scoreThrows(radii){
    let score = 0, bonus=true
    for (let n of radii){
        n>10 ? score+=0 : n>=5? score+=5 : score +=10
        if (n>5) bonus=false
    }
    return (bonus && radii.length>0 ? score+100 : score)
}

console.log(scoreThrows([0, 5, 10, 10.5, 4.5]),  30);
console.log(scoreThrows([1, 5, 11]), 15);
console.log(scoreThrows([15, 20, 30, 31, 32, 44, 100]),  0);
console.log(scoreThrows([1, 2, 3, 4]), 140);
console.log(scoreThrows([]), 0, 'Empty list');
console.log(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]), 65);