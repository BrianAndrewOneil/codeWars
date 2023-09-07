//Given an exam score and n of projects, calculate a final grade where:
//100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//0, in other cases

function finalGrade (e, p) {
    if (e>90 || p>10) return 100
    else if (e>75 && p>=5) return 90
    else if (e>50 && p>=2) return 75
    return 0
}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);