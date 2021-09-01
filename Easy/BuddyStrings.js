// Given two strings s and goal, return true if you can swap two letters in s so the
// result is equal to goal, otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0-indexed) such that
// i != j and swapping the characters at s[i] and s[j].
// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:
// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:
// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:
// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
// Example 4:
// Input: s = "aaaaaaabc", goal = "aaaaaaacb"
// Output: true

var buddyStrings = function(s, goal) {

};

console.log("ab", "ba") // true
console.log("ab", "ab") // false
