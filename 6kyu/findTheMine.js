//Accepts a 2D array and returns the location of the mine. The mine is represented as the integer 1 
//in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s. 

function mineLocation(field,ans=[]){
    field.forEach( (arr,i,a) => {
        if (arr.includes(1)){
            ans.push(i)
            ans.push(arr.indexOf(1))
        }
    })
    return ans
}

console.log(mineLocation([ [1, 0], [0, 0] ]), [0, 0]);
console.log(mineLocation([ [0, 0, 0], [0, 0, 0], [0, 1, 0] ]), [2, 1]);
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]), [2, 2]);