//A town's population increases by a percent each year, and some new people move in as well. Return how many years required to reach target.
function nbYear(p0, percent, aug, p) {
    let year=0
    while(p>p0){
        p0=Math.floor(p0*((percent*.01)+1)+aug)
        year+=1
    }
    return year
}

console.log(nbYear(1000, 2, 50, 1214), 4)
//console.log(nbYear(1500000, 0.25, 1000, 2000000), 94)