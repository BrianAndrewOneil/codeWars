// Like, Dislike, Nothing come from Preloaded
// Given a list of button inputs, return the final state. 

function likeOrDislike(buttons) {
    let ans='Nothing'
    console.log(buttons)
    for (var word of buttons){
      if (word!=ans) ans=word
      else ans='Nothing'
    }
    return ans
  }