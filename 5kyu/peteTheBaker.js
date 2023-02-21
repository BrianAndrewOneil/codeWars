//A function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
//and returns the maximum number of cakes Pete can bake (integer). 

function cakes(recipe, available) {
    let ans = []
    for (const key in recipe){
        if (available[key] && (available[key]/recipe[key]>=1)){
            ans.push(available[key]/recipe[key])
        }else{
            return 0
        } 
    }
    return Math.floor(ans.sort()[0])
}
 
let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available), 0);