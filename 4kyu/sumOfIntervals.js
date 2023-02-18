//Accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
    intervals=intervals.sort( (a,b) => b[0]-a[0] )
    //for each, compare with next. If a[1] > b[0], then replace both with new elem, a[0],b[1] or a[1](whichever is bigger)
    let overlap=true, ans=[]
    while (intervals.length>1){
        let last=intervals.length-1
        if (intervals[last][1] > intervals[last-1][0]){
            //create new item for ans. First elem will be last[0], second item will be larger of last[1] or last-1[1]
            let first = intervals[last][0]
            let second = 0
            intervals[last][1]>intervals[last-1][1] ? second=intervals[last][1] : second=intervals[last-1][1]
            //now remove both elements from intervals and push new combo element
            intervals.pop()
            intervals.pop()
            intervals.push([first,second])
        }else{
            //if no overlap with next item, move the item from intervals to ans
            ans.push(intervals.pop())
        }
    }
    ans.push(intervals.pop())
    return ans.reduce((acc,c)=>acc+(c[1]-c[0]),0)
}

console.log(sumIntervals(( [
    [1,6],
    [10, 20],
    [1, 5],
    [16, 19],
    [5, 11]
 ] )), 19)

 console.log(sumIntervals(( [
    [0, 20],
    [-100000000, 10],
    [30, 40]
 ] )), 100000030)