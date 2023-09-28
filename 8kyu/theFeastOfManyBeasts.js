//Given animal's name and dish, return true if both begin and end with same letter, false if not
const feast = (beast, dish) => beast.startsWith(dish[0])&&beast.endsWith(dish[dish.length-1])

console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)