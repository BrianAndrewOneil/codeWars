//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep.
//Fortunately, you are good at spotting them. Warn the sheep in front of the wolf that it is about to be eaten.
//Remember that you are standing at the front of the queue which is at the end of the array.
const warnTheSheep=queue=>queue[queue.length-1]=='wolf'? "Pls go away and stop eating my sheep": `Oi! Sheep number ${queue.length-queue.indexOf('wolf')-1}! You are about to be eaten by a wolf!`
