//Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//What if the string is empty? Then the result should be empty object literal, {}.

function count (str) {  
    //create empty object
    //loop thru string. If letter isn't in obj, add it with value of 1
    //If letter is in obj, update value by 1.
    let countObj ={}
    for (const c of str){
        if(countObj[c]){
            countObj[c]+=1
        }else{
            countObj[c]=1
        }
    }
    return countObj
}

console.log(count("aba"), { a: 2, b: 1 })
console.log(count("abba"), { a: 2, b: 2 })
console.log(count(""), {})