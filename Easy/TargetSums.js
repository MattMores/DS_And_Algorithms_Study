/* Given an array of numbers and target, return 2 indices
that add up to that target */

// function targetSum (nums, target){
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++){
//         let num = nums[i];
//         if (map.has(target - num)){
//             return [map.get(target - num), i]
//         }
//         else {
//             map.set(num, i)
//         }
//     }
// }

function targetSum (nums, target){
   let  array = []
    for (let i = 0; i < nums.length; i++) {
        num1 = nums[i]
        num2 = nums[i + 1]
        if (num1 + num2 === target) {
            array.push(nums.indexOf(num1))
            array.push(nums.indexOf(num2))
        }
    }
    return array;
}

console.log(targetSum([2, 7, 11, 15], 17)) // [0, 1]


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,3], target = 6
// Output: [0,1]
