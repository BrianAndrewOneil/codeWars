//Given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    let ans = numbers.split(' ').sort((a, b) => a - b)
    return `${ans[ans.length-1]} ${ans[0]}`
  }
