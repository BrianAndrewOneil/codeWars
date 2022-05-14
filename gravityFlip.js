//basically, if input is L, sort large->small, if input is R, sort small->large
const flip=(d, a)=> d=='L'?a.sort((a,b)=>(b-a)):a.sort((a,b)=>(a-b))