/* Write a function that takes in a 2D array that can be square
shaped when n == m, and returns a 1D array of all the array
elements in spiral order. Which means it starts at the top
left corner of the 2D array, goes to the right and proceeds
in a spiral pattern all the way until all have been visited.
*/

function spiralTraverse(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push[...array[i]];
        for (let j = 0; j < arrays.length; j++){
            if (newArray.length === 0) newArray.push(arrays[0])
            console.log(newArray);
        }
    }
}

function spiralTraverse(array){
    const result = [];
    let startRow = 0, endRow = array.length -1;
    let startCol = 0, endCol = array[0].length -1;
        // [0][0], [0][1], [0][2], [0][3],
        // [1][3], [2][3], [3][3]
        // [3][2], [3][1], [3][0],
        // [2][0], [1][0]
    while (startRow <= endRow && startCol <= endCol){
        for (let col = startCol; col <= endCol; col++){
            result.push(array[startRow][col]); // [0][0]
        }
        for (let row = startRow + 1; row <= endRow; row++){
            result.push(array[row][endCol]); // [1][3]
        }
        for (let col = endCol -1; col >= startCol; col--){
            if (startRow === endRow) break;
            result.push(array[endRow][col])
        }
        for (let row = endRow -1; row > startRow; row--){
            if (startCol === endCol) break;
            result.push(array[row][startCol]);
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return result;
}

function spiralTraverse(array){
    let answer = [];
    let rowStart = 0, rowEnd = array.length - 1;
    let columnStart = 0, columnEnd = array[0].length -1;

    while (rowStart <= rowEnd && columnStart <= columnEnd){
        for (let col = columnStart; col < columnEnd; col ++){
            answer.push(array[rowStart][col])
        }
        for (let row = rowStart; row < rowEnd; row ++){
            answer.push([row][columnEnd])
        }
        for (let col = )
    }

    return answer;
}
// [0][0], [0][1], [0][2], [0][3],
// [1][3], [2][3], [3][3]
// [3][2], [3][1], [3][0],
// [2][0], [1][0]

function spiralTravers(array){
    const answer = [];
    let startRow = 0, endRow = array.length - 1;
    let startCol = 0, endCol = array[0].length -1;

    while(startRow <= endRow && startCol <= endCol){
        for (let col = startCol; col <= endCol; col++){
            answer.push(array[startRow][col])
        }
        for (let row = startRow + 1; row <= endRow; row++){
            answer.push(array[row][endCol])
        }
        for (let col = endCol -1; col >= startCol; col--){
            answer.push(array[endRow][col])
        }
        for (let row = endRow - 1; row > startRow; row--){
            result.push(array[row][startCol])
        }
    }

    return answer;
}

function spiralTraverse(array){
    const answer = [];
    let startRow = 0, endRow = array.length -1;
    let startCol = 0, endCol = array[0].length -1;

    while (startRow <= endRow && startCol <= endCol){
        for (let col = startCol; col <= endCol; col++){
            answer.push(array[startRow],[col]);
        }
        for (let row = startRow +1; row <= endRow; row++){
            answer.push(array[row][endCol])
        }
        for (let col = endCol -1; col >= startCol; col --){
            if (startRow === endRow) break;
            answer.push(array[endRow][col])
        }
        for (let row = endRow -1; row > startRow; row--){
            answer.push(array[row][startCol])
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return result
}

console.log(spiralTraverse([
    [1, 2, 3, 5],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
]))

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
