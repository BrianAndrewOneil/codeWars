//Given a list of pairs, return whether each member is a senior or open. Senior=at least 55 years old, handicap greater than 7. All others in open.
let openOrSenior=data=>data.map(arr=>arr[0]>54&&arr[1]>7?'Senior':'Open')

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])