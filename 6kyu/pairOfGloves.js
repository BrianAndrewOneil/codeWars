//Given an array describing the color of each glove, return the number of pairs you can constitute, 
//assuming that only gloves of the same color can form pairs.

function numberOfPairs(gloves) {
  const map = {}
  for (const color of gloves){
    map[color]=map[color]+1 || 1
  }
  let ans = 0
  for (const color in map){
    ans = ans + Math.floor(map[color]/2)
  }
  return ans
}



console.log(numberOfPairs(['red','red']),1)
console.log(numberOfPairs(['red','green','blue']),0)
console.log(numberOfPairs(['gray','black','purple','purple','gray','black']),3)
console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]),2)