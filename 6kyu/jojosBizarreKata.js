// given a string, return true/false is name is valid Jojo. Valid names are:
// * both your firstname and your surname start with "Jo-"
// * your firstname starts with "Jo-" and your surname ends with "-Jo"
// * both your firstname and your surname start with "Gio-"

function isJojo(name){
    name=name.toLowerCase().split(' ')
    if (name.length<2) return false
    if (name[0].slice(0,2)=='jo' && name[name.length-1].slice(0,2)=='jo') return true
    if (name[0].slice(0,2)=='jo' && name[name.length-1].slice(-2)=='jo') return true
    if (name[0].slice(0,3)=='gio' && name[name.length-1].slice(0,3)=='gio') return true
    else return false
}

console.log(isJojo("Jonathan Joestar"), true)
console.log(isJojo("Dio Brando"), false)
console.log(isJojo("kars"), false)
console.log(isJojo("Giorno Giovanna"), true)