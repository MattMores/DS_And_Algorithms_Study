function nonConstructableChange (coins) {
    let sorted = coins.sort((a, b) => a - b)
    let currentChange = 0;

    for (const coin of sorted){
        if (coin > currentChange + 1) return currentChange + 1;
        currentChange = currentChange + coin;
    }
    return currentChange +1
}

console.log(nonConstructableChange([5, 7, 1, 1, 2, 3, 22]))

let nonConstructableChange = function(coins){
    let sorted = coins.sort((a, b) => a - b);
    let currentChange = 0;
    for (let coin of coins){
        if (coin > currentChange + 1) return currentChange + 1;
        currentChange += coin
    }
    return currentchange + 1;
}

// [1, 1, 2, 3, 5, 7, 22]

//minimum sum of money that you CANNOT create.
