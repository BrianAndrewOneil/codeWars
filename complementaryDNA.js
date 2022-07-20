//Receive one side of the DNA, return the other complementary side. 
let DNAStrand = dna => dna.split('').map(e=>e=="A"?"T":e=="T"?"A":e=="G"?"C":"G").join('')