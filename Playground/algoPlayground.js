function tournamentWinner(competitions, results){
    const scores = new Map();
    for (let i = 0; i < competitions.length; i++){
        const HOME_TEAM_WON = 1;
        const [homeTeam, awayTeam] = competitions[i];
        const result = results[i];
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        const currentScore = scores.get(winningTeam) || 0;
        scores.set(winningTeam, currentScore + 3);
    }
    let currentBestScore = 0;
    let currentBestTeam = '';
    scores.forEach((score, team) => {
        if (score > currentBestScore){
            currentBestScore = score;
            currentBestTeam = team;
        }
    });
    return currentBestTeam;
}

function tournamentWinner(competitions, results){
    const HomeTeamWon = 1;
    // const AwayTeamWon = 0;
    const scores = new Map();
    let currentBestTeam = '';
    let currentBestScore = 0;
    let currentWorstTeam = 3

    for (let i = 0; i < competitions.length; i++){
        const [homeTeam, awayTeam] = competitions[i];
        const result = results[i];
        const winningTeam = result === HomeTeamWon ? homeTeam : awayTeam;
        const currentScore = scores.get(winningTeam) || 0;
        scores.set(winningTeam, currentScore + 3);
    }

    scores.forEach((score, team) => {
        if (score > currentBestScore){
            currentBestScore = score;
            currentBestTeam = team;
        }
    });
    return currentBestTeam;
}

let twoNumberSum = function(array, targetSum){
    let map = new Map();
    for (nums of array){
        const potentialMatch = targetSum - nums;
        if (map.has(potentialMatch)){
            return [potentialMatch, nums]
        } else {
            map.set(nums, true)
        }
    }
    return [];
}

function twoNumberSum(array, targetSum){
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right){
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum){
            return [array[left], array[right]]
        } else if (currentSum < targetSum){
            left ++
        } else if (currentSum > targetSum){
            right --
        }
    }
    return [];
}
