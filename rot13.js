//Takes a string and returns the string ciphered with Rot13. 
//If there are numbers or special characters included in the string, they should be returned as they are. 
//Only letters from the latin/english alphabet should be shifted. 
function rot13(message){
    return message
    .split('')
    .map(e=>e.charCodeAt(0))
    .map(e=>e>64&&e<78?e+13:e>77&&e<91?(64+13-(90-e)):e)
    .map(e=>e>96&&e<110?e+13:e>109&&e<123?(96+13-(122-e)):e)
    .map(e=>String.fromCharCode(e))
    .join('')
  }