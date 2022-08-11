//Passed three numeric grades, return the final grade
let getGrade=(s1,s2,s3)=>((s1+s2+s3)/3)<60?'F':((s1+s2+s3)/3)<70?'D':((s1+s2+s3)/3)<80?'C':((s1+s2+s3)/3)<90?'B':'A'