//Subtracts one list from another and return the result.
//Remove all values from list a, which are present in list b keeping their order.
let arrayDiff = (a,b) => a.filter(num=>!(b.includes(num)))