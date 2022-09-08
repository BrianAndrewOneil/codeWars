//Input, tic tac toe rows, 3 arrays of 3 values each. Return: -1 if the board is not yet finished 
//AND no one has won yet (there are empty spots),//1 if "X" won, 2 if "O" won, 0 if it's a cat's game (i.e. a draw).
function isSolved(b) {
    b=(b[0].concat(b[1],b[2]))
    if(b[0]==b[1]&&b[0]==b[2]&&b[0]!==0) return b[0]
    else if(b[3]==b[4]&&b[3]==b[5]&&b[3]!==0) return b[3] 
    else if(b[6]==b[7]&&b[6]==b[8]&&b[6]!==0) return b[6] 
    else if(b[0]==b[3]&&b[0]==b[6]&&b[0]!==0) return b[0] 
    else if(b[1]==b[4]&&b[1]==b[7]&&b[1]!==0) return b[1] 
    else if(b[2]==b[5]&&b[2]==b[8]&&b[2]!==0) return b[2] 
    else if(b[0]==b[4]&&b[0]==b[8]&&b[0]!==0) return b[0] 
    else if(b[2]==b[4]&&b[2]==b[6]&&b[2]!==0) return b[2] 
    else if(b.includes(0)) return -1
    else return 0
  }