//Given an array/list of integers, find the Nth smallest element in the array.
const nthSmallest=(arr, pos)=>arr.sort((a,b)=>a-b)[pos-1]