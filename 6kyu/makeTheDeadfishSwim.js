//Write a simple parser that will parse and run Deadfish.
//Deadfish has 4 commands, each 1 character long:
//i increments the value (initially 0)
//d decrements the value
//s squares the value
//o outputs the value into the return array
//https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

function parse(data, value=0, count=0){
    let ans = []
    for (let i=0 ; i<data.length ; i++){
        if (data[i]=='i'){
            value++
            count++
        }else if (data[i]=='d'){
            value--
            count++
        }else if (data[i]=='s'){
            value=value*value
            count++
        }else if (data[i]=='o'){
            ans.push(value)
        }
    }
    return ans
}

console.log( parse("iiisdoso"), [ 8, 64 ] );
console.log( parse("iiisxxxdoso"), [ 8, 64 ] );
