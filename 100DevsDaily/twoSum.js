//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
function twoSum(arr,sum){
    const nums={}
    const pairs=[]
    for(num1 of arr){
        //loop thru, if (sum-n) is already in map, then push pair to pairs, otherwise add n to the map
        const num2=sum-num1
        if(nums[num2]){
            pairs.push([num1,num2])
        }else{
            nums[num1]=1
        }
    }
    return pairs
}


console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])