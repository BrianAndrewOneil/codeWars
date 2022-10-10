//Given two version #s of software (e.g., 10.2.4; 4.2.3.4) return true if V1 is equal to 
//or greater than V2. If V2 is greater, return false.
function compareVersions(v1,v2){
    v1=v1.split('.').map(n=>Number(n))
    v2=v2.split('.').map(n=>Number(n))
    while (v1.length>v2.length) v2.push('0')
    while (v2.length>v1.length) v1.push('0')
    for (var i=0;i<v1.length;i++){
      if (v1[i]>v2[i]) return true
      if (v1[i]<v2[i]) return false
    }
    return true
  }
