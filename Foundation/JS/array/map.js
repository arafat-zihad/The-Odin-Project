// V1 - without map
arr = [1, 2, 3, 4, 5]

function sumOfTripleEvens(array)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            const tripleEvenNo = arr[i] * 3;
            sum += tripleEvenNo;
        }
    }
    return sum;
}
// console.log(sumOfTripleEvens())


//  map()

// function addOne(num){
//     return num + 1;
// }
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr)


