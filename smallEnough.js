let smallEnough = (a, limit) => a.length==a.filter(number=>number<=limit).length
//Check that all values in the array are below or equal to the limit value. 
//If they are, return true. Else, return false.