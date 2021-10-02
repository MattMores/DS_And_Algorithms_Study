/* Write a function that takes in an array of positive integers and returns
the maximum sum of non-adjacent elements in the array. If the input is empty
the function should return 0 */

function maxSubsetSumNoAdjacent(array){
    if (!array.length) return 0;
    if (array.length === 1) return array[0];
    const maxSums = array.slice();
    maxSums[1] = Math.max(array[0], array[1]);
    for (let i = 2; i < array.length; i++){
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
        console.log(maxSums)
    }
    return maxSums[maxSums.length -1];
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))

// 330 (75+120+135)
