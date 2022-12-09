function containsDuplicate(nums){
    const map={}
    for(const num of nums){
        if (map[num]){
            return true
        }else{
            map[num]=1
        }
    }

    // for (const num of nums){
    //     map[num]?return true: 1
    // }

    return false
}

console.log(containsDuplicate([1,2,3,1]), true)
console.log(containsDuplicate([1,2,3,4]), false)