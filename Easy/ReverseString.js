// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// var reverseString = function(s) {
//     return s.reverse();
// };

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right){
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    return s
};

console.log(reverseString(["h","e","l","l","o"])) // ["o","l","l","e","h"]
