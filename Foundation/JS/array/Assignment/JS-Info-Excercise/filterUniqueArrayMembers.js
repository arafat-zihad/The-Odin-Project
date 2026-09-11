/*
- for each item we'll check if the resulting arr already as that item
- if it so, then ignor, otherwise add to result
*/

let strings = ["Dakdum", "Bakdum", "Chingalala", "Dakdum", "Tringalala", "Bakdum", "Dakdum", "Bakdum"]
function unque(arr){
    let result = [];
    for(let i of arr){
        if(!result.includes(i)){
            result.push(i);
        }
    }
    return result;
}

console.log(unque(strings))