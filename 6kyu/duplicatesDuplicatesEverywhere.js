//You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters
//Return a table with the same keys, but each character should appear only once among the value-arrays
//Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. 

const removeDuplicateIds = (obj) => {
    let flatValues = Object.values(obj).reduce((acc,c)=>acc.concat(c))
    let valueSet = new Set (flatValues)
    //let valueSet = new Set (Object.values(obj).flat())
    //note: the above line worked in VS Code, but not in Code Wars (error using "flat"), so I replaced it with the first two lines of code
    let keys = Object.keys(obj).reverse()
    let ans={}
    for (key of keys){
        let newArr=[]
        for(letter of obj[key]){
            if(valueSet.has(letter)){
                newArr.push(letter)
                valueSet.delete(letter)
            }
        }
        ans[key]=newArr
    }
    return ans
};

const obj = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
  };
  
  const obj1 = {
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"],
  };
  
  const obj2 = {
    "1": ["A"],
    "2": ["A"],
    "3": ["A"],
  };
          
  const obj3 = {
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
  };

console.log(removeDuplicateIds(obj), { "1": ["C"], "2": ["A", "B", "D"] });
console.log(removeDuplicateIds(obj1), { "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] });
console.log(removeDuplicateIds(obj2), { "1": [], "2": [], "3": ["A"] });
console.log(removeDuplicateIds(obj3), {
    "11": ["P", "R", "S"],
    "53": ["C"],
    "236": ["L", "X", "G", "H"],
    "432": ["A", "B", "D"],
});