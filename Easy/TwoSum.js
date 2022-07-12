// Given an array of integers nums and an integer target, return
// indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    array = [];
    num1 = nums[i];
    num2 = nums[i + 1];
    if (num1 + num2 === target) {
      array.push(nums.indexOf(num1));
      array.push(nums.indexOf(num2));
    }
  }
};

// console.log(twoSum([2,7,11,15], 9)) // [0,1]

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};
function twoNumSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    for (let j = 0; j < array.length; j++) {
      let secondNumber = array[j];
      if (number + secondNumber === targetSum) {
        return [number, secondNumber];
      }
    }
  }
  return [];
}

function twoNumSum(array, targetSum) {
  let map = new Map();
  for (nums of array) {
    if (!map.has(targetSum - nums)) {
      map.set(nums, true);
    } else {
      return [nums, map.get(targetSum - nums)];
    }
  }
  return [];
}

function twoNumberSum(array, targetSum) {
  let map = new Map();
  for (nums of array) {
    let potentialMatch = targetSum - nums;
    if (map.has(potentialMatch)) {
      return [potentialMatch, nums];
    } else {
      map.set(nums, true);
    }
  }
  return [THIS];
}

let twoNumberSum = function (array, targetSum) {
  let map = new Map();
  for (nums of array) {
    let potentialMatch = targetSum - nums;
    if (map.has(potentialMatch)) {
      return [potentialMatch, nums];
    } else {
      map.set(nums, false);
    }
  }
};
