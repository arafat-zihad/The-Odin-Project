/*
- declare function, parameter arr, a, b
- original array will change
- use pop() if arr[i] <= a && arr[i] => b;
- show output
*/
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];
        if(value < a || value > b){
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr)
}
filterRangeInPlace(arr, 1, 4)