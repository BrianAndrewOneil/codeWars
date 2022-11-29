//Given an array of strings, remove all consecutive duplicate letters from each string in the array.
let dup=s=>s.map(word=>word=word.split('').filter((e,i,a)=>e!=a[i+1]).join(''))

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])