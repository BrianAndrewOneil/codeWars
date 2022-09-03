//Split a string into pairs of two characters. If the string contains an odd number of characters
//then it should replace the missing second character of the final pair with an underscore.
function solution(str){
    if (str.length%2!=0) str=str+'_'
    return str.split('').map((e,i,a)=>i%2==0?e=e+a[i+1]:e).filter((e,i)=>i%2==0)
 }