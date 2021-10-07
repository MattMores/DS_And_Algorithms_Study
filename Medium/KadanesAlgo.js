function kadanesAlgorithm(array){
    let runningSum = array[0]; // 4
    let currentSum = array[0]; // 8
    for (let i = 1; i < array.length; i++){
        const num = array[i];
        runningSum = Math.max(num, runningSum + num); //
        currentSum = Math.max(currentSum, runningSum) //
    }
    return currentSum;
}

console.log(kadanesAlgorithm([3, 5, -9, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))
