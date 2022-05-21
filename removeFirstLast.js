//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces. If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value       const a = arr.split(',');

const array = str => {
    var arr = str.split(",");
    return arr.length > 2 ? arr.slice(1,-1).join(" ") : null;
}