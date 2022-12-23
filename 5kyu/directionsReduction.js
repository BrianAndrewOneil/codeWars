//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduce(arr){
  for(let i=0;i<arr.length;i++){
    for(let h=i+1;h<arr.length;h++){
        if(areOffset(arr[i],arr[h])){
            arr[i]='x'
            arr[h]='x'
        }
    }
  }
  return arr.filter(w=>w!='x')
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