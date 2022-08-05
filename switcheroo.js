//Given a string made up of letters a, b, and/or c, switch the position of letters a and b. 
//Leave any incidence of c untouched.
let switcheroo=x=>x.split('').map(e=>e=='a'?e='b':e=='b'?e='a':e=e).join('')