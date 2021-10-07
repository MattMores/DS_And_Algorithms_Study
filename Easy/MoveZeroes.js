//given an array of intergers, move all 0s to end of array
//keep order of remaining numbers. return mutated array
//cannot use built in methods that take care of shifting

function moveZeroes (nums){
    let i = 0;
    let j = 0;
    const size = nums.length
    while (j < size){
        if (nums[j] !== 0) {
            swap(nums, i++, j);
        }
        else {
            j++
        }
    }
    return nums;
}

function swap(arr, element1, element2){
    let temp = arr[element1];
    arr[element1] = arr[element2];
    arr[element2] = temp
}

console.log(moveZeroes([0, 1, 0, 3, 12])) // [1, 3, 12, 0, 0]


// function selectionSort(array) {
//     let startIdx = 0;
//     while (startIdx < array.length -1) {
//         let smallestIdx = startIdx;
//         for (let i = startIdx + 1; i< array.length; i++){
//             if (array[smallestIdx] > array[i]) smallestIdx = i;
//         }
//         swap(startIdx, smallestIdx, array);
//         startIdx++;
//     }
//     return array;
// }

// function swap (i, j, array){
//     const temp = array[j];
//     array[j] = array[i];
//     array[i] = temp
// }
