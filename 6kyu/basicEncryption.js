//get a string as text and an int as the rule of manipulation, and should return encrypted text. for example:
//encrypt("a",1) = "b"
//https://www.codewars.com/kata/5862fb364f7ab46270000078/train/javascript

function encrypt(text, rule) {
    text=[...text]
    let ans = []
    for (const letter of text){
        let num = letter.charCodeAt(0)+rule
        while (num>255) num=num-256
        ans.push(num)
    }
    return ans.map(n=>String.fromCharCode(n)).join('')
};

console.log(encrypt("", 1), "");
console.log(encrypt("a", 1), "b");
console.log(encrypt("please encrypt me", 2), "rngcug\"gpet{rv\"og");