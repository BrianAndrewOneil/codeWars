//Return the given string with a "?" at the end. If it already ends with ?, just return the string

ensureQuestion = (s) => s[s.length-1]==='?' ? s : s+'?'

console.log(ensureQuestion(""),"?");
console.log(ensureQuestion("Yes"),"Yes?");
console.log(ensureQuestion("No?"),"No?");