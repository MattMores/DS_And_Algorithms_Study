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
