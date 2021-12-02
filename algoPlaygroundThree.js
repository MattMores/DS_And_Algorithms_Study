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

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length -1;
    while (left < right){
        const currentSum = array[left] + array[right]
        if (currentSum === targetSum){
            return [array[left], array[right]]
        } else if (currentSum < targetSum){
            left ++
        } else if (currentSum > targetSum){
            right--;
        }
    }
    return [];
}

function isValidSubsequence(array, sequence){
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length){
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}

function isValidSubsequence(array, sequence) {
    let arrayIdx = 0;
    let sequenceIdx = 0;
    for (const nums of array) {
        if (array[arrayIdx] === sequence[sequenceIdx]){
            arrayIdx++
            sequenceIdx++
        }
        else arrayIdx++
    }
    return (sequenceIdx === sequence.length)
}
