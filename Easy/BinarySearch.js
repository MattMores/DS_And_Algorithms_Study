/* Write a funciton that takes a sorted array of integers and a target,
and uses the Binary Search algorithm to determine if the target integer is
contained in the array and should return its index if it is, otherwise -1
*/


function binarySearch(array, target){
    let target = array[0];
    let counter = 0;
    for (let number of array) {
        if (number === target) return counter
        if (number > target)
    }
}

function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length -1)
}

function binarySearchHelper(array, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch){
        return middle;
    } else if (target < potentialMatch) {
        return binarySearchHelper(array, target, left, middle -1);
    } else {
        return binarySearchHelper(array, target, middle + 1, right);
    }
}

function binarySearch(array, target){
    return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
    while (left <= right) {
        const middle = Math.floor((left + right)/ 2)
        const potentialMatch = array [middle];
        if (target === potentialMatch){
            return middle;
        } else if (target < potentialMatch) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

function binarySearch(array, target){
    return binarySearchHelper(array, target, 0, array.length -1)
}

function binarySearchHelper(array, target, left, right){
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle];
    if (target === potentialMatch) return middle;
    else if (target < potentialMatch){
        return binarySearchHelper(array, target, left, middle - 1)
    } else {
        return binarySearchHelper(array, target, middle + 1, right)
    }
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73]), 33) // 3
