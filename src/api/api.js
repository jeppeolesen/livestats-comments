export const getGamesList = () => {
  return fetch('https://cors-anywhere.herokuapp.com/http://hockeyligaen.dk/interface/xmlGameListTournament.aspx?tournamentID=1566')
    .then(response => {
      return response.text()
    })
}

export const getGameStats = ID => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://hockeyligaen.dk/interface/xmlGamestatsperperiodandTeam.aspx?gameid=${ID}`)
    .then(response => {
      return response.text()
    })
}

export const getTeams = () => {
  return fetch('https://cors-anywhere.herokuapp.com/http://hockeyligaen.dk/interface/xmlTeamList.aspx?tournamentID=1567')
    .then(response => {
      return response.text()
    })
}

export const getPlayers = teamID => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://hockeyligaen.dk/interface/xmlTeamRoster.aspx?teamid=${teamID}`)
    .then(response => {
      return response.text()
    })
}
