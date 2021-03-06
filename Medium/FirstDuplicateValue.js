/* Given an array of integers between 1 and n, inclusive, where n is the
length of the array - return the first integer that appears more than once
(read from left to right).

Of the integers that occure more than once, return the one whose first
duplicate value has the minimum index.

If no integer appears more than once, your funciton should return -1.
*/

// function firstDuplicateValue(array){
//     let map = new Map();
//     for(nums of array){
//         if (!map.has(nums)) map.set(nums, true)
//         else if (map.has(nums)) return nums
//     }
//     return -1
// }

function firstDuplicateValue(array){
    let minimumSecondIndex = array.length;
    for (let i = 0; i < array.length; i++){
        const value = array[i];
        for (let j = i + 1; j < array.length; j++){
            const valueToCompare = array[j]
            console.log (value, valueToCompare)
            if (value === valueToCompare){
                minimumSecondIndex = Math.min(minimumSecondIndex, j);
            }
        }
    }
    if (minimumSecondIndex === array.length) return -1;
    return array[minimumSecondIndex]
}

function firstDuplicateValue(array){
    for (const value of array){
        const absValue = Math.abs(value);
        if(array[absValue -1] < 0) return absValue;
        array[absValue -1] *= -1;
    }
    return -1
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])) // 2
