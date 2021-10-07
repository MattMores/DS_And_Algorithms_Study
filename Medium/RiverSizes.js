/* Given a two dimensional array (a matrix) of potentially unequal height
and width containging only 0s and 1s (with 0s representing land and 1
representing a river) return an array of the sizes of all the rivers.

Size = up or down. Left or right. Cannot be diagonal.

*/

function riverSizes(matrix){
    const sizes = [];
    const visited = matrix.map(row => row.map(value => false));
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix.length; j++){
            if (visited[i][j]) continue;
            traverseNode(i, j, matrix, visited, sizes);
}
    }
    return sizes;
}

function traverseNode(i, j, matrix, visited, sizes){
    let currentRiverSize = 0;
    const nodesToExplore = [[i, j]];
    while (nodesToExplore.length){
        const currentNode = nodesToExplore.pop();
        i = currentNode[0];
        j = currentNode[1];
        if (visited[i][j]) continue;
        visited[i][j] = true;
        if (matrix[i][j] === 0) continue;
        currentRiverSize++;
        const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
        for (const neighbor of unvisitedNeighbors){
            nodesToExplore.push(neighbor);
        }
    }
    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited){
    const unvisitedNeighbors = [];
    if (i > 0 && !visited[i -1][j]) unvisitedNeighbors.push([i - 1, j]);
    if (i < matrix.length -1 && !visited[i +1][j]) unvisitedNeighbors.push([i + 1, j]);
    if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j -1]);
    if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
    return unvisitedNeighbors;
}

riverSizes(matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
])

// 1, 2, 2, 2, 5
