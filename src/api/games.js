export const getGamesList = () => {
  return fetch('https://cors-anywhere.herokuapp.com/http://hockeyligaen.dk/interface/xmlGameListTournament.aspx?tournamentID=1476')
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
