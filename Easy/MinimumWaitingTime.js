/* Given a non-empty array of positive integers representing the
amounts of time that queiries take to execute - one going at a time, in any
order.

Waiting time = amount of time it must wait before its execution starts. So
if it's third, then it's waiting time is the sum of the durations of the first
two querires.

Return the minimum amount of total waiting time for all the querires.

Input: [1, 4, 5]. [5, 1, 4] would be (0) + (5) + (5 + 1) = 11

*/

function minimumWaitingTime(queries){
    if (querires.length === 0) return 0
    let sorted = queries.sort((a, b) => a - b)
    for (let i = 1; i < sorted.length - 1; i++) {
        sum = 0;
        sum += (i - 1)
    }
    return sum;
}

function minimumWaitingTime(queries) {
    queries.sort((a,b) => a - b);
    let totalWaitingTime = 0;

    for (let i = 0; i < queries.length; i++) {
        const duration = queries[i];
        const queriesLeft = queries.length - (i + 1);
        totalWaitingTime += duration * queriesLeft;
    }
    return totalWaitingTime;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6])) // 17

[1, 2, 2, 3, 6]

0 + 1 + 3 + 5 + 8

[5, 1, 4]
[4, 1, 5]
[0] [4] [4 + 1] = 9
