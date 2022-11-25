function solution(input, markers) {
    let ans=input.split('\n')
    let end=''
    for (var marker of markers){
        ans=ans.map(w=>{
            if (w.includes(marker)){
                end=w.indexOf(marker)
                w=w.slice(0,end)
            } 
            return w.trim()
        })
    }
    return ans.join('\n')
};

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["!", "#"]), "apples, pears\ngrapes\nbananas")