//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
//Given a string of brackets, braces, and curly braces, if they are in a valid order return true, otherwise false.
function validBraces(braces){
    var currentOpen
    let map = {
        ")" : 0,
        "}" : 0,
        "]" : 0
    }
    for (var char of braces){
        if (char==="}") {
            if (currentOpen!='{') return false
            currentOpen=currentOpen.slice(0,-1)
            map["}"]-=1
        }
        if (char===")") {
            if (currentOpen!='(') return false
            currentOpen=currentOpen.slice(0,-1)
            map[")"]-=1
        }
        if (char==="]") {
            if (currentOpen!='[') return false
            currentOpen=currentOpen.slice(0,-1)
            map["]"]-=1
        }
        if (char==="{") {
            map["}"]+=1
            currentOpen+='{'
        }
        if (char==="(") {
            map[")"]+=1
            currentOpen+='('
        }
        if (char==="[") {
            map["]"]+=1
            currentOpen+='{'
        }
        if (map[char]<0) return false
    }
    //return map
    return(Object.values(map).reduce((acc,c)=>acc+c,0)===0?true:false)
}

// console.log(validBraces("()))"), false);
// console.log(validBraces("()"), true);
// console.log(validBraces("[]"), true);
// console.log(validBraces("{}"), true);
// console.log(validBraces("(){}[]"), true);
// console.log(validBraces("([{}])"), true);
console.log(validBraces("(}"), false);
console.log(validBraces("[(])"), false);
// console.log(validBraces("({})[({})]"), true);
// console.log(validBraces("(})"), false);
// console.log(validBraces("(({{[[]]}}))"), true);
// console.log(validBraces("{}({})[]"), true);
// console.log(validBraces(")(}{]["), false);
// console.log(validBraces("())({}}{()][]["), false);
// console.log(validBraces("(((({{"), false);
// console.log(validBraces("}}]]))}])"), false);