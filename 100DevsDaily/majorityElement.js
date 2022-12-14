//Given an array nums of size n, return the majority element, the element that appears more than ⌊n / 2⌋ times. Assume that the majority element always exists in the array.

function majorityElement(nums){
    const map ={}
    for (const n of nums){
        if(map[n]){
            map[n]+=1
        }else{
            map[n]=1
        }
        if(map[n]>(nums.length/2)){
            return n
        }
    }
    //Or, to be super tricky, sort then divide by two and grab the middle element
    //nums.sort()
    //return nums[Math.floor(nums.length/2)]
}
console.log(majorityElement([2,2,1,1,1,2,2]), 2)