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
    //the line below creates a new object with keys defined by the array sPairs, and the values will be empty arrays
    let ans1 = sPairs.reduce((acc,curr)=> (acc[curr]=[],acc),{});
    let ans2 = sPairs.reduce((acc,curr)=> (acc[curr]=[],acc),{});

    //solution #1, for each course loop thru each pair and check if both students in the pair took the course
    for (course of courses){
        for (pair of sPairs){
            if(data[pair[0]].includes(course)&&data[pair[1]].includes(course)){
                ans1[pair].push(course)
            }
        }
    }
    //solution #2, populate ans with courses from both students from the original obj, then reduce
    for (pair of sPairs){
        ans2[pair].push(data[pair[0]])
        ans2[pair].push(data[pair[1]])
    }
    return ([ans1,ans2])
}


let cohort = {
    'student1': [101,102,202,204],
    'student2': [102,111,303],
    'student3': [101,111,204,303,332],
    'student4': [102,111,204,303,331],
    'student5': [331,332]
}

console.log(pairly(cohort))