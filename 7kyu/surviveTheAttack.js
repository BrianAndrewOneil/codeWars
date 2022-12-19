//Given two Arrays (attackers and defenders) in which values are the power of each soldier, return true if you survive the attack or false if you perish.
function hasSurvived(attackers, defenders){
  let final=0
  defenders.map((e,i,a)=>e>attackers[i]&&e!=null||attackers[i]==null?final++:attackers[i]>e?final--:e)
  if (final==0) {
    return defenders.reduce((a,acc)=>a+acc,0)>=attackers.reduce((a,acc)=>a+acc,0)
  }
  return final>0
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
console.log(hasSurvived([], [1, 2, 3]), true);
console.log(hasSurvived([1, 2, 3], []), false);
console.log(hasSurvived([81,34,80,8,88,54,38,94,98,4],[55,79,35,73,88,73,76,11,8,9]), true)
console.log(hasSurvived(
    [40,87,25,56,83,8,69,19,45,97],
    [70,18,23,56,22,99,39,66,82,97]), 
    true)