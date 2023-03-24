//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

function snail (array) {
    if (array[0].length===0) return []
    let ans=[array[0][0]], width=array[0].length, height=array.length
    let x=0, y=0
    let moveAllowed=true
    //console.log(`${width}, ${height}`)
    let visited = new Set()
    visited.add('0-0')

    function nextMove(x,y){
        //check right
        if (x<(width-1) && !visited.has(`${x+1}-${y}`)) return [x+1,y]
        //check down
        else if (y<(height-1) && !visited.has(`${x}-${y+1}`)) return [x,y+1]
        //check left
        else if (x>0 && !visited.has(`${x-1}-${y}`)) return [x-1,y]
        //check up
        else if (y>0 && !visited.has(`${x}-${y-1}`)) return [x,y-1]
        //no moves left
        else moveAllowed=false
    }

    while (moveAllowed){
        let next=nextMove(x,y)
        if (moveAllowed) {
            x=next[0]
            y=next[1]
        }
        console.log([x,y])
        visited.add(`${x}-${y}`)
        console.log(visited.has(`${x}-${y}`))
        console.log(visited)
        ans.push(array[y][x])
        
    }
    
    return ans
}

console.log(snail([[]]), []);
// console.log(snail([[1]]), [1]);
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);