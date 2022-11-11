function validSolution(board){    
    var arrColumns = new Array(9)
    for (var i = 0; i < 9; i++) {
      arrColumns[i] = new Array()
    }
    for (i=0;i<9;i++){
      for (var h=0;h<9;h++){
          arrColumns[i].push(board[h][i])
      }
    }
    var arrGrids = new Array(9)
    for (var i = 0; i < 9; i++) {
      arrGrids[i] = new Array()
    }
    for (i=0;i<3;i++){
      for (var h=0;h<3;h++){
          arrGrids[0].push(board[i][h])
          arrGrids[1].push(board[i][h+3])
          arrGrids[2].push(board[i][h+6])
      }
    }
    for (i=3;i<6;i++){
      for (var h=0;h<3;h++){
          arrGrids[3].push(board[i][h])
          arrGrids[4].push(board[i][h+3])
          arrGrids[5].push(board[i][h+6])
      }
    }
    for (i=6;i<9;i++){
      for (var h=0;h<3;h++){
          arrGrids[6].push(board[i][h])
          arrGrids[7].push(board[i][h+3])
          arrGrids[8].push(board[i][h+6])
      }
    }
    function solve(nums){
      let ans=true
      for(var i=1;i<10;i++){
        if(!nums.includes(i)) ans=false
      }
      return ans
    }
    let result=true
    board.forEach((arr)=>{
      if (solve(arr)==false) result=false
    })
    arrColumns.forEach((arr)=>{
      if (solve(arr)==false) result=false
    })
    arrGrids.forEach((arr)=>{
      if (solve(arr)==false) result=false
    })
    return result
  }
//https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true)

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false)