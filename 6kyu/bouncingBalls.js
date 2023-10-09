//A child drops a ball from the roof of a building. His mother is looking out a window. Given a "bounce constant", b,
//how many times will the mother see the ball, both falling and rising? 
//h must be >0; b must be >0 and <1; window must be < h

function bouncingBall(h, b, window) {
    if (h<=0 || b<=0 || b>=1 || window>=h) return -1
    let count = 0, falling=true
    while (h>window){
        if (falling) h=h*b
        count++
        falling=!falling
    }
    return count
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(3.0, 1.0, 1.5), -1);