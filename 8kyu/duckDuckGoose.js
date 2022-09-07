//Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), 
//return the name of the chosen Player
//(name is a property of Player objects, e.g Player.name)
let duckDuckGoose = (players, goose) => (goose%players.length==0 ? players[players.length-1].name : players[goose%players.length-1].name)
