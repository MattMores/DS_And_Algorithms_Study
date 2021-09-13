/* Given an array of positive integers representing the
value of coins in your pocket, write a function that returns
the minimum amount of change (min sum of money) that you CANNOT
create. Coins can have any positive integer value and aren't
necessarily unique. If given no coins, the minimum amount of
change you can't create is 1.
*/


let nonConstructibleChange = function(coins) {
    let sortedCoins = coins.sort((a, b) => (a - b));
    let currentChangeCreated = 0;

    for (const coin of sortedCoins) {
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
        currentChangeCreated += coin;
    }
    return currentChangeCreated + 1;
}

console.log(nonConstructibleChange([1, 2, 5])) // 4
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])) // 20
