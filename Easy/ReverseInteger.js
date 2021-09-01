// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range
// then return 0. Assume the environment does not allow you to store
// 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321
// Example 2:
// Input: x = -123
// Output: -321
// Example 3:
// Input: x = 120
// Output: 21
// Example 4:
// Input: x = 0
// Output: 0

// if (n > [Math.pow (-2, 31)] || [Math.pow (2, 31) - 1]) return 0

var reverse = function(x) {
    const reversed = Math.abs(x).toString().split('').reverse().join('');
    if (reversed > 2**31) return 0
    return reversed * Math.sign(x)
};


console.log(reverse(123)) // 321
