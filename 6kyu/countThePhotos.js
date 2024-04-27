//In a string we describe a road. There are cars that move to the right and we denote them with ">" 
//and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
//A camera takes a photo of a car if it moves to the direction of the camera.
//Return the total number of photos that were taken by the cameras. The complexity should be strictly O(N)

function countPhotos(road){
    let camera=0, carLeft=0, carRight=0, photos=0
    for (let i=0 ; i<road.length; i++) {
        if (road[i]=='.'){
            camera++
            photos+=carRight
        }
        if (road[i]=='<'){
            carLeft++
            photos+=camera
        }
        if (road[i]=='>'){
            carRight++
        }
    }
    return photos;
}

console.log(countPhotos('>.>..<'), 8);
console.log(countPhotos('.><.>>.<<'), 11);
console.log(countPhotos('.>>>'), 0);
console.log(countPhotos('>..<<.>.<.'), 15);
console.log(countPhotos('.<>>..><.<<<<<.'), 34);
console.log(countPhotos('<..>>..>>.><.<.><..<'), 57);
console.log(countPhotos('<<.'), 0);
console.log(countPhotos('>>>.<<<'), 6);
console.log(countPhotos('..'), 0);
console.log(countPhotos('>>><<<'), 0);
console.log(countPhotos('..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.'), 248);