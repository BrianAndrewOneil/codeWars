//Return true if the first argument(string) passed in ends with the 2nd argument (also a string).
let solution=(str,end)=>end.length==0?true:str.split('').slice(-(end.length)).join('')===end