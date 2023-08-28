//return the total number of smiling faces in the array
function countSmileys(arr) {
    let ans = 0
    for (c of arr){
        if (c.length===2){
            if ( (c[0]===";" || c[0]===":") && (c[1]===")" || c[1]==="D") ){
                ans++
            }
        }
        if (c.length===3){
            if ( (c[0]===";" || c[0]===":") && (c[1]==="-" || c[1]==="~") && (c[2]===")" || c[2]==="D") ){
                ans++
            }
        }
    }
    return ans
}

console.log(countSmileys([]                             ), 0);
console.log(countSmileys([':D',':~)',';~D',':)']        ), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']     ), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);