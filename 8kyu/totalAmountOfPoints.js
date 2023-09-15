//Results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", 
//where x is our team's score and y is our opponents score. For example: ["3:1", "2:2", "0:1", ...]
//Points are awarded for each match as follows:
//  if x > y: 3 points (win)
//  if x < y: 0 points (loss)
//  if x = y: 1 point (tie)
//Return the total amount of points earned


function points(games,ans=0) {
    games.forEach(score=>{
        if (score.split(':')[0]>score.split(':')[1]) ans+=3
        if (score.split(':')[0]==score.split(':')[1]) ans+=1
    })
    return ans
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);