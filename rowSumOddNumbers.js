function rowSumOddNumbers(n) {
    //Given the triangle of consecutive odd numbers. 
    //Calculate the sum of the numbers in the nth row of this triangle 
    //(starting at index 1) e.g.: (Input --> Output), 1-->1; 2 --> 3 + 5 = 8
    let num1=n*(n-1)+1
    let sum=num1
    for (let i=1; i<n; i++){
    num1+=2
    sum+=num1
    }
    return sum
  }