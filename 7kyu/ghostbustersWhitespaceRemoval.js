//Given a string, return it without whitespaces.
//If there are no whitespaces, return "You just wanted my autograph didn't you?"

const ghostBusters = (b) => b.includes(" ") ? b.replaceAll(' ','') : "You just wanted my autograph didn't you?"

console.log(ghostBusters("Factor y") === "Factory", 'Nope, there may still be a ghost in the building. Try again.');
console.log(ghostBusters("O  f fi ce") === "Office", 'Nope, there may still be a ghost in the building. Try again.');
console.log(ghostBusters("BusStation") === "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.');