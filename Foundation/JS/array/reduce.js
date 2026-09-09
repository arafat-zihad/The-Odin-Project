const arr = [1, 2, 3, 4, 5]
const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1)

// console.log(productOfAllNums)

function sumOfTripleEvens(array){
    return arr.filter((num) => num % 2 === 0).map((num) => num * 3).reduce((acc, curr) => acc + curr);
}
console.log(sumOfTripleEvens())