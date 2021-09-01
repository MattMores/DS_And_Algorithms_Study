// Given an integer array nums sorted in non-decreasing order, return an array of the
// squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function(nums) {
    let squaredSquares = []
    for (let i = 0; i < nums.length; i++){
        num = nums[i]
        num = Math.pow(num, 2)
            squaredSquares.push(num)
    }
    return squaredSquares.sort((a, b) => a - b)
};

// var sortedSquares = function(nums) {
//     let squaredSquares = [];
//     let left = 0 // -4
//     let right = nums.length - 1 // 10
//     let pointer = right
//     while (left <= right){
//         if (nums[left]**2 > nums[right]**2) {
//             squaredSquares[pointer--] = nums[left++]**2
//         }
//         else {
//             squaredSquares[pointer--] = nums[right--]**2
//         }
//     }
//     return squaredSquares
// }

console.log(sortedSquares([-4,-1,0,3,10])) //[0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) //[4,9,9,49,121]
