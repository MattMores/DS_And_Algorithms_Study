let twoNumberSum = function (array, taretSum) {
    let map = new Map();
    for (const nums of array){
        const potentialMatch = targetSum - nums;
        if (map.has(potentialMatch)){
            return [potentialMatch, nums]
        } else {
            map.set(nums, true)
        }
    }
    return []
}
