//Stronger side wins.
//The first parameter will contain the count of each race on the side of good in the following order:
//    Hobbits 1, Men 2, Elves 3, Dwarves 3, Eagles 4, Wizards 10.
//The second parameter will contain the count of each race on the side of evil in the following order:
//    Orcs 1, Men 2, Wargs 2, Goblins 2, Uruk Hai 3, Trolls 5, Wizards 10.

function goodVsEvil(good, evil){
    let gPoints = [1,2,3,3,4,10]
    let bPoints = [1,2,2,2,3,5,10]
    let goodScore = good.split(' ').map( (c,i,a) => c*gPoints[i] ).reduce( (acc,c) => acc+c,0 )
    let badScore = evil.split(' ').map( (c,i,a) => c*bPoints[i] ).reduce( (acc,c) => acc+c,0 )
    return([goodScore,badScore])
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');
