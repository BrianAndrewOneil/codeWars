function landPerimeter(arr) {
    let total=0, width=arr[0].length, height=arr.length
    function checkSquare(x,y){
        //check top
        if (!arr[y-1]) total++
        else if (arr[y-1][x]==='O') total++
        //check bottom
        if (!arr[y+1]) total++
        else if (arr[y+1][x]==='O') total++
        //check left
        if (x===0) total++
        else if (arr[y][x-1]==='O') total++
        //check right
        if (!arr[0][x+1]) total++
        else if (arr[y][x+1]==='O') total++
    }
    for (let y=0;y<height;y++){
        for(let x=0;x<width;x++){
            if (arr[y][x]==='X') checkSquare(x,y)
        }
    }
    return (`Total land perimeter: ${total}`)
}

console.log(landPerimeter(['XOOO','XOXO','XOXO','OOXX','OOOO']), "Total land perimeter: 18");
console.log(landPerimeter(['XOOXO','XOOXO','OOOXO','XXOXO','OXOOO']), "Total land perimeter: 24");
console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
console.log(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
console.log(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
console.log(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");