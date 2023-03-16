//Determine if the order of the parentheses is valid.
function validParentheses(parenStr) {
    let state = 0 , arr=parenStr.split('')
    for (i of arr){
        if (i===('(')) state++
        else state--
        if (state<0) return false
    }
    return state===0    
}

console.log(true, validParentheses("()()()"));
console.log(true, validParentheses("(()())()"));
console.log(true, validParentheses("()(())((()))(())()"));

console.log(false, validParentheses("()()("));
console.log(false, validParentheses("((())"));
console.log(false, validParentheses("())(()"));