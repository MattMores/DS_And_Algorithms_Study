/* Team are competing against each other to solve algorithmic problems
the fastest. Round robin tournament, with one being home and the other away.
There's a winner and loser for each one (no ties).

Win = 3 points.
Loss = 0 points.

Most amount of points at end of tournament wins. Given an array of PAIRS representing
Teams that have already played against each other, and an array containing the results
of each competition, write an function that determines the winner of the tournament.

Input Arrays = Competions & Results.

Competition = [homeTeam, awayTeam] - string of <30 characters w/ each team name
Results = results[i] = winner of competition[i] - 1 means home team won. 0 means away team won

All teams will compete against all other teams exactly once.

Sample Input:

competitoins = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

results = [0, 0, 1]

HTML: 0 Points
C#: 3 Points
Python: 6 Points

Sample Output = Python
*/

function tournamentWinner(competitions, results){
    let map = new Map()
    for (let i = 0; i < results.length; i++) {
        result = results[i];
        for (let team of competitions) {
            if (result === 0) {
                map.set(team[0], map.get + 0)
                map.set(team[1], 3)
            }
            if (result === 1) {
                map.set(team[0], )
            }
        }
    }
    return
}

console.log(tournamentWinner([["HTML", "C#"], ["C#", "Python"],["Python", "HTML"]], [0,0,1]))
