//Given two non-empty arrays of integers, write a function that
//determines whether the second array is a subsequence of the first.
//Meaning they're in the same order, but aren't adjacent.

// function isValidSubsequence(array, sequence) {
//     let testArray = [];
//     for (nums of array) {
//         if (sequence.includes(nums)) {
//             testArray.push(nums)
//         }
//     }
//     console.log(testArray)
//     let testAgain = []
//     for (let i =0; i < testArray.length; i++) {
//         number = testArray[i]
//         if (number === sequence[i]) testAgain.push(number);
//     }
//     if (testAgain.length === sequence.length) return true
//     else return false
//   }

// function isValidSubsequence(array, sequence){
//     let arrIdx = 0;
//     let seqIdx = 0;
//     while (arrIdx < array.length && seqIdx < sequence.length) {
//         if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
//         arrIdx++;
//     }
//     return seqIdx == sequence.length;
// }

function isValidSubsequence(array, sequence) {
    arrayIdx = 0;
    sequenceIdx = 0;
    for (const nums of array) {
        if (array[arrayIdx] === sequence[sequenceIdx]){
            arrayIdx++
            sequenceIdx++
        }
        else arrayIdx++
    }
    return (sequenceIdx === sequence.length)
}


console.log(isValidSubsequence([1, 2, 3, 4], [1, 3, 4])) // true
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true


function tbd (whatever){
    let array = []
    let absolute = Math.abs(whatever);
    let power = Math.pow(absolute, 2)
    array.push(power)
    return array
}
