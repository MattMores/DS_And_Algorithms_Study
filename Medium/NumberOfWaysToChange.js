/* Given an array of distince integers representing a coin denomination,
and a single non-negative integer (n) representing a target
amount of money, write a funciton that returns the number of ways
to make change for that target amound using the given coing denomination. An
unlimited amount of coins is at your disposal */

function numberOfWaysToMakeChange(n, denoms){
    const ways = new Array(n + 1).fill(0);
    ways[0] = 1;
    for (let denom of denoms){
        for (let amount = 1; amount < n + 1; amount ++){
            if (denom <= amount){
                ways[amount] += ways[amount - denom];
            }
        }
    }
    return ways[n]
}

console.log(numberOfWaysToMakeChange(6, [1, 5])) // 2 [1x1 + 1x5] [6x1]
