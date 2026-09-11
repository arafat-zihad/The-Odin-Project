/*
- declare a function that take input
- use sort function
- use Math.random() - 0.5
*/
let arr = [1, 2, 3]

function suffle(arr){
    arr.sort(() => Math.random() - 0.5)
}
suffle(arr);
console.log(arr)

