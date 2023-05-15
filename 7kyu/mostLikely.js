//Compare two probabilities, returning true if the first one is most likely otherwise false.

mostLikely=(prob1,prob2)=>(prob1.split(':')[0]/prob1.split(':')[1]) > (prob2.split(':')[0]/prob2.split(':')[1])

<<<<<<< HEAD
console.log(mostLikely('1:3','1:2'),false)
console.log(mostLikely('1:5','1:10'),true)
=======
console.log(mostLikely('1:3','1:2'),false)
>>>>>>> f7cbec0451d2a8458459583552d3c42cf9f05fd9
