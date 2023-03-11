//The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n 
//such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m n3+(n−1)3+(n−2)3+...+13=m if such a n exists or -1 if there is no such n.

function findNb(m) {
    let sum = 0 , i = 0
    while (sum<m){
        i++
        sum+=(i*i*i)
        //console.log(`sum=${sum}`)
    }
    return (sum===m? i : -1)
}

console.log(findNb(1071225), 45)
console.log(findNb(24723578342962), -1)
console.log(findNb(4183059834009), 2022)
console.log(findNb(135440716410000), 4824)
console.log(findNb(40539911473216), 3568)