//Given RGB values, return a hexadecimal representation.
function rgb(r, g, b){
    let rHex=r<=0?'00':r>255?'FF':r.toString(16).toUpperCase()
    let gHex=g<=0?'00':g>255?'FF':g.toString(16).toUpperCase()
    let bHex=b<=0?'00':b>255?'FF':b.toString(16).toUpperCase()
    if (rHex.length===1) rHex="0"+rHex
    if (gHex.length===1) gHex="0"+gHex
    if (bHex.length===1) bHex="0"+bHex
    return(rHex.toString()+gHex.toString()+bHex.toString())
}

console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300,255,255), 'FFFFFF')
console.log(rgb(173,255,47), 'ADFF2F')
console.log(rgb(236,6,125), 'EC067D')