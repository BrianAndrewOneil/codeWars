//Given a list of integers, return a list of each individual int or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 
//The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. 
function solution(list){
    let ans=''
    let i=0
    while (i<list.length){
        if ((list[i]+1===list[i+1])&&(list[i+1]+1===list[i+2])) {
            let h=2
            while(list[i+h]+1===list[i+h+1]){
                h++
            }
            ans+=list[i]+'-'+list[i+h]+','
            i+=h+1
        }
        else {
            (ans+=list[i]+",")
            i++
        }
    }
    return ans.slice(0,-1)
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-10--8,-6,-3-1,3-5,7-11,14,15,17-20")
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")