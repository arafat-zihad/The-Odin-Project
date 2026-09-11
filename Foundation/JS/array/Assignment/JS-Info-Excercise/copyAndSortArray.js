/*
- create function that take arr as a parameter
- sort arr
*/

let arr = ["HTML", "JavaScript", "CSS"];
let newArr = arr.slice();

function sorted(arr) {
  result = newArr.sort();
  return result;
}

console.log(sorted(arr));
console.log(arr);
