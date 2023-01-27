//check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', 
//if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(arr){
    let num=arr.filter(e=>e==='good').length
    if (num<1){
        return 'Fail!'
    }else if (num<3){
        return 'Publish!'
    }else{
        return 'I smell a series!'
    }
}

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!')