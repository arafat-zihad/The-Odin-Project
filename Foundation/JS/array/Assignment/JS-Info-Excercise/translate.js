/*
- write function declaration with str paparmetere
- split by desh
- use map to make each character upper
- join()
- make first char lower
*/

function camelize(str){
    return str.split("-")
    .map((word, index) => index === 0? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}

console.log(camelize("webkit-transition"))