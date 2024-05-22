//https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
//A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. 
//The 1st character of a code is a capital letter which defines the book category.
//Each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
//Given a stocklist (e.g. : L) and a list of categories in capital letter, 
//find all the books of L with codes belonging to each category of M and to sum their quantity according to each category. 

function stockList(listOfArt, listOfCat){
    const map = {}
    for (const item of listOfArt) {
        let letter = item[0], num = +item.split(' ')[1]
        if (map[letter]) {
            map[letter] += num
        }else {
            map[letter] = num
        }
        //console.log(`${letter} is now ${map[letter]}`)
    }//console.log(map)
    let ans = []
    for (const elem of listOfCat) {
        //ans.push(`${elem} : ${map[elem]}`)
        ans.push(`(${elem} : ${map[elem]})`)
    }
    return ans.join(' - ').replace('undefined',0)
}

let b,c,res
b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D"]
res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
console.log(stockList(b, c), res)

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c), res)