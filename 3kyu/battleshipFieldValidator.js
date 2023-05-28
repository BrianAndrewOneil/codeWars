//https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript
//Test that the board is set up properly. 
//Per player: Onee battleship (4 cells), 2 cruisers (3), 3 destroyers (2) and 4 submarines (1).
//Ships cannot overlap or be in contact with any other ship.
function validateBattlefield(field) {
    //first record all ships in each row
    for (const row of field){
        let ship = false
        for (const square of row){
            if (square===1){
                if (ship===false){
                    
                }
            }
        }
    }
}



console.log(validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]), true)