/*
- function with rest operator
*/

// function removeFromArray(arr, ...args){
//     const newArr = []

//     arr.forEach((i) => {
//         if(!args.includes(i)){
//             newArr.push(i);
//         }
//     });
//     return newArr;
// }

function removeFromArray(arr, ...args){
    return arr.filter((i) => !args.includes(i))
}

console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 4, 6, 8))

