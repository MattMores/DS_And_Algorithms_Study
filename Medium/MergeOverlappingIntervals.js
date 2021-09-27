/* Non-empty array of intervals, merges any overalpping
intervals, and returns the new intervals in no paricular order.

There is a start and end to each interval. Which is an array
with two numbers in it.

[1, 5] aren't overlapping with [6, 7] but [1, 6] are overlapping
with [6, 7]. Start of any particular interval will always
be less than or equal to the end of that interval.


*/

function mergeOverlappingIntervals(array){
    array.sort((a, b) => a[0] - b[0])
    let mergedArray = [];
    for (let i = 0; i < array.length - 2; i ++){
        let firstArray = array[i];
        let secondArray = array[i + 1];
        if (firstArray[1] < secondArray[0]) mergedArray.push(firstArray);
        else if (firstArray[1] >= secondArray[0]) {
            secondArray = firstArray[0], secondArray[1]
        }
        console.log(mergedArray)
    }
}

let mergeOverLappingIntervals = function(intervals){
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currentInterval = sortedIntervals[0]; // [3 , 5]
    mergedIntervals.push(currentInterval);

    for (const nextInterval of sortedIntervals){
        const [_, currentIntervalEnd] = currentInterval;
        const [nextIntervalStart, nextIntervalEnd] = nextInterval;

        if (currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
        else {
            currentInterval = nextInterval;
            mergedIntervals.push(currentInterval);
        }
        return mergedIntervals
    }
}

console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]))

// [[1, 2], [3, 8], [9, 10]]
