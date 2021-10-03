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

console.log(levenshteinDistance("aac", "yabd"))
