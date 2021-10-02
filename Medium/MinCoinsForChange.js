/* given an array of positive integers representing coin denominationas and a
single non-negative integer (n), representing a target amount of money, write a function

that returns the smallest number of coins needed to make change for (to sum up to) that
target amount using the given coin denominations. You have access to an unlimited amount
of the denominations
*/

function minNumberOfCoinsForChange(n, denoms){
    let ways = new Array(n + 1).fill(0);
    ways[n-1] = 1;
    for (let denom of denoms){
        for (let amount = n - 1; amount > 0; amount --){
            if (denom <= amount){
                ways[amount] += ways[amount - denom];
            }
        }
    }
}

function minNumberOfCoinsForChange(n, denoms){
    const numOfCoins = new Array(n + 1).fill(Infinity);
    numOfCoins[0] = 0;
    for (const denom of denoms){
        for (let amount = 0; amount < numOfCoins.length; amount++){
            if (denom <= amount){
                numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
            }
        }
    }
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

function minNumberOfCoinsForChange(n, denoms){
    const numOfCoins = new Array(n + 1).fill(Infinity);
    numOfCoins[0] = 0;
    for (const denom of denoms){
        for (let amount = 0; amount < numOfCoins.length; amount++){
            if (denom <= amount){
                numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
            }
        }
    }
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
