function tournamentWinner(competitions, results){
    let currentBestScore = 0;
    let currentBestTeam = '';

    const scores = new Map();
    for (let i = 0; i < competitions.length; i++){
        const HOME_TEAM_WON = 1;
        const [homeTeam, awayTeam] = competitions[i];
        const result = results[i];
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        const currentScore = scores.get(winningTeam) || 0;
        scores.set(winningTeam, currentScore + 3)
    }

    scores.forEach((score, team) => {
        if (score > currentBestScore){
            currentBestScore = score;
            currentBestTeam = team;
        }
    })
    return currentBestTeam;
}

console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Pyton"],
    ["Python", "HTML"],
],
    [0,0,1]
))
