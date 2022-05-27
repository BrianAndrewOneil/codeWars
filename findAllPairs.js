//Given an array, count all pairs in that array and return their count.
function duplicates(array) {
    let pairs = 0
    const obj = {}
    array.forEach(i => {
        if (obj[i]) {
            pairs += 1
            obj[i] = 0
        } else {
            obj[i] = 1
        }
    });
    return pairs;
}