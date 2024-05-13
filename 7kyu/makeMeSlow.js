//calling this function should take at least 7 seconds

function makeMeSlow () {
    var now = Date.now(),
    end = now + 7200;
    while (now < end) { now = Date.now(); }
    
    return 'finished'
}

console.log(makeMeSlow())