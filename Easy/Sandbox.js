function minimumWaitingTime(queries){
    let sorted = queries.sort((a, b) => a - b)
    let waitingTime = 0; // 1
    let totalWaitingTime = 0; // 0

    for (const duration of queries){
        totalWaitingTime += waitingTime;
        waitingTime += duration;
    }
    return totalWaitingTime;
}

function minimumWaitingTime(queries){
    queries.sort((a, b) => a - b);

    let totalWaitingTime = 0;

    for (let i = 0; i < queries.length; i++){
        const duration = queries[i];
        const queriesLeft = queries.length - (i + 1);
        totalWaitingTIme += duration * queriesLeft
    }
    return totalWaitingTIme
}


console.log(minimumWaitingTime([3, 2, 1, 2, 6]))
