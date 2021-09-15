/* First number of sequence is 0. Second number is 1.
nth number is the sum of the (n-1)th and (n-2)th numbers.

Write a function that takes in an integer (n) and returns the nth
Fibonacci number.

getNthFib(1) = F0
getNthFib(2) = F1

n = 2 // 1 (0, 1)
n = 6 // 5 (0, 1, 1, 2, 3, 5)

*/

let getNthFib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    sum = 0;
    return sum += getNthFib(n - 1) + getNthFib(n - 2)
}

let getNthFib = function (n){
    if (n === 2) return 1;
    else if (n === 1) return 0;
    else {
        return getNthFib(n - 1) + getNthFib(n - 2)
    }
}

let getNthFib = function (n) {
    if (n === 1) return 0;
    else if (n === 2) return 1;
    else {
        return getNthFib(n - 1) + getNthFib(n - 2)
    }
}

function getNthFib(n, memo = {1: 0, 2: 1}) {
    if (n in memo) {
        return memo[n]
    } else {
        memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
        return memo[n]
    }
}

function getNthFib(n) {
    const lastTwo = [0 , 1];
    let counter = 3;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
