//Calculate the number of button presses required to send a text the old-fashioned way
function presses(phrase) {
    const values = {
        '1': ['1', ' ', 'a', 'd', 'g', 'j', 'm', 'p', 't', 'w', '*', '#'],
        '2': ['b', 'e', 'h', 'k', 'n', 'q', 'u', 'x', '0'],
        '3': ['c', 'f', 'i', 'l', 'o', 'r', 'v', 'y'],
        '4': ['2', '3', '4', '5', '6', '8', 's', 'z'],
        '5': ['7', '9']
    }
    const num = '2'
    let ans = 0
    phrase=phrase.toLowerCase().split('')
    for (digit of phrase) {
        for (i in values){
            if (values[i].includes(digit)) ans+=+i
        }
    }
    return ans
}

console.log(presses('LOL'    ),  9);
console.log(presses('HOW R U'), 13);