//Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
function deleteNth(arr,n){
    const map = {}
    const ans = []
    for (const num of arr){
        map[num]=map[num]+1 || 1
        if (map[num]<=n) ans.push(num)
    }
return ans
}

console.log(deleteNth([20,37,20,21], 1), [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])