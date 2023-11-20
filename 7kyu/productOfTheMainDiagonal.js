//Given a list of rows of a square matrix, find the product of the main diagonal.
function mainDiagonalProduct(mat){
    let ans = 1
    mat.forEach( (c,i,a) => {
        ans = ans * c[i]
    })
    return ans
}

const arr1 = [[1,0],[0,1]];
console.log(mainDiagonalProduct(arr1), 1);
  
const arr2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(mainDiagonalProduct(arr2), 45);