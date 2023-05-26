//The scores for each grade are: A: 30 points,B: 20 points,C: 10 points,D: 5 points
//If 5 or more courses, and all grades are A or B, then extra 20 pts awarded
//200 pts max grade
//Find the hackers!

function findHack(arr) {
    let hackers = []
    for (const student of arr){
        let sum = student[2].map(i=>i==='A'?30:i==='B'?20:i==='C'?10:i==='D'?5:0).reduce((acc,c)=>acc+c,0)
        const bonus = !(student[2].map(i=>i==='A'||i==='B'?true:false).includes(false))
        if (bonus && student[2].length>=5) sum+=20
        if (sum>200) sum=200
        if (sum!=student[1]) hackers.push(student[0])
    }
    return hackers
}

var array = [
["name1", 150, ["B", "A", "A", "C", "A", "A"]],
["name2", 120, ["B", "A", "A", "A"]],
["name3", 160, ["B", "A", "A", "A","A"]],
["name4", 140, ["B", "A", "A", "C", "A"]]
];

console.log(findHack(array), ['name2','name4'])