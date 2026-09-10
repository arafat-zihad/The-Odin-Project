/*
- function declaration
- declare new array
- use filter
- return new arr
*/

let arr = [5, 3, 8, 1]

function filterRange(arr, a, b){
    filteredArr = arr.filter((n) => (n >= a && n <= b))
    return filteredArr;
}

console.log(filterRange(arr, 1, 4));
console.log(arr)