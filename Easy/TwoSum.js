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

var twoSum = function(nums, target) {
    let map = new Map();
    // {2 => 0}

    for(let i = 0; i < nums.length; i ++) {
        num = nums[i];
        if(map.has(target - num)) {
            return [map.get(target - num), i];
        } else {
            map.set(num, i);
        }
    }
	return [];
};

console.log(twoSum([2,7,11,15], 9)) // [0,1]

var twoSum = function(nums, target) {
    for(var i = 0; i< nums.length; i++){
		// work out the complement
		// eg. nums[i] === 3, target === 7, the complement will be 4
        var complement = target - nums[i];

		// Iterate the rest of the number and check if the complement of nums[i] exists
		// This part takes a lot of time
        var found = nums.indexOf(complement, i + 1);
        if(found !== -1){
            return [i, found];
        }
    }
    return [0, 0];
};

var twoSum = function(nums, target) {
    var ret = [];
    var exist = {};
    for(var i = 0; i < nums.length; i++){
        if(typeof(exist[target - nums[i]]) !== 'undefined'){
            ret.push(exist[target - nums[i]]);
            ret.push(i + 1);
        }

        exist[nums[i]] = i + 1;
    }

    return ret
};
