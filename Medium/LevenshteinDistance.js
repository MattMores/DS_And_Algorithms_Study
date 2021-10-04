/* Write a function that takes in two string and returns the minimum
number of edit operations that need to be performed on the first
string to obtain the second string.

There are three edit operations: insert, delete, substitute

*/

function levenshteinDistance(str1, str2){
    let sorted1 = str1.split('').sort().join('')
    let sorted2 = str2.split('').sort().join('')
    let count = 0;
    if (sorted1.length < sorted2.length){
        for(let i = 0; i < sorted2.length; i++){
            if (sorted2[i] !== sorted1[i]) count++
        }
    }
    else if (sorted1.length >= sorted2.length){
        for(let i = 0; i< sorted1.length; i++){
            if(sorted1[i] !== sorted2[i]) count ++
        }
    }
    return count;d
}

function levenshteinDistance(str1, str2){
    const edits = [];
    for (let i = 0; i < str2.length + 1; i++){
        const row = [];
        for (j = 0; j < str1.length + 1; j++){
            row.push(j);
        }
        row[0] = i;
        edits.push(row);
    }
    for (let i = 1; i < str2.length + 1; i++){
        for (let j = 1; j < str1.length + 1; j++){
            if (str2[i - 1] === str1[j - 1]){
                edits[i][j] = edits[i -1][j - 1];
            } else {
                edits[i][j] = 1 + Math.min(edits[i -1][j - 1], edits[i -1][j], edits[i][j -1])
            }
        }
    }
    return edits[str2.length][str1.length]
}


console.log(levenshteinDistance("aac", "yabd"))
