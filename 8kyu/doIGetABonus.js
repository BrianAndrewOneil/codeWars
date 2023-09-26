//Given salary and boolean bonus, return salary*10 or just salary
const bonusTime = (s,b) => b ? '£'+s*10 : '£'+s

console.log(bonusTime(10000, true), '£100000');
console.log(bonusTime(25000, true), '£250000');
console.log(bonusTime(10000, false), '£10000');
console.log(bonusTime(60000, false), '£60000');