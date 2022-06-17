//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. 
//The second one contains a student's submitted answers. 
//Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer,
function checkExam(array1, array2) {
    let score = 0
    array1.forEach((element,index)=>{
    if (element==array2[index]){
            score+=4
        }else if (array2[index]==''){
            score+=0
        }else{
            score-=1
        }
    })
    if (score<0){
        return 0
    }else{
        return score
    }
}