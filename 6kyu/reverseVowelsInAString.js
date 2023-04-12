// reverse the vowels in a string. Any characters which are not vowels should remain in their original position.
function reverseVowels(str) {
    const vowels = ['A','E','I','O','U','a','e','i','o','u']
    let temp = []
    str.split('').forEach(i=>vowels.includes(i) ? temp.push(i) : i)
    return str.split('').map(i=>vowels.includes(i) ? i=temp.pop() : i).join('')  
}

console.log(reverseVowels("Hello!"), "Holle!");
console.log(reverseVowels("Tomatoes"), "Temotaos");
console.log(reverseVowels("Reverse Vowels In A String"), "RivArsI Vewols en e Streng")