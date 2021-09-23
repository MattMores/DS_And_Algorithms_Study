/* Non-empty array of distinct integers, and an interger representing target
sum. Return all triplets in the array that sum up to the target sum
and return a two dimentional array of all triplets.

Number in each triplet should be ordered in ascending order, and triplets
themselves should be ordered in ascending order w/ respect to the numbers
they hold.

If no three number sum up to the target sum, function should return empty
array */

function threeNumberSum(array, targetSum){
    array.sort((a, b) => a - b);
    let leftPointer = 1;
    let rightPointer = array.length -1;
    let array1 = [];
    let array2 = [];
    let array3 = [];
    for (let i = 0; i < array.length; i++){
        let number = array[i]
        while(left < right) {
            if (number + array[leftPointer] + array[rightPointer] === targetSum) {
                if (array1.length === 0) array1.push(number, array[leftPointer], array[rightPointer])
                else if (array2.length === 0) array1.push(number, array[leftPointer], array[rightPointer])
                else if (array3.length === 0)
            }
            else if (number + array[leftPointer] + array[rightPointer] < targetSum) {
                leftPointer ++
            }
            else if (number + array[leftPointer] + array[rightPointer] < targetSum) {
                rightPointer ++
            }
        }
    }
    return [array1, array2, array3]
}

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length -1;
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left ++;
                right --;
            } else if (currentSum < targetSum) {
                left ++;
            } else if (currentSum > targetSum){
                right --;
            }
        }
    }
    return triplets;
}

console.log([12, 3, 1, 2, -6, 5, -8, 6], 0) // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
