//Return the input with all words must have their first letter capitalized without spaces.
//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

String.prototype.camelCase=function(){
    if (this.length===0) return ""
    return this.split(' ').map(w=>w.trim()).map(w=>w[0].toUpperCase()+w.slice(1)).join('')
}

console.log("test case".camelCase(), "TestCase");
console.log("camel Case method".camelCase(), "CamelCaseMethod");
console.log("say hello".camelCase(), "SayHello");
console.log("camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");