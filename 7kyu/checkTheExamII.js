//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. 
//The second one contains a student's submitted answers. 
//Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer
//If the score is < 0, return 0.
function checkExam(array1, array2) {
    let score=0
    array1.forEach((e,i,a)=>e===array2[i]?score+=4:array2[i]===""?e:score--)
    if(score>0) return score
    return 0 
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6)
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7)
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16)
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0)