//Return the positions and the values of the "peaks" (or local maxima) of a numeric array.
function pickPeaks(arr){
    let ans = {}, trend = "start"
    var newPos, newPeak
    ans['pos']=[]
    ans['peaks']=[]
    arr.forEach( (currVal,i,a)=>{
        if (i>0){
            if (currVal>a[i-1]){
                if (trend==='start') trend = 'rising'
                if (trend==='falling') trend = 'rising'
                if (trend==='plateau') trend = 'rising'
            }
            else if (currVal===a[i-1]){
                if (trend==='rising'){
                    trend='plateau'
                    newPos=i-1
                    newPeak=a[i-1]
                }
            }
            else if (currVal<a[i-1]){
                if (trend==='rising'){
                    trend='falling'
                    ans.pos.push(i-1)
                    ans.peaks.push(a[i-1])
                }
                else if (trend==='plateau'){
                    trend='falling'
                    ans.pos.push(newPos)
                    ans.peaks.push(newPeak)
                }
            }
        }
    })
    return ans
}

// console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
// console.log(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
// console.log(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
// console.log(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
// console.log(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
// console.log(pickPeaks([]),{pos:[],peaks:[]});
// console.log(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});