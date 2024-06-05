//https://www.codewars.com/kata/5616868c81a0f281e500005c
//To participate in a prize draw each one gives his/her firstname.
//Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.
//The length of the firstname is added to the sum of these ranks hence a number sum.
//An array of random weights is linked to the firstnames and each sum is multiplied by its corresponding weight to get what they call a winning number.

function rank(st, we, n) {
    if (st.length==0) return "No participants"
    if (n>st.split(',').length) return "Not enough participants"
    const map={}
    let weight=0
    for (const name of st.split(',')){
        map[name]=(name.toUpperCase().split('').map(letter=>letter.charCodeAt(0)-64).reduce((acc,c)=>acc+c,0)+name.length)*we[weight]
    }
    return map
}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon")
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")