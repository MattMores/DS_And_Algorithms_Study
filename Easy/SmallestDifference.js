/* Takes in two non-empty arrays and finds the pair of numbers
(one from each array) whose absolute difference is closest to zero
and returns an array containing these two numbers, with the number
from the first array in the first position.

Absolute difference of -5 and 5 is 10. -5 and -4 is 1 */


function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let idxOne = 0;
    let idxTwo = 0;
    let current = Infinity;
    let smallest = Infinity;
    let smallestPair = [];
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length){
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];
        if (firstNum < secondNum){
            current = secondNumber - firstNum;
            idxOne++;
        } else if (secondNumb < firstNum){
            current = firstNum - secondNum;
            indxTwo++
        } else {
            return [firstNum, secondNum];
        } if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        }
    }
    return smallestPair;
}

console.log([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]) // [28, 26]
