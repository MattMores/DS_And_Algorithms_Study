function tournamentWinner(competitions, results){
    let table = new Map();
    for (let i = 0; i < competitions.length; i++){
        let matchup = competitions[i];
        let result = results[i];
        if (result === 0 && !table.has(matchup[1])){
            table.set(matchup[1], 3)
            else if (result === 0 && table.has(matchu[1])){
                table.set(matchup[1], table.get(matchup[1] + 3))
            }
        } else table.set(matchup[0], 3)
    }
    for (let value of table){
        let winner = table.get(Math.max(value))
        return winner
    }
}

console.log(tournamentWinner([
    ["HTML", "C#"], // [homeTeam, awayTeam]
    ["C#", "Python"],
    ["Python", "HTML"]
], [0, 0, 1])) // 0 means away team won. 1 mean home team won

//3 point for wins, 0 points for loses.

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results){
    const scores = new Map();

    for (let i = 0; i < competitions.length; i++){
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
    })
    return currentBestTeam
}

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results){
    let currentBestTeam = '';
    let currentBestScore = 0;
    const scores = new Map();

    for (let i = 0; i < competitions.length; i++){
        const [homeTeam, awayTeam] = competitions[i];
        const result = result[i];
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        const updatedScore = updateScore(winning, 3, scores);

        if (updatedScore > currentBestScore){
            currentBestScore = updatedScore;
            currentBestTeam = winningTeam;
        }
    }
    return currentBestTeam;
}

function updateScore(team, points, scores){
    const prevScore = scores.get(team) || 0;
    const newScore = prevScore + points;
    scores.set(team, newScore);
    return newScore
}
