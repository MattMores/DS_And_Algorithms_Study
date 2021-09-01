// Given an integer array nums, find three numbers whose product is maximum
// and return the maximum product.
// Example 1:
// Input: nums = [1,2,3]
// Output: 6
// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

var maximumProduct = function(nums) {
    nums  = nums.sort((a, b) => a - b)
    let max1 = nums[0] * nums[1] * nums[nums.length - 1]
    let max2 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]

    return Math.max(max1, max2)
};

console.log(maximumProduct([1,2,3])) // 6
console.log(maximumProduct([1,2,3,4])) // 24
console.log(maximumProduct([-1,-2,-3])) // -6
console.log(maximumProduct([-100,-98,-45,-12, 99, 105, 110])) // 39200

// var maximumProduct = function(nums) {
//     let negatives = []
//     let positives = []
//     let res = []
//     let negCount = 0

//     for(let n of nums) {
//         if (n >= 0) {
//             positives.push(n)
//         } else {
//             negatives.push(n)
//         }
//     }
//     negatives = negatives.sort((a, b) => a - b)
//     positives = positives.sort((a, b) => a - b)
//     count1 = 0
//     count2 = 0
//     if (negatives % 2 !== 0) {
//         count1 = Math.abs(negatives[negatives.length -1]) *
//     }
//     return
// };
