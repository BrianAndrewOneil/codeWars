//A drone flies over lamps, turning each one on. Return the resulting lamps sting, where 'o' represents a lamp lit.
let flyBy=(lamps, drone)=>lamps.split('').map((e,i)=>i<drone.length?e='o':e='x').join('')

console.log(flyBy('xxxxxx', '====T'))