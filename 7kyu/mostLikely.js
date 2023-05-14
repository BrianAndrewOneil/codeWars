//Compare two probabilities, returning true if the first one is most likely otherwise false.

mostLikely=(prob1,prob2)=>(prob1.split(':')[0]/prob1.split(':')[1]) > (prob2.split(':')[0]/prob2.split(':')[1])

console.log(mostLikely('1:3','1:2'),false)