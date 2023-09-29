//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    var beingAttacked
    if (fighter1==firstAttacker) beingAttacked==fighter2
    else beingAttacked==fighter1
    while(fighter1.health>0 && fighter2.health>0){
        console.log([fighter1.health,fighter2.health])
        if (beingAttacked==fighter1) fighter1.health=fighter1.health-fighter2.damagePerAttack
        else fighter2.health=fighter2.health-fighter1.damagePerAttack
        if (beingAttacked==fighter1) beingAttacked=fighter2
        else beingAttacked=fighter1
    }
    return ([fighter1.health, fighter2.health])
    //(fighter1.health>0? fighter1.name : fighter2.name)
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

