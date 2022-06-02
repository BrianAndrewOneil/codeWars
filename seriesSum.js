function SeriesSum(n){
    //Your task is to write a function which returns the sum of following series upto nth term(parameter).
    //Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
    let ans=0
    let numerator=1
    for(let i=0;i<n;i++){
      ans+=1/numerator
      numerator+=3
    }
    return ans.toFixed(2).toString()
  }