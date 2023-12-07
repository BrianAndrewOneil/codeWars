//Given a word with a doubled letter, like 'tt' in lettuce, find the doubled letter's 
//position of the given word in the alphabet and multiply this number per 3. 

function passTheDoorMan (word){
    ans=word.split('').filter( (l,i,a)=>l===a[i+1]).join('')
    return (ans.charCodeAt(0)-96)*3
}


console.log( passTheDoorMan("lettuce") , 60);
console.log( passTheDoorMan("hill"), 36);
console.log( passTheDoorMan("apple"), 48);