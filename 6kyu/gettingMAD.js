//Given an array of integers with at least 2 elements: a1, a2, a3, a4, ... aN
//The absolute difference between two array elements ai and aj, where i != j, is the absolute value of ai - aj.
//Return the minimum absolute difference (MAD) between any two elements in the array.
function gettingMad(array) {
    let ans = Math.abs(array[0]-array[1])
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array.length-1; j++){
            if (Math.abs(array[i]-array[j] < ans)) ans=Math.abs(array[i]-array[j])
        }
    }
    return ans;
}

//"simple case"
console.log(gettingMad([-10, 0, -3, 1]), 1);

//"zero-filled array"
console.log(gettingMad([0, 0, 0, 0]), 0);

//"positive and negative numbers"
console.log(gettingMad([-570, 542]), 1112);
console.log(gettingMad([-69, -808, 828, 57]), 126);
