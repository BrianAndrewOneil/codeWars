//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
//Given a string of brackets, braces, and curly braces, if they are in a valid order return true, otherwise false.
function validBraces(braces){
    let stack = []
    for (var char of braces){
        if (char==='['||char==='('||char==='{') stack.push(char)
        else if (char===')'){
            if (stack[stack.length-1]!='(') return false
            stack.pop()
        }else if (char===']'){
            if (stack[stack.length-1]!='[') return false
            stack.pop()
        }else if (char==='}'){
            if (stack[stack.length-1]!='{') return false
            stack.pop()
        }
    }
    return stack.length===0
}

console.log(validBraces("()))"), false);
console.log(validBraces("()"), true);
console.log(validBraces("[]"), true);
console.log(validBraces("{}"), true);
console.log(validBraces("(){}[]"), true);
console.log(validBraces("([{}])"), true);
console.log(validBraces("(}"), false);
console.log(validBraces("[(])"), false);
console.log(validBraces("({})[({})]"), true);
console.log(validBraces("(})"), false);
console.log(validBraces("(({{[[]]}}))"), true);
console.log(validBraces("{}({})[]"), true);
console.log(validBraces(")(}{]["), false);
console.log(validBraces("())({}}{()][]["), false);
console.log(validBraces("(((({{"), false);
console.log(validBraces("}}]]))}])"), false);