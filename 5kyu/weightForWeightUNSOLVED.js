//Given a list of Ints, reorder the list based on the sum of each numbers digits
//https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
function orderWeight(strng) {
    let map={}, ans='', values=[]
    strng=strng.split(' ')
    for (var num of strng) {
        map[num]=num.toString().split('').map(n=>+n).reduce((acc,c)=>acc+c,0)
        //console.log(map)
    }

    for(key in map) {
        var value = map[key];
        values.push(value)
        //this creates an array of the values in our map object
    }
    //console.log(values)

    let sortable = [];
    for (var vehicle in map) {
        sortable.push([vehicle, map[vehicle]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    })

    return sortable
    
}

console.log(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")