//Given an object of students and courses they've taken, return a list of all possible pairs of students 
//and the courses they have in common.

function pairly(data){
    let courseList = Object.values(data).flat()
    let courses = new Set(courseList)
    let students = Object.keys(data)
    let sPairs = []
    for (let i=0;i<students.length;i++){
        for (let h=i+1;h<students.length;h++){
            sPairs.push([students[i],students[h]])
        }
    }
    //the below creates an object with keys defined by the array
    const ans = sPairs.reduce((acc,curr)=> (acc[curr]='',acc),{});
    // console.log(ans)
    for (course of courses){
        console.log(data[students[0]].includes(course))
    }
}

let cohort = {
    'student1': [101,102,202,204],
    'student2': [102,111,303],
    'student3': [101,111,204,303,332],
    'student4': [102,111,204,303,331],
    'student5': [331,332]
}

console.log(pairly(cohort))