//Write a function which takes a list of strings and returns each line prepended by the correct number.
//The numbering starts at 1. The format is n: string.
let number=array=> array.map( (e,i,a)=>(i+1)+': '+e)