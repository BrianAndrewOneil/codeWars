//Given a number, return it as string in expanded form

function expandedForm(num) {
    num=num.toString().split('')
    let nZero = num.length
    num=num.map(n=>{
        nZero--
        return (n+'0'.repeat(nZero))
    })
    return num.filter(n=>+n!=0).join(' + ')
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');