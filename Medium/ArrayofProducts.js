/* Takes in a non-empty array of integers and returns an array of the same length
where each element in the output array is equal to the product of every
other number in the input array.

Solve this without division */

// function arrayOfProducts(array){
//     let newArray = [];
//     let map = new Map();
//     for(let nums of array){
//         map.set(nums, nums)
//         console.log(map)
//     }
//     for (let i = 0; i < array.length; i++){
//         let num = array[i];
//         map.delete(num);
//         for (const value of map.values()){
//             const reducer = (previousValue, currentValue) => previousValue * currentValue;
//             let push = value.reduce(reducer)
//             newArray.push(push)
//         }
//         map.set(num, num)
//     }
//     return newArray
// }

function arrayOfProducts(array){
    const products = [];
    for(let i = 0; i < array.length; i++){
        let runningProduct = 1;
        for (let j=0; j < array.length; j++){
            console.log(i)
            console.log(j)
            if (i !== j) {
                runningProduct = runningProduct * array[j];
            }
            products[i] = runningProduct;
        }
    }
    return products
}

function arrayOfProducts(array){
    const products = new Array(array.length).fill(1);
    const leftProducts = new Array(array.length).fill(1);
    const rightProducts = new Array(array.length).fill(1);

    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++){
        leftProducts[i] = leftRunningProduct;
        leftRunningProduct *= array[i];
    }
}

function arrayOfProducts(array){
    const products = [];
    for (let i = 0; i < array.length; i++){
        let runningProduct = 1;
        for (let j = 0; j < array.length; j++){
            if (i!== j){
                runningProduct *= array[j]
            }
            products[i] = runningProduct;
        }
    }
}

function arrayOfProducts(array){
    const products = new Array(array.length).fill(1);
    const leftProducts = new Array(array.length).fill(1);
    const rightProducts = new Array(array.length).fill(1);

    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++){
        leftProducts[i] = leftRunningProduct;
        leftRunningProduct *= array[i]
    }

    let rightRunningProduct = 1;
    for (let i = array.length -1; i > -1; i--){
        rightProducts[i] = rightRunningProduct;
        rightRunningProduct *= array[i];
    }
    for (let i = 0; i < array.length; i++){
        products[i] = leftProducts[i] * rightProducts[i]
    }
    return products;
}

console.log(arrayOfProducts([5, 1, 4, 2])) // [8, 40, 10, 20]
