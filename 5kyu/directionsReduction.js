//Take an array of strings and return an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduce(arr){
    let updated=1
    while(updated>0){
        updated=0
        for(let i=0;i<arr.length;i++){
            if(areOffset(arr[i],arr[i+1])){
                arr[i]='x'
                arr[i+1]='x' 
                arr=arr.filter(w=>w!='x')
                updated++
            }
        }
    }
    return arr
}

function areOffset(dir1,dir2){
    if(
        dir1=="NORTH"&&dir2=="SOUTH"||
        dir1=="SOUTH"&&dir2=="NORTH"||
        dir1=="EAST"&&dir2=="WEST"||
        dir1=="WEST"&&dir2=="EAST"
    ){
        return true
    }
    return false
}

console.log(dirReduce(
    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
    ["WEST"]
    )
console.log(dirReduce(
    ["NORTH", "WEST", "SOUTH", "EAST"]),
    ["NORTH", "WEST", "SOUTH", "EAST"]
    )
console.log(dirReduce(
    ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
    []
    )
console.log(dirReduce(
    ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]),
    ["WEST","WEST"]
    )