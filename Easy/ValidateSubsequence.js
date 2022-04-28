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
    if (array[arrayIdx] === sequence[sequenceIdx]) {
      arrayIdx++;
      sequenceIdx++;
    } else arrayIdx++;
  }
  return sequenceIdx === sequence.length;
}

// console.log(isValidSubsequence([1, 2, 3, 4], [1, 3, 4])) // true
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true

function validateSub(array, sequence) {
  let testArray = [];
  let pointer1 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[pointer1]) {
      testArray.push(sequence[pointer1]);
      pointer1++;
    } else {
      pointer1++;
    }
  }
  return sequence.length === pointer1;
}

function validateSub(array, sequence) {
  let arrayPointer = 0;
  let sequencePointer = 0;
  for (nums of array) {
  }
}

function isValidSubsequence(array, sequence) {
  const pointer1 = 0;
  const pointer2 = 0;
  const counter = 0;

  for (nums in array) {
    if (array[pointer1] === sequence[pointer2]) {
      pointer1++;
      pointer2++;
      counter++;
    } else {
      pointer1++;
    }
  }
  return sequence.length === counter;
}



// Two arrays --> is second subsequence of first?
