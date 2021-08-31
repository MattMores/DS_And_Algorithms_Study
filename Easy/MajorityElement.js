// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    const map = new Map()
    for(let n of nums){
        // console.log(map)
        if (map.has(n)) {
            map.set(n, map.get(n) + 1) // value of key we're passing it
        }
        else {
            map.set(n, 1)
        }
    }
    let highest = -Infinity
    let res
    for(let [key, value] of map){
        if (value > highest){
            highest = value
            res = key
        }
    }
    return res
};

// var majorityElement = function(nums) {
//     var obj = {};
//     for(var i = 0; i < nums.length; i++){
//         obj[nums[i]] = obj[nums[i]] + 1 || 1;
//         if(obj[nums[i]] > nums.length / 2)  return nums[i];
//     }

// };

// console.log(majorityElement(["A", "A", "B"])) // A
console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2
