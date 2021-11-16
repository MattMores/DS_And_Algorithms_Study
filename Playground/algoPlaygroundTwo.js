function isValidSubsequence(array, sequence){
    let arrIdx = 0;
    let seqIdx = 0;
    while(arrayIdx < array.length && seqIdx < sequence.length){
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++
    }
    return seqIdx === sequence.length;
}

function isValidSubsequence(array, sequence){
    let seqIdx = 0;
    for (const nums of array){
        if (seqIdx === sequence.length) break;
        if (sequence[seqIdx] === value) seqIdx++
    }
    return seqIdx === sequence.length;
}

function isValidSubsequence(array, sequence){
    let arrayIdx = 0;
    let seqIdx = 0;
    for (const nums of array){
        if (array[arrayIdx] === sequence[seqIdx]){
            arrayIdx++;
            seqIdx++
        }
        else arrayIdx++
    }
    return (seqIdx === sequence.length)
}

function sortedSquaredArray(array){
    let newArray = [];
    for (nums of array){
        newArray.push(Math.pow(nums, 2))
    }
    return newArray.sort((a, b) => a - b)
}

function sortedSquaredArray(array){
    const sortedSquares = new Array(array.length).fill(0);

    for (let i = 0; i < array.length; i++){
        const value = array[i];
        sortedSquares[i] = value * value;
    }

    sortedSquares.sort((a, b) => a - b)
    return sortedSquares
}

function sortedSquares(array){
    const sortedSquares = new Array(array.length).fill(0);
    let smallerValueIdx = 0;
    let largerValueIdx = array.length -1;

    for (let i = array.length -1; i >= 0; i--){
        const smallerValue = array[smallerValueIdx];
        const largerValue = array [largerValueIdx];

        if (Math.abs(smallerValue) > Math.abs(largerValue)){
            sortedSquares[i] = smallerValue * smallerValue;
            smallerValueIdx ++;
        } else {
            sortedSquares[i] = largerValue * largerValue;
            largerValueidx --;
        }
    }

    return sortedSquares; 
}
