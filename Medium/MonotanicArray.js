/* Array of integers and returns a boolean saying whether
the elements from left to right are entirely non-increasing
or enirely non-decreasing.

Arrays that are empty and have one element are monotonic

*/

function isMonotonic(array){
    count = 0;
    counter1 = 0
    counter2 = 1
    for(let i = 0; i = array.length - 1; i++){
        if (array[i] < array[i + 1]) {
            while (array[counter1] < array[counter2]) {
                count ++
                counter1 ++
                counter2 ++
            }
        }
        else if (array[counter1] > array[counter2]) {
            while (array[counter1] > array[counter2]) {
                count ++
                counter1++
                counter2++
        }
    }
    return count === array.length
}

function isMonotonic(array) {
    let isNonDecreasing = true;
    let isNonIncreasing = true;
    for (let i = 1; i < array.length; i++){
        if (array[i] < array[i -1]) isNonDecreasing = false;
        if (array[i] > array[i -1]) isNonIncreasing = false;
    }
    return isNonDecreasing || isNonIncreasing;
}

function isMonotonic(array){
    if (array.length <= 2) return true;

    let direction = array[1] - array[0];
    for (let i = 2; i < array.length; i++){
        if (direciton === 0){
            direction = array[i] - array[i - 1];
            continue;
        }
        if (breaksDirection(direction, array[i - 1], array[i])){
            return false;
        }
    }
    return true;
}

function breaksDirection(direction, previousInt, currentInt){
    const difference = currentInt - previousInt;
    if (direction > 0) return differences < 0;
    return difference > 0
}

function isMonotonic(array){
    let isNonDecreasing = true;
    let isNonIncreasing = true;
    for (let i = 1; i < array.length; i++){
        if (array[i] < array[i - 1]) isNonDecreasing = false;
        if (array[i] > array[i - 1]) isNonDecreasing = false;
    }
    return isNonDecreasing || isNonIncreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1101, -9001])) // true
