/*
============================================
; Title:  index.js
; Author: Andres Macias
; Date:   06/12/2022
; Description: displays teams in the console
;===========================================
*/
const teamManager = require("./team-manager");

function displayTeams() {
    let arrayOfTeams = teamManager.findTeams();
    let teams = "-- DISPLAYING TEAMS --";
   arrayOfTeams.forEach(team => {
        teams += "\n";
        teams += "Name: " + team.name + "\n";
        teams += "Mascot: " + team.mascot + "\n";
        teams += "Player Count: " + team.playerCount;
        teams += "\n"
    });

    return teams;
}

function displayChampionshipGame() {
    // let randomTeam = Math.floor(Math.random() * 5);
    let teamOne = teamManager.findTeam("Penn State");
    let teamTwo = teamManager.findTeam("Iowa State");
    let championshipGameString = "--CHAMPIONSHIP GAME --";
    championshipGameString += "\n";
    championshipGameString += teamManager.getGame(teamOne, teamTwo);
    return championshipGameString;

}

console.log(displayTeams(), "\n", displayChampionshipGame());
