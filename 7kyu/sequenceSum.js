//Return the sum of a sequence of ints, as defined by the input of 3: begin, end, step
const sequenceSum = (begin, end, step) => {
    if (begin>end) return 0
    let series=[begin]
    while(end>=begin+step){
        begin=begin+step
        series.push(begin)
    }
    return series.reduce((acc,c)=>acc+c,0)
};

console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)