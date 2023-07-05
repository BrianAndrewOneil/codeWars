//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
    let tower = []
    for (let i=1; i<=nFloors; i++){
        const space = nFloors-i
        tower.push(' '.repeat(space) + '*'.repeat((i*2)-1) + ' '.repeat(space))
    }
    return tower
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);