//return RNA sequence from given DNA sequence

const DNAtoRNA = dna => [...dna].map(i=>i==='T'?'U':i).join('')

console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")