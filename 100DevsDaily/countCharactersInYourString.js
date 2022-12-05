function count (string) {  
    class letter{
        constructor(name){
            this.name = name
            this.value = 1
        }
    }
    let ans={}
    for (l of string){
        if (ans.includes(l)) l.value+=1
        else {let l=new letter('l')}
    }
    return ans;
}

console.log(count("aba"), { a: 2, b: 1 })
console.log(count(""), {})