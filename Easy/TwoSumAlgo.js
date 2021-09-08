/* Non-Empty array of integers, and a target sum. If any two numbers
in the input array sum to the target sum, the function should return them
in an array, in any order. If not return an empty array. Two numbers
MUST be added to eachother. Will be at most one pair of numbers summing
up to the target */

function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)) // [-1,11]
