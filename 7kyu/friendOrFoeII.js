//Given a list of names, return those that are 4 letters long.

const friends = names => names.filter(name=>name.length==4)

console.log(friends(['abcd', 'abe', '1234', 'jkjlkjkljl']))