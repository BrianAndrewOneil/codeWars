//We are to draw a pie chart! Our parameter shall be given in JSON.
//Return a JSON containing each key & with it the corresponding angle to two decimal places when necessary.
//x * 360 / sum

function pieChart(obj){
    //Note: this line was needed in CodeWars interface: obj = JSON.parse(obj)
    let json = {};
    let sum = Object.values(obj).reduce((acc,c)=>acc+c,0)
    for (var item in obj){
        json[item]=Math.round((obj[item]*360/sum)*100)/100
    }
    return JSON.stringify(json)
}

console.log(pieChart({"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}), {"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72})
console.log(pieChart({"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2}), {"English":51.43,"Polish":154.29,"Russian":128.57,"Spanish":25.71})
console.log(pieChart({"Android": 500, "iOS" : 270, "Microsoft" : 230}), {"Android":180,"iOS":97.2,"Microsoft":82.8})