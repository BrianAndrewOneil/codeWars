//You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. 
//No negative element should be present in the sum. If there is no such sum: -1
function maxSumBetweenTwoNegatives(a) {
    let ans = -1
    let adding = false
    let sum = 0
    for(num of a){
        if(num>-1&&adding){
            adding=true
            sum+=num
        }
        else{

        }
    }
}


  
console.log( maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7]), 8 );
console.log( maxSumBetweenTwoNegatives([5,-1,-2]), 0 );
console.log( maxSumBetweenTwoNegatives([1,-2]), -1 );