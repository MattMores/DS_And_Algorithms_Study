// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// var longestCommonPrefix = function(strs) {
//     const map = new Map()
//     firstWord = strs[0]
//     for (let i = 0; i < firstWord.length; i++) {

//         map.set(firstLetter, 1)
//     }
//     for (let i = 0; i < strs.length; i++) {
//         words = strs[i]
//         for (let i = 0; i < words.length; i++) {
//             letter = words[i]
//             map.set(letter[0], 1)
//             if (!map.has(letter)) {
//                 map.set(letter, 1)
//             }
//             else {
//                 map.set(letter, map.get(letter) + 1)
//             }
//         }
//     }
//     let newWords = []
//     let count = 0
//     for (let [key, value] of map) {
//         if (value === strs.length) {
//             newWords.push(key)
//             count++
//         }
//     }
//     console.log(newWords)
// };

// var longestCommonPrefix = function(strs) {
//     if (strs === undefined || strs.length === 0) {
//         return "";
//     }
//     return strs.reduce((prev, next) => {
//         let i = 0;
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0, i);
//     })
// }

var longestCommonPrefix = function(strs){
    if(!strs.length) return '';
    for (let i = 0; i < strs[0].length; i++){
        for(let s of strs) {
            console.log(s)
            if(s[i] !== strs[0][i]) return s.slice(0, i);
        }
    }
    return strs[0]
}



console.log(longestCommonPrefix(["flower","flow","flight"])) // fl
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
