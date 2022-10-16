//Given an array of pairs of ints that represent folks getting on and off a bus at each stop,
//return the num of folks left on the bus after the last stop.
let number=arr=>arr.reduce( (acc,c,i)=> acc+c[0]-c[1],0 )