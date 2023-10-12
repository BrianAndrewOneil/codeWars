//Given a string of brackets, braces, and curly braces, if they are in a valid order return true, otherwise false.
function validBraces(braces){
    let ans = true
    let map = {
        "(" : 0,
        "{" : 0,
        "[" : 0
    }
    for (var char of braces){
        console.log(map[char])
        if (map.char<0) return false
        if (char==="}") map["{"]-=1
        if (char===")") map["("]-=1
        if (char==="]") map["["]-=1

        //console.log (map)
    }
    return ans
}

console.log(validBraces("()))"), false);
console.log(validBraces("()"), true);
// console.log(validBraces("[]"), true);
// console.log(validBraces("{}"), true);
// console.log(validBraces("(){}[]"), true);
// console.log(validBraces("([{}])"), true);
// console.log(validBraces("(}"), false);
// console.log(validBraces("[(])"), false);
// console.log(validBraces("({})[({})]"), true);
// console.log(validBraces("(})"), false);
// console.log(validBraces("(({{[[]]}}))"), true);
// console.log(validBraces("{}({})[]"), true);
// console.log(validBraces(")(}{]["), false);
// console.log(validBraces("())({}}{()][]["), false);
// console.log(validBraces("(((({{"), false);
// console.log(validBraces("}}]]))}])"), false);