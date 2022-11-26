//Given pairs of account names and email address, return all pairs whose account names end in "_". You must use the filter method.
let searchNames=logins=>logins.filter(array=>array[0].charAt(array[0].length-1)==='_')

console.log(searchNames([ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]), [ [ "bar_", "bar@bar.com" ] ])
