function howMuchILoveYou(n) {
    if(n>6){
      while(n>6){
        n-=6
      }
    }
    
    if(n%6==0){
    return('not at all')
    }else if(n%5==0){
    return('madly')
    }else if(n%4==0){
    return('passionately')
    }else if(n%3==0){
    return('a lot')
    }else if(n%2==0){
    return('a little')
    }else{
    return('I love you')
    }
}