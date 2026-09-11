/*
write a fucntion that take input 1 sting and 1 number
use loop
if number is neg, return ERROR
*/

function repeatString(str, no) {
  if (no < 0) {
    return "Error";
  }
  result = "";
  for (let i = 0; i < no; i++) {
    result += str;
  }
  return result
}
console.log(repeatString("hey", 2));
